// src/components/Header.jsx
const Header = ({ name = "My Blog" }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <h1 className="text-xl font-bold text-indigo-600 tracking-tight">
          {name}
        </h1>
      </div>
    </header>
  );
};

export default Header;