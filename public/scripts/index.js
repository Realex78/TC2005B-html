const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login)

passwordElement.addEventListener("keydown", (e) => {
	if (e.key === "Enter") login();
})

async function login() {
	const user = { username: usernameElement.value, password: passwordElement.value }
	const respuesta = await fetch("http://localhost:5000/login", {
		method: "POST",
		headers: { "Content-Type": "application/json"},
		body: JSON.stringify(user)
	});
	const data = await respuesta.json();
	if (data.isLogin) {
		sessionStorage.id = data.user.user_id;
		sessionStorage.username = data.user.username;
		window.location = "./pages/home.html";
	} else {
		alert("esta mal");
	}
}