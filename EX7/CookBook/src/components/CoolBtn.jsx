import React from 'react';

function CoolBtn({ label, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 18px',
        backgroundColor: '#d87093',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {label}
    </button>
  );
}

export default CoolBtn;