import PropTypes from 'prop-types';
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = ({ handleMenuBar, isMenuClicked }) => {
    return (
        <div>
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