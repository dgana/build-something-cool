var playersModel = require('../models/playersModel.js')

module.exports = {
  list: function (req, res) {
    playersModel.find({}, ['name', 'score'], { limit: 3, sort: { score: -1 }}, function (err, players) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting players.',
          error: err
        })
      }
      return res.json(players)
    })
  },

  create: function (req, res) {
    var players = new playersModel({      name: req.body.name,      score: req.body.score
    })

    players.save(function (err, players) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating players',
          error: err
        })
      }
      return res.status(201).json(players)
    })
  },

  update: function (req, res) {
    var id = req.params.id
    playersModel.findOneAndUpdate({_id: id}, { score: req.body.score }, { new: true }, function (err, user) {
      if (err) return res.send(500, { error: err })
      return res.json(user)
    })
  },

  remove: function (req, res) {
    var id = req.params.id
    playersModel.findByIdAndRemove(id, function (err, datas) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the datas.',
          error: err
        })
      }
      return res.status(201).json(datas)
    })
  }

}
