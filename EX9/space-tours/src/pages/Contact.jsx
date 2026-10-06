function Contact() {
  return (
    <div className="page-section container pt-5 text-light d-flex flex-column align-items-center">
      <h2 className="display-4 fw-bold text-center mb-4 mt-5 pt-4">Communicate With Us</h2>
      <div className="card bg-dark text-light border-secondary glass-card w-100" style={{ maxWidth: '600px' }}>
        <div className="card-body p-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="form-label fs-5">Earth Name</label>
              <input type="text" className="form-control bg-transparent text-light border-secondary p-3" placeholder="John Doe" />
            </div>
            <div className="mb-4">
              <label className="form-label fs-5">Communication Frequency (Email)</label>
              <input type="email" className="form-control bg-transparent text-light border-secondary p-3" placeholder="john@earth.com" />
            </div>
            <div className="mb-4">
              <label className="form-label fs-5">Transmission Message</label>
              <textarea className="form-control bg-transparent text-light border-secondary p-3" rows="4" placeholder="I would like to book a trip to Europa..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold fs-5">Transmit Signal</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
