// Inserez la balise script au bon endroit dans votre in
// Créez un script permettant d'ouvrir une box alert au click sur un bouton, n'oubliez pas de créer la balise bouton dans votre index.html
function helloListener() {
  document.getElementById('btn').addEventListener('click', function hello() {
    window.alert('salut');
  });
}
helloListener();
// A l'aide de la propriété textContent modifiez le contenu text de votre index.html: d'abord créez un paragraphe avec l'ID de votre choix, puis dans votre fichier script.js modifiez le contenu texte de cette balise

// Affichez dans une box alert le résultat de la méthode math random, dont l'entier à ne pas dépassé est 16

// A l'aide de la méthode fetch(), contactez cette API via cette url: https://type.fit/api/quotes, aidez vous de l'exemple donné dans la théorie. D'abord traitez la réponse en utilisant la méthode .json(), ensuite affichez le contenu de la réponse dans un console.log
