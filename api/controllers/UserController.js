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
      
    //   for(var i = 0 ; i< globalLength;i++){
          
    //   }

            var url = require('url'), https = require('https');

            var rules = {
                "executionRestUrl" : "https://brsv2-48900cea.ng.bluemix.net/DecisionService/rest",
                "user" : "resAdmin",
                "password" : "1hvb23e0v0do2"
            };

 

            var rendaMensal = 1500;
            var valorContribuicao = 1500;
            var declaracaoIR = "Completa"
            var planoPrevidencia = "String";
            var contribuicao_versus_renda = 100;
            var __DecisionID__ = "1";  //Unique ID 
            var threshold_renda_valorContribuicao = 12;
            var seniority = 10;


            function invokeRulesService(rules, rulesetPath, inputParams, callback) {
                var restUrl = url.parse(rules.executionRestUrl);
                var dataString = JSON.stringify(inputParams);
                // encode 'user:password' in Base64 string for basic authentication of the execution API
                var encodedCredentials = new Buffer(rules.user + ':' + rules.password).toString('base64');

                var headers = {
                    'Content-Type' : 'application/json',
                    'Content-Length' : dataString.length,
                    'Authorization' : 'Basic ' + encodedCredentials // basic authentication header
                };

                var options = {
                    host : restUrl.host,
                    path : restUrl.path + rulesetPath,
                    method : 'POST',
                    headers : headers
                };

                var req = https.request(options, function(resp) {
                    resp.setEncoding('utf-8');
                    var responseString = '';

                    resp.on('data', function(data) {
                        responseString += data;
                    });

                    resp.on('end', function() {
                        console.log(responseString);
                        if (resp.statusCode === 200) {
                            var responseObject = JSON.parse(responseString);
                            callback(responseObject);
                        } else {
                            console.log("An unexpected response occured");
                            callback(null);
                        }
                    });
                });

                req.on('error', function(e) {
                    console.log(e.message);
                });

                req.write(dataString);
                req.end();
                }


                invokeRulesService(rules, '/planos_previdencia_bluemix/1.0/planos_previdencia_decision/1.1', {
                    "lista_criterios" : {
                        "rendaMensal" : rendaMensal,
                        "valorContribuicao" : valorContribuicao,
                        "declaracaoIR":declaracaoIR,
                        "planoPrevidencia":planoPrevidencia,
                        "contribuicao_versus_renda":contribuicao_versus_renda
                    }, "__DecisionID__": __DecisionID__,
                    "threshold_renda_valorContribuicao":threshold_renda_valorContribuicao

                }, function(results) {
                    console.log(results.lista_criterios);
                });
    },

};
