const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const stores = await connection('stores').select('*');

        return res.json(stores)
    },

    async create(req, res) {
        const { name, email, phone, category, city, uf } = req.body;

        const stores = await connection('stores').select('*')

        let result = await stores.find(store => store.email === email);

        const idGenerate = crypto.randomBytes(4).toString('HEX');
        const id = idGenerate.toUpperCase();

        if (!result) {
            await connection('stores').insert({
                id,
                name,
                email,
                phone,
                category,
                city,
                uf
            });

            return res.status(201).send({ success: 'User created successfully!', id });
        }


        if (email === result.email) {
            res.status(409).send({ error: 'This user Already registered.' })
        }

    }
}