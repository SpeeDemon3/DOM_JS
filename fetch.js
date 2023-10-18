
let albums;

fetch('https://jsonplaceholder.typicode.com/albums/3')
.then(data => data.json())
.then(data => {
    albums = data;
    console.log(albums);
})