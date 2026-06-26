window.alert("Welcome!");
let username;

document.getElementById("button").onclick = function () {
    username = document.getElementById("input").value;
    document.getElementById("H1").textContent = "Hello " + username + "!";
    window.alert("Hello " + username + "! Welcome to my website!");
    window.alert("Gwapo si " + username + "!");
    window.alert("AHAHAHAHA!");
    document.getElementById("H1").insertAdjacentHTML("afterend", "<p>Hi! " + username + ", welcome to my website!</p>");
    document.getElementById("p1").insertAdjacentHTML("afterend", "<p>Please enjoy your stay!</p>");
    document.getElementById("p2").insertAdjacentHTML("afterend", "<p> <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'>View My account!</a> </p>");
    document.getElementById("p3").insertAdjacentHTML("afterend", "<p> <a href='https://www.youtube.com/watch?v=uf8F97ONQbc'>About Me!</a> </p>");
}
