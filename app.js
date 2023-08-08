
const para = document.querySelector(".content")
const form = document.getElementById("form")
const p = document.getElementById("h1");
const Output = document.getElementById("Output");
const inputvalue = document.getElementById("inputvalue")
const Api_key = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


let btn = document.querySelector("#Search").addEventListener("click",()=>{
    let inputs = document.querySelector("input")
    async function GetingData(){
        const responce = await fetch(`${Api_key}${inputs.value}`);
        if(responce.status != 200){
       alert( `${responce.status} Not Found`)
        }
        const data = await responce.json();
            //first loop loop the data
        data.forEach(e => {
            // second loop looping the meaning
          e.meanings.forEach(meaning =>{
            // 3rd is looping the definition
            meaning.definitions.forEach((definition,index) =>{
            // To limit the definition
            if(index == 0){
                Output.style.display = 'flex'
                p.innerText = ` ${definition.definition} ` 
                inputvalue.innerText = inputs.value
            }
            })
          })
    
        });
         

    }
    
    Output.classList.add("Animate_Active")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    })
    GetingData()
})




