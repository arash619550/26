let a, char, inumber;
inumber = Math.floor(Math.random() * 8);
function password() {
    char = "";
    let temp;
    for (let i = 0; i < 8; i++) {
        let condition = Math.round(Math.random());
        a = Math.floor(Math.random() * 10);
        if (inumber == i) {
            char += a;
        }
        else if (a % 3 == 0) {
            a += Math.floor(Math.random() * 10);
            a %= 10;
            char += a;
        }
        else {
            if (condition)
                temp = Math.floor(Math.random() * (25 + 1) + 97);
            else
                temp = Math.floor(Math.random() * (25 + 1) + 65);
            char += String.fromCharCode(temp);
        }
    }
    document.getElementById("password").value = char;
}


