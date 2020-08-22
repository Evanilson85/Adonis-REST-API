'use strict'

const Register = use("App/Models/Register")


class RegisterController {


  async index({ request, response, view }) { 

    return await Register.all()

  }


  async create({ request, response, view }) {
  }


  async store({ request, response }) {

    const register = request.only(["name", "email", "date", "password"])

    return await Register.create(register)

  }


  async show({ params, request, response, view }) {

    return await Register.find(params.id)

  }


  async edit({ params, request, response, view }) {
  }


  async update({ params, request, response }) {

    const date = await Register.findOrFail(params.id)

    const dateUpdate = request.only(["name", "email", "date", "password"])

    date.merge(dateUpdate)

    date.save()

    return date

  }


  async destroy({ params, request, response }) {

    const date = await Register.findOrFail(params.id)

    date.delete()

    return {

      message: " Seu Cadastro foi deletado com sucesso"
    }

  }
}

module.exports = RegisterController
