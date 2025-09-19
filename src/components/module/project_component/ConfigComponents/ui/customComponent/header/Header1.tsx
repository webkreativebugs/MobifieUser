import React from "react";
import { ScreenConfigInterface } from "../../../../../../../data/interface/data.interface";

function Header1({ screenConfig }: { screenConfig: ScreenConfigInterface }) {
  const header = screenConfig.current_confi.header;

  return (
    <header className="bg-white shadow p-2 mt-4 px-3 py-4 h-12">
      <div className="flex items-center justify-between w-full">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {header?.lefticons?.icons?.map((item, idx) =>
            item.isActive ? (
              <button key={idx}>
                <img src={item.url} alt={item.name} className="w-7 h-7" />
              </button>
            ) : null
          )}

          {header?.lefticons?.text?.isActive && (
            <div className="flex-1 text-center">
              <span className="text-lg font-semibold">
                {header.lefticons.text.value}
              </span>
            </div>
          )}
        </div>

        {/* Center Text */}
        {header?.center?.text?.isActive && (
          <div className="flex-1 text-center">
            <span className="text-lg font-semibold">
              {header.center.text.value}
            </span>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-5 text-gray-700">
          {header?.righticons?.text?.isActive && (
            <div className="flex-1 text-center">
              <span className="text-lg font-semibold">
                {header.righticons.text.value}
              </span>
            </div>
          )}
          {header?.righticons?.icons?.map((item, idx) =>
            item.isActive ? (
              <button key={idx}>
                <img src={item.url} alt={item.name} className="w-7 h-7" />
              </button>
            ) : null
          )}
        </div>
      </div>
    </header>
  );
}

export default Header1;
