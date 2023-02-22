#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

let userName;

const greetings = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello,'} ${userName}${'!'}`);
};

console.log("Welcome to the Brain Games!");

// Функция проверки четности числа 
function isEven (num) {
  return num % 2 === 0;
};

// Тело игры. Цикл while выполняется до тех пор, 
// пока пользователь не даст три правильных ответа подряд.
const playGame = () => {
  greetings();
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'."); // правила игры

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const num = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число
    const question = `Question: ${num}`;
    const correctAnswer = isEven(num) ? 'yes' : 'no';
      const newLocal = readlineSync.question;
    const answer = newLocal(`${question}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

playGame();
