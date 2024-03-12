import "./App.css";
import Header from "./Components/Header";
import QuizComponent from "./Components/QuizApp";
import { QuizData } from "./utils/QuizMockData.js";

function App() {
  return (
    <>
      <Header prop1="Quiz App" />
      {QuizData.map((quiz, index) => (
        <QuizComponent prop1={quiz} key={index} />
      ))}
    </>
  );
}

export default App;
