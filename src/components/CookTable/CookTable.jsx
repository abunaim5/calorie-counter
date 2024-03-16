import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const CookTable = ({ recipe, handleCurrentlyCooking, currentlyCooking }) => {
    const [calories, setCalories] = useState([])
    const [preparingTimes, setPreparingTimes] = useState([])
    // console.log(currentlyCooking);
    // console.log(totalCalorie);

    useEffect(() => {
        const calorie = currentlyCooking.map(rec => rec.calories);
        const preparingTime = currentlyCooking.map(rec => rec.preparing_time);
        setCalories(calorie);
        setPreparingTimes(preparingTime);
    }, [currentlyCooking])

    const totalCalorie = calories.reduce((prev, current) => prev + current, 0)
    const totalPreparingTime = preparingTimes.reduce((prev, current) => prev + current, 0)

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
                    <tbody className='bg-[#28282808]'>
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
                            <th>Total Time = {totalPreparingTime} minutes</th>
                            <th>Total Calories = {totalCalorie} calories</th>
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