function Destinations() {
  const destinations = [
    { name: 'Mars Base Alpha', desc: 'Experience the red planet from our luxurious terraformed dome.', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Europa Ice Fields', desc: 'Skate on the pristine ice sheets covering a subterranean ocean.', img: 'https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Titan Cloud City', desc: 'Float above the methane lakes in our state-of-the-art dirigible resort.', img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000' }
  ];

  return (
    <div className="page-section container pt-5 text-light">
      <h2 className="display-4 fw-bold text-center mb-5 mt-5 pt-4">Breathtaking Destinations</h2>
      <div className="row g-4">
        {destinations.map((dest, idx) => (
          <div key={idx} className="col-md-4">
            <div className="card bg-dark text-light border-secondary h-100 glass-card">
              <img src={dest.img} className="card-img-top" alt={dest.name} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-primary fs-3">{dest.name}</h5>
                <p className="card-text">{dest.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
