var targetNumber = 59;

$("#number-to-guess").text(targetNumber);

var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7,1];

// Next we create a for loop to create crystals for every numberOption.

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal").on("click", function () {
    console.log("crystals")
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged Unhide correct picture.
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("winner.jpg");
    }

    else if (counter >= targetNumber) {
        alert("loser.jpg");
    }
{/* <script src="app.js">

// {function primeCheck(number){
//    for (var counter = 2; counter <= 100; counter++)
//     {

//     var notPrime = false;

//     for (var i = 2; i <= counter; i++)
//      {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }
</script> */}
});