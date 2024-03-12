interface ScoreProps {
  currentScore: number;
  totalScore: number;
}

export const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
  return (
    <>
      <p>{currentScore}</p>
      <p>{totalScore}</p>
    </>
  );
};
