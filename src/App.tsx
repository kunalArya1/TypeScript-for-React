import "./App.css";

function App() {
  return (
    <>
      <h1>Hello TypeScript in react </h1>
      <MyComponent prop1="Kunal Arya" />
    </>
  );
}

type MyComponentProps = {
  prop1: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ prop1 }) => {
  return <h1> {prop1}</h1>;
};

export default App;
