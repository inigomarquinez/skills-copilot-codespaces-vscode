// Create web server
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'commentDB');
var Comment = require('../models/comment.js');

// GET /comments
// Get all comments
router.get('/', function(req, res) {
	Comment.find(function(err, comments) {
		if (err) {
			return res.send(err);
		}
		res.json(comments);
	});
});

// POST /comments
// Create a new comment
router.post('/', function(req, res) {
	var comment = new Comment(req.body);
	comment.save(function(err) {
		if (err) {
			return res.send(err);
		}
		res.send({ message: 'Comment Added' });
	});
});

// GET /comments/:id
// Get a single comment by id
router.get('/:id', function(req, res) {
	Comment.findById(req.params.id, function(err, comment) {
		if (err) {
			return res.send(err);
		}
		res.json(comment);
	});
});

// PUT /comments/:id
// Update a comment by id
router.put('/:id', function(req, res) {
	Comment.findById(req.params.id, function(err, comment) {
		if (err) {
			return res.send(err);
		}
		for (prop in req.body) {
			comment[prop] = req.body[prop];
		}
		comment.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.json({ message: 'Comment updated!' });
		});
	});
});

// DELETE /comments/:id
// Delete a comment by id
router.delete('/:id', function(req, res) {
	Comment.findByIdAndRemove(req.params.id, function(err) {
		if (err) {
			return res.send(err);
		}
		res.json({ message: 'Comment deleted!' });
	});
});

module.exports = router;