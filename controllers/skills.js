const skill=require('../models/skill')
const Skill = require('../models/skill')

module.exports ={
    index, 
    new: newSkill,  
    show,
    create,
    delete:deleteSkill
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

function deleteSkill(req, res){
    Skill.deleteOne(req.params.devSkill)
    res.redirect('/skills/new')
}