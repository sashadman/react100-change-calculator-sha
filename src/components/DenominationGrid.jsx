import DenominationCard from "./DenominationCard";
import twentiesImg from "../assets/twenties.jpg";
import tensImg from "../assets/tens.jpg";
import fivesImg from "../assets/fives.jpg";
import onesImg from "../assets/ones.jpg";
import quartersImg from "../assets/quarters.jpg";
import dimesImg from "../assets/dimes.jpg";
import nickelsImg from "../assets/nickels.jpg";
import penniesImg from "../assets/pennies.jpg";

function DenominationGrid({
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
    <div className="row">
      <DenominationCard
        title="Twenties"
        value={twenties}
        testId="twenties"
        image={twentiesImg}
        alt="Twenties"
      />
      <DenominationCard
        title="Tens"
        value={tens}
        testId="tens"
        image={tensImg}
        alt="Tens"
      />
      <DenominationCard
        title="Fives"
        value={fives}
        testId="fives"
        image={fivesImg}
        alt="Fives"
      />
      <DenominationCard
        title="Ones"
        value={ones}
        testId="ones"
        image={onesImg}
        alt="Ones"
      />
      <DenominationCard
        title="Quarters"
        value={quarters}
        testId="quarters"
        image={quartersImg}
        alt="Quarters"
      />
      <DenominationCard
        title="Dimes"
        value={dimes}
        testId="dimes"
        image={dimesImg}
        alt="Dimes"
      />
      <DenominationCard
        title="Nickels"
        value={nickels}
        testId="nickels"
        image={nickelsImg}
        alt="Nickels"
      />
      <DenominationCard
        title="Pennies"
        value={pennies}
        testId="pennies"
        image={penniesImg}
        alt="Pennies"
      />
    </div>
  );
}

export default DenominationGrid;