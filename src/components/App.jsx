// src/components/App.jsx
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of any React app.",
  },
  {
    id: 2,
    title: "Styling with Tailwind CSS",
    date: "January 10, 2021",
    preview: "Utility-first CSS that keeps your markup clean.",
  },
  {
    id: 3,
    title: "Vite: The Fastest Dev Server",
    date: "March 5, 2021",
    preview: "Near-instant HMR and optimised production builds.",
  },
];

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-50 font-sans">
      <Header name="DevBlog" />
      <ArticleList posts={posts} />
      <About about="A blog about React, modern tooling, and everything frontend." />
    </div>
  );
};

export default App;