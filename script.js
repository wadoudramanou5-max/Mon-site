const link1 = document.querySelector(#link1)
const link2 = document.querySelector(#link2)
const link3 = document.querySelector(#link3)
const link4 = document.querySelector(#link4)
const link5 = document.querySelector(#link5)



link1.addEventListener("click", function() {
    
    window.location.href = "index.html"
})
link2.addEventListener("click", function() {
    
    window.location.href = "about.html"
})
link3.addEventListener("click", function() {
   
    window.location.href = "contact.html"
})
link4.addEventListener("click", function(e){
    e.preventDefault()
    const peauNoire = document.querySelector(".produitpeaunoir")
    const peauBlanche = document.querySelector(".produitpeaublanche")
    peauNoire.style.display = "block"
    peauBlanche.style.display = "none"
})
link5.addEventListener("click", function(e){
    e.preventDefault()
    const peauNoire = document.querySelector(".produitpeaunoir")
    const peauBlanche = document.querySelector(".produitpeaublanche")
    peauNoire.style.display = "none"
    peauBlanche.style.display = "block"
})
const number="22937417444"
function Commander(nom,prix){
    const message='Bonjour , je souhaite commander' + nom + 'Prix: ' + prix +'FCFA , merci de me confirmer la disponibilité'
    const lien = "https//wa.me/number text=${encodeURIComponent(message)}"

    windox.open(lien, '_blank');
        
    
}

    
