import React, { useState } from 'react';
import './App.css';
import RecipeList from './containers/RecipeList/RecipeList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar';
import axios from 'axios';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';


function App() {

  const [input, updateInput] = useState('');
  const [recipes, updateRecipes] = useState([]);
  const [canShowList, toggleList] = useState(false)

  // clear message and call api
  let sendMessage = (event) => {
    if (event.key === 'Enter') {
      getRecipes()
      updateInput('');
      toggleList(!canShowList)
    }
  }

  // Make Api call to recipes
  let getRecipes = async () => {
    let query = input.replace(/[ ]/g, '%20');
    let result = await axios.get(`https://www.food2fork.com/api/search?key=a218dcdde4ac0e9b80ee585cca2707a1&q=${query}`)
    updateRecipes(result.data.recipes)
  }

  const RecipesListComponent = () => <RecipeList canShowList={canShowList} recipes={recipes}/>
  

  return (
    <Router className="App">
      <Navbar
        input={input}
        sendMessage={sendMessage}
        updateInput={updateInput} />
      <Switch>
        <Route exact path='/' render={RecipesListComponent} />
        <Route path='/recipe/:rId' component={SingleRecipe} />
      </Switch>
    </Router>
  );
}

export default App;
