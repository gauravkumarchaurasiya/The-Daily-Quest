function resizeBody() {
  const container = document.getElementById("container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  document.body.style.width = containerWidth + "px";
  document.body.style.height = containerHeight + "px";
}

// Call the resizeBody function initially and on window resize
window.addEventListener("resize", resizeBody);
resizeBody();
// Background script logic goes here
console.log("Background script is running!");

var attempts = 0;

function checkAnswer() {
  attempts++;
  var answer = document.getElementById("outputInput").value;
  var outputDiv = document.getElementById("output");
  var descriptionDiv = document.getElementById("description");
  var likeButton = document.getElementById("likeButton");
  var container = document.getElementById("container");

  if (answer === document.getElementById("correctAnswer").textContent) {
    outputDiv.textContent = "Correct!";
    outputDiv.style.color = "green";
    descriptionDiv.style.display = "block";
    likeButton.disabled = false;
  } else {
    outputDiv.textContent = "Incorrect. Try again!";
    outputDiv.style.color = "red";

    if (attempts >= 3) {
      outputDiv.textContent =
        "Incorrect. The correct answer is '" +
        document.getElementById("correctAnswer").textContent +
        "'";
      outputDiv.style.color = "red";
      descriptionDiv.style.display = "block";
    }
  }
}
const checkAnswerButton = document.getElementById("checkAnswer");
checkAnswerButton.addEventListener("click", checkAnswer);
const toggleLikeButton = document.getElementById("toggleLike");
toggleLikeButton.addEventListener("click", toggleLike);
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
toggleDarkModeButton.addEventListener("click", toggleDarkMode);

function toggleLike() {
  var likeButton = document.getElementById("likeButton");
  likeButton.classList.toggle("active");
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
// document.addEventListener("DOMContentLoaded", function () {
  const generateQuestion = async () => {
    const response = await fetch(
      "https://gauravkumarchaurasiya.github.io/codeQuiz/python.json"
    );
    const data = await response.json();
    const questionObjects = data;

    // Get a random question object
    const randomQuestionObj =
      questionObjects[Math.floor(Math.random() * questionObjects.length)];

    const question = randomQuestionObj.question;
    const codeSnippet = randomQuestionObj.code;
    const correctAnswer = randomQuestionObj.output;
    const description = randomQuestionObj.description;

    // Update the HTML elements
    document.getElementById("codeSnippet").textContent = codeSnippet;
    document.getElementById("correctAnswer").textContent = correctAnswer;
    document.getElementById("descriptionText").textContent = description;

    return question;
  };

  // Example usage
  generateQuestion()
    .then((result) => {
      console.log("Generated Question:", result);
      // Use the generated question as needed in your code
    })
    .catch((error) => {
      console.error("Error:", error);
    });
// });