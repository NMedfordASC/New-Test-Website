const button = document.getElementById("submit");
function submitForm(e){
    e.preventdefault();
    console.log("You submit nice job")
}
button.addEventListener("click", submitForm)
 