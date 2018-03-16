// Exercise 27: Stock Ticker

function fn(pricesNASDAQ, printRecord) {
  const now = new Date();
  const tenDaysAgo = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 10
  );

  // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
  const microsoftPrices = pricesNASDAQ
    .filter(priceRecord => priceRecord.timeStamp > tenDaysAgo)
    .forEach(function(priceRecord) {
      printRecord(priceRecord);
    });
}
