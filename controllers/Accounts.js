const Account = require('../models/userShema')

exports.getAccount = (req, res) => {
    try {
        Account.find({}, (err, users) => {
            if (err) {
                console.log('bad idea')
            }
            res.render('content.ejs', {
                users: users
            })
        })
    } catch (err) {
        console.log
    }
}


exports.postAccount = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    const login = req.body.login
    const password = req.body.password
    const shared_secret = req.body.shared_secret
    const identity_secret = req.body.identity_secret
    const steamid = req.body.steamid
    const acc = new Account({
        login: login,
        password: password,
        shared_secret: shared_secret,
        identity_secret: identity_secret,
        steamid: steamid
    })
    acc.save((err) => {
        if (err) throw err
    })
    console.log(acc)
}

exports.delAccount = (req, res) => {
    const steamid = req.body.steamid
    Account.findByIdAndDelete(steamid, (err, user) => {
        if (err) throw err
        return res.json({
            message: "Аккаунт удален"
        })
    })
}