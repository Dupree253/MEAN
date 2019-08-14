const controller = require("./controller")

module.exports = function(app){
    app.get('/api/wizard', controller.allWizards)
s    app.post('/api/wizard', controller.createWizard)
    app.delete('/api/wizard/:id', controller.deleteWizard)
    app.get('/api/wizard/:id', controller.oneWizard)
    app.put('/api/wizard/:id', controller.updateWizard)
}