// const clock = document.querySelector('.clockBody')

// const time = () => {
//     const present = new Date();


//     const hours = present.getHours();
//     const minutes = present.getMinutes();
//     const seconds = present.getSeconds();
//     if(hours > 12 )
//     {
//         const html = `<span>${hours-12}</span> : 
//                   <span>${minutes}</span> : 
//                   <span>${seconds}</span>
//                   <span> PM </span>`;
//         clock.innerHTML = html;

//     }else{
//         const html = `<span>${hours}</span> : 
//         <span>${minutes}</span> : 
//         <span>${seconds}</span>
//         <span> AM </span>`;
//         clock.innerHTML = html;

//     }

//     // const html = `<span>${hours}</span> : 
//     //               <span>${minutes}</span> : 
//     //               <span>${seconds}</span>`;

//     // clock.innerHTML = html;
// }
// setInterval(time,1000);



function clock()
{
    const fulldate = new Date();
    const hours = fulldate.getHours();
     const minutes = fulldate.getMinutes();
     const seconds = fulldate.getSeconds();
     console.log(hours);

     if(hours >= 12)
     {
        document.getElementById('hours').innerHTML = (hours-12) + ":";
        document.getElementById('minutes').innerHTML = minutes + ":";
        document.getElementById('seconds').innerHTML = seconds +" PM";
     }
     else
     {
        document.getElementById('hours').innerHTML = hours + ":";
        document.getElementById('minutes').innerHTML = minutes + ":";
        document.getElementById('seconds').innerHTML = seconds +" AM";
     }
    
}
setInterval(clock,1000)