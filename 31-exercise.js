// Exercise 31: Completing sequences with takeUntil()

function fn(pricesNASDAQ, printRecord, stopButton) {
  const stopButtonClicks = Observable.fromEvent(stopButton, "click");
  const microsoftPrices = pricesNASDAQ
    .filter(function(priceRecord) {
      return priceRecord.name === "MSFT";
    })
    .takeUntil(stopButtonClicks)
    .forEach(function(priceRecord) {
      printRecord(priceRecord);
    });
}
