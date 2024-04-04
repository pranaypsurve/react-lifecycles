import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  return <div>Home Page</div>;
};
export default Home;
