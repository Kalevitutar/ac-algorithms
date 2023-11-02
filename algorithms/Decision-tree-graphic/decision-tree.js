let weather;
let time;
let transportation;
let w = "walk";
let b = "bus";
let hungry;

weather = "sun";
time = 24;
hungry = false;

function transportationOptions() {
  // Write code here to make the decision tree into an algorithm!
  if (weather === "sun") {
    if (time > 30) {
      transportation = w;
    } else {
      transportation = b;
    }
  } else if (weather === "cloud") {
    transportation = hungry ? w : b;
  } else if (weather === "rain") {
    transportation = b;
  } else {
    transportation =
      "Oh, if you'd just hoofed it instead of bothering about all this, you'd be there already, plus you know you don't have bus fare anyway";
  }
  console.log(transportation);
}

transportationOptions();
