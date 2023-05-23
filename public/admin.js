// async function main() {

//     let response = await fetch('http://localhost:3001/listBooks');
//     let books = await response.json();

//     books.forEach(renderBook);

// }

// function renderBook(book) {
//     let title = document.createElement('li');
//     title.textContent = book.title;

//     let amount = document.createElement('input');
//     amount.value = book.quantity;

//     let updateBook = document.createElement('button');
//     updateBook.textContent = 'Save';
//     updateBook.addEventListener('click', function () {
//         fetch('http://localhost:3001/updateBook', {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({
//                 id: book.id,
//                 quantity: amount.value
//             })
//         });
//     });

//     let deleteBook = document.createElement('button');
//     deleteBook.textContent = 'Delete';
//     deleteBook.addEventListener('click', function () {
//         fetch(`http://localhost:3001/removeBook/${book.id}`, { method: 'DELETE' })
//     });

//     title.append(amount, updateBook, deleteBook);
//     document.querySelector('#book-list').append(title);
// }

// main();