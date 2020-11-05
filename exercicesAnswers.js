//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {

 var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (array) {
  var day = array[2];
  /*console.log(array);*/

  return day;
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (array) {
  var day = array[3];
  return day;
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (array) {
  array[1] = 'php';
  /*console.log(array)*/
  /*var language = array.splice(2,0['mysql',['php']]);*/
  return array;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (array) {
   array.push('ruby','python');
  /*console.log(array);*/
  return array;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (array) {
  array.unshift('html','css');
  /*console.log(array);*/
  return array;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (array) {
  array.shift(0)
  /*console.log(array);*/
  return array;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (array) {
  array.pop(6);
  /*console.log(array);*/
  return array;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
const person = [];
 person['name'] = 'Jean';
 person['age'] = 45;
 person['city'] = 'Paris';
 /*console.log(person);*/
 return person;
} 

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (array) {
  var nom = array['name'];
  /*console.log(array);*/
  return nom;
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (array) {
  
  res = "Bonjour, je suis " + array['name']+ ". J'ai " + array['age']+ " ans et j'habite " + array['city'] + ".";


  /*console.log(array);*/
  return res;
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  let res = string.split(',');
 /*console.log(res);*/
  return res;
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  /*console.log(array);*/
  let res = array.sort();
  return res;
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  console.log(array)
  let res = array.toString();
  return res;
}
