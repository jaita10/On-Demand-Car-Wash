const Footer = (props) => {

    const itemStyle = {
        paddingLeft: "100px"
    }

    return (
        <div className="container-fliud" id="footer">
            <div className="row ps-5">
                <div className="col ps-5 fs-4 mt-5">
                    <div className="row my-2 footer-item fw-bold fs-2" style={itemStyle}>Footer Head</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Footer Item</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Footer Item</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Footer Item</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Footer Item</div>
                </div>
                <div className="col">
                    <div className="col foot rounded-5" style={{ backgroundImage: `url(./car_footer.jpg)` , backgroundSize:'100%'}}></div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
