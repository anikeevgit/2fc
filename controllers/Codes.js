const Account = require('../models/userShema')
const SteamTotp = require('steam-totp')

const getCode = async(req, res) => {
    try {
        const id = req.body.id;
        const findUser = await Account.findOne({_id: id})
        console.log(findUser)
        if (!findUser) {
            res.json({
                message: 'Пользователь не найден'
            })
            return;
        } else {
            const code = SteamTotp.generateAuthCode(findUser.shared_secret)
            res.json({
                success: true,
                message: code
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getCode
}