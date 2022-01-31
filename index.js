const myFakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: [1, 2, 3, 4, 5],
      message: "I am fullfilled",
    });
  }, 3000);
});

const getData = async () => {
  const res = await myFakePromise;
  console.log(res);
};

try {
  getData();
} catch (error) {
  console.log(error);
} 
