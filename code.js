alert(`
1.addition
2.Multiplications
3.Soustraction

`);

console.log('ça va toi');
console.log('je vais bien');
//les backtites
console.log(`Sous le pont Mirabeau
             coule la Seyne
`);
console.log(2 * 4 + 5);

let nbreDeQuestions = 3;
alert(
  'Bienvenue sur ce quizz  ' + nbreDeQuestions + ' questions seront posées'
);

//conditions

let reponseUtilisateur = prompt(`
question 1/3
Quel est l'age du capitaine
1.42
2.101
3.18
`);

let bonneReponse = 1;
console.log(reponseUtilisateur);

if (reponseUtilisateur == bonneReponse) {
  console.log("t'as gagné");
} else {
  console.log("bouh !!!! t'es nul");
}

let reponseUtilisateur2 = prompt(`
Question 2/3
Quelle est la difference entre un pigeon?
1.Gloou
2.Uh
3.La longueur des pattes 
`);
bonneReponse = 3;

if (reponseUtilisateur2 == bonneReponse) {
  console.log("t'es bon mon gars");
} else {
  console.log("brou t'es nul");
}

let reponseUtilisateur3 = prompt(`
Question 3/3
Qui est la meilleure?
1.moi
2.toi
3.nous
`);
bonneReponse = 1;
if (reponseUtilisateur3 == bonneReponse) {
  console.log("c'est bon");
} else {
  console.log('t un ouf mon gars');
}
