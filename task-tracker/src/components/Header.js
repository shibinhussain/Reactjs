import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('click');
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
