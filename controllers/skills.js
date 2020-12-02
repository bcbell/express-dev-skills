const skill = require('../models/skill')
const Skill = require('../models/skill')

module.exports ={
    index, 
    new: newSkill, 
    create,
    show

}

function index(req, res){
    res.render('skills/index',{skills: Skill.getAll()})
}

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res){
    Skill.create(req.body)
    res.redirect('/skills')
}

function show(req, res){
    res.render('skills/show',{skill: Skill.getOne(req.params.devSkill)})
}