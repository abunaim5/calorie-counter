const CookTable = () => {
    return (
        <div className="border-2 border-gray-200 p-6 rounded-2xl">
            <div>
                <h3 className="text-2xl font-semibold text-[#282828] border-b-2 text-center pb-4">Want to cook: 01</h3>
                <table className="text-left border-separate border-spacing-6 bor table-auto font-fira text-[#878787]">
                    <thead>
                        <tr className="">
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td className='font-medium py-2 px-4 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A] align-text-bottom cursor-pointer flex'>Preparing</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-[#282828] border-b-2 text-center pb-4">Currently cooking: 02</h3>
                <table className="text-left border-separate border-spacing-6 bor table-auto font-fira text-[#878787]">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spaghetti Bolognese</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                        </tr>
                    </tbody>
                    <tfoot className="text-[#282828CC]">
                        <tr>
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

export default CookTable;