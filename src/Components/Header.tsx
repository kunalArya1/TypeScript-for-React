type HeaderProps = {
  prop1: string;
};

const Header: React.FC<HeaderProps> = ({ prop1 }) => {
  return (
    <div>
      <h1 className=" text-center font-bold text-3xl">{prop1}</h1>
    </div>
  );
};

export default Header;
