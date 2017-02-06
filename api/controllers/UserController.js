/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req,res){
        
        questions = [
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
          'options': 
              [
              'Completa',
              'Simplificada',
              'Nao sei'
        ]
         }
        ];
        // res.redirect('questoin_show');
        res.render('question_show',{questions:questions});
    },

    
};

