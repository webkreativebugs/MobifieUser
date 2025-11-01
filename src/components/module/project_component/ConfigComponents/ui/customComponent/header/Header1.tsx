// import React from "react";
import { HeaderConfigItem } from "../../../../../../../data/interface/data.interface";

function Header1({ header }: { header: HeaderConfigItem }) {
  // const header = screenConfig.current_confi.header;

  return (
    <header className="shadow mt-8 h-12 w-full overflow-hidden">
      <div className="grid grid-cols-[auto_1fr_auto] items-center w-full max-w-full h-full px-3 py-4 overflow-hidden">
        {/* Left Icons */}
        <div className="flex items-center gap-3 overflow-hidden flex-shrink-0">
          {header?.lefticons?.icons?.map(
            (item, idx) =>
              item.isActive && (
                <div
                  key={idx}
                  className="text-color flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: item.url }}
                />
              )
          )}
        </div>

        {/* Center Text (constrained by grid's 1fr, will truncate, won't expand header) */}
        <div className="min-w-0 px-2 overflow-hidden">
          {header?.lefticons?.text?.isActive && (
            <span
              title={header.lefticons.text.value}
              className="block w-full text-left text-lg font-semibold truncate whitespace-nowrap"
            >
              {header.lefticons.text.value}
            </span>
          )}
          {header?.center?.text?.isActive && (
            <span
              title={header.center.text.value}
              className="block w-full text-center text-lg font-semibold truncate whitespace-nowrap"
            >
              {header.center.text.value}
            </span>
          )}
          {header?.righticons?.text?.isActive && (
            <span
              title={header.righticons.text.value}
              className="block w-full text-right text-lg font-semibold truncate whitespace-nowrap"
            >
              {header.righticons.text.value}
            </span>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 overflow-hidden flex-shrink-0">
          {header?.righticons?.icons?.map(
            (item, idx) =>
              item.isActive && (
                <div
                  key={idx}
                  className="text-color flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: item.url }}
                />
              )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header1;
