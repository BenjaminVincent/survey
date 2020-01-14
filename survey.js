const stdin = process.stdin;
const stdout = process.stdout;
const readline = require('readline');

let questions = [
  "What do you think of Node.js? ",
  "What's your name? ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

let result = [];
let c = 0;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(questions[c], (answer) => {
  result.push(answer);
  c++;
  rl.question(questions[c], (answer) => {
    result.push(answer);
    c++;
    rl.question(questions[c], (answer) => {
      result.push(answer);
      c++;
      rl.question(questions[c], (answer) => {
        result.push(answer);
        c++;
        rl.question(questions[c], (answer) => {
          result.push(answer);
          c++;
          rl.question(questions[c], (answer) => {
            result.push(answer);
            c++;
            rl.question(questions[c], (answer) => {
              result.push(answer);
              c++;
              rl.question(questions[c], (answer) => {
                result.push(answer);
                c++;
                for (const item of result) {
                  console.log("answer: ", item);
                }
                rl.close();
              });
            });
          });


        });

      });

    });
  });
  
});