function DenominationCard({ title, value, testId, image, alt }) {
  return (
    <div className="col-sm-3 mb-3">
      <div className="card text-center">
        <div className="card-body">
          <img src={image} alt={alt} className="denomination-img mb-2" />
          <h4>{title}</h4>
          <p data-testid={testId}>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default DenominationCard;