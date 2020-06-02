$(document).ready(function () {
  // // // // //
  $("img").click(function () {
    let testResult = prompt("What is in this picture?");
    // alert("You said a " + testResult + ", right?");
    return testResult;
  });
  // // // // //
});

// // // // //
alert("You said a " + testResult + ", right?");

let testResult2 = testResult.toUpperCase();

alert(testResult2);
