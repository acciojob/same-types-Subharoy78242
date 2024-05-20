function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {

return true;
}
	// Convert values to numbers if they are numeric strings

if (!isNaN(value1)) {

value1 = parseFloat(value1);
}

if (!isNaN(value2)) {

value2 = parseFloat(value2);
}

// Check if the types are the same and both are not NaN

return typeof value1 === typeof value2 && !isNaN(value1) && !isNaN(value2);

}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
/*It seems like you are trying to check if two values are of the same type. Your function is mostly correct, but there is an issue with the handling of NaN.

In JavaScript, NaN is considered a number type. So, when you check typeof NaN, it returns ‘number’. However, NaN is not equal to anything, even itself. So, NaN === NaN will return false.

Your function isSameType(value1, value2) is checking isNaN(value1) && isNaN(value2) which will return true if both values are NaN. But the issue is that isNaN() will also return true for non-numeric strings and undefined values, which is not the desired behavior for this function.

A better way to check if a value is NaN is to use Number.isNaN() function or value !== value (since NaN is the only JavaScript value that is treated as unequal to itself).

Here is the corrected code:

function isSameType(value1, value2) {
  if ((Number.isNaN(value1) && Number.isNaN(value2)) || (value1 !== value1 && value2 !== value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}
This will correctly handle NaN values and return true if both values are NaN, and false otherwise. It will also return true if both values are of the same type, and false otherwise.

i hope you know the prompt output is string always!


Suneel Kumar


yes

so, if it is value we need to convert it into number


function isSameType(value1, value2) {

if (isNaN(value1) && isNaN(value2)) {

return true;
}

// Convert values to numbers if they are numeric strings

if (!isNaN(value1)) {

value1 = parseFloat(value1);
}

if (!isNaN(value2)) {

value2 = parseFloat(value2);
}

// Check if the types are the same and both are not NaN

return typeof value1 === typeof value2 && !isNaN(value1) && !isNaN(value2);

}


SK

state:"failed" body:"() => { const value1 = NaN; const value2 = 123; cy.visit(baseUrl, { onBeforeLoad(win) { // Stub your functions here cy.stub(win, "prompt").onFirstCall().returns(value1).onSecondCall().returns(value2); } }); cy.on("window:alert", str => { expect(str.toString()).to.equals("false"); }); }" displayError:"AssertionError: The following error originated from your application code, not from Cypress. > expected 'true' to equal 'false' When Cypress detects uncaught errors originating from your application it will automatically fail the current test. This behavior is configurable, and you can choose to turn this off by listening to the `uncaught:exception` event. https://on.cypress.io/uncaught-exception-from-application at $Cy.eval (http://localhost:3000/__cypress/tests?p=cypress/integration/tests/test.spec.js:165:33)"
check now it will clear this issue.


*/
