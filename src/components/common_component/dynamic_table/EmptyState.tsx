import React from 'react';

const EmptyState: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ padding: 24, textAlign: 'center', color: '#6b7280' }}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;