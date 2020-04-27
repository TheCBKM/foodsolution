const app = module.exports = require('express')();

const dataServices = require('../services/dataServices');

app.post('/set', (req, res) => {
    (async () => {
        try {
            console.log(req.body)
            eventPromise = await dataServices.saveData(req.body)
            res.json({ success: true, event: eventPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})

app.get('/getall', (req, res) => {
    (async () => {
        try {
            eventPromise = await dataServices.getData(req.body)
            res.json({ success: true, event: eventPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})

app.post('/gettoday', (req, res) => {
    (async () => {
        try {
            eventPromise = await dataServices.gettoday(req.body)
            res.json({ success: true, event: eventPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})

