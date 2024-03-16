import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";

const Recipe = ({ recipe, handleWantCook }) => {
    const { name, image, description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="border-2 border-gray-200 p-6 rounded-2xl col-span-3">
            <div>
                <img className='rounded-2xl' src={image} alt={`image of ${name}`} />
            </div>
            <div className="divide-y-2">
                <div className="mt-6 space-y-4 pb-4">
                    <h3 className="text-xl font-semibold text-[#282828]">{name}</h3>
                    <p className="text-[#878787] font-fira">{description}</p>
                </div>
                <div className="pt-6 pb-4">
                    <h4 className="text-lg font-medium text-[#282828] mb-4">Ingredients: {ingredients.length}</h4>
                    <ul className="text-lg text-[#878787] font-fira list-disc list-inside">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className="pt-6 space-y-6">
                    <div className="flex items-center gap-4 font-fira text-[#282828CC]">
                        <p className="flex items-center gap-2"><span className="text-2xl"><IoTimeOutline /></span> <span>{preparing_time} minutes</span></p>
                        <p className="flex items-center gap-2"><span className="text-2xl"><RiFireLine /></span> <span>{calories} calories</span></p>
                    </div>
                    <button onClick={() => handleWantCook(recipe)} className='text-lg font-medium py-3 px-6 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A]'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantCook: PropTypes.func.isRequired
}

export default Recipe;