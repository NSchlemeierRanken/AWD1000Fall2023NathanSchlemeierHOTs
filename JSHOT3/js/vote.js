var totalUpvotes = 0;
var totalDownvotes = 0;

var thumbsUpBtn = document.getElementById("thumbsUpBtn");
var thumbsDownBtn = document.getElementById("thumbsDownBtn");
var totalUpvotesSpan = document.getElementById("totalUpvotes");
var totalDownvotesSpan = document.getElementById("totalDownvotes");
var totalScoreSpan = document.getElementById("totalScore");

thumbsUpBtn.addEventListener("click", function() {
    totalUpvotes++;
    updateScore();
});

thumbsDownBtn.addEventListener("click", function() {
    totalDownvotes++;
    updateScore();
});

function updateScore() {
    totalUpvotesSpan.textContent = totalUpvotes;
    totalDownvotesSpan.textContent = totalDownvotes;
    totalScoreSpan.textContent = totalUpvotes - totalDownvotes;
}