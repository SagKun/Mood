import React,{useEffect,useRef,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.css"
import { BoxLoading } from 'react-loadingg';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import logo from './resources/logo.png';

//our function trigger URL https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-query

const App = () => {
  const initialRender = useRef(true);
  const initialRenderStageTwo = useRef(true);
  const[loading,setLoading] = useState([false]);
  const[tweetquery,setTweetQuery] = useState([]);
  const[avg,setAvg] = useState([]);
  const[sentiment,setSentiment] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState("");
  var firstRender=true;
  
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
        "algorithm":"deterministic"}),
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
      <QueryResult
      key= {tweetquery}
      query={tweetquery}
      avg={avg} 
      sentiment={sentiment}
      />
      </div>;
    }
  }
  }
  const renderNavBar = () => {
    
    return <Navbar style={{fontSize: 20}} className="mr-auto" bg="primary" variant="dark" >
    <Nav className="mr-auto">
    <Nav.Link href="#pricing">גיטהאב</Nav.Link>
    <Nav.Link href="#home">על הפרוייקט</Nav.Link>
    </Nav>
    
     <Navbar.Brand href="#home" className="mr-auto">
      <img style={{marginBottom: 5}} src={logo}/>
    </Navbar.Brand>
    
  
    

    <Nav >
    <Nav.Link href="#features">מי אנחנו</Nav.Link>
    <Nav.Link href="#home">איך זה עובד</Nav.Link>
    <Nav.Link href="#home"></Nav.Link>
    </Nav>
  </Navbar>
    
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
  {renderNavBar()}
  <br></br><br></br>
  <div className="App">
  <form onSubmit = {getSearch} className="search-form">
    <button className= "search-button"  type="submit">חיפוש</button>   
    <input className= "search-bar"  style={{textAlign: 'right'}} type="text" value={search} onChange={updateSearch}/>
  </form>
  <div>
  
  </div>
  {renderLoadingOrResults()}
  </div>
  </div>
  );
}



export default App;