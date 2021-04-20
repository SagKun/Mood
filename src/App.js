import React,{useEffect,useRef,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.css"
import { BoxLoading } from 'react-loadingg';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import {MDBAnimation } from "mdbreact";
import WordCloud from './WordCloud';
import 'font-awesome/css/font-awesome.min.css';
//our function trigger URL https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-query

const App = () => {
  const initialRender = useRef(true);
  
  const[loading,setLoading] = useState([false]);
  const[tweetquery,setTweetQuery] = useState([]);
  const[avg,setAvg] = useState([]);
  const[sentiment,setSentiment] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState("");
  const[words,setWords] = useState([]);
  const[negWords,setNegativeWords] = useState([]);
  const[posWords,setPositiveWords] = useState([]);
  var firstRender=true;
  
 //this function runs everytime the page rerenders itself
  useEffect(() =>{
    if (initialRender.current) {
      initialRender.current = false;
      setLoading(false);
    } else {
    console.log("running query");
    getQuery();
    console.log("getting wordcloud");
    }
  },[query]);
  
  const getQuery = async () => {
    setLoading(true);
    const response =  await fetch(
      "https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-query",
      {
        method: "POST",
        headers: {
          "Access-Control-Request-Method": "POST",
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify({"query":`${query}`,
        "max_tweets":50,
        "algorithm":"D"}),
        maxAge: 3600
        //"mode": "cors",
      }
    );
      const data = await response.json();
      console.log(data);
      setSentiment(data.result);
      setAvg(data.avg);
      setTweetQuery(data.query);
      setLoading(false);
      getWordCloud();
      
};


const getWordCloud = async () => {
  const response =  await fetch(
    "https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/sorted-words-in-tweets",
    {
      method: "POST",
      headers: {
        "Access-Control-Request-Method": "POST",
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({"search_term":`${query}`}),
      maxAge: 3600
      //"mode": "cors",
    }
  );
    const data = await response.json();
    console.log(data);
    setWords(data.all);  
    setNegativeWords(data.negative);  
    setPositiveWords(data.postitive);  
    console.log("words were set to:",{words});
    console.log("negative words were set to:",{negWords});
    console.log("negative words were set to:",{posWords}) ;
};



  const renderLoadingOrResults = () => {
    
    if (loading) {
      return  <BoxLoading color="#1DA1F2" size="large" />;
    } else{
      if(query==="")
        return <div>""</div>
      else
      {
      return <div className="results">
      <MDBAnimation type="fadeInRightBig" delay="1s">
      <QueryResult
      key= {tweetquery}
      query={tweetquery}
      avg={avg} 
      sentiment={sentiment}
      />
      
      </MDBAnimation>
      </div>;
    }
  }
  }

  const renderWordCloud = () => {
    
    if (loading) {
      return  <BoxLoading color="#1DA1F2" size="large" />;
    } else{
      return <div className="results">
      <MDBAnimation type="fadeInRightBig" delay="1s">
      <WordCloud words={words}/>      
      </MDBAnimation>
      </div>;
    
  }
  }
  

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(
  <div>
    
  <Particles className="particles" height="300vh" width="100vw" params={particlesConfig} />
  
  <br></br><br></br>
  <div className="App">
  <form onSubmit = {getSearch} className="search-form">
    <input className= "search-bar"  style={{textAlign: 'right'}} type="text" value={search} onChange={updateSearch}/>
    <button className= "search-button"  type="submit">חיפוש</button>   
  </form>
  <div>
  
  </div>
  {renderLoadingOrResults()}
  {renderWordCloud()}
 
  </div>
  </div>
  );
}



export default App;