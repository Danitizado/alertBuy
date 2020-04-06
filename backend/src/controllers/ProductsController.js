const connection = require('../database/connection')

module.exports = {
    async index (req, res) {
        const { page = 1 } = req.query;

        const [ count ] = await connection('products').count();

        const products = await connection('products')
        .join('stores', 'stores.id', '=', 'products.store_id')
        .limit(5)
        .offset((page -1 ) * 1)
        .select(['products.*',
        'stores.name',
        'stores.email',
    ])  
        res.header('X-Total-Count', count['count(*)'])

        return res.json(products);
    },

    async create (req, res) {
        const { title, category, description, value} = req.body;
        const store_id = req.headers.authorization;

        const [ id ] = await connection('products').insert({
            title,
            category,
            description,
            value,
            store_id            
        });

        return res.json({ id })
    },

    async remove (req, res) {
        const { id } = req.params;
        const store_id = req.headers.authorization;

        const product = await connection('products')
        .where('id', id)
        .select('store_id')
        .first();

        if ( product.store_id !== store_id ) {

            return res.status(401).send({ error: 'Operation Unauthorized.' });
        }

        await connection('products')
        .where('id', id)
        .delete();

        return res.status(401).send({ success: 'Product removed successfully.' });
    }
}