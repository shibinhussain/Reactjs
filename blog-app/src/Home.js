import { Button } from '@material-ui/core';

const Home = () => {
  const handleClick = () => {
    console.log('Hello, Bloggers');
  };
  return (
    <div className="home">
      <h2>Home page</h2>
      <Button variant="outlined" color="secondary"  onClick={handleClick}>click me</Button>
    </div>
  );
};

export default Home;
