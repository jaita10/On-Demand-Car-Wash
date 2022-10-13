import { useEffect, useState } from "react";
import AddOnsService from "../../Service/AddOnsService";

const AddOns = (props) => {
  const [packList, setPackList] = useState([]);

  let serial = 0;

  const getPacks = async () => {
    const data = await AddOnsService.getAllAddOns();
    setPackList(data.addonList);
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
                style={{ backgroundImage: `url(/washimages/AddOn_${++serial}.jpg)` }}
              ></div>
              <h2 className="p-2">{element.addonTitle}</h2>
              <p className="py-0 px-2">{element.addonDescription}</p>
              <p className="fs-5 py-0 px-2">
                Price: Rs. {element.addonPrice}
              </p>
            </div>
          );
        })}

      </div>
    </>
  );
};

export default AddOns;
