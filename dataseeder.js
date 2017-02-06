

var nano = require('nano')('https://a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix:534c44621147eb8f20e2173e27ceb7f411f26c734132d0c160d593ed77975d03@a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix.cloudant.com');

// clean up the database we created previousl
nano.db.destroy('previdenciadb', function() {
  // create a new database
  nano.db.create('previdenciadb', function() {
    // specify the database we are going to use
    var questions = nano.use('previdenciadb');
    // and insert a document in it
    questions.insert({ 'questions': [
    	{ 
    	  'id' : 1, 
    	  'question':  'Qual a sua renda mensal?' ,
          'type': "text"
         },
     	{
     	 'id' : 2, 
    	  'question':  'Qual o valor que voce quer contribuir para a previdencia?' ,
          'type': "text"
        },
    	{
    	'id' : 3, 
    	  'question':  'Qual tipo de declaracao de imposto de renda voce usa?' ,
          'type': "radio",
          'options': [
              'Completa',
              'Simplificada',
              'Nao sei'
          ]
         },
    	]}, 'inventory', function(err, body, header) {
      if (err) {
        console.log('Error creating document - ', err.message);
        return;
      }
      console.log('all records inserted.')
      console.log(body);
    });
  });
});