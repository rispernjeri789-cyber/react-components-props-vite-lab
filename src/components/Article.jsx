// src/components/Article.jsx

// Default date: "January 1, 1970"
const DEFAULT_DATE = new Date(0).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const Article = ({
  title = "Untitled Article",
  date = DEFAULT_DATE,
  preview = "",
}) => {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-indigo-600 cursor-pointer transition-colors">
        {title}
      </h3>

      <small className="block text-xs text-gray-400 mb-3">{date}</small>

      {preview && (
        <p className="text-sm text-gray-500 leading-relaxed">{preview}</p>
      )}
    </article>
  );
};

export default Article;