import PropTypes from 'prop-types';
import Recipes from "../Recipes/Recipes";

const Main = ({recipes}) => {
    return (
        <div className='mt-24'>
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default Main;