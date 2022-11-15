console.log("Total Months: " + finances.length);

var total = 0;
for (i = 0; i < finances.length; i++) {
  total += finances[i][1];
}
console.log("Total: $" + total);

var profits = [];
for (i = 0; i < finances.length; i++) {
  profits.push(finances[i][1]);
}

var changes = [];
for (j = 0; j < profits.length - 1; j++) {
  var change = profits[j + 1] - profits[j];
  changes.push(change);
}

var totalChanges = 0;
for (n = 0; n < changes.length; n++) {
  totalChanges += changes[n];
}
var averChange = totalChanges / (finances.length - 1);

console.log("Average Change: $" + averChange.toFixed(2));

var maxChange = changes[0];
var maxChangeInd = 0;
for (i = 0; i < changes.length; i++) {
  if (maxChange < changes[i]) {
    maxChange = changes[i];
    maxChangeInd = i;
  }
}

console.log(
  `Greatest Increase in Profits: ${
    finances[maxChangeInd + 1][0]
  } ($${maxChange})`
);

var minChange = changes[0];
var minChangeInd = 0;
for (i = 0; i < changes.length; i++) {
  if (minChange > changes[i]) {
    minChange = changes[i];
    minChangeInd = i;
  }
}

console.log(
  `Greatest Decrease in Profits: ${
    finances[minChangeInd + 1][0]
  } ($${minChange})`
);
