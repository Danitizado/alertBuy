const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const store_id = req.headers.authorization;

        const [count] = await connection('products')
        .where('store_id', store_id)
        .count();

        const products = await connection('products')
        .where('store_id', store_id)
        .select('*');

        res.header('X-Total-Count', count['count(*)'])

        return res.json(products);
    }
}