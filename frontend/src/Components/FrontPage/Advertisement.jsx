import Flip from "./Flip";

const Advertisement = (props) => {
  return (
    <div
      className="container my-5 py-5 rounded-5"
      style={{ backgroundColor: "#cddc39" }}
    >
      <div className="row">
        <div className="col">
          <div className="card-body w-75 ps-5 ms-5">
            <h1 className="card-title">Leave the dirt behind and move ahead</h1>
            <p className="card-text fs-5 mt-4">
              We provide both remote and on-site Car wash services. Our list of
              available Wash Packs is designed to suit your needs in all kinds
              of situations.
            </p>
          </div>
        </div>

        <div
          className="col advert rounded-5 ps-5 mx-5"
          style={{
            backgroundImage: `url(./CarWash_ad.jpg)`,
            backgroundSize: "100%",
          }}
        ></div>
      </div>

      <div className="row my-3"></div>

      <div className="row">
        <div className="col-5 ms-5 advert rounded-5 " style={{ backgroundImage: `url(./CarWash_ad2.jpg)` }} ></div>
        {/* <div className="col-5 ms-5 advert rounded-5 ">
          <Flip />
        </div> */}

        <div className="col ms-5">
          <div className="card-body w-75 mt-5">
            <h1 className="card-title">As quick as your ride</h1>
            <p className="card-text fs-5 mt-4">
              Contacting us has never been easier. The mobile app provides a
              more quick and reliant way of booking your car wash ahead of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
