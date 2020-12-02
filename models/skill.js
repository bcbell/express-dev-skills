module.exports={
    getAll,
    getOne
    
}

const skills =[
    {frontend: 'HTML', done: true},
    {frontend:'Javascript', done: false},
    {frontend:'CSS', done: true},
    {backend: 'NodeJS', done: false},
    {backend:'Django', done: false}, 
    {database:'MongoDB', done: false},
    {devtools:'Git', done: true},
    {devtools:'SASS', done: true} 
]

function getOne(id){
    return skills.find(skill=>skill.id ===parseFloat(id))
}

function getAll(){
    return skills
}