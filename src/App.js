import React,{useEffect,useRef,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.css"
import { Resizable } from "re-resizable";
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

import logo from './resources/tabLogo.png';
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
  
  const[chartData,setChartData]=useState([]);
  
  
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
        "max_tweets":200}),
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
      getGraph(data.id);
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

const getGraph = async (searchId) => {
  const response =  await fetch(
    "https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-by-dates",
    {
      method: "POST",
      headers: {
        "Access-Control-Request-Method": "POST",
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({"id":`${searchId}`}),
      maxAge: 3600
      //"mode": "cors",
    }
  );
    const data = await response.json();
    setChartData(data.dates); 
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
    console.log("tweet list length is:",tweetList.length);
   
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
      avg={parseFloat(avg).toFixed(2)} 
      sentiment={sentiment}
      />
      </MDBAnimation>
      </div>
      
      <MDBAnimation type="fadeInRight" delay="2s">
      
      
      <WordCloud words={words} style={wordsSet}/> 
      
      
      </MDBAnimation>

      <MDBAnimation type="fadeInRight" delay="4s">

      <Resizable className={style.chart}
        defaultSize={{
          width:"50%",
          height:700,
        }}
      >
      
      <SentimentLineChart data={chartData}/>
      
      </Resizable>
     
      </MDBAnimation>
      
      <MDBAnimation type="fadeInRight" delay="6s">
        
      <div className="carousel-wrapper">
      <Carousel  transitionMs={1000} stopOnHover itemsToShow={3} itemPadding={[10, 50]} pagination={true} showArrows={true} isRTL={true} enableAutoPlay={true} autoPlaySpeed={6000} >
      {tweetList.map(tweet => <Tweet key= {tweet.text} text={tweet.text} sentiment={tweet.sentiment} score={tweet.score.toFixed(2)}  />)}
      </Carousel>
      </div>
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