import React from "react";
import * as FaIcons from "react-icons/fa";

interface Tab {
  label: string;
  icon: string; // e.g. "FaHome", "FaHeart"
}

export default function BottomTab1({ tabs = [] }: { tabs: Tab[] }) {
  return (
    <nav className="w-full bg-white border-t shadow-md">
      <div className="flex items-center">
        {tabs.map((tab, idx) => {
          const IconComponent = (FaIcons as Record<string, React.ElementType>)[
            tab.icon
          ];

          return (
            IconComponent && (
              <button
                key={idx}
                className="flex-1 flex flex-col items-center py-2 text-gray-600 hover:text-red-600"
              >
                <IconComponent size={20} />
                <span className="text-xs">{tab.label}</span>
              </button>
            )
          );
        })}
      </div>
    </nav>
  );
}
