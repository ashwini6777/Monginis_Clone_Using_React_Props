const CakeCategory = (props) => {
  return (
    <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
      {props.buttonVisible && (
        <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>
          {props.buttonText}
        </button>
      )}
      <img
        src={props.imageUrl}
        alt={props.altText}
        className="img-fluid rounded-circle w-70"
      />
      <p className="category-name">{props.categoryName}</p>
    </div>
  );
}

export default CakeCategory;
