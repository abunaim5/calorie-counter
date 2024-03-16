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
        <div className="border-2 border-gray-200 py-6 rounded-2xl">
            <div>
                <h3 className="text-2xl font-semibold px-6 text-[#282828] border-b-2 text-center pb-4">Want to cook: {recipe.length}</h3>
                <div>
                    <table className="text-left table-auto font-fira text-[#878787] w-full">
                        <thead className=''>
                            <tr className=''>
                                <th className='pr-6 py-4'></th>
                                <th className='pr-6 py-4'>Name</th>
                                <th className='pr-6 py-4'>Time</th>
                                <th className='pr-6 py-4'>Calories</th>
                                <th className='pr-6 py-4'></th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#28282808] px-6'>
                            {
                                recipe.map((singleRecipe, idx) => <tr key={singleRecipe.id} className=''>
                                    <td className='px-6 py-4'>{idx + 1}</td>
                                    <td className='pr-6 py-4'>{singleRecipe.name}</td>
                                    <td className='pr-6 py-4'>{singleRecipe.preparing_time} minutes</td>
                                    <td className='pr-6 py-4'>{singleRecipe.calories} calories</td>
                                    <td className='pr-6 py-4'><button onClick={() => handleCurrentlyCooking(singleRecipe)} className='font-medium py-2 px-4 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-transparent hover:border-[#0BE58A] hover:bg-transparent cursor-pointer flex'>Preparing</button></td>
                                    {/* <td onClick={() => handleCurrentlyCooking(singleRecipe)} className='font-medium py-2 px-4 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-transparent hover:border-[#0BE58A] hover:bg-transparent cursor-pointer flex'>Preparing</td> */}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold px-6 pt-6 text-[#282828] border-b-2 text-center pb-4">Currently cooking: {currentlyCooking.length}</h3>
                <div>
                    <table className="text-left table-auto font-fira text-[#878787] w-full">
                        <thead>
                            <tr>
                                <th className='pr-6 py-4'></th>
                                <th className='pr-6 py-4'>Name</th>
                                <th className='pr-6 py-4'>Time</th>
                                <th className='pr-6 py-4'>Calories</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#28282808] px-6'>
                            {
                                currentlyCooking.map((rec, idx) => <tr key={rec.id}>
                                    <td className='px-6 py-4'>{idx + 1}</td>
                                    <td className='pr-6 py-4'>{rec.name}</td>
                                    <td className='pr-6 py-4'>{rec.preparing_time} minutes</td>
                                    <td className='pr-6 py-4'>{rec.calories} calories</td>
                                </tr>)
                            }
                        </tbody>
                        <tfoot className="text-[#282828CC]">
                            {
                                totalCalorie > 0 && totalPreparingTime > 0 ? <tr>
                                    <th className='pt-4 pr-6'></th>
                                    <th className='pt-4 pr-6'></th>
                                    <th className='pt-4 pr-6'>Total Time = {totalPreparingTime} minutes</th>
                                    <th className='pt-4 pr-6'>Total Calories = {totalCalorie} calories</th>
                                </tr> : <tr></tr>
                            }
                        </tfoot>
                    </table>
                </div>
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