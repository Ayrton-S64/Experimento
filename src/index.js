let btns = document.querySelectorAll('.container__inputs--button');

btns.forEach(e=>{
    e.classList.add('interactible')
    e.addEventListener('mouseover',sabotear);
    e.addEventListener('click', trigger);
    (e.value==="SI")
    ?e.classList.add('green')
    :e.classList.add('red');
});

function sabotear({target}){
    let index;
    for(let i = 0; i<btns.length;i++){
        if(btns[i]===target){
            index = i;
        }
    }
    if(target.value==="NO"){
        target.value = "SI"
        target.classList.replace('red','green');
        btns[Math.abs(index-1)].value = 'NO'
        btns[Math.abs(index-1)].classList.replace('green','red')
    }
}

function trigger({target}) {
    if(target.value==="SI"){
        alert("SABIA QUE DIRIAS QUE SI :D");
        setTimeout(()=>{
        window.close();
        },2000);
        btns.forEach(e=>{
            e.classList.add('uninteractible');
            e.removeEventListener('mouseover',sabotear);
            e.removeEventListener('click',trigger);
        })
    }
    else{
        console.log("un no pasó");
    }
}