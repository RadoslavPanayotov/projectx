var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   
    var usersCollection = req.db.get('users');
    usersCollection.find({})
    .then(function(data) {
        res.json(data);
    }).catch(function(err) {
        res.json(500, err);
    });
});
router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var db = req.db;
    var users = db.get('users');
    users.find({ username: username, pass: password })
        .then(function (data) {
            if (data.length > 0) {
               // req.session.userId = data[0]._id;
                res.redirect('/');
            } /*else {
                res.render('login', { message: 'Are probvai pak moi chovek' });
            }*/
        });
   
  /*  usersCollection.find({})
    .then(function(data) {
        res.json(data);
    }).catch(function(err) {
        res.json(500, err);
    });*/
});

module.exports = router;
