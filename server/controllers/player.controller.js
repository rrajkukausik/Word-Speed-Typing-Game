const _ = require("lodash");
const { Player } = require("../models/players");

module.exports = {
    getAllPlayers: async (req, res) => {
        try {
          const players = await Player.find({}, null, {
            sort: { score: -1 },
          });
          return res.send({ success: true, total:players.length, players });
        } catch (e) {
          return res.send({ success: false, e });
        }
      },
      getTopPlayers: async (req, res) => {
        try {
          const players = await Player.find({}, null, {
            sort: { score: -1 },
            limit: 10,
          });
          return res.send({ success: true, total:players.length,  players });
        } catch (e) {
          return res.send({ success: false, e });
        }
      },
      saveScore: async (req, res) => {
          try{
            var body = _.pick(req.body, ["name", "email", "score", "level"]);
            var player = new Player(body);
            const playerSaved = await player.save();
            return res.send({ success: true, playerSaved });
          }catch(e){
            return res.send({ success: false,check: true, error: e });
          }
      },
      updateScore: async (req, res) => {
        try{
          const { id } = req.params;
          var body = _.pick(req.body, ["name", "email", "score", "level"]);
          const player = await Player.findByIdAndUpdate(id, body, { new: true });
          if (!player) {
            return res.send({ success: false, message: "Unable to edit player." });
          }
          return res.send({ success: true, player });
        } catch (e) {
        return res.send({ success: false, message: e });
      }
      }
}