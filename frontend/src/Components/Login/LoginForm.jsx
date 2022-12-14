import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../Service/UserService";
import FormIndicator from "./FormIndicator";
import ShowPassword from "./ShowPassword";

const LoginForm = (props) => {

    const [visible, setVisible] = useState(false);
    const [indicator, setIndicator] = useState("blank");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const switchVisibility = () => {
        setVisible(!visible);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        setIndicator("spinner");
        let isValid = await UserService.validateCredentials(username, password);
        // let isValid = false;
        if (isValid) {
            navigate("/user/profile");
        } else {
            setIndicator("message");
            setUsername("");
            setPassword("");
        }
    };

    return (
        
        <div className="container" >

            <FormIndicator indicator={indicator}/>

            <div className="row mb-3">
                <div className="col-11">
                    <input
                        onChange={handleUsername}
                        value={username}
                        type="text"
                        className="login-input d-block m-auto"
                        placeholder="Username"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <input
                        onChange={handlePassword}
                        value={password}
                        type={visible ? "text" : "password"}
                        className="login-input d-block m-auto"
                        placeholder="Password"
                    />
                </div>

                <div className="col-1">
                    <button className="showPassword" onClick={switchVisibility}>
                        <ShowPassword visible={visible} />
                    </button>
                </div>
                
            </div>

            <div className="row mb-3">
                <div className="col" >
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="btn btn-outline d-block m-auto fs-3 px-3 py-1 rounded text-white" 
                        id='loginBox'
                    >
                        Login
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col text-center">
                    <Link className="hyper-link px-2 py-2 rounded" to={""}>
                        Forgot Password
                    </Link>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col text-center">
                    <Link className="hyper-link px-2 py-2 rounded" to={"/register"}>
                        New user? Create an account
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;
