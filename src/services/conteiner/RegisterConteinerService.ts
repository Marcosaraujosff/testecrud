import prismaClient from '../../prismaClient';

interface ConteinerRequest {
    cliente: string,
    conteiner: string
    tipo: string,
    status: string
    categoria: string
}

class RegisterConteinerService {
    async execute({ cliente, conteiner, tipo, status, categoria }: ConteinerRequest) {

        if(!cliente || !tipo || !status || !categoria){
            throw new Error("Ops, faltam dados necessarios para o cadastro.")
        }

        const register = await prismaClient.conteiner.create({
            data: {
               cliente: cliente,
               conteiner: conteiner,
               tipo: tipo,
               status: status,
               categoria: categoria 
            }
        })

        return register;

    }
}

export { RegisterConteinerService }