import React from 'react';

function Menu({ name, image, onSelect }) {
  return (
    <div 
      onClick={onSelect} 
      style={{
        border: '2px solid #ffd1dc',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',
        width: '160px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 6px rgba(216, 112, 147, 0.15)',
        transition: 'transform 0.2s'
      }}
    >
      <img 
        src={image} 
        alt={name} 
        style={{ 
          width: '100%', 
          height: '120px', 
          objectFit: 'cover', 
          borderRadius: '6px' 
        }} 
      />
      <h5 style={{ marginTop: '10px', marginBottom: '0', color: '#8b3a52', fontSize: '14px' }}>{name}</h5>
    </div>
  );
}

export default Menu;