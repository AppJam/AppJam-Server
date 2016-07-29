
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('prank', function(table) {
    table.increments();
    table.string('title', 255);
    table.text('prank');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('prank');
};
