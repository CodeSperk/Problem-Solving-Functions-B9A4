function calculateMoney(tNumber) {
  // Janitor Expenses
  const janitorNumber = 1;
  const perJanitorPay = 500;
  const totalJanitorCost = janitorNumber * perJanitorPay;
  // Lunch Expenses
  const lunchPerStaff = 50;
  const numberOfStuff = 8;
  const totalLunchCost = lunchPerStaff * numberOfStuff;
  // total Expenses
  const totalExpense = totalJanitorCost + totalLunchCost;
  // Ticket Income
  const perTicketPrice = 120;
  const numberOfTicket = parseInt(tNumber);
  if (numberOfTicket < 0) {
    return "Number of sold Ticket should be 0 or greater";
  } else {
    const incomeFromSoldTicket = numberOfTicket * perTicketPrice;
    const remainedAmount = incomeFromSoldTicket - totalExpense;
    return remainedAmount;
  }
}



function checkName(inputName) {
  const nameType = typeof inputName;
  if (nameType !== "string") {
    return "invalid";
  } else {
    const name = inputName.toLowerCase();
    const endsWith =
      name.endsWith("a") ||
      name.endsWith("y") ||
      name.endsWith("i") ||
      name.endsWith("e") ||
      name.endsWith("o") ||
      name.endsWith("u") ||
      name.endsWith("w");
    return endsWith ? "Good Name" : "Bad name";
  }
}

// console.log(checkName(199));


function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "It's not an array";
  }
  let numberedArray = [];
  for (el of arr) {
    if (typeof el === "number" && !Number.isNaN(el)) {
      numberedArray.push(el);
    }
  }
  return numberedArray;
}
function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length != 4
  ) {
    return "invalid";
  }
  const siteName = obj.siteName.toLowerCase();
  const name = obj.name.toLowerCase();
  const firstLetter = siteName.charAt().toUpperCase();
  const webName = `${firstLetter}${siteName.slice(1)}`;
  const pass = `${webName}#${name}@${obj.birthYear}`;
  return pass;
}


console.log(password({ name: "Kolimuddin" , birthYear: 1999 , siteName: "google" }));



function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalIncome = 0;
  for (let i = 0; i < payments.length; i++) {
    if (payments[i] < 3000) {
      totalIncome += payments[i];
    } else {
      const tax = payments[i] * (20 / 100);
      totalIncome += payments[i] - tax;
    }
  }
  const savings = totalIncome - livingCost;
  return savings >= 0 ? savings : "earn more";
}
