import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface AlertMessageProps {
  message: string;
  type: 'success' | 'error';
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, type }) => {
  return (
    <div
      className={`flex items-center p-3 rounded-md mb-2
        ${type === 'success'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'}
      `}
    >
      <span className="mr-2 text-xl">
        {type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
      </span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default AlertMessage;
