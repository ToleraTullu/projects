const list = document.querySelectorAll(".ls")

list.forEach(item =>
    item.onmousemove = Event => {
    const decimal = Event.clientX / item.offsetWidth;
    const adjut = 70 + (30*decimal);
    item.style.setProperty('--blue-p',adjut + "%");
}
);
