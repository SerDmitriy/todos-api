const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb://localhost:27017/admin',{ useNewUrlParser: true, useUnifiedTopology: true });

const ctrl = require('./controllers/todosController')

// const router = express.Router({ prefix: '/api' })
// require('./routes')(router)
// const publicRouter = express.Router()
// app.use(publicRouter)
// require('./routes').router(publicRouter)

app.use(cors());
app.use(bodyParser());

// const publicRouter = express.Router();
// app.use(publicRouter);
// require('./routes').router(publicRouter);

// app.post('*', () => {
//   console.log('werwerwer')
// })

const router = express.Router()
app.use(router)

router.get('/api/todos', ctrl.fetchTodos)
router.post('/api/todo', ctrl.addNewTodo)
router.put('/api/todo/:id', ctrl.editTodo)
router.delete('/api/todo/:id', ctrl.removeTodo)


app.listen(9999, () => console.log('server alive'));
