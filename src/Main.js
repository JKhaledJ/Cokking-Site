import './App.css';
import 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import Recipe from './Recipes'

const Main=()=>{

    const AppId="cde87815";
    const AppKey="1354fb3829cc89a92f92422b701167b6";
   
    const [recipes,setRecipes]=useState([]);
    const [search,setSearch]=useState("");
    const[query,setQuery]=useState("chicken");

    useEffect(()=>{
      getRecipes();
     // console.log("we are fetching data.");
    },[query]);
    
    const getRecipes=async()=>{
      const response=await fetch('https://api.edamam.com/search?q='+query+'&app_id=cde87815&app_key=1354fb3829cc89a92f92422b701167b6');
      const data=await response.json();
     // alert(JSON.stringify(data));
  //    console.log(data);
     setRecipes(data.hits);
    };

    const updateSearch=e=>{
      setSearch(e.target.value);
    }

    const getSearch=e=>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    return(
      <div className="App">
        <form onSubmit={getSearch} className="searchForm">
          <input className="searchBar" type="text" value={search} onChange={updateSearch}/>
          <button className="searchButton" type="Submit" >Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe=>(
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    )
  
}
export default Main;
