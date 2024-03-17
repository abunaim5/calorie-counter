import PropTypes from 'prop-types';
import Recipes from "../Recipes/Recipes";

const Main = ({recipes, handleWantToCook, recipe, handleCurrentlyCooking, currentlyCooking}) => {
    return (
        <div className='mt-14 md:mt-24'>
            <Recipes
                recipes={recipes}
                handleWantToCook={handleWantToCook}
                recipe={recipe}
                handleCurrentlyCooking={handleCurrentlyCooking}
                currentlyCooking={currentlyCooking}
            ></Recipes>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleWantToCook: PropTypes.func.isRequired,
    recipe: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
    currentlyCooking: PropTypes.array.isRequired
}

export default Main;