notes = [{
            title: 'Note1',
            body: 'Body of Note1'
        }, {
            title: 'Note2',
            body: 'Body of Note2'
        }, {
            title: 'Note3',
            body: 'Body of Note3'
        }, {
            title: 'Note4',
            body: 'Body of Note4'
        }];


        // const findNote = (notes, noteTitle) => {
        //     const index = notes.findIndex( (note, index)=> {
        //         return note.title === noteTitle;
        //     })
        //     return notes[index]
        // }

// const findNote = (notes, noteTitle) => {
//     const note = notes.find( (note)=> {
//         return note.title === noteTitle;
//     })
//     return note;
// }


const findNotes = (notes, query) => {

    const filteredNotes = notes.filter((note) => {
        const isTitleMatch = note.title.includes(query)
        const isBodyMatch = note.body.includes(query)
        return isTitleMatch || isBodyMatch
    })

    return filteredNotes

}

console.log(findNotes(notes, 'Note3'))
console.log('-------------')



const filteredNotes  = notes.filter( (note) => {
    const isTitleMatch = note.title.includes('Note4')
    const isBodyMatch = note.body.includes('Note4')
    return isTitleMatch || isBodyMatch
})

console.log( filteredNotes )
console.log('-------------')

// let note = findNote(notes, 'Note2')


// console.log(note)

