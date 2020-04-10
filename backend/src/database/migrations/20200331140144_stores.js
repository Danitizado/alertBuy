exports.up = function(knex) {
    return knex.schema.createTable('stores', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('phone', 12).notNullable();
      table.string('category').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('stores');
  };