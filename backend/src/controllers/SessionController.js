const connection = require('../database/connection')

module.exports = {
    async create (req, res) {
        const { id } = req.body;

        const store = await connection('stores')
        .where('id', id)
        .select('name', 'email')
        .first();
        
        if (!store) {
            return res.status(404).json({ error: "No store with this ID" })
        }

        return res.json(store)
    }
}