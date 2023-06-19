const body = document.querySelector("body");
const themeToggleButton = document.querySelector("button");
const circle = document.querySelector(".fa-circle");
const themeToggleIcon = document.querySelector(".theme-toggle__icon");
function themeToggle() {
	circle.classList.toggle("active");
	circle.classList.toggle("active");
	themeToggleIcon.classList.toggle("fa-moon");
	themeToggleIcon.classList.toggle("fa-sun");
	if (body.getAttribute("data-mode") === "dark")
		body.setAttribute("data-mode", "light");
	else body.setAttribute("data-mode", "dark");
}
themeToggleButton.addEventListener("click", themeToggle);
// circle.addEventListener('mouseotu')
