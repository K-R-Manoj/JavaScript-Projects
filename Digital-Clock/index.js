const clock = document.querySelector('.clockBody')

const time = () => {
    const present = new Date();


    const hours = present.getHours();
    const minutes = present.getMinutes();
    const seconds = present.getSeconds();

    const html = `<span>${hours}</span> : 
                  <span>${minutes}</span> : 
                  <span>${seconds}</span>`;

    clock.innerHTML = html;
}
setInterval(time,1000);