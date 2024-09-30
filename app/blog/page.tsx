import Banner from "../components/Banner";
import Filter from "../components/Filter";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Banner />
      <Filter />
      <div>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
