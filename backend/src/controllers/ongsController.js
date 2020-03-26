const connection = require('../database/connections')
const crypto = require('crypto');

module.exports = {

    async create(resquest,response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

    return response.json({ id });
    },

    async index(resquest,response) {
        const ongs = await connection('ongs').select('*')

        return response.json(ongs);
    }
}