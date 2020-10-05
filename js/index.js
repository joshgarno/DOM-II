// Your code goes here
const text1 = document.querySelector("h1");

text1.addEventListener("mouseenter", (e) => {
	text1.style.color = 'orange';
});

text1.addEventListener("mouseleave", (e) => {
	text1.style.color = 'black';
});

text1.addEventListener("click", (e) => {
	text1.style.backgroundColor = '#ffffcc';
});

text1.addEventListener("dblclick", (e) => {
	e.stopPropagation();
	text1.style.backgroundColor = 'blue';
});

document.querySelectorAll('a').forEach(link1 => {
	link1.addEventListener("mouseenter", (e) => {
        link1.style.color = 'orange';
	});
});

document.querySelectorAll('a').forEach(link1 => {
	link1.addEventListener("click", (e) => {
		e.preventDefault();
		link1.style.color = 'blue';
	});
});

document.querySelectorAll('a').forEach(link1 => {
	link1.addEventListener("mouseleave", (e) => {
        link1.style.color = 'black';
	});
});

document.querySelectorAll('h2').forEach(text2 => {
	text2.addEventListener("mouseenter", (e) => {
	text2.style.color = 'orange';
	});
});

document.querySelectorAll('h2').forEach(text2 => {
	text2.addEventListener("mouseleave", (e) => {
	text2.style.color = 'black';
	});
});

document.querySelectorAll('h2').forEach(text2 => {
	text2.addEventListener("click", (e) => {
	text2.style.backgroundColor = '#c6ffb3';
	});
});

document.querySelectorAll('h4').forEach(text4 => {
	text4.addEventListener("mouseenter", (e) => {
	text4.style.color = 'orange';
	});
});

document.querySelectorAll('h4').forEach(text4 => {
	text4.addEventListener("mouseleave", (e) => {
	text4.style.color = 'black';
	});
});

document.querySelectorAll('h4').forEach(text4 => {
	text4.addEventListener("click", (e) => {
	text4.style.backgroundColor = '#ff80ff';
	});
});

const body1 = document.querySelector("body");

body1.addEventListener("keydown", (e) => {
	body1.style.backgroundColor = '#ffffe6';
});

body1.addEventListener("keyup", (e) => {
	body1.style.backgroundColor = 'white';
});

body1.addEventListener("wheel", (e) => {
	body1.style.backgroundColor = "gray";
});

body1.addEventListener("dblclick", (e) => {
	body1.style.backgroundColor = "skyblue";
});

body1.addEventListener("mouseover", (e) => {
	body1.style.backgroundColor = "pink";
});

body1.addEventListener("mouseout", (e) => {
	body1.style.backgroundColor = "green";
});

body1.addEventListener("drag", (e) => {
	body1.style.backgroundColor = "black";
});
