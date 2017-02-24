var playersModel = require('../models/playersModel.js');

/**
 * playersController.js
 *
 * @description :: Server-side logic for managing playerss.
 */
module.exports = {

    /**
     * playersController.list()
     */
    list: function (req, res) {
        playersModel.find(function (err, playerss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting players.',
                    error: err
                });
            }
            return res.json(playerss);
        });
    },

    /**
     * playersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        playersModel.findOne({_id: id}, function (err, players) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting players.',
                    error: err
                });
            }
            if (!players) {
                return res.status(404).json({
                    message: 'No such players'
                });
            }
            return res.json(players);
        });
    },

    /**
     * playersController.create()
     */
    create: function (req, res) {
        var players = new playersModel({			name : req.body.name,			score : req.body.score
        });

        players.save(function (err, players) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating players',
                    error: err
                });
            }
            return res.status(201).json(players);
        });
    },

    /**
     * playersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        playersModel.findOne({_id: id}, function (err, players) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting players',
                    error: err
                });
            }
            if (!players) {
                return res.status(404).json({
                    message: 'No such players'
                });
            }

            players.name = req.body.name ? req.body.name : players.name;			players.score = req.body.score ? req.body.score : players.score;			
            players.save(function (err, players) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating players.',
                        error: err
                    });
                }

                return res.json(players);
            });
        });
    },

    /**
     * playersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        playersModel.findByIdAndRemove(id, function (err, players) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the players.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
