import { useEffect, useState } from "react";
import { fetchCurrencies, fetchExchangeRate } from "./services/currencyApi";    
import twentiesImg from "./assets/react.svg";
import Hero from "./components/Hero";
import CalculatorForm from "./components/CalculatorForm";
import ResultsPanel from "./components/ResultsPanel";
import { calculateChangeBreakdown } from "./utils/calculateChange";

function App() {
  const [amountDue, setAmountDue] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [changeDue, setChangeDue] = useState(0);
  const [twenties, setTwenties] = useState(0);
  const [tens, setTens] = useState(0);
  const [fives, setFives] = useState(0);
  const [ones, setOnes] = useState(0);
  const [quarters, setQuarters] = useState(0);
  const [dimes, setDimes] = useState(0);
  const [nickels, setNickels] = useState(0);
  const [pennies, setPennies] = useState(0);
  const [isOwed, setIsOwed] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencies, setCurrencies] = useState([
    { code: "USD", name: "US Dollar" },
  ]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [rateLoading, setRateLoading] = useState(false);

  const resetCalculator = () => {
    setAmountDue("");
    setAmountReceived("");
    setChangeDue(0);
    setTwenties(0);
    setTens(0);
    setFives(0);
    setOnes(0);
    setQuarters(0);
    setDimes(0);
    setNickels(0);
    setPennies(0);
    setIsOwed(false);
  };

  const calculateChange = () => {
    const result = calculateChangeBreakdown(amountDue, amountReceived);

    setChangeDue(result.changeDue);
    setIsOwed(result.isOwed);
    setTwenties(result.twenties);
    setTens(result.tens);
    setFives(result.fives);
    setOnes(result.ones);
    setQuarters(result.quarters);
    setDimes(result.dimes);
    setNickels(result.nickels);
    setPennies(result.pennies);
  };
useEffect(() => {
  const loadCurrencies = async () => {
    try {
      const currencyList = await fetchCurrencies();
      setCurrencies(currencyList);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  loadCurrencies();
}, []);

useEffect(() => {
  const loadExchangeRate = async () => {
    try {
      setRateLoading(true);
      const rate = await fetchExchangeRate("USD", selectedCurrency);
      setExchangeRate(rate);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setExchangeRate(1);
    } finally {
      setRateLoading(false);
    }
  };

  loadExchangeRate();
}, [selectedCurrency]);
const convertedAmount = (changeDue * exchangeRate).toFixed(2);
  return (
    <div className="container py-5">
      <Hero />

      <div className="row">
        <div className="col-md-4">
          <CalculatorForm
            amountDue={amountDue}
            amountReceived={amountReceived}
            setAmountDue={setAmountDue}
            setAmountReceived={setAmountReceived}
            calculateChange={calculateChange}
            resetCalculator={resetCalculator}
          />
        </div>

        <ResultsPanel
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          currencies={currencies}
          convertedAmount={convertedAmount}
          rateLoading={rateLoading} 
          isOwed={isOwed}
          changeDue={changeDue}
          twenties={twenties}
          tens={tens}
          fives={fives}
          ones={ones}
          quarters={quarters}
          dimes={dimes}
          nickels={nickels}
          pennies={pennies}
          image={twentiesImg}
        />
      </div>
    </div>
  );
}

export default App;