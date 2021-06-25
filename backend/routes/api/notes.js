const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Note } = require('../../db/models');

router.put('/:id', asyncHandler(async (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const note = await Note.findByPk(noteId);
  const { title, content, color } = req.body.noteData;

  if (note) {
    await note.update({
      title,
      content,
      color
    });
  }

  res.json(note);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const note = await Note.findByPk(noteId);
  if (note) {
    await note.destroy();
  }
  res.json(note);
}));

module.exports = router;
