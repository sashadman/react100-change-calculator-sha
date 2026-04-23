export function calculateChangeBreakdown(amountDue, amountReceived) {
  if (amountDue === "" || amountReceived === "") {
    return {
      changeDue: 0,
      isOwed: false,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
  }

  const due = Math.round(parseFloat(amountDue) * 100);
  const received = Math.round(parseFloat(amountReceived) * 100);
  const difference = received - due;

  if (difference < 0) {
    return {
      changeDue: difference / 100,
      isOwed: true,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
  }

  let remaining = difference;

  const twenties = Math.floor(remaining / 2000);
  remaining = remaining % 2000;

  const tens = Math.floor(remaining / 1000);
  remaining = remaining % 1000;

  const fives = Math.floor(remaining / 500);
  remaining = remaining % 500;

  const ones = Math.floor(remaining / 100);
  remaining = remaining % 100;

  const quarters = Math.floor(remaining / 25);
  remaining = remaining % 25;

  const dimes = Math.floor(remaining / 10);
  remaining = remaining % 10;

  const nickels = Math.floor(remaining / 5);
  remaining = remaining % 5;

  const pennies = remaining;

  return {
    changeDue: difference / 100,
    isOwed: false,
    twenties,
    tens,
    fives,
    ones,
    quarters,
    dimes,
    nickels,
    pennies,
  };
}