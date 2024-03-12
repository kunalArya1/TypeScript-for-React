import { useState } from "react";

export type QuizProps = {
  question: string;
  options: string[];
  correctOption: number;
};

type quizPorps1 = {
  prop1: QuizProps;
};

type checkIndex = (index: number, correctOption: number) => void;

// Check Answer Function
interface checkAnswerType {
  (selectedOption: number, correctOption: number): boolean;
}

const QuizComponent: React.FC<quizPorps1> = ({ prop1 }) => {
  const [answer, setanswer] = useState<boolean>(false);

  const onCLickOptions: checkIndex = (index, correctOption) => {
    const anwservalue = checkAnswer(index + 1, correctOption);
    setanswer(anwservalue);
  };

  console.log(answer);

  const checkAnswer: checkAnswerType = (selectedOption, correctOption) => {
    return selectedOption === correctOption;
  };

  return (
    <div className=" text-center mt-5 ">
      <h1 className=" font-bold text-2xl mb-3">{prop1.question}</h1>
      <ul className="flex justify-center gap-5 p-3">
        {prop1.options.map((option, index) => (
          <li
            onClick={() => onCLickOptions(index, prop1.correctOption)}
            className=" bg-gray-400 p-2 rounded-sm cursor-pointer"
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
      <h1>Correct Options: {prop1.correctOption}</h1>
      {/* <h1> Your Answer : {answer}</h1> */}
    </div>
  );
};

export default QuizComponent;
