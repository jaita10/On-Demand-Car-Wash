import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../Service/UserService";

const EditProfile = (props) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
    const [email, setEmail] = useState(user?.email);
    const [gender, setGender] = useState(user?.gender);
    const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth);
    const [hintName, setHintName] = useState(user?.hintName);

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
    };

    const handleHintName = (event) => {
        setHintName(event.target.value);
    };

    const handleSave = async()=>{
        await UserService.updateUser({
            ...user,
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            gender,
            hintName,
        })
        navigate("/user/profile");
    }

    return (
        <>
            <div className="row w-50 m-auto" style={{ height: "90vh" }}>
                <div className="col">
                    <div className="row fw-bold border-bottom ps-4 pt-5 pb-4">
                        Profile Details
                    </div>
                    <div className="row pt-4" style={{ height: "60vh" }}>
                        <div className="row ps-4">
                            <div className="col-4">Name</div>
                            <div className="col-8">
                                <div className="row gap-1">
                                    <input
                                        onChange={handleFirstName}
                                        value={firstName}
                                        type="text"
                                        className="login-input d-inline w-49 rounded py-1"
                                        placeholder="First Name"
                                        required={true}
                                    />
                                    <input
                                        onChange={handleLastName}
                                        value={lastName}
                                        type="text"
                                        className="login-input d-inline w-49 rounded py-1"
                                        placeholder="Last Name"
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row ps-4">
                            <div className="col-4">Mobile Number</div>
                            <div className="col-8">
                                <div className="row">
                                    <input
                                        onChange={handlePhoneNumber}
                                        value={phoneNumber}
                                        type="number"
                                        className="login-input d-inline w-75 rounded py-1"
                                        placeholder="Mobile Number"
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row ps-4">
                            <div className="col-4">Email ID</div>
                            <div className="col-8">
                                <div className="row">
                                    <input
                                        onChange={handleEmail}
                                        value={email}
                                        type="email"
                                        className="login-input d-inline w-75 rounded py-1"
                                        placeholder="Email"
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row ps-4">
                            <div className="col-4">Gender</div>
                            <div className="col-8">
                                <select
                                    className="form-select py-1 w-75"
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
                        </div>

                        <div className="row ps-4">
                            <div className="col-4">Date Of Birth</div>
                            <div className="col-8">
                                <input
                                    onChange={handleDateOfBirth}
                                    value={dateOfBirth}
                                    type="date"
                                    className="login-input d-block m-auto rounded"
                                    placeholder="Date Of Birth"
                                />
                            </div>
                        </div>

                        <div className="row ps-4">
                            <div className="col-4">Hint Name</div>
                            <div className="col-8">
                                <input
                                    onChange={handleHintName}
                                    value={hintName}
                                    type="text"
                                    className="login-input d-block m-auto rounded py-1"
                                    placeholder="Hint Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={handleSave} className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
