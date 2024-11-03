const posts= [
    {id:1, text:'Hello'},
    {id:2, text:'World'}
]

function getData(){
    setTimeout(()=>{
        let dataItem = '';
        posts.forEach((post)=>{
            dataItem+=`<p>${post.text}</p>`;
        });
        document.body.innerHTML = dataItem;
    },2000);
}

function createData(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let error = true;
            if(!error){
                resolve();
            }
            else{
                reject('Error in pormise !!!');
            }
        },3000);
    });
}
// getData();
// createData({id:3, text:'World new post'}).then(getData).catch(err=>console.log(err));


// async await
async function startPage() {
    await createData({id:3, text:'World new post'});
    getData();
}

startPage();

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

async function fetchData(){
    let res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data2 = await res2.json();
    console.log(data2);


    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    console.log(data);


}

fetchData();