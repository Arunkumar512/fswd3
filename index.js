const response = fetch('https://jsonplaceholder.typicode.com/posts')

console.log(response)

setTimeout(() => {
    console.log(response)
}, 500)

