import { Link } from "react-router-dom";

const Welcome = (props) => {
    return (
        <div className="card" id="welcome-box" style={{ width: "30rem"}}>
            <div className="card-body ">
                <h1 className="card-title">
                    Welcome to your car's
                    <br />
                    favorite destination
                </h1>
                <p className="card-text">
                    The best care that your car can get is right here with our
                    verified washers
                </p>
                <Link to={"/form"} type="button" className="btn me-5 buttonc">
                    Book Now
                </Link>
                <Link to={"/form"} type="button" className="btn buttonc">
                    Schedule Later
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
