
document.getElementById("btn-bonjour").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value; 
    if (name) {
        document.getElementById("message").textContent = "Bonjour, " + name + " !"; 
    } else {
        document.getElementById("message").textContent = "Veuillez entrer votre nom !"; 
    }
});


document.getElementById("fileInput").addEventListener("change", function() {
    let file = this.files[0]; 
    if (file) {
        document.getElementById("fileName").textContent = file.name; 
    } else {
        document.getElementById("fileName").textContent = "Aucun fichier sélectionné."; 
    }
});
