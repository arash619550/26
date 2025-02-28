function change() {
    let temp = pic1.getAttribute("src");
    pic1.setAttribute("src", pic2.getAttribute("src"));
    pic2.setAttribute("src", temp);
}