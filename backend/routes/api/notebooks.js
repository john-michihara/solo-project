const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Note } = require('../../db/models');

router.get('/:id/notes', asyncHandler(async (req, res) => {
  const notebookId = parseInt(req.params.id, 10);
  const notes = await Note.findAll({
    where: { notebookId }
  });
  res.json(notes);
}));

module.exports = router;
