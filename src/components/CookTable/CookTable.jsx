import PropTypes from 'prop-types';

const CookTable = ({ recipe, handleCurrentlyCooking, currentlyCooking }) => {
    return (
        <div className="border-2 border-gray-200 p-6 rounded-2xl">
            <div>
                <h3 className="text-2xl font-semibold text-[#282828] border-b-2 text-center pb-4">Want to cook: {recipe.length}</h3>
                <table className="text-left border-separate border-spacing-6 bor table-auto font-fira text-[#878787]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#28282808] align-bottom'>
                        {
                            recipe.map((singleRecipe, idx) => <tr key={singleRecipe.id}>
                                <td>{idx + 1}</td>
                                <td>{singleRecipe.name}</td>
                                <td>{singleRecipe.preparing_time} minutes</td>
                                <td>{singleRecipe.calories} calories</td>
                                <td onClick={() => handleCurrentlyCooking(singleRecipe)} className='font-medium py-2 px-4 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A] cursor-pointer flex'>Preparing</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-[#282828] border-b-2 text-center pb-4">Currently cooking: {currentlyCooking.length}</h3>
                <table className="text-left border-separate border-spacing-6 table-auto font-fira text-[#878787]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentlyCooking.map((rec, idx) => <tr key={rec.id}>
                                <td>{idx + 1}</td>
                                <td>{rec.name}</td>
                                <td>{rec.preparing_time} minutes</td>
                                <td>{rec.calories} calories</td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot className="text-[#282828CC]">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total Time = 45 minutes</th>
                            <th>Total Calories = 1050 calories</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

CookTable.propTypes = {
    recipe: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
    currentlyCooking: PropTypes.array.isRequired
}

export default CookTable;