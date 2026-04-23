function CurrencyCard({ selectedCurrency, setSelectedCurrency }) {
  return (
    <div className="card mb-4 currency-card">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
          <div>
            <h4 className="mb-1">Currency View</h4>
            <p className="mb-0 text-muted">
              Selected currency: <strong>{selectedCurrency}</strong>
            </p>
          </div>

          <div className="mt-3 mt-md-0">
            <select
              className="form-control currency-select"
              value={selectedCurrency}
              onChange={(event) => setSelectedCurrency(event.target.value)}
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="IRR">IRR - Iranian Rial</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyCard;