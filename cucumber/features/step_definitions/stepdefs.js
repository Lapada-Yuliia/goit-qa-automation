// npm test
// npx cucumber-js 
// npx cucumber-js --tags '@first-test'
// npx cucumber-js --tags '@second-test'
// npx cucumber-js --tags 'not @first-test'

const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

// Given('today is Sunday', function () {
//            return 'pending';
//          });

// When('I ask whether it\'s Friday yet', function () {
//            return 'pending';
//          });

// Then('I should be told {string}', function (string) {
//            return 'pending';
//          });

// function isItFriday(today) {

// // We'll leave the implementation blank for now

// }

// Given('today is Sunday', function () {

// this.today = 'Sunday';

// });

// When('I ask whether it\'s Friday yet', function () {

// this.actualAnswer = isItFriday(this.today);

// });

// Then('I should be told {string}', function (expectedAnswer) {

// assert.strictEqual(this.actualAnswer, expectedAnswer);

// });

// function isItFriday(today) {
//     return 'Nope';
// }

// Given('today is Sunday', function () {
//     this.today = 'Sunday';
// });

// When('I ask whether it\'s Friday yet', function () {
//     this.actualAnswer = isItFriday(this.today);
// });

// Then('I should be told {string}', function (expectedAnswer) {
//     assert.strictEqual(this.actualAnswer, expectedAnswer);
// });

// function isItFriday(today) {
//     // if (today === "Friday") {
//     //     return "TGIF";
//     // } else {
//     //     return "Nope";
//     // }

//     return today === "Friday" ? "TGIF" : "Nope";
// }

// Given('today is a first summer month', function () {
//     console.log('Yes it is first summer month');
// });

// Given('today is Sunday', function () {
//     this.today = 'Sunday';
// });

// Given('today is Friday', function () {
//     this.today = 'Friday';
// });

// When('I ask whether it\'s Friday yet', function () {
//     this.actualAnswer = isItFriday(this.today);
// });

// Then('I should be told {string}', function (expectedAnswer) {
//     assert.strictEqual(this.actualAnswer, expectedAnswer);
// });

// Then('I can get some rest', function () {
//     console.log('I will watch a movie');
// });

function isItFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is a first summer month', function () {
    console.log('Yes it is first summer month');
});

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});