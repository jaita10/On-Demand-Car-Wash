import React from 'react';
import Advertisement from './Advertisement';
import Footer from './Footer';
import NewNavbar from './NewNavbar';
import Home from './Home';
import Flip from './Flip';

const FrontHomePage = props => {
    return (
        <div>
            <NewNavbar />
            <Home />
            <Flip />
            {/* <Carousel/> */}
            <Advertisement />
            <Footer />
        </div>
    );
};

export default FrontHomePage;