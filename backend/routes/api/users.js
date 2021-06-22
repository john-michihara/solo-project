const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Notebook, Note } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

router.get('/:id/notebooks', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const notebooks = await Notebook.findAll({
    where: { userId }
  })

  res.json(notebooks);
}));

router.get('/:id/notes', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const notes = await Note.findAll({
    where: { userId }
  })
  res.json(notes);
}));

router.post('/:id/notebooks', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const notebook = await Notebook.create({
    userId,
    coverUrl: 'https://images.unsplash.com/photo-1579762714453-51d9913984e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2542&q=80'
  });

  res.json(notebook);
}));

module.exports = router;
