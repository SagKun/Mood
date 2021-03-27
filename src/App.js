import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import "./App.css"


//our function trigger URL https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/search-query

const App = () => {
  
  
  const[tweetquery,setTweetQuery] = useState([]);
  const[avg,setAvg] = useState([]);
  const[sentiment,setSentiment] = useState([]);
  const[recipes,setRecipes] = useState([]);
 
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState("חומוס");
  const jsonRequest=  {"query":`${query}`,
  "max_tweets":50,
  "algorithm":"deterministic"}

 //this function runs everytime the page rerenders itself
  useEffect(() =>{
    getRecipes();
  },[query]);
  
  const getRecipes = async () => {
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
      //setRecipes(data);
};




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
    <input className= "search-bar" type="text" value={search} onChange={updateSearch}/>
    <button className= "search-button" type="submit">Search</button>   
  </form>
  <div className="recipes">
    <Recipe
    key= {query}
    title={query}
    calories={avg} 
    ingredients={sentiment}
    />
    </div>
  </div>
  );
}



export default App;