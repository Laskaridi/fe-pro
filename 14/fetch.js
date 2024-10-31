// fetch('url', [options])

// response.json()
// response.text()
// response.formData()
// response.blob()

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));

fetch('https://swapi.dev/api/starships/9/')
      .then(response => response.json())
      .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    body:JSON.stringify({
        body:'Test post',
        id: 1,
        title:'My title',
        userId: 1
    })
}).then(response => response.json())
.then(data => console.log(data));