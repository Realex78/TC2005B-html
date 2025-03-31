window.onload = () => {
	if (sessionStorage.username) {
		document.getElementById("title").innerHTML = "hola " + sessionStorage.username;
	} else {
		window.location = "../index.html";
	}
}

document.getElementById("logout").addEventListener("click", () => {
	sessionStorage.removeItem("username");
	sessionStorage.removeItem("id");
	window.location = "../index.html";
})

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
	chat.value += "\n" + msg.value;
	msg.value = "";
};

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
	if (e.key === "Enter") sendMsg();
})

document.getElementById("game-nav").addEventListener("click", (ev) => {
	ev.preventDefault();
	window.location = window.location.origin + "/pages/game.html?id=" + sessionStorage.id;
})