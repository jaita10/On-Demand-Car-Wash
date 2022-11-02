import React from 'react';
import Advertisement from './Advertisement';
import Footer from './Footer';
import Home from './Home';
import NewNavbar from './NewNavbar';

const FrontHomePage = props => {
    return (
        <div>
            <NewNavbar />
            <Home />
            {/* <Flip /> */}
            {/* <Carousel/> */}
            <Advertisement />
            <Footer />
        </div>
    );
};

export default FrontHomePage;