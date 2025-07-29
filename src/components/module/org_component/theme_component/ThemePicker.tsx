import Themes from "./Themes";
// import ColorPicker from "./ColorPicker";
import { useEffect, useRef } from "react";

const ThemePicker = ({ onClose }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-screen-sm max-h-screen-sm rounded-2xl shadow-lg p-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold pl-1">Themes</h1>
        </div>

        {/* Themes List */}
        <Themes />

        {/* <ColorPicker colorPicker={colorPicker} /> */}
      </div>
    </div>
  );
};

export default ThemePicker;
