function transportationOptions() {
  // Write code here to make the decision tree into an algorithm!

  let weather;
  let time;
  let transportation;
  let w = "walk";
  let b = "bus";
  let hungry;

  if (weather === "sun") {
    if (time > 30) {
      transportation = w;
    } else {
      transportation = b;
    }
  } else if (weather === "cloud") {
    hungry ? (transportation = w) : b;
  } else if (weather === "rain") {
    transportation = b;
  } else {
    console.log(
      "Oh, if you'd just hoofed it instead of bothering about all this, you'd be there already, plus you know you don't have bus fare anyway"
    );
  }
  console.log(transportation);
}
