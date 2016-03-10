var mainCtrl = require('../controllers/mainCtrl');

module.exports = function(app){
  app.route('/name')
    .get(mainCtrl.getName);

  app.route('/location')
    .get(mainCtrl.getLocation);

  app.route('/occupations')
    .get(mainCtrl.getOccupations);

  app.route('/occupations/latest')
    .get(mainCtrl.getLatest);

  app.route('/hobbies')
    .get(mainCtrl.getHobbies);

  app.route('/hobbies/:type')
    .get(mainCtrl.getHobbyType);

  app.route('/name')
    .put(mainCtrl.putName);

  app.route('/location')
    .put(mainCtrl.putLocation);

  app.route('/hobbies')
    .post(mainCtrl.postHobbies);

  app.route('/occupations')
    .post(mainCtrl.postOccupations);

  app.route('/skills')
    .get(mainCtrl.getSkills);

  app.route('/skills')
    .post(mainCtrl.postSkills);

  app.route('/secrets/:username/:pin')
    .get(mainCtrl.verifyUser);

};
