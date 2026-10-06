import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container text-center text-light">
        <h1 className="display-1 fw-bolder mb-4">Explore The Cosmos</h1>
        <p className="lead mb-5 fs-4 fw-light w-75 mx-auto">
          Embark on the journey of a lifetime. Zenith Space Tours offers unparalleled interstellar travel experiences to the farthest reaches of our galaxy.
        </p>
        <Link to="/destinations" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg glow-btn">
          Begin Your Journey
        </Link>
      </div>
    </div>
  );
}

export default Home;
