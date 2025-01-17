import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setTimeout(() => {
        setRecipes(data);
        setIsLoading(false);
      }, 2000))
  }, [])

  const handleWantToCook = (newRecipe) => {
    const isExist = recipe.find(r => r.id === newRecipe.id);
    const isExistCooking = currentlyCooking.find(rc => rc.id === newRecipe.id);
    if (!isExistCooking) {
      if (!isExist) {
        setRecipe([...recipe, newRecipe])
        toast.success("Recipe successfully added");
      }
      else {
        toast.warn("Recipe already selected");
      }
    }
    else {
      toast.error("Recipe already in cooking");
    }
  }

  const handleCurrentlyCooking = (singleRecipe) => {
    const newRecipe = recipe.filter(rec => rec.id !== singleRecipe.id);
    setRecipe(newRecipe);
    setCurrentlyCooking([...currentlyCooking, singleRecipe]);
  }

  const handleMenuBar = () => {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <Header
        handleMenuBar={handleMenuBar}
        isMenuClicked={isMenuClicked}
      ></Header>
      <Main
        recipes={recipes}
        handleWantToCook={handleWantToCook}
        recipe={recipe}
        handleCurrentlyCooking={handleCurrentlyCooking}
        currentlyCooking={currentlyCooking}
        isLoading={isLoading}
      ></Main>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
