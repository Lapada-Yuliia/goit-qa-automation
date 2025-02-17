const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

let shoppingCart = [];

Given('the following products are added to the shopping cart:', function (dataTable) {
    shoppingCart = dataTable.hashes();
});

When('I calculate the total cost', function () {
    let totalCost = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        totalCost += parseInt(product.Price);
    }
    this.totalCost = totalCost;
});

Then('the total cost should be {int}', function (expectedTotalCost) {
    const actualTotalCost = this.totalCost;
    assert.strictEqual(actualTotalCost, expectedTotalCost);
});