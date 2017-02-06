/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var globalLength;
module.exports = {
	show: function(req,res){
            
        var cloudant = require('cloudant')('https://a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix:534c44621147eb8f20e2173e27ceb7f411f26c734132d0c160d593ed77975d03@a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix.cloudant.com');
        cloudant = cloudant.db.use('previdenciadb');
	cloudant.find({"selector": {"_id":{"$gt":null}},"fields": ["questions"]},
	   function(err, data){
	  	if(!err){
           var questions = [];
            for(var i = 0 ; i < data.docs[0].questions.length ; i++){
                questions.push(data.docs[0].questions[i]);
            }
            globalLength = data.docs[0].questions.length;
            res.render('question_show',{questions: questions});
	  	}else
	  	console.log(err);
	  });
    },
    calculate: function(req,res){
      

      for(var i = 0 ; i< globalLength;i++){
          
      }
    },

};

