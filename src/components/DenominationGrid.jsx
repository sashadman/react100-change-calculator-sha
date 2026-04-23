import DenominationCard from "./DenominationCard";

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
        image={image}
        alt="Twenties"
      />
      <DenominationCard
        title="Tens"
        value={tens}
        testId="tens"
        image={image}
        alt="Tens"
      />
      <DenominationCard
        title="Fives"
        value={fives}
        testId="fives"
        image={image}
        alt="Fives"
      />
      <DenominationCard
        title="Ones"
        value={ones}
        testId="ones"
        image={image}
        alt="Ones"
      />
      <DenominationCard
        title="Quarters"
        value={quarters}
        testId="quarters"
        image={image}
        alt="Quarters"
      />
      <DenominationCard
        title="Dimes"
        value={dimes}
        testId="dimes"
        image={image}
        alt="Dimes"
      />
      <DenominationCard
        title="Nickels"
        value={nickels}
        testId="nickels"
        image={image}
        alt="Nickels"
      />
      <DenominationCard
        title="Pennies"
        value={pennies}
        testId="pennies"
        image={image}
        alt="Pennies"
      />
    </div>
  );
}

export default DenominationGrid;