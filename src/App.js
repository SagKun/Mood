import React,{useEffect,useRef,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.css"
import SentimentLineChart from "./SentimentLineChart"
import { BoxLoading } from 'react-loadingg';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import {MDBAnimation } from "mdbreact";
import WordCloud from './WordCloud';
import Tweet from './Tweet'
import 'font-awesome/css/font-awesome.min.css';
import style from './result.module.css';
import CloudContainer from './CloudSvg'
import CloudSvg from './CloudSvg';
import SearchBar from "material-ui-search-bar";
import Carousel from 'react-elastic-carousel';


const App = () => {
  const initialRender = useRef(true);
  
  const[loading,setLoading] = useState([false]);
  const[tweetquery,setTweetQuery] = useState([]);
  const[avg,setAvg] = useState([]);
  const[sentiment,setSentiment] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState("");
  const[words,setWords] = useState([]);
  const[wordsSet,setWordsSet] = useState(false);
  const[negWords,setNegativeWords] = useState([]);
  const[posWords,setPositiveWords] = useState([]);
  const[tweetList,setTweetList] = useState([]);
  const[width,setWidth]=useState(0);
  const[height,setHeight]=useState(0);
  window.addEventListener("resize", function() {
   setWidth(window.innerWidth);
   setHeight(window.innerHeight);
  });
  
 //this function runs everytime the page rerenders itself
  useEffect(() =>{
    if (initialRender.current) {
      initialRender.current = false;
      setLoading(false);
    } else {
    console.log("running query");
    getQuery();
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
      getTweetList();
      
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
    setWordsSet(true);
};

const getTweetList= async () => {
  const response =  await fetch(
    "https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/tweets-by-search-term",
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
    setTweetList(data.tweet_list);  
   
};



  const renderLoadingOrResults = () => {
    
    if (loading) {
      return  <BoxLoading color="#1DA1F2" size="large" />;
    } else{
      if(query==="")
        return <div>""</div>
      else
      {
      return <div>
      <div>
      <MDBAnimation type="fadeInRight" delay="0.2s">
      <QueryResult
      key= {tweetquery}
      query={tweetquery}
      avg={avg} 
      sentiment={sentiment}
      />
      </MDBAnimation>
      </div>
      
      <MDBAnimation type="fadeInRight" delay="2s">
      <div className={style.cloudContainer}>
      <WordCloud words={words} style={wordsSet}/> 
      </div>
      </MDBAnimation>

      <MDBAnimation type="fadeInRight" delay="4s">
      <div className={style.chart}>
      <SentimentLineChart/>
      </div>
      </MDBAnimation>
      
      <MDBAnimation type="fadeInRight" delay="6s">
      <Carousel pagination={false} showArrows={false} isRTL={true} enableAutoPlay={true} autoPlaySpeed={4000} >
      {tweetList.map(tweet => <Tweet key= {tweet.text} text={tweet.text} sentiment={tweet.sentiment} score={tweet.score}  />)}
      </Carousel>
      </MDBAnimation>
  
      </div>;
    }
  }
  }

  const renderWordCloud = () => {
    
    if (words!==[]) {
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
  {/*window.document.body.offsetHeight*/}
  <Particles className="particles" height="300vw" width="90vw" params={particlesConfig} />
  
  <br></br><br></br>
  <div className="App">
  <form onSubmit = {getSearch} className="search-form">
    <input className= "search-bar"  style={{textAlign: 'right'}} type="text" value={search} onChange={updateSearch}/>
    <button className= "search-button"  type="submit">חיפוש</button>   
  </form>
  
  
  
  {renderLoadingOrResults()}
  
  </div>
       
     
 
  
 
  </div>

  );
}



export default App;