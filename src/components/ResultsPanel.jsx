import CurrencyCard from "./CurrencyCard";
import ResultAlert from "./ResultAlert";
import DenominationGrid from "./DenominationGrid";

function ResultsPanel({
  selectedCurrency,
  setSelectedCurrency,
  currencies,
  convertedAmount,
  rateLoading,
  isOwed,
  changeDue,
  twenties,
  tens,
  fives,
  ones,
  quarters,
  dimes,
  nickels,
  pennies,
  image,
}) {
  return (
    <div className="col-md-8">
      <CurrencyCard
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currencies={currencies}
        convertedAmount={convertedAmount}
        rateLoading={rateLoading}
      />

      <ResultAlert isOwed={isOwed} changeDue={changeDue} />

      <DenominationGrid
        twenties={twenties}
        tens={tens}
        fives={fives}
        ones={ones}
        quarters={quarters}
        dimes={dimes}
        nickels={nickels}
        pennies={pennies}
        image={image}
      />
    </div>
  );
}

export default ResultsPanel;