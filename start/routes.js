'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.post("/contacts", "ContactController.store")
Route.get("/contacts", "ContactController.index")
Route.get("/contacts/:id", "ContactController.show")
Route.delete("/contacts/:id", "ContactController.destroy")



Route.post("/register", "RegisterController.store") // aqui ele vai gravar as informações no meu banco de dados
Route.get("/register", "RegisterController.index")// aqui ele vai listar todos os cadastro do meu banco de dados
Route.get("/register/:id", "RegisterController.show")// aqui ele vai pegar pelo Id e vai me retornar só esse usuario
Route.put("/register/:id", "RegisterController.update")// aqui eu vou pegarr o usuario pelo id e fazer alterações 
Route.delete("/register/:id", "RegisterController.destroy")// aqqui vou pegar pelo id e deletar o meu cadastro