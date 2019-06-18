notes = [{
            title: 'Note1',
            body: 'Body of Note1'
        }, {
            title: 'Note2',
            body: 'Body of Note2'
        }, {
            title: 'Note2',
            body: 'Body of Note2'
        }, {
            title: 'Note2',
            body: 'Body of Note2'
        }];


        // const findNote = (notes, noteTitle) => {
        //     const index = notes.findIndex( (note, index)=> {
        //         return note.title === noteTitle;
        //     })
        //     return notes[index]
        // }

const findNote = (notes, noteTitle) => {
    const note = notes.find( (note)=> {
        return note.title === noteTitle;
    })
    return note;
}

let note = findNote(notes, 'Note2')


console.log(note)

