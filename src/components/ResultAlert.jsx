function ResultAlert({ isOwed, changeDue }) {
  return !isOwed ? (
    <div className="alert alert-success" role="alert">
      The total change due is ${changeDue.toFixed(2)}
    </div>
  ) : (
    <div className="alert alert-danger" role="alert">
      Additional money owed is ${Math.abs(changeDue).toFixed(2)}
    </div>
  );
}

export default ResultAlert;