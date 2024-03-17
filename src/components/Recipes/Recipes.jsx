import PropTypes from 'prop-types';
import CookTable from "../CookTable/CookTable";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes, handleWantToCook, recipe, handleCurrentlyCooking, currentlyCooking }) => {
    return (
        <div id='our-recipes'>
            <div className='text-center mb-8 md:mb-12'>
                <h2 className='text-3xl lg:text-4xl font-semibold text-[#150B2B]'>Our Recipes</h2>
                <p className='text-[#150B2B99] max-w-[600px] lg:max-w-[820px] mx-auto mt-6 text-xs md:text-base'>Dive into a curated collection of sumptuous recipes that cater to a variety of taste preferences and dietary needs, all with detailed calorie counts.</p>
            </div>
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-7 grid grid-cols-6 gap-6">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-5"> <CookTable
                    recipe={recipe}
                    handleCurrentlyCooking={handleCurrentlyCooking}
                    currentlyCooking={currentlyCooking}
                ></CookTable>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleWantToCook: PropTypes.func.isRequired,
    recipe: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
    currentlyCooking: PropTypes.array.isRequired
}

export default Recipes;