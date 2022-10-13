const WashPackAdd = (props) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [accepted, setAccepted] = useState(false);

  const [indicator, setIndicator] = useState("blank");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.value);
  };

  const inputIsValid = () => {
    let newMessage = "";
    if (title === "") {
      newMessage = "Title is mandatory";
    } else if (description === "") {
      newMessage = "Description is mandatory";
    } else if (price === "") {
      newMessage = "Price is mandatory";
    } else if (!accepted) {
      newMessage =
        "You must agree to the terms and conditions before registration.";
    } else {
      setIndicator("blank");
      console.log("WashPack added success");
      newMessage = "Addition is successful";
      return true;
    }
    setMessage(newMessage);
    console.log("WashPack not added......");
    setIndicator("message");
    console.log("WashPack not got added");
    return false;
  };

  const handleRegister = async () => {
    console.log("adding");
    setIndicator("spinner");
    if (inputIsValid()) {
      console.log("addingg......");
      const data = await UserService.addUser({
        title,
        description,
        price,
      });
      if (data === "User saved successfully") {
        console.log("registered");
        navigate("/login");
      }
    }
  };

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
            className="login-input d-block m-auto"
            placeholder="First Name"
            required={true}
          />
        </div>

        <div className="col">
          <input
            onChange={handleLastName}
            value={lastName}
            type="text"
            className="login-input d-block m-auto"
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
            className="login-input d-block m-auto"
            placeholder="Email ID"
          />
        </div>

        <div className="col">
          <input
            onChange={handlePhoneNumber}
            value={phoneNumber}
            type="number"
            className="login-input d-block m-auto"
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
          {/* <input
                        onChange={handleGender}
                        value={gender}
                        type="text"
                        className="login-input d-block m-auto"
                        placeholder="Gender"
                    /> */}
        </div>

        <div className="col">
          <input
            onChange={handleDateOfBirth}
            value={dateOfBirth}
            type="date"
            className="login-input d-block m-auto"
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
          {/* <input
                        onChange={handleLocation}
                        value={location}
                        type="text"
                        className="login-input d-block m-auto"
                        placeholder="Location"
                    /> */}
        </div>

        <div className="col">
          <input
            onChange={handleHintName}
            value={hintName}
            type="text"
            className="login-input d-block m-auto"
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
            className="login-input d-block m-auto"
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
            className="login-input d-block m-auto"
            placeholder="Confirm Password"
          />
        </div>

        <div className="col-1">
          <button className="confirmPassword" onClick={switchConfirmVisibility}>
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
            You must agree to the terms and conditions before registration.
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
          <Link className="hyper-link px-2 py-2 rounded" to={"/login"}>
            Already have an account? Login instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WashPackAdd;
