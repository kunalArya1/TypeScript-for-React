interface ScoreProps {
  currentScore: number;
  totalScore: number;
}

export const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
  return (
    <>
      <div className=" text-center">
        <p>{currentScore}</p>
        <p>{totalScore}</p>
      </div>
    </>
  );
};
