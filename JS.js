const atividade = [
    {nome: "Jaime", Nota: 9.0},
    {nome: "Allana", Nota: 7.0},
    {nome: "Laura", Nota: 3.0},
    {nome: "Rafael", Nota: 6.0},
    {nome: "Cristiane", Nota: 5.0}
]


function filtro(value){
    return value.Nota >= 6;
}
const Aprovados = atividade.filter(filtro); 


console.log(Aprovados)