'use strict'

const Contatos = use("App/Models/Contact")

class ContactController {
 
  async store ({ request, response, view }) {

    const dateContacts = request.only(["name", "email", "message"])

    return await Contatos.create(dateContacts)

  }

  async index ({ params, request, response, view }) {
    return await Contatos.all()
  }
 
 

 
  async show ({ params, request, response, view }) {

    return await Contatos.find(params.id)

  }


  
 
  
  async destroy ({ params, request, response }) {

    const deleteContacts = await Contatos.findOrFail(params.id)

    await deleteContacts.delete()

    return{
      message : "Mensagem deletada com sucesso"
    }

  }
}

module.exports = ContactController
