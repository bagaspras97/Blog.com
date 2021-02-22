import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';
const Home = () => {
  const { data: blogs, isLoading, error, title } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading ...</div> : <BlogList blogs={blogs} title={title} />}
    </div>
  );
};

export default Home;
