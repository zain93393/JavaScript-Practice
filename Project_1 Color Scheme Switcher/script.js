
const buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach( (items)=> {

   items.addEventListener('click', (event)=>{


        if(event.target.id == "color-1")
        {
            document.body.style.backgroundColor = "red";
        }
        else if(event.target.id == "color-2")
        {
            document.body.style.backgroundColor = "yellow";
        }
        else if(event.target.id == "color-3")
        {
            document.body.style.backgroundColor = "green";
        }
        else if(event.target.id == "color-4")
        {
            document.body.style.backgroundColor = "blue";
        }
       
   })
})