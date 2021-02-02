
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', tbl => {
    tbl.increments();
    tbl.string('name')
      .notNullable()
      .unique();
      tbl.string('type');
      tbl.string('start_time');
      tbl.string('duration');
      tbl.string('intensity_level');
      tbl.string('location');
      tbl.string('max_registered_attendees');
      tbl.string('max_attendees');

    tbl.decimal('budget')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('classes');
};
