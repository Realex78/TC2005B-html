const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login)

passwordElement.addEventListener("keydown", (e) => {
	if (e.key === "Enter") login();
})

function login() {
	if (usernameElement.value === "renato" && passwordElement.value === "1234") {
		sessionStorage.name = "renato";
		window.location = "./pages/home.html";
	} else {
		alert("esta mal");
	}
}