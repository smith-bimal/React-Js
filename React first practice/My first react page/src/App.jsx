import './App.css';
import ProductTab from "./ProductTab.jsx";
import Counter from './Counter.jsx';
import LudoBoard from './LudoBoard.jsx';
import TodoList from './TodoList.jsx';
import LotteryGame from './LotteryGame.jsx';
import Comment from './Comment.jsx';
import Joke from './Joke.jsx';

function App() {
  return (<>
    <h2><u>1. Amazon Product Tab</u></h2>
    <ProductTab />
    <br />
    <hr />
    <h2><u>2. Counter Button</u></h2>
    <Counter />
    <br />
    <hr />
    <br />
    <h2><u>3. Ludo Board Game</u></h2>
    <LudoBoard />
    <br />
    <hr />
    <br />
    <h2><u>4. Todo List</u></h2>
    <TodoList />
    <br />
    <hr />
    <br />
    <h2><u>5. Lottery Game</u></h2>
    <LotteryGame n={5} winningSum={25} />
    <br />
    <hr />
    <br />
    <h2><u>6. Comment System</u></h2>
    <Comment />
    <hr />
    <br />
    <h2><u>7. Random Joke API fetch using useEffect()</u></h2>
    <Joke />
    <hr />
  </>
  )
}

export default App
