import React from 'react';
import '../Pages/Styles/Card.css';

export default function Card({ title, content, icon, children, className = '' }) {
  return (
    <div className={`wild-card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {content && <p className="card-content">{content}</p>}
      {children}
    </div>
  );
}
