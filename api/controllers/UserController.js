/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req,res){
                
        var express = require('express'),
        http = require('http'),
        path = require('path'),
        fs = require('fs');
        

        var app = express();

        var cfenv = require('cfenv');
        var bodyParser = require('body-parser');
        var methodOverride = require('method-override');
        var logger = require('morgan');
        var errorHandler = require('errorhandler');
        var multipart = require('connect-multiparty')
        var multipartMiddleware = multipart();

        // all environments
        app.set('view engine', 'ejs');
        app.engine('html', require('ejs').renderFile);
        app.use(logger('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use('/style', express.static(path.join(__dirname, '/views/style')));

        var cloudant = require('cloudant')('https://a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix:534c44621147eb8f20e2173e27ceb7f411f26c734132d0c160d593ed77975d03@a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix.cloudant.com');
        cloudant = cloudant.db.use('previdenciadb');

        var appEnv = cfenv.getAppEnv();

        app.listen(appEnv.port, '0.0.0.0', function() {
        // print a message when the server starts listening
        console.log("server starting on " + appEnv.url);
    });
    

    app.use(bodyParser.json());
	cloudant.find({
		 "selector": {
    "_id":{"$gt":null}
  },
  "fields": [
      "questions"
  ]
	},
	   function(err, data){
	  	if(!err){
           var questions = [];
            for(var i = 0 ; i < data.docs[0].questions.length ; i++){
                questions.push(data.docs[0].questions[i]);
            }
            res.render('question_show',{questions: questions});
	  	}else
	  	console.log(err);
	  });
    },

    
};

