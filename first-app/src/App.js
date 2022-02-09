const Header = () => {
  return (
    <div>
      <h2> To do list </h2>
    </div>
  );
};
const TodoInput = () => {
  return (
    <div>
      <input type="text"></input>
    </div>
  );
};
const PendingItems = (props) => {
  const { chor } = props;
  console.log(chor);
  return (

<ol>
{ chor.map(chor=><li>
  {chor}
</li>)}
</ol>
)}
const App = () => {
  const chor = ["hello ", "listen", "work"];

  return (
    <div>
      <Header />
      <TodoInput />
      <PendingItems chor={chor} />
    </div>
  );
};

export default App;
