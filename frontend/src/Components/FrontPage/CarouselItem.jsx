import FeaturedCard from "./FeaturedCard";


const CarouselItem = (props) => {

    return (
        <div className={`carousel-item ${props.active}`}>
            <div className="container-fluid py-5 d-flex justify-content-evenly">
                {props.list.map((element)=>{
                    return (<FeaturedCard pack={element} />);
                })}
            </div>
        </div>
    );
};

export default CarouselItem;
