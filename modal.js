let button=document.querySelector('button')
let main =document.querySelector('.main-container')
let closes=document.querySelector('i')

button.addEventListener('click',()=>{
    main.style.display='block'
})
closes.addEventListener('click',()=>{
    main.style.display='none'
})
document.addEventListener('click',(e)=>{
    if(e.target==main){
        main.style.display='none'

    }

})