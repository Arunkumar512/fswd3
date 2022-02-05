// const ele = React.createElement('h1',{},"hello")
// ReactDOM.render(
// ele,
// document.getElementById('root'))
const ele = document.createElement('h1') 
ele.innerText = "hello listen"
document.getElementById('root').appendChild(ele) 
console.log(ele)