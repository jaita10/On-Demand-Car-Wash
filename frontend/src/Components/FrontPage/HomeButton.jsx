import { Link, useNavigate } from "react-router-dom";

const HomeButton = (props) => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return (
        <>
            <div className="d-inline">

                <button className="btn btn-outline-warning bg-gradient bg-dark me-5" type="button" onClick={goToHome} style={{ backgroundColor: '#cddc39' }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                        <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>

                </button>

            </div>

        </>
    );
};

export default HomeButton;