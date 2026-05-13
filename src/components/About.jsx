// src/components/About.jsx
const About = ({
  image = "https://via.placeholder.com/215",
  about = "",
}) => {
  return (
    <aside className="max-w-sm mx-auto px-4 py-10 text-center">
      <img
        src={image}
        alt="blog logo"
        className="w-24 h-24 rounded-full object-cover mx-auto mb-6 ring-4 ring-indigo-100"
      />

      {about && (
        <p className="text-base text-gray-500 leading-relaxed">{about}</p>
      )}
    </aside>
  );
};

export default About;