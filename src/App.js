import React,{useEffect,useState} from 'react';
import QueryResult from './QueryResult'
import "./App.css"
import { BoxLoading } from 'react-loadingg';

//our function trigger URL https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-query

const App = () => {
  
  const[loading,setLoading] = useState([false]);
  const[tweetquery,setTweetQuery] = useState([]);
  const[avg,setAvg] = useState([]);
  const[sentiment,setSentiment] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState("חומוס");
  const jsonRequest=  {"query":`${query}`,
  "max_tweets":50,
  "algorithm":"deterministic"}

 //this function runs everytime the page rerenders itself
  useEffect(() =>{
    getQuery();
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
    } else {
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
  

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(
  <div className="App">
  <form onSubmit = {getSearch} className="search-form">
    <button className= "search-button"  type="submit">חיפוש</button>   
    <input className= "search-bar" style={{textAlign: 'right'}} type="text" value={search} onChange={updateSearch}/>
  </form>
  {renderLoadingOrResults()}
  </div>
  );
}



export default App;