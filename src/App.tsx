import "./App.css";
import Header from "./Components/Header";
import QuizComponent from "./Components/QuizApp";
// import { Score } from "./Components/Score.js";
import { QuizData } from "./utils/QuizMockData.js";

function App() {
  return (
    <>
      <Header prop1="Quiz App" />
      {QuizData.map((quiz, index) => (
        <QuizComponent prop1={quiz} key={index} />
      ))}
      {/* <h1 className=" text-center font-bold mt-10"> Score App</h1> */}
      {/* <Score currentScore={10} totalScore={30} /> */}
    </>
  );
}

export default App;
