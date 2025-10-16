
import { ScreenConfigInterface } from "../../../../../../../data/interface/data.interface";

function Header1({ screenConfig }: { screenConfig: ScreenConfigInterface }) {
  return (
    <header className="bg-white shadow p-2 mt-4 px-3 py-4 h-12">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {screenConfig.current_confi.header.lefticons?.map((item, idx) => (
            <>
              <button key={idx}>
                {item.isActive && (
                  <img src={item.url} alt="" className="w-7 h-7" />
                )}
              </button>
            </>
          ))}

          <span className="text-red-600 text-xl font-bold  flex items-center">
            {screenConfig.current_confi.header.text}
          </span>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5 text-gray-700">
          {screenConfig.current_confi.header.righticons?.map((item, idx) => (
            <>
              <button key={idx}>
                {item.isActive && (
                  <img src={item.url} alt="" className="w-7 h-7" />
                )}
              </button>
            </>
          ))}
          {/* {rightIcons.map((icon, i) =>
            icon.svg !== "" ? (
              <button
                key={i}
                className="w-6 h-6 text-gray-700"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            ) : null
          )} */}
        </div>
      </div>
    </header>
  );
}

export default Header1;
