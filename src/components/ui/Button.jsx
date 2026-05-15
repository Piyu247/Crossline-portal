import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', style: customStyle = {}, ...props }) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'var(--transition)',
    border: '1px solid transparent',
    outline: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: '#000',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-main)',
      border: '1px solid var(--border-color)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '1px solid var(--primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--text-main)',
    }
  };

  const sizes = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' }
  };

  const style = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...customStyle
  };
  
  return (
    <button style={style} className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
