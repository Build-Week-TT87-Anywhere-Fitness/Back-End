
exports.seed = function(knex, Promise) {
  return knex('classes').truncate()
    .then(function () {
      return knex('classes').insert([
        { name: 'Cycling 101', type: 'cycling', start_time:'11:00 am', duration: '30 minutes', intensity_level: 'beginner', location: 'park', max_registered_attendees: 30, max_attendees:30 },
      ]);
    });
};
