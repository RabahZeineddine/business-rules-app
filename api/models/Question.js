/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    adapter: 'couch',
  migrate: 'safe',
  id: {
    primaryKey: true,
    type: 'string'
  },
  attributes: {
    questions:{
        id : 'String',
        question: 'String',
        input_name: 'String',
        type: 'String',
        option: []
    }
  }
};

