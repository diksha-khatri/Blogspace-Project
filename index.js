const container = document.getElementById("container")


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const content = data.slice(0,5)
        let innercontent = ''
        for(let post of content){
            innercontent += `
           <h3> ${post.title} </h3> 
           <p>${post.body}</p>
           <hr>
           `
        }
        container.innerHTML = innercontent
    })