const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  const notes = loadNotes();

  console.log(chalk.green('Your Notes'));
  notes.forEach(note => {
    console.log(note.title);
  });
}

const addNote = function (title, body) {
  const notes = loadNotes();
  //not good for large arrays
  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);
  
  //node --inspect-brk  app.js add --title="courses" --body="NodeJs, Angular"
  debugger
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen('New Note added!'));
  } else {
    console.log(chalk.bgRed('Duplicate found'));
  }
}

const getNote = function (title) {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("No note found"));
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen('Note Removed'));
  } else {
    console.log(chalk.bgRed('No Notes to remove'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote
}