import CookTable from "../CookTable/CookTable";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    return (
        <div>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-semibold text-[#150B2B]'>Our Recipes</h2>
                <p className='text-[#150B2B99] max-w-[820px] mx-auto mt-6'>Dive into a curated collection of sumptuous recipes that cater to a variety of taste preferences and dietary needs, all with detailed calorie counts.</p>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-7">
                    <Recipe></Recipe>
                </div>
                <div className="col-span-5">
                    <CookTable></CookTable>
                </div>
            </div>
        </div>
    );
};

export default Recipes;