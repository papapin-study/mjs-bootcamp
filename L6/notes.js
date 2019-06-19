notes = [{
            title: 'Note1',
            body: 'Body of Note1'
        }, {
            title: 'Note5',
            body: 'Body of Note2'
        }, {
            title: 'Note3',
            body: 'Body of Note3'
        }, {
            title: 'Note4',
            body: 'Body of Note4'
        }];



      const sortNotes = (notes) => {
        notes.sort( ( a, b ) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()   ) {
                 return -1
            } else if (b.title.toLowerCase() < a.title.toLowerCase() ) {
                 return 1
            } else {
                0
            }
        })
      }  


console.log(notes);
console.log('-------------');

sortNotes(notes)

console.log( notes );
console.log('-------------');



