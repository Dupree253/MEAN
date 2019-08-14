const Wizards = require("./models")

module.exports = {
    //EXAMPLE OF GET ALL WIZARDS USING PROMISES:
    // allWizards: function(req,res){
    //     Wizards.find()
    //         .then(data=>res.json(data))
    //         .catch(err=>res.json(err))
    // },
    //GET ALL WIZARDS
    allWizards: function(req,res){
        console.log("Hitting route:")
        Wizards.find({}, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    //CREATE NEW WIZARD
    createWizard: function(req,res){
        Wizards.create(req.body, function(err,data){
            if(err){
                res.json(err);
            }else{
                res.json(data)
            }
        })
    },
    //DELETE WIZARD
    deleteWizard: function(req,res){
        Wizards.findByIdAndDelete(req.params.id, function(err,data){
            if(err){
                res.json(err);
            }else{
                res.json(data)
            }
        })
    },
    //GET ONE WIZARD
    oneWizard: function(req,res){
        Wizards.findById(req.params.id, function(err,data){
            if(err){
                res.json(err);
            }else{
                res.json(data)
            }
        })
    },
    //UPDATE EXISTING WIZARD
    updateWizard: function(req,res){
        Wizards.findByIdAndUpdate(req.params.id, req.body,{runValidators: true}, function(err,data){
            if(err){
                res.json(err);
            }else{
                res.json(data)
            }
        })
    },
}