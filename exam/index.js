let firstName
let lastName
let platziUser
let age
let email
let isAdult
let moneyEarned
let debts
let nickName

firstName = 'Juanme'
lastName = 'Garcia'
moneyEarned = 50
console.log(`${firstName} ${lastName}`);

console.log(`${firstName} tiene ahorrado $${moneyEarned} pesos.`)

const printPersonalData = (firstName ="Juan", lastName = "Garcia", nickName = "Juanme")=>{
    let completeName = `${firstName} ${lastName}`
    console.log(`Mi nombre es ${completeName} pero prefiero que me digas ${nickName}`)
}

printPersonalData()

const subscriptionType = "Free"

if(subscriptionType === "Free"){
    console.log(`Solo puedes tomar los cursos gratis`);
}else if(subscriptionType === "Basic"){
    console.log(`Puedes tomar casi todos los cursos de platzi durante un mes nasheee`)
}else if(subscriptionType === "Expert"){
    console.log(`Puedes tomar casi todos los cursos de platzi durante un anio`)
}else if(subscriptionType === "ExpertPlus"){
    console.log(`tu y alguien mas pueden tomar todos los platzi cursos yupiii :DDDDDD`)
}else{
    console.log(`Wrong answer`)
}
/* 

const isCorrect = ()=>{
    console.log(`Cuanto es 2 + 2?`)
    let result = window.prompt("Cuanto es 2 + 2?")
    if(result == 4){
        console.log(`Correctooo!!!`)
        alert("Correccctoo!!!")
    }else{
        isCorrect()
    }
}

isCorrect() 
 */


let array = ["Juanme", "Bruno", "Alan"]

const printFirstArrayElement = (array) =>{
    console.log(array[0])
}

printFirstArrayElement(array)

const printArray = (array = array)=>{
    array.forEach(element => {
        console.log(element)
    });   
}

printArray(array) 

let obj = [{
    firstName:"Juanme",
    lastName: "Garcia"
},
{
    firstName: "Bruno",
    lastName: "Passarelli"
},
]


const printObject = (obj)=>{
    Object.keys(obj).forEach(key => console.log(obj[key]))
}

const printObjectTwo = (obj)=>{
    for(let completeName of obj){
        console.log(completeName)
    }
}

printObjectTwo(obj)

printObject(obj)