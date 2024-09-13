const slider = document.querySelector('.red');

const handOnMouse = e => {
    const per = e.clientX / window.innerWidth *100;
    slider.style.width = per + "%";
}

document.onmousemove = e => handOnMouse(e);