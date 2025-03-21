import { useState } from "react";
import { RefreshCcw, Send } from "lucide-react";
const UserFrom = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const movies = [
    { id: 1, title: "Avatar", year: "2009", director: "James Cameron" },
    { id: 2, title: "Inception", year: "2010", director: "Christopher Nolan" },
    {
      id: 3,
      title: "Interstellar",
      year: "2014",
      director: "Christopher Nolan",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      year: "1994",
      director: "Frank Darabont",
    },
    {
      id: 5,
      title: "Pulp Fiction",
      year: "1994",
      director: "Quentin Tarantino",
    },
    { id: 6, title: "Parasite", year: "2019", director: "Bong Joon-ho" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "โปรดใส่ชื่อของคุณ";
    if (!formValues.email) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!formValues.movie) newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formValues);
    }
  };

  const handleReset = () => {
    setFormValues({
      name: "",
      email: "",
      movie: "",
      comment: "",
    });
    setErrors({});
  };

  return (
    <form className="form-containers" onSubmit={handleSubmit}>
      {/* box-name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          ชื่อ <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="กรุณากรอกชื่อของคุณ"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* box-email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          อีเมล <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      {/* box-movie */}
      <div className="mt-5">
        <label className="block text-gray-700 font-medium mb-1">
          เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {movies.map((movie) => (
            <div key={movie.id} className="flex items-start space-x-2">
              <input
                type="radio"
                name="movie"
                value={movie.title}
                id={`movie-${movie.id}`}
                checked={formValues.movie === movie.title}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor={`movie-${movie.id}`} className="text-gray-700">
                <span className="font-medium">
                  {movie.title} ({movie.year})
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Director: {movie.director}
                </span>
              </label>
            </div>
          ))}
        </div>
        {errors.movie && <p className="text-red-500 text-sm">{errors.movie}</p>}
      </div>

      {/* box-comment */}
      <div className="mt-5">
        <label className="block text-gray-700 font-medium mb-1">
          ความคิดเห็นเกี่ยวกับหนัง
        </label>
        <textarea
          name="comment"
          value={formValues.comment}
          onChange={handleChange}
          placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
        ></textarea>
      </div>

      {/* box-button */}
      <div className="flex justify-between items-center border-t mt-5">
        <button
          type="reset"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 cursor-pointer flex items-center mt-5"
          onClick={handleReset}
        >
          <RefreshCcw size={15} className="mr-2" />
          รีเซ็ต
        </button>
        <button
          type="submit"
          className="bg-purple-700 to-indigo-600 text-white px-4 py-2 rounded-md hover:bg-purple-600 flex items-center cursor-pointer mt-5"
        >
          <Send size={15} className="mr-2" />
          ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  );
};

export default UserFrom;
