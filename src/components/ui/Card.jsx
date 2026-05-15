import React from 'react';

const Card = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={`glass ${className}`} 
      style={{
        borderRadius: '12px',
        padding: '1.5rem',
        transition: 'var(--transition)',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Card;
