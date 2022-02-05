// const ele = React.createElement('h1',{},"hello")
// ReactDOM.render(
// ele,
// document.getElementById('root'))
// const ele = document.createElement('h1')
// ele.innerText = "hello listen"
// document.getElementById('root').appendChild(ele)
// console.log(ele)

// const ele =document.createElement("h1")
// ele.innerText="asdsffds"
// document.getElementById("root").appendChild(ele)
// console.log(ele)
let counter = 0;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");
const ele = document.getElementById("ele");

plus.addEventListener("click", (e) => {
  counter++;
  count.innerHTML = counter;
  console.log(counter);
  ele.style=`height:${counter}px`
  console.log(ele.style)
});

minus.addEventListener("click", (e) => {
  counter--;
  count.innerHTML = counter;
  console.log(counter);
  ele.style=`height:${counter}px`
  console.log(ele.style)
});
