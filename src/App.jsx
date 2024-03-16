import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const handleWantCook = (newRecipe) => {
    const isExist = recipe.find(r => r.id === newRecipe.id);
    if(!isExist){
      setRecipe([...recipe, newRecipe])
      toast.success("Recipe successfully added")
    }
    else{
      toast.warn("Recipe already selected")
    }
  }

  return (
    <>
      <Header></Header>
      <Main
        recipes={recipes}
        handleWantCook={handleWantCook}
        recipe={recipe}
      ></Main>
      <ToastContainer />
    </>
  )
}

export default App
