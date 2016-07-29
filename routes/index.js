var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('prank').then(function(data) {
    res.json(data);
  })
});

router.get('/:id', function(req, res, next) {
  return knex('prank').where('id', req.params.id).then(function(data) {
    res.json(data);
  })
})

router.post('/', function(req, res, next) {
  return knex('prank').insert(req.body).then(function(data) {
    res.json({success: "prank successfully added"});
  })
})

router.put('/:id', function(req, res, next) {
  return knex('prank').update(req.body).where('id', req.params.id).then(function(data) {
    res.json({success: "item edited"});
  })
})

router.delete('/:id', function(req, res, next) {
  return knex('prank').del().where('id', req.params.id).then(function(data) {
    res.json({success: "item deleted"});
  })
})

module.exports = router;
