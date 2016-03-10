var me = {
  name: "Zach",
  location: "Dallas, TX",
  occupations: ["Data Manager & Variable Tech", "Senior Graphic Designer"],
  hobbies: [
    {
      name: "Skateboarding",
      type: "current"
    },
    {
      name: "Musician",
      type: "past"
  }],
  skills: [
    {
      id: 1,
      name: 'Javascript',
      experience: 'Beginner'
    },{
      id: 2,
      name: 'HTML',
      experience: 'Intermediate'
    },{
      id: 3,
      name: 'CSS',
      experience: 'Intermediate'
    },{
      id: 4,
      name: 'AngularJS',
      experience: 'Beginner'
    },{
      id: 5,
      name: 'NodeJS',
      experience: 'Beginner'
    }]
};

module.exports = {
  getName: function(req, res){
    res.json({name:me.name});
  },
  getLocation: function(req, res){
    res.json({location:me.location});
  },
  getOccupations: function(req, res, next) {
    if(req.query.order === 'asc') {
      res.json({occupations: me.occupations.sort()});
    }
    else if (req.query.order === 'desc') {
      res.json({occupations: me.occupations.sort().reverse()});
    }
    else {
      res.json({occupations: me.occupations});
    }
  },
  getLatest: function(req, res){
    res.json({occupations:me.occupations[me.occupations.length - 1]});
  },
  getHobbies: function(req, res){
    res.json({hobbies:me.hobbies});
  },
  getHobbyType: function(req, res) {
    var matches = [];

    for(var i = 0; i < (me.hobbies.length); i++) {
      if(req.params.type === me.hobbies[i].type) {
        matches.push(me.hobbies[i].name);
      }
    }
    res.json(matches);
  },
  putName: function(req, res, next) {
    me.name = req.body.name;
    res.json(me.name);
  },
  putLocation: function(req, res, next) {
    me.location = req.body.location;
    res.json(me.location);
  },
  postHobbies: function(req, res, next) {
    me.hobbies.push(req.body);
    res.json(me.hobbies);
  },
  postOccupations: function(req, res, next) {
    me.occupations.push(req.body);
    res.json(me.occupations);
  },
  getSkills: function(req, res, next) {
    if(req.query.experience) {
      console.log(req.query.experience);
      var results = [];
      for(var i = 0; i < me.skills.length; i++) {
        if(me.skills[i].experience === req.query.experience) {
          results.push(me.skills[i].name);
        }
      }
      res.json(results);
    } else {
    res.json(me.skills);
    }
  },
  postSkills: function(req, res, next) {
    var id = me.skills.length + 1;
    me.skills.push({
      id: id,
      name: req.body.name,
      experience: req.body.experience
    });
    res.send(me.skills);
  }
};
