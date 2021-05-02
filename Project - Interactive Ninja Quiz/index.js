const opts = document.querySelectorAll('.A1 ,.B1,.C1,.D1,.A2 ,.B2,.C2,.D2');
const submit = document.querySelector('.butt');
const scooress = document.querySelector('.scores');
const RealAnswers = ['A1','A2'];
const RAlen = RealAnswers.length;
var answers , score , S;

opts.forEach((opt) =>
    {
        answers =[];
        opt.addEventListener('click',()=>{
            opt.setAttribute('style','Background-Color: rgb(131,123,123)');
            if(answers.includes( opt.className))
            {
                opt.setAttribute('style','Background-Color: none');
                const ind = answers.indexOf(opt.className)
                delete answers[ind];
            }
            else
            {
                answers.push(opt.className) ;
            }
            // console.log(answers);
        }) 
    })
const spann = document.querySelector('.per');
submit.addEventListener('click',(e)=>{
    // e.preventDefault();
    score =0;
    RealAnswers.forEach((ans)=>{
        if(answers.includes(ans))
        {
            score+=1;
        } 
        S = (score/RAlen)*100;
        scrollTo(0,0);

        let output=0;
        let timer =setInterval(()=>{
            scooress.setAttribute('style','display:block',', fontSize:35px');
            spann.textContent = `${output}%`;
           if(output===S)
           {
               clearInterval(timer);
           } 
           else
           {
               output++;
           }
        },10)
        // scooress.setAttribute('style','display:block');
        // spann.textContent = `${S}%`;
        
    })
})