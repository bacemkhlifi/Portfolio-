var sho = document.getElementById('back');
var shoc = document.getElementById('contact');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modalImg');
function getModalReady(src) {
    


    modal.style.display = 'block';
    modal.style.background = 'rgba(20, 20,20,.4 )';
    modalImg.src = src;
    sho.style.display = 'none';
    shoc.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalImg.src = "";
        sho.style.display = null;
        shoc.style.display = null;
       
    }

}