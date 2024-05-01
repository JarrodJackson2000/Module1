console.log("Hello World");
console.log("This is a message");

function analyzeSentance(sentancePassed) {
  const Sentiment = require("sentiment");
  const sentiment = new Sentiment();
  const result = sentiment.analyze(sentancePassed);
  console.dir(result); // Score: -2, Comparative: -0.666
  return result.score;
}
console.log(analyzeSentance("Our teacher is great"));

console.log(analyzeSentance("The weather is terrible today!"));
