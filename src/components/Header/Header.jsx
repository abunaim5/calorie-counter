import PropTypes from 'prop-types';
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = ({ handleMenuBar, isMenuClicked }) => {
    return (
        <div className='max-w-[1600px] mx-auto pt-8 px-3 xl:px-[8.75rem]'>
            <Navbar
                handleMenuBar={handleMenuBar}
                isMenuClicked={isMenuClicked}
            ></Navbar>
            <Banner></Banner>
        </div>
    );
};

Header.propTypes = {
    handleMenuBar: PropTypes.func.isRequired,
    isMenuClicked: PropTypes.bool.isRequired
}

export default Header;