window.onload = () => {
	if (sessionStorage.name) {
		document.getElementById("title").innerHTML = "hola " + sessionStorage.name;
	} else {
		window.location = "../index.html";
	}
}

document.getElementById("logout").addEventListener("click", () => {
	sessionStorage.removeItem("name");
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