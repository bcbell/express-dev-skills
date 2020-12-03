module.exports={
    getAll,
    getOne,
    create,
    deleteOne
}

const skills =[
    {id:1253, devSkill: 'HTML', done: true},
    {id:2351, devSkill:'Javascript', done: false},
    {id:5643, devSkill:'CSS', done: true},
    {id:4523, devSkill: 'NodeJS', done: false},
    {id:5632, devSkill:'Django', done: false}, 
    {id:6423, devSkill:'MongoDB', done: false},
    {id:5963,devSkill:'Git', done: true},
    {id:3256, devSkill:'SASS', done: true} 
]

function getOne(devSkill){
    return skills.find(skill => skill.devSkill === devSkill)
}

function getAll(){
    return skills
}

function create(devSkill){
    skills.devSkill= skills.devSkill
    skills.done =false
    skills.push(devSkill)

}

function deleteOne(devSkill){
   const idx = skills.findIndex(skill=>skill.devSkill ===devSkill)
    skills.splice(idx, 1)

}

