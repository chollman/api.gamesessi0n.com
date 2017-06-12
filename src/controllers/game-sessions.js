import { Router } from 'express'
import GameSession from '../model/game-session'

export default({ config, db }) => {
  let api = Router()

  // '/v1/game-sessions' - Create
  api.post('/', (req, res) => {
    let newGameSession = new GameSession()
    newGameSession.name = req.body.name

    newGameSession.save(err => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Game session created successfully' })
    })
  })

  // '/v1/game-sessions' - Read
  api.get('/', (req, res) => {
    GameSession.find({}, (err, gameSessions) => {
      if (err) {
        res.send(err)
      }
      res.json(gameSessions)
    })
  })

  // '/v1/game-sessions/:id' - Read 1
  api.get('/:id', (req, res) => {
    GameSession.findById(req.params.id, (err, gameSession) => {
      if (err) {
        res.send(err)
      }
      res.json(gameSession)
    })
  })

  // '/v1/game-sessions/:id' - Update
  api.put('/:id', (req, res) => {
    GameSession.findById(req.params.id, (err, gameSession) => {
      if (err) {
        res.send(err)
      }
      gameSession.name = req.body.name
      gameSession.save(err => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Game session updated successfully' })
      })
    })
  })

  // '/v1/game-sessions/:id' - Delete
  api.delete('/:id', (req, res) => {
    GameSession.remove({
      _id: req.params.id
    }, (err, gameSession) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Game session removed successfully' })
    })
  })

  return api
}
