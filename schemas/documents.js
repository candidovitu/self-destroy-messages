const mongoose = require('mongoose');

function generateCode(){
    let str = '';
    for(let i = 0; i < 4; i++){
      let num = Math.round(Math.random() * (9999 - 1000) + 1000);
      str = str.concat(`${num}-`);
    }
    return str.substr(0, str.length-1)
}

module.exports = mongoose.model('documents', new mongoose.Schema({
    code: {
        type: String,
        default: generateCode
    },
    content: String
}));