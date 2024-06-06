import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.freevector.com/uploads/vector/preview/28148/EducationBackground_Preview_03.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="text-center items-center">
            <h1 className="text-4xl">
              <span className="text-amber-400">Nazmul</span>,{" "}
              <span className="text-cyan-400">
                Follow the instruction Below
              </span>
            </h1>
            <p>
              <span className="text-cyan-400">
                If you new to here and you have no account, press the
              </span>{" "}
              <Link to="/register" className="text-green-300">
                Registration
              </Link>{" "}
              <span className="text-cyan-200">option.</span> <br />{" "}
              <span className="text-cyan-300">otherwise, press the</span>{" "}
              <Link to="/login" className="text-red-300">
                Login
              </Link>
              <span className="text-cyan-200">option.</span>
            </p>
          </div>
          <button className="btn btn-primary mt-4">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
