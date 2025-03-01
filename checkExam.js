/*P:
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. 

Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.

If the score < 0, return 0.
input: 2 arrays: 1st array is the answer key, 2nd array is the student's answers
output: integer representing the score
E:
D:  Arrays and integers
A:
Initialize vars
- Initialize a score variable, assign to 0
- Initialize correctAnswer to 4
- Initialize incorrectAnswer to 0
- Initialize score to 0
- noAnswer to and empty string

Iterate over the student array
  - check if the index of the student's array is equal to the answer key array
    - if equal, increment score by correctAnswer
    - if incorrect, increment score by incorrectAnswer
    - if no answer,  increment by noAnswer
  - return score  
*/

function checkExam(answerKey, studentAnswer) {
  let score = 0;
  const correctAnswer = 4;
  const incorrectAnswer = -1;
  const noAnswer = 0;

  studentAnswer.forEach((answer, idx) => {
    if (answer === answerKey[idx]) {
      score += correctAnswer;
    } else if (answer === "") {
      score += noAnswer;
    } else {
      score += incorrectAnswer;
    }
  });
  if (score < 0) return 0;
  return score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0);
