const application_id = "ab15bb07";
const application_key = "a3648852bc281474a6541be616ea4632";
// const search="pizza"
//console.log(endpoint)

const getRecipe = async (query) => {
  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`;
  console.log(endpoint);
  const res = await fetch(endpoint);
  const data = await res.json();
  console.log(data);
};
getRecipe("Pizza");
