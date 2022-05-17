const User = require('../models/User.js')

const createUserCollection = ((req, res) => {
    console.log(req)
    console.log(res)
    User.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

module.exports = {
    createUserCollection
}