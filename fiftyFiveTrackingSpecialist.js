// Initialisation d'un array pour nos résultats
let printedElems = [];

// capturer les éléments au scroll
window.addEventListener('scroll',(event) => {
    printElems()
});
function isVisible(elm) {
    // avoir un élément en fonction de sa position sur l'écran
    var height = elm.getBoundingClientRect()['top']
    return (height > 0 && height < window.innerHeight);
}
function printElems() {
    var objects = document.getElementsByClassName("l-productgrid__item");
    for (let i = 0; i < objects.length; i++) {
        try {
            // capturer le data-pid pour ne pas afficher plusieurs fois les produits avec même 'data-pid'
            const product_pid = objects[i].getElementsByClassName("c-product__focus")[0].getAttribute("data-pid");

            //création d'un objet qui contiendra le Nom + Prix en fonction de sa position sur la page et son 'data-pid'
            if ( (isVisible(objects[i]) === true) && (!printedElems.includes(product_pid)) ) {
                articlesObj = {};

                //articlesObj.pid = product_pid; 

                articlesObj.nom = objects[i].getElementsByClassName("c-product__name")[0].innerText;
                articlesObj.prix = objects[i].getElementsByClassName("c-product__price")[0].innerText;
                console.log(articlesObj);
                // push dans printedElems les objets si le data-pid de l'article n'est pas déjà dans printedElems
                printedElems.push(product_pid) 

            }
        } catch (error) {
            // ignore errors
        }
    }
}
printElems() // afficher les 1ers éléments au chargement de la page sans scroll
