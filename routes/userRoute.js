const app = module.exports = require('express')();

const userServices = require('../services/userServices');
const dataServices = require('../services/dataServices');

app.post('/register', (req, res) => {
    (async () => {
        try {
            user = await userServices.getUser({ phone: req.body.phone })

            if (user[0]) {
                console.log(user)
                res.json({
                    success: false,
                    message: "user already Exists"
                })
            }
            else {
                us = req.body
                console.log(us)
                users = await userServices.saveUser(us)
                await dataServices.saveData({humandata:{steps:0,distance:0,calories:0},user:users._id})
                res.json({
                    success: true,
                    user: users
                })
            }
        }
        catch (e) {
            console.log(e)
            res.json({
                success: false
            })
        }
    })();
})


app.post('/login', (req, res) => {
    (async () => {
        try {
            user = await userServices.getUser({ phone: req.body.phone })

            if (user[0]) {
               if(user[0].pass===req.body.pass )
                res.json({
                    success: true,
                    message: "Login",
                    data:user
                })
                else 
                res.json({
                    success: false,
                    message: "wrong password"
                })
            }
            else {
               
                res.json({
                    success: false,
                    message: "No such user"
                })
            }
        }
        catch (e) {
            console.log(e)
            res.json({
                success: false
            })
        }
    })();
})