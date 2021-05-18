import React,{useEffect,useRef,useState,useLayoutEffect} from 'react';
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
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import SearchBar from "material-ui-search-bar";
import Carousel from 'react-elastic-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from './resources/tabLogo.png';
import { MDBIcon } from 'mdb-react-ui-kit';




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
  const[wordCloudState,SetwordCloudState]=useState("0");
  const [size, setSize] = useState([0, 0]);
  
  
  useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  

  
 //this function runs everytime the page rerenders itself
  useEffect(() =>{
    if (initialRender.current) {
      initialRender.current = false;
      setLoading(false);
    } else {
   
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
    
    setWords(data.all);  
    setNegativeWords(data.negative);  
    setPositiveWords(data.positive);  
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
   
    
    setTweetList(data.tweet_list);  
    
   
};



  const renderLoadingOrResults = () => {
    
    if (loading) {
      return <div>
        <div>
        <BoxLoading color="#1f5156" size="large" />
        </div>
        <br></br>
        <br></br>
        <MDBAnimation type="bounce" infinite duration="2s" >
        <div className={style.factStyle}>
        <p className="grey-text w-responsive mx-auto mb-5">מחפשים תוצאות..</p>
        </div>
        </MDBAnimation>
        
        <div  className={style.factStyle}>
        
       
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
      <Fab
        mainButtonStyles={{backgroundColor: '#1f5156', marginRight: size[0]*0.18 }}
        alwaysShowTitle={true}
        icon={ <MDBIcon icon="compress-arrows-alt" className="white-text" />} 
        >
        <Action
        text="Combined"
        onClick={ () =>SetwordCloudState("0")} 
        icon={ <MDBIcon icon="compress-arrows-alt" className="white-text"/>}
        style={{backgroundColor: '#1f5156' , marginRight: size[0]*0.18}}
        >
          {<MDBIcon fab  size="2x" icon="staylinked" className="white-text"/>}
        </Action>
        <Action
            text="Positive"
            onClick={() =>SetwordCloudState("1")}
            style={{backgroundColor: '#1f5156', marginRight: size[0]*0.18}}
        >
          {<MDBIcon far icon="smile" size="2x" className="white-text" />}
        </Action>
        <Action
            text="Negative"
            onClick={() => SetwordCloudState("-1")}
            style={{backgroundColor: '#1f5156', marginRight: size[0]*0.18}}
        >
          <MDBIcon far icon="frown"  size="2x" className="white-text" />
        </Action>
      </Fab>
      
      {renderWordCloud()}
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
      <Carousel  transitionMs={1000} stopOnHover itemsToShow={3} itemPadding={[10, 50]} isRTL={true} enableAutoPlay={true} autoPlaySpeed={6000} >
      {tweetList.map(tweet => <Tweet key= {tweet.text} text={tweet.text} sentiment={tweet.sentiment} score={tweet.score.toFixed(2)}  />)}
      </Carousel>
      </div>
      </ScrollAnimation>
  
      </div>;
    }
  }
  }

  
  const renderWordCloud = () =>{
    if(wordsSet)
    {
      if(wordCloudState === "1")
    {
      
      return <WordCloud words={posWords} state={wordCloudState} style={wordsSet}/>;}
    else if(wordCloudState === "-1")
      return <WordCloud words={negWords} state={wordCloudState} style={wordsSet}/>;
    else return <WordCloud words={words} state={wordCloudState} style={wordsSet}/>;
    }
    else 
    {
      return <WordCloud loading={true}/>
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