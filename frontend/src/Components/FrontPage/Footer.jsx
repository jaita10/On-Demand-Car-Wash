import FooterApps from "./FooterApps";

const Footer = (props) => {
  const itemStyle = {
    paddingLeft: "30px",
  };

  const itemStyle2 = {
    paddingRight: "30px",
  };

  return (
    <div className="container-fliud" id="footer">
      <div className="row ps-5 mx-0">
        <div className="col ps-5 fs-4 mt-5">
          <div className="row my-2 footer-item fw-bold fs-2" style={itemStyle}>
            OFFICE CONTACT
          </div>
          <div className="row my-2 mx-4 px-1 footer-item" style={itemStyle2}>
            GREENWASH provides car cleaning services: interior and exterior
            dusting, washing, shampooing, detailing and sanitizing services of
            vehicle at your place.
          </div>
          <FooterApps />
        </div>
        <div className="col">
          <div
            className="col foot rounded-5"
            style={{
              backgroundImage: `url(./car_footer.jpg)`,
              backgroundSize: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
