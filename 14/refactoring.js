// function loadData(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             callback(null, xhr.responseText);
//         } else {
//             callback(new Error(xhr.statusText), null);
//         }
//     };
//     xhr.onerror = function() {
//         callback(new Error("Network error"), null);
//     };
//     xhr.send();
// }

// loadData('https://example.com/data', function(error, data) {
//     if (error) {
//         console.error("Failed to load data:", error);
//     } else {
//         console.log("Data loaded successfully:", data);
//     }
// })


function loadData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}

loadData('https://example.com/data').then(data=>{
    console.log(`Data ${data}`);
}).catch(erro=>{
    console.log(`Fail load ${error}`);
})