var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function arraySum(array) {
  var sum = 0;
  for(i in array)
  {
    sum += array[i];
  }
  return sum;
}

function calculateSalesTax (companySalesData, salesTaxRates)
{
  var results = {};

  for (var i = 0; i < companySalesData.length; i++)
  {
    var sales = arraySum(companySalesData[i].sales);
    var taxes = sales * salesTaxRates[companySalesData[i].province];

    if (results.hasOwnProperty(companySalesData[i].name))
    {
      results[companySalesData[i].name].totalSales += sales;
      results[companySalesData[i].name].totalTaxes += taxes;
    }
    else
    {
      results[companySalesData[i].name] = {
        totalSales: sales,
        totalTaxes: taxes
      }
    }
  }
  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));
