// Your code goes here
const text1 = document.querySelector("h1");

text1.addEventListener("mouseenter", (e) => {
	text1.style.color = 'orange';
});

text1.addEventListener("mouseleave", (e) => {
	text1.style.color = 'black';
});

text1.addEventListener("click", (e) => {
	text1.style.backgroundColor = '#ccd9ff';
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

document.querySelectorAll('a').forEach(link1 => {
	link1.addEventListener("mouseenter", (e) => {
        link1.style.color = 'orange';
	});
});

document.querySelectorAll('a').forEach(link1 => {
	link1.addEventListener("mouseleave", (e) => {
        link1.style.color = 'black';
	});
});