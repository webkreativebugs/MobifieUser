// import React from "react";

function HeaderScreen() {
  return (
    <div className="w-full p-20 space-y-4">
      <div className="bg-primary  rounded-lg  w-full h-60 p-4">
        <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
          Left View
        </h1>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>title</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>share Icon</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />

            <span>Back Icon</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />

            <span>List Icon</span>
          </label>
        </div>
      </div>
      <div className="bg-primary  rounded-lg  w-full h-60 p-4">
        <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
          Right View
        </h1>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>Cart Icon </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>Share Icon </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span> Icon </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default HeaderScreen;
