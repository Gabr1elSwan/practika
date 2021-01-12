// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Вы согласны?',
//   function () {
//     alert('Вы согласились.');
//   },
//   function () {
//     alert('Вы отменили выполнение.');
//   },
// );

// const ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//     'Вы согласились?'
//     () => { alert('Вы согласились.') },
//     () => { alert('Вы отменили выполнение.') };
// );

// !@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let obj = {
//   a: 'A',
//   b: 'B',
//   c: 'B',
//   d: 'C',
//   e: 'A',
// };
// let res = Object.values(obj);
// console.log(res);
// const candidates = {};
// for (let i = 0; i < res.length; i++) {
//   if (i === res.indexOf(res[i])) {
//     // candidates.push(res[i]);
//     candidates[res[i]] = 0;
//   }
// }

// for (let i = 0; i < res.length; i++) {
//   for (let key in candidates) {
//     res[i] == key ? (candidates[key] += 1) : '';
//   }
// }
// for (let key in candidates) {
//   candidates[key] === Math.max(...Object.values(candidates))
//     ? console.log(`The winer is ${key}!`)
//     : '';
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const electionsResult = {};
const votedResult = {};
const candidate = {
  trump: 'Trump',
  baiden: 'Baiden',
};
const Voter = function (name) {
  this.name = name;
  this.vote = function (choice) {
    if (electionsResult[this.name]) {
      return;
    } else {
      electionsResult[this.name] = choice;
    }
  };
};
const A = new Voter('Vova');
const B = new Voter('Petya');
const C = new Voter('Vasia');
const D = new Voter('Roma');
const F = new Voter('Anna');
const G = new Voter('Iror');
A.vote(candidate.baiden);
B.vote(candidate.trump);
C.vote(candidate.baiden);
D.vote(candidate.trump);
F.vote(candidate.baiden);
G.vote(candidate.baiden);
console.table(electionsResult);
//формирует список уникальных кандидатов votedResult
const countResults = function (electionsResult, votedResult) {
  for (let key in electionsResult) {
    votedResult[electionsResult[key]] = 0;
  }
  for (let vote in electionsResult) {
    votedResult[electionsResult[vote]] += 1;
  }
  console.log(votedResult);
};
countResults(electionsResult, votedResult);
