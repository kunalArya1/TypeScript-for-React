import "./App.css";

type MyComponentProps = {
  prop1: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ prop1 }) => {
  return <h1> {prop1}</h1>;
};

type QuizComponentProps = {
  prop1: {
    question: string;
    answer: string;
  };
};

const QuizComponent: React.FC<QuizComponentProps> = ({ prop1 }) => {
  return (
    <div>
      <h1> {prop1.question}</h1>
      <h1> {prop1.answer}</h1>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Hello TypeScript in react </h1>
      <MyComponent prop1="Kunal Arya" />

      <QuizComponent prop1={{ question: "what is ram", answer: "god" }} />
    </>
  );
}

export default App;
