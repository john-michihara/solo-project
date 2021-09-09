# Evergoat

A note-taking application that combines the functionality of Evernote with the colorful design of Zoho Notebooks.

Check out the live site here: [Evergoat](https://evernote-clone-project.herokuapp.com/)

![Home](https://i.ibb.co/gysr4Rd/Screen-Shot-2021-09-08-at-18-14-52.png)

# Technologies Used

### Back end

The back end was built using Express.js, and connects to a postgreSQL database via Sequelize.

### Front end

The front end was built with React and Redux, powered by JavaScript and Express. [Quill](https://quilljs.com/) was used to provide rich text editing in the notes.

### Deployment

This app was deployed to Heroku using the Heroku CLI.

# Features

Quickstarter users are able to:

- Create an account
- Log in and log out
- Create, edit, and delete notebooks
- Create, edit, and delete notes
- Write notes using a rich text editor
- Search for notebooks and notes by keyword

# Key Components

### User Authentication

User passwords are hashed using [bcrypt.js](https://www.npmjs.com/package/bcryptjs) before being stored in the database. When a user logs in, the password inputted is rehashed and checked against the encrypted password.

### Notebooks

Users can create a notebook with a colorful cover. Covers can be changed through the update notebook section, where users can select a new cover or use their own custom image by providing the image's url.

### Notes

Notes can be created inside of a notebook. Each note's color is randomly selected, but users can change the color in the editor. Users also have access to Quill's rich text editor toolbar, which provides formatting (font styling, text alignment, lists, etc.).

![Notes](https://i.ibb.co/tB56hYs/evergoat-notes.gif)

### Search

Users can search through all of their notebooks and notes by keyword. Any notebook or note in the search result can be clicked and edited.

# Wiki

For more details, please check out the Wiki pages:

- [Database Schema](https://github.com/john-michihara/solo-project/wiki/Database-Schema)

# To-Dos

- Implement AWS for image uploading (notebook covers)
- Build out a tag feature for better organization and search functionality
- Add filters to notes section to order notes by date, tag, etc.
