import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validation from "../Validation/Validation";
import { useEffect } from "react";
import styledForm from "./Form.module.css";
import loginLogo2 from "../../assets/login2.webp";

const Form = ({ login, access }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (access) {
      navigate("/Home");
    }
  }, [access, navigate]);

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  return (
    <div className={styledForm.formContenedor}>
      <form className={styledForm.login} onSubmit={handleSubmit}>
        <img src={loginLogo2} alt="" />
        <div className={styledForm.containerLabelsGlobal}>
          <div className={styledForm.containerLabels}>
            <label htmlFor="email">Email:</label>
            <input
              className={styledForm.inputt}
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="test@gmail.com"
            ></input>
          </div>
          {errors.email && <p style={{ color: "white" }}> {errors.email} </p>}

          <div className={styledForm.containerLabels}>
            <label htmlFor="password">Password:</label>
            <input
              className={styledForm.inputt}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="123abc"
            ></input>
          </div>
          {errors.password && (
            <p style={{ color: "white" }}> {errors.password} </p>
          )}

          <button type="Submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
