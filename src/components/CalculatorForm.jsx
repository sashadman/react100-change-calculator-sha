function CalculatorForm({
  amountDue,
  amountReceived,
  setAmountDue,
  setAmountReceived,
  calculateChange,
  resetCalculator,
}) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h3 className="mb-0">Enter Information</h3>
      </div>

      <div className="card-body">
        <div className="form-group">
          <label htmlFor="amountDue">How much is due?</label>
          <input
            id="amountDue"
            data-testid="amountDue"
            type="number"
            className="form-control"
            value={amountDue}
            onChange={(event) => setAmountDue(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amountReceived">How much was received?</label>
          <input
            id="amountReceived"
            data-testid="amountReceived"
            type="number"
            className="form-control"
            value={amountReceived}
            onChange={(event) => setAmountReceived(event.target.value)}
          />
        </div>

        <button
          data-testid="calculate"
          className="btn btn-primary btn-block"
          onClick={calculateChange}
        >
          Calculate
        </button>

        <button
          type="button"
          className="btn btn-light btn-block mt-2 reset-btn"
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CalculatorForm;