let content=document.querySelector("h2");
let name1 = "I am Bhartendu Pant"
let index=1;

const typeWriter=()=>{
    let new_titile= name1.slice(0,index);
    content.innerText=new_titile;
    index > name1.length?index=1:index++;
    // index++;

    setTimeout(() => {
        typeWriter();
    }, 200);
}


typeWriter();