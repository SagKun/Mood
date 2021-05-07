import React,{useEffect,useRef,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.scss"
import { Resizable } from "re-resizable";
import SentimentLineChart from "./SentimentLineChart"
import { BoxLoading } from 'react-loadingg';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import {MDBAnimation } from "mdbreact";
import WordCloud from './WordCloud';
import Tweet from './Tweet'
import 'font-awesome/css/font-awesome.min.css';
import style from './result.module.scss';
import RandomFact from './RandomFact'
import splitIcon from './resources/split.png'


import SearchBar from "material-ui-search-bar";
import Carousel from 'react-elastic-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
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
        "max_tweets":30}),
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
      return <div>
        <div>
        <BoxLoading color="#1DA1F2" size="large" />
        </div>
        <br></br>
        <br></br>
        <MDBAnimation type="bounce" infinite duration="2s" >
        <div className={style.factStyle}>
        <p className="grey-text w-responsive mx-auto mb-5">מחפשים תוצאות..</p>
        </div>
        </MDBAnimation>
        
        <div  className={style.factStyle}>
        <p className="grey-text w-responsive mx-auto mb-5">כמה עובדות מעניינות בנתיים..</p>
       
        <RandomFact/>
        
        </div>
      </div> 
    } else{
      if(query==="")
        return <div></div>
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
      
      <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>
      
      <div>
      <WordCloud words={words} style={wordsSet}/> 
      </div>
      
      </ScrollAnimation>

      <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>

      <Resizable className={style.chart}
        defaultSize={{
          width:"50%",
          height:700,
        }}
      >
      
      <SentimentLineChart data={chartData}/>
      
      </Resizable>
     
      </ScrollAnimation>
      <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>
        
      <div className="carousel-wrapper">
      <Carousel  transitionMs={1000} stopOnHover itemsToShow={3} itemPadding={[10, 50]} pagination={true} showArrows={true} isRTL={true} enableAutoPlay={true} autoPlaySpeed={6000} >
      {tweetList.map(tweet => <Tweet key= {tweet.text} text={tweet.text} sentiment={tweet.sentiment} score={tweet.score.toFixed(2)}  />)}
      </Carousel>
      </div>
      </ScrollAnimation>
  
      </div>;
    }
  }
  }

  const renderWordCloud = () => {
    
    if (words!==[]) {
      return <div className="results">
      
      <WordCloud words={words}/>      
      
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