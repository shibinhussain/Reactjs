import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'loresm ipsum...', author: 'amar', id: 1 },
    { title: 'Welcome party', body: 'loresm ipsum...', author: 'joshi', id: 2 },
    { title: 'Web dev tips', body: 'loresm ipsum...', author: 'anand', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
