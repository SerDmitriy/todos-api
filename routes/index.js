const router  = (publicRouter) => {
  publicRouter.use('/todo', require('./todos'))
}

module.exports = { router }