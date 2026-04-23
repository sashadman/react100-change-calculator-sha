import { useState } from "react";
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