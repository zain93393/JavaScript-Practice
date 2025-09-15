const calculateButton = document.getElementById('calculate-button')
const answer = document.getElementById('Answer');
let BMI;
let result;
console.log(calculateButton);
calculateButton.addEventListener('click',()=>{
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    realHeight = Number(height.value);
    realWeight = Number(weight.value);
 
    if ( isNaN(realHeight) || isNaN(realWeight)) 
    {
        BMI = "Invalid Input!!!";
        alert('Invalid Input');
    } 
    else 
    {
        realHeight = Math.pow((realHeight/100), 2);
        BMI = realWeight/realHeight;
        if(BMI < 18.6)
        {
            result = "Under Weight";
        }
        else if(BMI >= 18.6 && BMI <= 24.9)
        {
            result = "Normal Range";
        }
        else{
            result = "Overweight";
        }
       
    }
    
   

    if(BMI != null)
    {
        answer.innerText = result;
    }



})



