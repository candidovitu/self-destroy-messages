const express = require('express');
const router = express.Router();
const schemas = require('../schemas');

router.get('/', (req, res) => {
    res.render('create');
});

router.get('/:code', async (req, res) => {

    const {code} = req.params;
    const document = await schemas.documents.findOne({code});

    if(!document) return res.redirect('/');

    res.render('document', {content: document.content, code: document.code});

    document.remove();
});

router.post('/create', (req, res) => {
    const {content} = req.body;

    schemas.documents.create({content})
    .then(result => {
        res.json({type: 'url', content: `http://127.0.0.1:3000/${result.code}`});
    })
    .catch(err => {
        console.log(err);
        return res.json({type: 'error', content: 'Ocorreu um erro interno'});
    });

});

module.exports = router;