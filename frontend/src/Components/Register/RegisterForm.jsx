import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../Service/UserService";
import ConfirmPassword from "./ConfirmPassword";
import RegisterFormIndicator from "./RegisterFormIndicator";
import ShowPassword from "./ShowPassword";

const RegisterForm = (props) => {
    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [location, setLocation] = useState("");
    const [hintName, setHintName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("CUSTOMER");

    const [accepted, setAccepted] = useState(false);

    const [indicator, setIndicator] = useState("blank");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const switchRole = () => {
        if (role === "CUSTOMER") {
            setRole("WASHER");
        } else {
            setRole("CUSTOMER");
        }
    };

    const switchVisibility = () => {
        setVisible(!visible);
    };

    const switchConfirmVisibility = () => {
        setConfirmVisible(!confirmVisible);
    };

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
        console.log("Date of birth is not showing");
        console.log(event);
    };

    const handleLocation = (event) => {
        setLocation(event.target.value);
    };

    const handleHintName = (event) => {
        setHintName(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.value);
    };

    const inputIsValid = () => {
        let newMessage = "";
        if (firstName === "") {
            newMessage = "First name is mandatory";
        } else if (lastName === "") {
            newMessage = "Last name is mandatory";
        } else if (email === "") {
            newMessage = "Email ID is mandatory";
        } else if (phoneNumber === "") {
            newMessage = "Phone Number is mandatory";
        } else if (phoneNumber.length !== 10) {
            newMessage = "Phone Number must be 10 digits";
        } else if (gender === "") {
            newMessage = "Gender is mandatory";
        } else if (dateOfBirth === "") {
            newMessage = "Date Of Birth is mandatory";
        } else if (location === "") {
            newMessage = "Location is mandatory";
        } else if (hintName === "") {
            newMessage = "Hint name is mandatory";
        } else if (password === "") {
            newMessage = "Password is mandatory";
        } else if (password !== confirmPassword) {
            newMessage = "Password and Confirm Password should match";
        } else if (!accepted) {
            newMessage =
                "You must agree to the terms and conditions before registration.";
        } else {
            setIndicator("blank");
            console.log("user got registered success");
            newMessage = "Registration is successful";
            return true;
        }
        setMessage(newMessage);
        console.log("user not registered......");
        setIndicator("message");
        console.log("user not got registered");
        return false;
    };

    const handleRegister = async () => {
        console.log("registering");
        setIndicator("spinner");
        if (inputIsValid()) {
            console.log("registering......");
            const data = await UserService.addUser({
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                gender,
                dateOfBirth,
                hintName,
                role,
                location: null,
            });
            if (data === "User saved successfully") {
                console.log("registered");
                navigate("/login");
            }
        }
    };

    // Steps for wrapping all states into a single state
    //  Step1 : Create a single state "user" containing all the fields as its properties
    // Step2: Create a handleChange function that spreads the previous user and
    //        changes only the property that has been changed by the input
    //        In order to do this you need to specify the "name" attribute in each input element
    //        the name will simply be the name of the property

    // const handleChange = (event) => {
    //     setUser((prevUser) => {
    //         return {
    //             ...prevUser,
    //             [event.target.name]: event.target.value,
    //         };
    //     });
    // };

    // Step3: Place the handleChange function in each and every input's onChange attribute

    return (
        <div className="container">
            <RegisterFormIndicator indicator={indicator} message={message} />

            <div className="row mb-3">
                <div className="col">
                    <input
                        onChange={handleFirstName}
                        // onChange={(event) => setFirstName(event.target.value)}
                        value={firstName}
                        type="text"
                        className="login-input d-block m-auto rounded"
                        placeholder="First Name"
                        required={true}
                    />
                </div>

                <div className="col">
                    <input
                        onChange={handleLastName}
                        value={lastName}
                        type="text"
                        className="login-input d-block m-auto rounded"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <input
                        onChange={handleEmail}
                        value={email}
                        type="text"
                        className="login-input d-block m-auto rounded"
                        placeholder="Email ID"
                    />
                </div>

                <div className="col">
                    <input
                        onChange={handlePhoneNumber}
                        value={phoneNumber}
                        type="number"
                        className="login-input d-block m-auto rounded"
                        placeholder="Mobile Number"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleGender}
                        value={gender}
                    >
                        <option defaultValue={null}>Gender</option>
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>

                <div className="col">
                    <input
                        onChange={handleDateOfBirth}
                        value={dateOfBirth}
                        type="date"
                        className="login-input d-block m-auto rounded"
                        placeholder="Date Of Birth"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleLocation}
                        value={location}
                    >
                        <option defaultValue={null}>Location</option>
                        <option value="1">type="text"</option>
                        <option value="2">Not specified</option>
                    </select>
                </div>

                <div className="col">
                    <input
                        onChange={handleHintName}
                        value={hintName}
                        type="text"
                        className="login-input d-block m-auto rounded"
                        placeholder="Hint Name"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <input
                        onChange={handlePassword}
                        value={password}
                        type={visible ? "text" : "password"}
                        className="login-input d-block m-auto rounded"
                        placeholder="Password"
                    />
                </div>

                <div className="col-1">
                    <button className="showPassword" onClick={switchVisibility}>
                        <ShowPassword visible={visible} />
                    </button>
                </div>

                <div className="col">
                    <input
                        onChange={handleConfirmPassword}
                        value={confirmPassword}
                        type={confirmVisible ? "text" : "password"}
                        className="login-input d-block m-auto rounded"
                        placeholder="Confirm Password"
                    />
                </div>

                <div className="col-1">
                    <button
                        className="confirmPassword"
                        onClick={switchConfirmVisibility}
                    >
                        <ConfirmPassword visible={confirmVisible} />
                    </button>
                </div>
            </div>

            <div className="col-7">
                <div className="form-check">
                    <input
                        onChange={handleAccepted}
                        className="form-check-input"
                        type="checkbox"
                        value={accepted}
                        style={{ width: "10%", height: "3vh" }}
                        id="invalidCheck"
                        required
                    />
                    <label
                        className="form-check-label mb-3 ms-1 fw-bold w-75"
                        style={{ textShadow: "50%" }}
                        for="invalidCheck"
                    >
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree to the terms and conditions before
                        registration.
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <button
                        onClick={handleRegister}
                        type="submit"
                        className="btn btn-outline d-block m-auto fs-3 px-3 py-1 rounded text-white"
                        id="registerBox"
                    >
                        Register
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col text-center">
                    <Link
                        className="hyper-link px-2 py-2 rounded text-decoration-none"
                        to={"/login"}
                    >
                        Already have an account? Login instead
                    </Link>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col text-center">
                    <a
                        className="hyper-link px-2 py-2 rounded text-decoration-none"
                        onClick={switchRole}
                        role="button"
                    >
                        Register as a{" "}
                        {role === "CUSTOMER" ? "washer" : "customer"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
