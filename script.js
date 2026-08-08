const link1 = document.getElementById("accueil")
const link2 = document.getElementById("about")
const link3 = document.getElementById("contact")
const link4 = document.getElementById("pdn")
const link5 = document.getElementById("pdp")
let btn= document.getElementById("what-btn")

if(link1){
link1.addEventListener("click", function() {
    
    window.location.href = "index.html"
})
}
if(link2){
link2.addEventListener("click", function() {
    
    window.location.href = "about.html"
})
}
if(link3){
link3.addEventListener("click", function() {
   
    window.location.href = "contact.html"
})
}
if(link4){
link4.addEventListener("click", function(e){
    e.preventDefault()
    const peauNoire = document.querySelector(".produitpeaunoir")
    const peauBlanche = document.querySelector(".produitpeaublanche")
    peauNoire.style.display = "block"
    peauBlanche.style.display = "none"
})
}
if(link5){
link5.addEventListener("click", function(e){
    e.preventDefault()
    const peauNoire = document.querySelector(".produitpeaunoir")
    const peauBlanche = document.querySelector(".produitpeaublanche")
    peauNoire.style.display = "none"
    peauBlanche.style.display = "block"
})
}
const number="22997417444"
if(btn){
    function Commander(nom, prix){
        const message=`Bonjour , je souhaite commander *${nom}* , Prix:${prix} FCFA   Merci de confirmer la disponibilité`
        const lien =`https://wa.me/${number} ?text=${encodeURIComponent(message)}`
        window.open(lien, "_blank")
            
    }
    
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    let texte = `Bonjour, je m'appelle ${nom}.%0a`;
    if (telephone) {
        texte += `Téléphone : ${telephone}%0a`;
    }
    texte += `Message : ${message}`;

    const numeroWhatsApp = '2290197417444';
    const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${texte}`;

    window.open(lienWhatsApp, '_blank');
});





    
