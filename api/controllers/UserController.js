/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req,res){
                
        var express = require('express'),
        // routes = require('./routes'),
        // user = require('./routes/user'),
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

    
	// var q = req.body.query;
	cloudant.find({
		 "selector": {
    "_id":{"$gt":null}
  },
  "fields": [
    "questions"
  ]
//   "type":"json"
	},
	   function(err, data){
	  	if(!err){
              var contents= [];
                        
            //   data.docs.forEach(function(line){
            //    contents+=line;
                
            // });
            // console.log(contents);
            
            //   res.send(data.docs);
            res.render('question_show',{question: []});
	  	}else
	  	console.log(err);
	  });

    //     questions = [
    //       { 
    // 	  'id' : 1, 
    // 	  'question':  'Qual a sua renda mensal?' ,
    //       'type': "text"
    //      },
    //  	{
    //  	 'id' : 2, 
    // 	  'question':  'Qual o valor que voce quer contribuir para a previdencia?' ,
    //       'type': "text"
    //     },
    // 	{
    // 	'id' : 3, 
    // 	  'question':  'Qual tipo de declaracao de imposto de renda voce usa?' ,
    //       'type': "radio",
    //       'options': 
    //           [
    //           'Completa',
    //           'Simplificada',
    //           'Nao sei'
    //     ]
    //      }
    //     ];
    //     res.render('question_show',{questions:questions});
    },

    
};

