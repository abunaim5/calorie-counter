import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";

const Recipe = () => {
    return (
        <div className="border-2 border-gray-200 p-6 rounded-2xl">
            <div>
                <img src="" alt="" />
            </div>
            <div className="divide-y-2">
                <div className="mt-6 space-y-4 pb-4">
                    <h3 className="text-xl font-semibold text-[#282828]">Spaghetti Bolognese</h3>
                    <p className="text-[#878787] font-fira">Classic Italian pasta dish with savory meat sauce.</p>
                </div>
                <div className="pt-6 pb-4">
                    <h4 className="text-lg font-medium text-[#282828] mb-4">Ingredients: 6</h4>
                    <ul className="text-lg text-[#878787] font-fira list-disc list-inside">
                        <li>500g ground beef</li>
                    </ul>
                </div>
                <div className="pt-6 space-y-6">
                    <div className="flex items-center gap-4 font-fira text-[#282828CC]">
                        <p className="flex items-center gap-2"><span className="text-2xl"><IoTimeOutline /></span> <span>30 minutes</span></p>
                        <p className="flex items-center gap-2"><span className="text-2xl"><RiFireLine /></span> <span>600 calories</span></p>
                    </div>
                    <button className='text-xl font-semibold py-3 px-6 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A]'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;