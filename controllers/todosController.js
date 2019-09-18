const Todo = require('../models/todo')

const addNewTodo = async ctx => {
  const todo = ctx.body
  try {
    const savedTodo = await Todo.create(todo)
    ctx.res.send(savedTodo)
  } catch (err) {
    ctx.res.status(500).send(err)
  }
}
const fetchTodos = async ctx => {
  try {
    const todos = await Todo.find()
    ctx.res.send(todos)
  } catch (err) {
    ctx.res.status(500).send(err)
  }
}
const removeTodo = async ctx => {
  const { id } = ctx.params
  console.log('_id remove ', id)
  try {
    const todos = await Todo.deleteOne({ _id: id })
    console.log('todos', todos)
    if (todos.deletedCount) {
      console.log('server success deleted todo: ', _id)
      ctx.res.send({ _id })
    } else {
      console.log('Todo not deleted')
      //ctx.res.status(500).send({ error: 'Todo not deleted' })
    }
  } catch (err) {
    console.log('Error of not deleted')
    ctx.res.status(500).send(err)
  }
}
const editTodo = async ctx => {
  const todo = ctx.body
  // console.log('editTodo todo ', todo)
  const { id } = ctx.params
  // console.log('editTodo _id ', id)
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { $set: todo}, 
      { useFindAndModify: false, new: true })
    console.log('todo', updatedTodo)
    ctx.res.send(updatedTodo)
  } catch (err) {
    console.log('error todo', err)
    ctx.res.status(500).send(err)
  }
}

module.exports = {
  addNewTodo,
  fetchTodos,
  removeTodo,
  editTodo
}