

document.getElementById("btn-bonjour").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value; 
    if (name) {
        alert("Bonjour, " + name + " !"); 
    } else {
        alert("Veuillez entrer votre nom !"); 
    }
});


document.getElementById("btn-aide").addEventListener("click", function() {
    alert("Bienvenue dans l'aide !\n\n1. Entrez votre nom et cliquez sur 'Bonjour' pour voir un message.\n2. Sélectionnez un fichier .txt pour voir son nom.\n3. Cliquez sur 'Afficher l'aide' pour voir ce message.");
});


document.getElementById("fileInput").addEventListener("change", function() {
    let file = this.files[0]; 
    if (file) {
        document.getElementById("fileName").textContent = file.name; 
    } else {
        document.getElementById("fileName").textContent = "Aucun fichier sélectionné."; 
    }
});

/**
 * Divise un texte en mots en utilisant les espaces comme séparateurs,
 * puis crée un tableau HTML affichant ces mots dans un tableau.
 *
 * @param {string} texte - Le texte à diviser.
 * @param {HTMLElement} resultatDiv - L'élément HTML (div) où afficher le résultat.
 */
function exercice4(texte, resultatDiv) {
    // Divise le texte en un tableau de mots en utilisant les espaces comme délimiteurs.
    let tokens = texte.split(" ");

    // Crée un élément HTML de type tableau (<table>).
    let table = document.createElement("table");

    // Parcourt chaque mot du tableau de mots.
    tokens.forEach(mot => {
        // Crée un élément HTML de type ligne de tableau (<tr>).
        let row = document.createElement("tr");

        // Crée un élément HTML de type cellule de tableau (<td>).
        let cell = document.createElement("td");

        // Définit le contenu textuel de la cellule avec le mot actuel.
        cell.textContent = mot;

        // Ajoute la cellule à la ligne.
        row.appendChild(cell);

        // Ajoute la ligne au tableau.
        table.appendChild(row);
    });

    // Vide le contenu HTML de l'élément div où le résultat doit être affiché.
    resultatDiv.innerHTML = "";

    // Ajoute le tableau HTML créé à l'élément div.
    resultatDiv.appendChild(table);
}

// Fonction pour lancer l'exercice 4
function lancerExercice4() {
    // Récupère le texte saisi dans la zone de texte (textarea) avec l'ID "texteExercice4".
    let texte = document.getElementById("texteExercice4").value;

    // Récupère l'élément div où le résultat doit être affiché.
    let resultatDiv = document.getElementById("exercice4Resultat");

    // Appelle la fonction exercice4 en lui passant le texte et l'élément div.
    exercice4(texte, resultatDiv);
}
