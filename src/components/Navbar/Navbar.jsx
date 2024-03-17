import PropTypes from 'prop-types';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = ({ handleMenuBar, isMenuClicked }) => {
    console.log(isMenuClicked);
    return (
        <div className='flex items-center justify-between'>
            <div className="flex gap-3">
                <div className="relative inline-block lg:hidden">
                    <button onClick={handleMenuBar} className="mt-1 text-2xl"><HiOutlineMenuAlt1 /></button>
                    {
                        isMenuClicked ? <ul className="p-2 shadow rounded-lg w-40 md:w-52 z-10 bg-white text-[#150B2BB3] absolute">
                            <li className="hover:bg-gray-200 py-1 px-3 cursor-pointer w-full rounded-full"><a>Home</a></li>
                            <li className="hover:bg-gray-200 py-1 px-3 cursor-pointer w-full rounded-full"><a>About</a></li>
                            <li className="hover:bg-gray-200 py-1 px-3 cursor-pointer w-full rounded-full"><a href='#our-recipes'>Recipes</a></li>
                            <li className="hover:bg-gray-200 py-1 px-3 cursor-pointer w-full rounded-full"><a>Search</a></li>
                        </ul> : ''
                    }
                </div>
                <h1 className='text-2xl text-[#150B2B] font-bold'><span className='text-[#0BE58A]'>Calorie</span> Counter</h1>
            </div>
            <div className='hidden lg:flex gap-12 text-[#150B2BB3]'>
                <a href="" className="hover:underline">Home</a>
                <a href="#our-recipes" className="hover:underline">Recipes</a>
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

Navbar.propTypes = {
    handleMenuBar: PropTypes.func.isRequired,
    isMenuClicked: PropTypes.bool.isRequired
}

export default Navbar;