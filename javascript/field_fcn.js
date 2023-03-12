document.querySelectorAll('.avr').forEach(avr => {
    avr.querySelector('input[type=checkbox]').addEventListener('click',(e) => {
         if(e.target.checked){
            avr.querySelector('.sp-val').classList.remove('disabled');
            avr.querySelector('.sp-val input').value = Math.max(avr.querySelector('.sp-val input').value, 180);
         } else{
            avr.querySelector('.sp-val').classList.add('disabled');
         }
    });
})


document.querySelectorAll(".sp.vel").forEach(el =>{
   el.parentElement.querySelector('.on-button').addEventListener('click', e=>{
      el.querySelector('.sp-val').classList.remove('disabled');
      el.querySelector('.sp-val input').value = Math.max(el.querySelector('.sp-val input').value, el.querySelector('.sp-val input').min)
   });

   el.parentElement.querySelector('.off-button').addEventListener('click', e=>{
      el.querySelector('.sp-val').classList.add('disabled');
   })

})