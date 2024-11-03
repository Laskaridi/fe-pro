//PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method:'PUT',
    headers:{
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body:JSON.stringify({
        id: 1,
        title: "оновлений заголовок",
        body: "оновлений контент",
        userId: 1
    })
})
.then(response =>response.json())
.then(data=>console.log(`PUT upadte post `,data))
.catch(e=>console.log(`Put Error `,e));


//Delete
fetch('https://jsonplaceholder.typicode.com/posts/3', {
    method:'DELETE'
})
.then(response =>response.json())
.then(data=>console.log(`Delete upadte`,data))
.catch(e=>console.log(`Delete Error `,e));

//GET pro


fetch('https://jsonplaceholder.typicode.com/posts/3', {
    method:'GET',
    headers:{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer your_token_here',
        'Cookie': 'sessionId=your_session_id'
    }
})
.then(response =>response.json())
.then(data=>console.log(`Delete upadte`,data))
.catch(e=>console.log(`Delete Error `,e));