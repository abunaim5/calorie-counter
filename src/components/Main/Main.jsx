import PropTypes from 'prop-types';
import Recipes from "../Recipes/Recipes";

const Main = ({ recipes, handleWantToCook, recipe, handleCurrentlyCooking, currentlyCooking, isLoading }) => {
    return (
        <div className='mt-14 md:mt-24 max-w-[1600px] mx-auto px-1 md:px-3 xl:px-[8.75rem]'>
            <Recipes
                recipes={recipes}
                handleWantToCook={handleWantToCook}
                recipe={recipe}
                handleCurrentlyCooking={handleCurrentlyCooking}
                currentlyCooking={currentlyCooking}
                isLoading={isLoading}
            ></Recipes>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleWantToCook: PropTypes.func.isRequired,
    recipe: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
    currentlyCooking: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default Main;