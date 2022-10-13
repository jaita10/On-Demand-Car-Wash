import React from "react";
import Welcome from "./Welcome";

const Home = (props) => {
  return (
    <div className="mx-2 rounded-5" style={{ height: '60vh', backgroundImage: `url("./carwash_main.jpg")`, backgroundSize: '60%' , backgroundRepeat: 'no-repeat' , backgroundPosition: 'right' , marginTop: '1%'}}>
      {/* <div className="conatiner bg-dark w-75 m-auto text-center text-light position-relative" style={{ top: '10vw', fontSize: '3vw', opacity: '0.9', borderRadius: '3vw', paddingTop: '2vw', height: '40vw' }}>
        <div className="fw-bold  text-warning" style={{ fontSize: '8vw', position: 'relative', top: '10vw' }}>Keep Moving</div>
      </div> */}
      
      <Welcome/>

    </div>

  );
};

export default Home;