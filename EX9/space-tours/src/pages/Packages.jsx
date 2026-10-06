function Packages() {
  return (
    <div className="page-section container pt-5 text-light">
      <h2 className="display-4 fw-bold text-center mb-5 mt-5 pt-4">Travel Packages</h2>
      <div className="row g-5 justify-content-center">
        <div className="col-md-5">
          <div className="card bg-dark text-light border-primary h-100 p-4 glass-card text-center">
            <h3 className="card-title text-primary">Orbital Express</h3>
            <h1 className="display-5 fw-bold my-4">$99,999</h1>
            <ul className="list-unstyled mb-4 text-start ms-4">
              <li className="mb-2">✓ 3 Days in Low Earth Orbit</li>
              <li className="mb-2">✓ Zero-G Training</li>
              <li className="mb-2">✓ Standard Accommodations</li>
            </ul>
            <button className="btn btn-outline-primary btn-lg mt-auto rounded-pill">Book Now</button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card bg-primary text-light border-0 h-100 p-4 glow-card text-center">
            <h3 className="card-title">Interstellar Elite</h3>
            <h1 className="display-5 fw-bold my-4">$1.5M</h1>
            <ul className="list-unstyled mb-4 text-start ms-4">
              <li className="mb-2">✓ 2 Weeks on Mars Base Alpha</li>
              <li className="mb-2">✓ Luxury Suites</li>
              <li className="mb-2">✓ Spacewalk Experience</li>
              <li className="mb-2">✓ Martian Rover Excursion</li>
            </ul>
            <button className="btn btn-light text-primary btn-lg mt-auto rounded-pill fw-bold">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
