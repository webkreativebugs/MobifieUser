import { useEffect } from "react";

export default function Toast({ msg, show, onClose, duration = 3000 }:any) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
        {msg}
      </div>
    </div>
  );
}
