exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('category').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('store_id').notNullable();
        table.foreign('store_id').references('id').inTable('stores')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('products');
};