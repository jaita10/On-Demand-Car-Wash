const Flip = (props) => {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="flip1.png" alt="Avatar" style={{width: "300px" , height: "300px"}}/>
                    </div>
                    <div className="flip-card-back">
                        <img src="flip2.png" alt="Avatar" style={{width: "300px" , height: "300px"}}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Flip;