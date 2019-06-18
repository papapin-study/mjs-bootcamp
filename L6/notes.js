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

i = notes.findIndex( (note, index) => {
    //console.log(note)
    return note.title === 'Note1'
});

console.log(i)

