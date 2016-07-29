
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE "prank" RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('prank').insert({title: "Yo Mama", prank: 'Yo mamma is so ugly when she tried to join an ugly contest they said, "Sorry, no professionals."'}),

      ]);
    });
};
