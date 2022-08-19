let form = document.getElementById("form");

form.onsubmit = async function (e) {
    e.preventDefault();

    let username = document.getElementById("typeInputX").value;
    let pw = document.getElementById("typePasswordX").value;

    let url = "http://localhost:3000/LogIn";
    let response = await fetch(url);
    let log = await response.json();

    log.forEach(element => {
        let user = element.user;
        let pww = element.pw;

        if (username === user && pw === pww) {
            window.location.href = "welcome.html";
        }
        else {
            alert("Invalid Username or Password")
            return;
        }
    });
};
