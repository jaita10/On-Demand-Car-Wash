const FeaturedCard = (props) => {
    return (
        <div
            className="card wash-pack-card"
            style={{ backgroundImage: `url(./washimages/${props.pack.washPackTitle.replaceAll(' ','_')}.jpg)` }}
            key={props.pack.washPackId}
        >
            <div className="card-body">
                <h5 className="card-title">{props.pack.washPackTitle}</h5>
                <p className="card-text">
                    {props.pack.washPackDescription.slice(0,80)}...
                </p>
            </div>
        </div>
    );
};

export default FeaturedCard;

FeaturedCard.defaultProps = {
    image: "WashPack_01",
    title: "Wash Pack Title",
    description: "This is where the description of the given Add On will appear"
}
