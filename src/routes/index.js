import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDb from '../db'
import gameSessions from '../controllers/game-sessions'

let router = express()

// connect to db
initializeDb(db => {
  // internal middleware
  router.use(middleware({config, db}))

  // api routes
  router.use('/game-sessions', gameSessions({ config, db }))
})

export default router
