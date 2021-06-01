import React,{useEffect,useRef,useState,useLayoutEffect} from 'react';
import QueryResult from './QueryResult'
import Draggable from 'react-draggable';
import "./App.css"
import SentimentLineChart from "./SentimentLineChart"
import { BoxLoading } from 'react-loadingg';
import WordCloud from './WordCloud';
import Tweet from './Tweet'
import 'font-awesome/css/font-awesome.min.css';
import RandomFact from './RandomFact'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import { MDBIcon} from 'mdb-react-ui-kit';
import { MDBAnimation } from "mdbreact";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SentimentPieChart from "./SentimentPieChart"


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
  
  

  const settings = {
      dots: true,
      autoplay:true,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      rtl:true,
      className:  'react__slick__slider__parent',
      accessibility: true,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            rows: 1
          }
        }
        
      ]
  };
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
      setWordsSet(false);
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
      console.log("query",data);
      setSentiment(data.result);
      setAvg(data.avg);
      setTweetQuery(data.query);
      getTweetList();
      getWordCloud();
      getGraph(data.id);
      SetwordCloudState("0");
      
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
    console.log("cloud",data);
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
    console.log("graph",data)
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
    console.log("tweetlist",data);
    setTweetList(data.tweet_list); 
    setLoading(false);
};



  const renderLoadingOrResults = () => {
    
    if (loading) {
      return <div >
        <div >
        <BoxLoading  color="#1f5156" size="large" />
        </div>
        
        <div style={{marginTop:"200px"}}>
        <RandomFact style={{padding:"20px"}}/>
        </div>

      </div> 
    } else{
      if(query==="")
        return <div></div>
      else
      {
      return <div>
      <ScrollAnimation  animateIn='fadeIn' duration={2} animateOnce={true}> 
      <div className="flex-container">
      <div className="child">
    
     
      <QueryResult
      key= {tweetquery}
      query={tweetquery}
      avg={parseFloat(avg).toFixed(2)} 
      sentiment={sentiment}
      number={tweetList.length}
      />
     
     
      </div>
     
      <div style={{background: `${sentiment==="Positive"? "#35561f":"#56241f"}`}} className="child2">
     
      <SentimentPieChart 
         
      
          data = { sentiment==="Positive"?
                    [ { name: 'חיובי', value: parseFloat(avg).toFixed(2)*100},
                    { name: 'שלילי', value: 100-parseFloat(avg).toFixed(2)*100 },
                    ] : [ { name: 'חיובי', value:100- parseFloat(avg).toFixed(2)*100},
                    { name: 'שלילי', value: parseFloat(avg).toFixed(2)*100 },
                    ]}
          />
           
      </div>
     
      </div>
      </ScrollAnimation>
     
      <ScrollAnimation  animateIn='fadeIn' duration={2} animateOnce={true}>
      
     


    <div style={{flexDirection:"row"}}>
    {renderWordCloud()}   
      <Draggable style={{"display":"inline","float":"left"}}>
      <div>
      <Fab
        mainButtonStyles={{borderColor:"white",backgroundColor: '#1f5156'}}
        
        alwaysShowTitle={true}
        icon={ <MDBIcon icon="compress-arrows-alt" className="white-text" />} 
        >
        <Action
        text="Combined"
        onClick={ () =>SetwordCloudState("0")} 
        icon={ <MDBIcon icon="compress-arrows-alt" className="white-text"/>}
        style={{backgroundColor: '#1f5156' }}
        >
          {<MDBIcon fab  size="2x" icon="staylinked" className="white-text"/>}
        </Action>
        
        <Action
            text="Negative"
            onClick={() => SetwordCloudState("-1")}
            style={{backgroundColor: '#1f5156'}}
        >
          <MDBIcon far icon="frown"  size="2x" className="white-text" />
        </Action>
        <Action
            text="Positive"
            onClick={() =>SetwordCloudState("1")}
            style={{backgroundColor: '#1f5156' }}
        >
          {<MDBIcon far icon="smile" size="2x" className="white-text" />}
        </Action>
      </Fab>
      </div>
      </Draggable>
 
      
      
      </div>

        
    
      
      </ScrollAnimation>

      <ScrollAnimation  animateIn='fadeIn' duration={2} animateOnce={true}>

      
      
      <SentimentLineChart data={chartData}/>
      
      
     
      </ScrollAnimation>
    
    

      <ScrollAnimation  animateIn='fadeIn' duration={2} animateOnce={true}>
      <div className="carousel-wrapper">
      <Slider {...settings} >
        
      {renderTweets()}
      
      </Slider >
      </div>
      </ScrollAnimation>
        
 
  
      </div>;
    }
  }
  }

  const renderTweets = () => tweetList.map(tweet => (<Tweet key= {tweet.text} text={tweet.text} sentiment={tweet.sentiment} score={tweet.score.toFixed(2)} url={tweet.URL}  />));
  const renderWordCloud = () =>{
    if(wordsSet)
    {
      if(wordCloudState === "1")
        {
          return <WordCloud words={posWords} state={wordCloudState} style={wordsSet}/>;
        }
      else if(wordCloudState === "-1")
        {
          return <WordCloud words={negWords} state={wordCloudState} style={wordsSet}/>;
        }
      else 
        {
          return <WordCloud words={words} state={wordCloudState} style={wordsSet}/>;
        }
          
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
    <input className= "search-bar" placeholder="חפש חברה, אישיות, יישות, מותג, מקום או כל דבר שמעניין אותך..." style={{textAlign: 'right'}} type="text" value={search} onChange={updateSearch}/>
    <button className= "search-button"  type="submit">חיפוש</button>   
  </form>
  
 
  
  {renderLoadingOrResults()}
  
  </div>
       
     
 
  
 
  </div>

  );
}



export default App;