function showAnswer(questionId) {
    var answer = document.getElementById(questionId);

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  }