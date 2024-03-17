import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-2xl text-[#150B2B] font-bold'><span className='text-[#0BE58A]'>Calorie</span> Counter</h1>
            </div>
            <div className='hidden lg:flex gap-12 text-[#150B2BB3]'>
                <a href="" className="hover:underline">Home</a>
                <a href="" className="hover:underline">Recipes</a>
                <a href="" className="hover:underline">About</a>
                <a href="" className="hover:underline">Search</a>
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden md:flex items-center gap-2 py-2 px-4 rounded-full bg-[#150B2B0D]'>
                    <div className='text-xl'>
                        <CiSearch />
                    </div>
                    <div>
                        <input className='outline-none text[#150B2BB3] text-base font-normal bg-transparent' type="text" name="" id="" placeholder="Search" />
                    </div>
                </div>
                <button className='p-2 text-2xl text-[#150B2B] bg-[#0BE58A] rounded-full'>
                    <HiOutlineUserCircle />
                </button>
            </div>
        </div>
    );
};

export default Navbar;