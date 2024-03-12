export type QuizProps = {
  question: string;
  options: string[];
  correctOption: number;
};

type quizPorps1 = {
  prop1: QuizProps;
};

const QuizComponent: React.FC<quizPorps1> = ({ prop1 }) => {
  return (
    <div className=" text-center mt-5 ">
      <h1 className=" font-bold text-2xl mb-3">{prop1.question}</h1>
      <ul className="flex justify-center gap-5 p-3">
        {prop1.options.map((option, index) => (
          <li
            className=" bg-gray-400 p-2 rounded-sm cursor-pointer"
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
      <h1> {prop1.correctOption}</h1>
    </div>
  );
};

export default QuizComponent;
