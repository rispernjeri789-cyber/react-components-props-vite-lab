// src/components/ArticleList.jsx
import Article from "./Article";

const ArticleList = ({ posts = [] }) => {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;