let on = true;
let off = false;
function onoff() {
    if (on) {
        document.getElementById("on").setAttribute("src", "assets/image/off.png");
        document.getElementById("on").setAttribute("width", "340px");
        on = false;
    }
    else if (off) {
        document.getElementById("off").setAttribute("src", "assets/image/on.png");
        document.getElementById("off").setAttribute("width", "200px");
        off = true;
    }
}