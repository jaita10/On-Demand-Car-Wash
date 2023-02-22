const OrderIndicator = (props) => {
  const blank = <div className="row mb-2">&nbsp;</div>;

  const spinner = (
    <div className="row">
      <div className="spinner-border m-auto" role="status">
        <span className="visually-hidden m-auto">Loading...</span>
      </div>
    </div>
  );

  const message = (
    <div
      className="row mb-4 text-danger fw-semibold rounded py-2 px-3"
      id="registerTitle"
      style={{ fontFamily: "sans-serif" }}
    >
      {/* Invalid username or password */}
      {props.message}
    </div>
  );

  const body = {
    blank: blank,
    spinner: spinner,
    message: message,
  };

  return <>{body[props.indicator]}</>;
};

export default OrderIndicator;
