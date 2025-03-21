import { useState } from "react";
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
    <form className="form-container" onSubmit={handleSubmit}>
      {/* box-name */}
      <div>
        <label className="form-label">
          ชื่อ <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="กรุณากรอกชื่อของคุณ"
          className="form-input"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* box-email */}
      <div>
        <label className="form-label">
          อีเมล <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="form-input"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      {/* box-movie */}
      <div>
        <label className="form-label">
          เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {movies.map((movie) => (
            <div key={movie.id} className="form-radio-group">
              <input
                type="radio"
                name="movie"
                value={movie.title}
                id={`movie-${movie.id}`}
                checked={formValues.movie === movie.title}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor={`movie-${movie.id}`} className="form-radio-label">
                <span className="form-radio-title">
                  {movie.title} ({movie.year})
                </span>
                <br />
                <span className="form-radio-director">
                  Director: {movie.director}
                </span>
              </label>
            </div>
          ))}
        </div>
        {errors.movie && <p className="text-red-500 text-sm">{errors.movie}</p>}
      </div>

      {/* box-comment */}
      <div>
        <label className="form-label">ความคิดเห็นเกี่ยวกับหนัง</label>
        <textarea
          name="comment"
          value={formValues.comment}
          onChange={handleChange}
          placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
          className="form-textarea"
          rows="4"
        ></textarea>
      </div>

      {/* box-button */}
      <div className="form-buttons">
        <button
          type="reset"
          className="form-reset-button"
          onClick={handleReset}
        >
          รีเซ็ต
        </button>
        <button type="submit" className="form-submit-button">
          ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  );
};

export default UserFrom;
