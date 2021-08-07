//Cuadrado
console.group("Cuadrado")

const perimetroCuadrado = (lado = 5)=> lado * 4

    
const imprimirPerimetro = (callback)=>{
    console.log(`El perimetro del cuadrado mide: ${callback()}cm`)
}

imprimirPerimetro(perimetroCuadrado)

const areaCuadrado = (lado = 5)=> lado * lado

console.log(`El area del cuadrado mide: ${areaCuadrado()}cm^2`)
console.groupEnd()


//Triangulo


console.group("Triangulo")
const lado1 = 6
const lado2 = 6
const base = 4
const alturaTriangulo = 5.5

console.log(`Los lados del triangulo miden: ${lado1}cm, ` +
`${lado2}cm y ${base}cm`
)

console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`)

const perimetroTriangulo = (lado1=6, lado2=6, base=4)=> lado1 + lado2 + base

console.log(`El perimetro del triangulo es: ${perimetroTriangulo()}cm`)

const areaTriangulo = (base=4, alturaTriangulo=5.5)=> (base*alturaTriangulo)/2

console.log(`El area del triangulo mide: ${areaTriangulo()}cm^2`)

console.groupEnd()

//circulo

console.group("Circulo")

const pi = Math.PI
const radio = 4
const diametro = (radio=4) => radio*2
const circunsferencia =  (diametro)=>{
    return diametro() * pi
}
const areaCirculo = (radio)=>{
    return (radio * radio) *pi
}

console.log(`El radio del circulo mide: ${radio}cm`)

console.log(`El diametro del circulo mide: ${diametro()}cm`)

console.log(`PI vale: ${pi.toPrecision(5)}`)

console.log(`El perimetro del circulo mide: ${circunsferencia(diametro).toPrecision(4)}cm`)

console.log(`El area del circulo mide: ${(areaCirculo(diametro()/2).toFixed(3))}cm^2`)

console.groupEnd()



