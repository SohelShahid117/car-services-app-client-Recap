import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const locationn = useLocation();
  console.log(locationn);

  const navigate = useNavigate();
  console.log(navigate);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login is working");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(locationn?.state ? locationn.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={loginImg} />
        </div>

        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl p-5 w-1/2">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered text-orange-400"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              {/* <button className="btn btn-warning">Login</button> */}
              <input
                type="submit"
                value="Login"
                className="btn btn-warning text-white"
              />
            </div>
          </form>

          <p>
            New to JS Cer Servies?Go To{" "}
            <Link to="/signUp" className="btn btn-warning text-white">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
