let age = parseInt(prompt('Digite sua idade'))

if (age <= 11){
    console.log(`Você tem ${age} e é uma CRIANÇA`)
}
else if (age > 11 && age < 18){
    console.log(`Você tem ${age} e é um(a ADOLESCENTE`)
}
else if (age >= 18 && age < 60){
    console.log(`Você tem ${age} e é um(a) ADULTO(A)`)
}
else if (age >= 60){
    console.log(`Você tem ${age} e é um(a) IDOSO(A)`)
}
