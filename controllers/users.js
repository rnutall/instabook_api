const { User } = require("../models");

module.exports = {
  async createUser(req, res) {
    try {
        const userData = await User.create(req.body)

        res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUser(req, res){
    try {
        const userData = await User.find()

        res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async postUser(req, res){
    try {
        const userData = await User.find()

        res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
},
async putUser(req, res){
    try {
        const userData = await User.find()

        res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
},
async deleteUser(req, res){
    try {
        const userData = await User.find()

        res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
},
}