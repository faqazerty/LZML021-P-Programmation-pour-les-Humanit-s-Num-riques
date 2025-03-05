

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


