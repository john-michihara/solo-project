const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Notebook, Note } = require('../../db/models');

router.put('/:id', asyncHandler(async (req, res) => {
  const notebookId = parseInt(req.params.id, 10);
  const notebook = await Notebook.findByPk(notebookId);
  if (notebook) {
    await notebook.update(req.body.notebookData)
  }
  res.json(notebook);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const notebookId = parseInt(req.params.id, 10);
  const notebook = await Notebook.findByPk(notebookId);
  if (notebook) {
    await notebook.destroy();
  };
  res.json(notebook);
}));

router.get('/:id/notes', asyncHandler(async (req, res) => {
  const notebookId = parseInt(req.params.id, 10);
  const notes = await Note.findAll({
    where: { notebookId }
  });
  res.json(notes);
}));

router.post('/:id/notes', asyncHandler(async (req, res) => {
  const { userId, notebookId, title, content } = req.body.noteData;
  const note = await Note.create({
    notebookId,
    userId,
    title,
    content,
    color: 'white'
  });
  res.json(note);
}));


module.exports = router;