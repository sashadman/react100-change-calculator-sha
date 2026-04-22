import { useState } from "react";
function App() {
  const [amountDue, setAmountDue] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
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

const calculateChange = () => {
  if (amountDue === '' || amountReceived === '') {
 setChangeDue(0);
 setIsOwed(false);
 setTwenties(0);
 setTens(0);
 setFives(0);
 setOnes(0);
 setQuarters(0);
 setDimes(0);
 setNickels(0);
 setPennies(0);
 return;
  }


  const due = Math.round(parseFloat(amountDue) * 100);
  const received = Math.round(parseFloat(amountReceived) * 100);
  const difference = received - due;

  setChangeDue(difference / 100);

  if (difference < 0) {
    setIsOwed(true);
    setTwenties(0);
    setTens(0);
    setFives(0);
    setOnes(0);
    setQuarters(0);
    setDimes(0);
    setNickels(0);
    setPennies(0);
    return;
  }

  setIsOwed(false);

  let remaining = difference;

  const twentiesCount = Math.floor(remaining / 2000);
  remaining = remaining % 2000;

  const tensCount = Math.floor(remaining / 1000);
  remaining = remaining % 1000;

  const fivesCount = Math.floor(remaining / 500);
  remaining = remaining % 500;

  const onesCount = Math.floor(remaining / 100);
  remaining = remaining % 100;

  const quartersCount = Math.floor(remaining / 25);
  remaining = remaining % 25;

  const dimesCount = Math.floor(remaining / 10);
  remaining = remaining % 10;

  const nickelsCount = Math.floor(remaining / 5);
  remaining = remaining % 5;

  const penniesCount = remaining;

  setTwenties(twentiesCount);
  setTens(tensCount);
  setFives(fivesCount);
  setOnes(onesCount);
  setQuarters(quartersCount);
  setDimes(dimesCount);
  setNickels(nickelsCount);
  setPennies(penniesCount);
};
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">Change Calculator</h1>
      <p className="text-center mb-4">
        Enter the amount due and amount received to calculate the change.
      </p>

      <div className="row">
        <div className="col-md-4">
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
                  value = {amountDue}
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
                  value = {amountReceived}
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
            </div>
          </div>
        </div>
          <div className="col-md-8">
{ !isOwed ? (
          <div className="alert alert-success" role="alert">
            The total change due is ${changeDue.toFixed(2)}
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Additional money owed is ${Math.abs(changeDue).toFixed(2)}
          </div>
        )}

          <div className="row">
            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Twenties</h4>
                  <p data-testid="twenties">{twenties}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Tens</h4>
                  <p data-testid="tens">{tens}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Fives</h4>
                  <p data-testid="fives">{fives}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Ones</h4>
                  <p data-testid="ones">{ones}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Quarters</h4>
                  <p data-testid="quarters">{quarters}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Dimes</h4>
                  <p data-testid="dimes">{dimes}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Nickels</h4>
                  <p data-testid="nickels">{nickels}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h4>Pennies</h4>
                  <p data-testid="pennies">{pennies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;