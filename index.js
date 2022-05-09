const txt = "Aspiring software developer"
var i = 0;
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text_out").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter();
const projects = document.getElementById("projects")

projects.addEventListener(onclick, function scroll(){
    window.scroll(0, 100)
})