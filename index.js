// let value = 11;

// const myFirstPromise = new Promise((resolve, reject) => {
//   if (value > 10) resolve([{ id: 1, data: "this is data" }]);
//   else reject({ error: "error fetching data" });
// });

// myFirstPromise.then((response) => {
//   console.log(response);
// });
// myFirstPromise
//   .then(response => response[0])
//   .then(data => {
//     console.log(data)
//   }).catch(err => { console.log(err) })

// // .catch(error=>{
//     console.log(error);
// })

//make an api call to A
/*
then use the data from A to make another api call to B 
then use the data from A to make another api call to B 
then use the data from a to make another api call to B 
then use the data from a to make another api call to B 
then use the data from a to make another api call to B 
then use the data from a to make another api call to B 
then use the data from a to make another api call to B 


*/
// const getdata = () =>{

// }
// fetch('https://www.google.com/')
// .then(response => response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(response=> response.data)
// .then(data => {
//      console.log(data)
//     }
//  ).catch(err => {
//      console.log(err)
//  })
// console.log(1);
// fetch()
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   });
// console.log(2);

// const getdata = async () => {
//   console.log(1);
//   const response = await fetch();
//   const data = await response.json();
//   console.log(data);
// };
// getdata()
// console.log(3)

const getData = async () => {
  console.log(1);

  // await fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data)
  //     })

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();
  console.log(data);

  console.log(2);
  console.log('12')
  console.log('something')
  console.log('and something')




};

getData();

console.log(3);
