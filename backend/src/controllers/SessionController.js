const connection = require('../database/connection')

module.exports = {
    async create (req, res) {
        const { email, password } = req.body;

        const store = await connection('stores')
        .where('email', email)
        .where('password', password)
        .select('name', 'id')
        .first();
        
        if (!store) {
            return res.status(404).json({ error: "Login Unauthourized."})
        }

        return res.json(store)
    }
}