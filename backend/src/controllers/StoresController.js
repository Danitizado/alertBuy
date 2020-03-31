const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (req, res ) {
        const stores = await connection('stores').select('*')

        return res.json(stores)
    },

    async create (req, res) {
        const { name, email, category, city, uf } = req.body;

        const stores = await connection('stores').select('*')

        let result = await stores.find( store => store.email === email );

        const id = crypto.randomBytes(4).toString('HEX');

        if ( !result ) {
            await connection('stores').insert({
                id,
                name,
                email,
                category,
                city,
                uf
            });
    
            return res.json({id});
        }

        if ( email === result.email ) { 
            res.status(409).send({ error: 'This user Already registered.' })
        }
    }
}