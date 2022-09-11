// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//let prenom = "Marc & Simon";
// let age = 21.5;
// let majorite = true;
// let win =false;
// win= true;

//const prenom = "Marc";
// let prenom = "Marc";
// prenom = "John";

// console.log(prenom);

// var prenom ="Marc";

//  const prenom = "Nicolas";
//  const nom = "Dupont";
//  const name ="Damour";
//  const firstName = "Jean-François";

//  console.log ("Bonjour " +name+ ' ' +firstName+ " !.");

// let nombreUn = 8,nombreDeux= 4,result;
// result = (nombreUn + nombreDeux) * 9;
// result++;
// result--;
// console.log(result);

// let number1 = 10,
//   number2 = 20,
//   resultat;
// resultat = (number1 + number2) * 10;
// resultat++;
// resultat--;
// console.log(resultat);

//-------------------DEMANDER DES RENSEIGNEMENTS--------------------------------------------------------

//alert('Helo')

// if(confirm('Vous voulez voter?')){
//   alert('OK');
// }else{
//   alert('no');
// };

// const age = prompt('Entrez votre age');

// alert('Bonjour vous avez ' + age + ' ans.');

// function direBonjour(){
//   alert('bonjour')
// };
// direBonjour();
// let resultatAddition;
// let resultatMultiplication;
// let division;
// function addition(a,b){
//  let resultatAddition=a+b;
//   return resultatAddition;
// }
// function multiplication(a,b){
//  let resultatMultiplication=a*b;
//   return resultatMultiplication ;
// }

// console.log(addition(2,3));
// console.log(multiplication(5,3));
// console.log(addition(2,3)/multiplication(5,3));

// function direAuRevoir(prenom){
//   alert("Bonjour "+prenom);
// }
// direAuRevoir("jean")
//les paraméttre par défault avec javascript
// function cuisiner(
//   nombreDeGateaux,
//   minutesDeCuisson = 15,
//   minutesDePreparation = 10
// ) {
//   let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
//   return resultat;
// }

// let tempsDePreparationChocolat = cuisiner(4);
// let tempsDePreparationFraisier = cuisiner(1, 20);

// console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);

// function prevoirAge(){
//   let age = prompt("Quel est le premier nombre ?")
//   age = parseFloat(age);
//   alert("Bientot vous aurez" + (age +1) + "ans.");
// }
// prevoirAge();

// function imc() {
//   let taille = prompt('quel taille faites vous en cm ?');
//   taille = taille / 100;
//   taille = taille * taille;
//   let poids = prompt('quel poids faites vous en kg ?');
//   alert("Votre imc est de "+(poids / taille));
// }

// imc();
// let age =17;
// if(age<=18){
//   console.log('Tu peux voter')
// }

//-----------------------------------WHILE------------------------------------

// let i = 1;
// while (i < 6) {
//   console.log('Ligne : ' + i);
//   i++;
// }

// do{
//   var prenom = prompt ('Quel est votre prenom ?');
// }while(prenom == "" || prenom == null)
// alert('Bonjour '+prenom);

//--------------------------------------For

// for(let i =1 ;i < 7; i++){
//   console.log('Ligne:'+i);
// }

//---------------------------continue et break

// let i = 0;

// while (i < 5) {

//   // Break
//   if (i == 3) {
//     break;
//   }

//   // Continue
//   // if (i == 3) {
//   //   i++;
//   //   continue;
//   // }

//   console.log('Ligne : ' + i);
//   i++;

// }

//try catch--------------------------------------------------------------------

// try {
//   //erreur?
//   let recompense = prompt('Choisisez une recompense : épée,arc,haches');
//   let degats;
//   switch (recompense) {
//     case 'épée':
//       degats = 40;
//       break;
//     case 'arc':
//       degats = 30;
//       break;
//     case 'haches':
//       degats = 20;
//       break;
//     default:
//       throw new error('Vous ne pouvez pas tricher');
//   }
//   alert('Vous avez choisi::' + recompense + '(' + degats + ' degats)');
// } catch (error) {
//   //erreur
//   alert(error);
// } finally {
//   alert('Fin du programme');
// }
let tableauMultiDimension = [
  ['La joconde', 'Guernica', 'les tournesols'],
  ['léonard de vinci', 'pablo Picasso', 'vincent VanGogh'],
];
console.log(tableauMultiDimension[0][1]);
let word = 'Bonjour';
let i = 0;

/*
 * On crée une boucle pour parcourir le mot contenu dans word
 * word[i] renvoie la lettre du mot word à la position indiquée par "i", par exemple: 0 = "B"
 * s'il n'y a plus de lettres pour la valeur de "i", on sort de la boucle.
 */
while (word[i]) {
  i = i + 1;
}

// Une fois sorti de la boucle, i contiendra le nombre de lettres. On l'affiche avec console.log :
console.log(i);
