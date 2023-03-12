document.querySelectorAll('.triangle-up.t-button').forEach(btn => {
    let inp = btn.parentElement.querySelector('input');
    let interval, timeout1, timeout2, disabled;
    btn.addEventListener('click',e => {
        inp.value = parseFloat(inp.value) + parseFloat(inp.step);
        inp.value = myConstrain(inp.value, inp.min, inp.max);
    })

    btn.addEventListener('mousedown' ,e => {
        timeout1 = setTimeout(()=>{
            interval = setInterval(() => {     
            inp.value = parseFloat(inp.value) + parseFloat(inp.step);
            inp.value = myConstrain(inp.value, inp.min, inp.max);          
            }, 100)   
        },500);

        timeout2 = setTimeout(()=>{
            clearTimeout(timeout1);
            clearInterval(interval);
            interval = setInterval(() => {
            inp.value = parseFloat(inp.value) + 10 * parseFloat(inp.step);
            inp.value = myConstrain(inp.value, inp.min, inp.max);  
            }, 100)   
        },2600);
    })

    

    btn.addEventListener('mouseup',e => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearInterval(interval)
    })

    btn.addEventListener('mouseleave',e => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearInterval(interval)
    })


})


document.querySelectorAll('.triangle-down.t-button').forEach(btn => {
    let inp = btn.parentElement.querySelector('input');
    let interval, timeout1, timeout2;
    btn.addEventListener('click',e => { 
        inp.value = parseFloat(inp.value) - parseFloat(inp.step);
        inp.value = myConstrain(inp.value, inp.min, inp.max); 
    })

    btn.addEventListener('mousedown' ,e => {
        timeout1 = setTimeout(()=>{
            interval = setInterval(() => {
            inp.value = parseFloat(inp.value) - parseFloat(inp.step);
            inp.value = myConstrain(inp.value, inp.min, inp.max);    
            }, 100)   
        },500)


        timeout2 = setTimeout(()=>{
            clearTimeout(timeout1);
            clearInterval(interval)
            interval = setInterval(() => {
                inp.value = parseFloat(inp.value) - 10 * parseFloat(inp.step);
                inp.value = myConstrain(inp.value, inp.min, inp.max);    
            }, 100)   
        },2600)
    })

    

    btn.addEventListener('mouseup',e => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearInterval(interval)
    })

    btn.addEventListener('mouseleave',e => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearInterval(interval)
    })


})


function getVoltageSP(id){
    let el = document.getElementById('volt'+id);
    let disabled = el.querySelector('.sp-val').classList.contains('disabled');
    let gerOff = document.getElementById('gen'+id).querySelector('.off-button').classList.contains('active');
    switch([disabled, gerOff].toString()){
        // case 'true,true': 
        // case 'false,true':
        //     return 0;
        //     break;
        case 'true,false':
            return 180;
            break;
        default:
            return parseFloat(el.querySelector('.sp-val input').value);
        
    }
}


function getSpeedSP(id){
    let el = document.getElementById('vel'+id);
    // let disabled = el.querySelector('.sp-val').classList.contains('disabled');
    let gerOff = document.getElementById('gen'+id).querySelector('.off-button').classList.contains('active');

    if(gerOff){
        return 0;
    }
    
    return Math.max(el.querySelector('.sp-val input').value, el.querySelector('.sp-val input').min);
}