import PropTypes from 'prop-types';
import Recipes from "../Recipes/Recipes";

const Main = ({recipes, handleWantCook, recipe}) => {
    return (
        <div className='mt-24'>
            <Recipes
                recipes={recipes}
                handleWantCook={handleWantCook}
                recipe={recipe}
            ></Recipes>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleWantCook: PropTypes.func.isRequired,
    recipe: PropTypes.array.isRequired
}

export default Main;