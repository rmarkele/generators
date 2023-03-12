document.querySelectorAll(".ger .on-button").forEach(btn =>{
    btn.addEventListener('click', e=>{
        let container = e.target.parentElement.parentElement;
        e.target.classList.add('active');
        container.setAttribute('data-status',1)
        container.querySelector(".off-button").classList.remove('active')
    })
})



document.querySelectorAll("#disj1 .on-button").forEach(btn =>{
    btn.addEventListener('click', e=>{      
        if(permition_to_close_1){
            let container = e.target.parentElement.parentElement;
            e.target.classList.add('active');
            container.setAttribute('data-status',1)
            container.querySelector(".off-button").classList.remove('active')
        }
    })
})

document.querySelectorAll("#disj2 .on-button").forEach(btn =>{
    btn.addEventListener('click', e=>{      
        if(permition_to_close_2){
            let container = e.target.parentElement.parentElement;
            e.target.classList.add('active');
            container.setAttribute('data-status',1)
            container.querySelector(".off-button").classList.remove('active')
        }
    })
})

document.querySelectorAll(".off-button").forEach(btn =>{
    btn.addEventListener('click', e=>{
        let container = e.target.parentElement.parentElement;
        e.target.classList.add('active');
        container.setAttribute('data-status',0)
        container.querySelector(".on-button").classList.remove('active')
    })
})



document.querySelector("#gen1 .off-button").addEventListener('click', e=>{
    let container = document.querySelector("#disj1");
    container.querySelector(".off-button").classList.add('active')
    container.setAttribute('data-status',0)
    container.querySelector(".on-button").classList.remove('active')
 
 })

document.querySelector("#gen2 .off-button").addEventListener('click', e=>{
    let container = document.querySelector("#disj2");
    container.querySelector(".off-button").classList.add('active')
    container.setAttribute('data-status',0)
    container.querySelector(".on-button").classList.remove('active')
 
 })


 


const getOnOffStatus = (id)=>{
    let el=document.getElementById(id);
    return el.getAttribute('data-status')

}

