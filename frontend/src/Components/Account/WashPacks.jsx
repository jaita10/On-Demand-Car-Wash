import { useEffect, useState } from "react";
import WashPackService from "../../Service/WashPackService";

const WashPacks = (props) => {
  const [packList, setPackList] = useState([]);

  let serial = 0;

  const getPacks = async () => {
    const data = await WashPackService.getAllWashPacks();
    setPackList(data.washpackList);
    console.log(packList);
  };

  useEffect(() => {
    getPacks();
  }, []);

  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        {packList?.map((element) => {
          return (
            <div className="pack-item">
              <div
                className="pack-image"
                style={{ backgroundImage: `url(/washimages/WashPack_${++serial}.jpg)` }}
              ></div>
              <h2 className="p-2">{element.washpackTitle}</h2>
              <p className="py-0 px-2">{element.washpackDescription}</p>
              <p className="fs-5 py-0 px-2">
                Price: Rs. {element.washpackPrice}
              </p>
            </div>
          );
        })}
        
        {/* <div className="pack-item">
          <div
            className="pack-image"
            style={{ backgroundImage: "url(/washimages/WashPack_1.jpg)" }}
          ></div>
          <h2 className="p-2">{packList?.[0]?.washpackTitle}</h2>
          <p className="py-0 px-2">{packList?.[0]?.washpackDescription}</p>
          <p className="fs-5 py-0 px-2">
            Price: Rs. {packList?.[0]?.washpackPrice}
          </p>
        </div> */}

      </div>
    </>
  );
};

export default WashPacks;
