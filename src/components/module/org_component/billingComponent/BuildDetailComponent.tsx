import { useState } from "react";
// import { RiMoreLine } from "react-icons/ri";
import CustomizePopUp from "../../project_component/ConfigComponents/common/CustomizePopUp";
import { RxCross2 } from "react-icons/rx";

function BuildDetailComponent() {
  const builds = [
    {
      android_version: "2.0.1",
      ios_version: "2.0.1",
      android_BuildNo: "34",
      ios_BuildNo: "34",

      date: "2025-10-09",
      history: "Bug fixes",
      status: "Stable",
      updatedBy: "Anubhav",
      Discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quasi.",
      ReleaseNotes:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quasi.",
    },
    {
      android_version: "v2.0.1",
      ios_version: "v2.0.1",
      android_BuildNo: "3434454",
      ios_BuildNo: "3434454",
      date: "2025-10-07",
      history: "New features added",
      status: "Stable",
      updatedBy: "Rohan",
    },
    {
      android_version: "2.0.1",
      ios_version: "2.0.1",
      android_BuildNo: "34",
      ios_BuildNo: "44",
      date: "2025-10-05",
      history: "Performance improvements",
      status: "Beta",
      updatedBy: "Priya",
    },
    {
      android_version: "v2.0.1",
      ios_version: "v2.0.1",
      android_BuildNo: "36",
      ios_BuildNo: "34",
      date: "2025-10-03",
      history: "Minor bug fixes",
      status: "Stable",
      updatedBy: "Aakash",
    },
  ];
  const latestBuild = builds[0];
  const homeSections = [
    {
      title: "Home",
      description:
        "Welcome to your personalized dashboard. Access your data, manage preferences, and explore features designed for you.",
    },
    {
      title: "About Us",
      description:
        "We are a forward-thinking company committed to delivering high-quality digital solutions with creativity and efficiency.",
    },
    {
      title: "Services",
      description:
        "Our services include web development, mobile app design, and cloud integration to help businesses grow online.",
    },
    {
      title: "Contact",
      description:
        "Get in touch with our support team for queries, collaborations, or feedback. We’re here to help you 24/7.",
    },
    {
      title: "Careers",
      description:
        "Join our dynamic team and build innovative products that make a real-world impact. Explore open roles today.",
    },
  ];

  const [popUp, setPOpUp] = useState(false);
  const handleView = (item: any) => {
    console.log(item);

    setPOpUp(true);
  };

  return (
    <div className="overflow-scroll">
      <div className="w-full px-2 mt-8">
        {/* Latest Build */}
        <div className=" bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6 relative ">
          {/* Ribbon or Label */}
          {/* <div className="absolute top-0 left-0 bg-[#7ed957] text-black text-xs font-semibold px-3 py-1 rounded-br-lg">
            Latest Build
          </div> */}
          <div
            //   onMouseOver={() => {
            //     setIsMore(true);
            //     setOpendV(latestBuild.android_version);
            //   }}
            //   onMouseOut={() => setIsMore(false)}
            className="absolute top-0 right-0 px-3.5 py-1.5"
          >
            {/* <div className="relative">
              <div className="flex justify-end">
                <RiMoreLine className="text-black text-2xl cursor-pointer" />
              </div>

              {isMore && opendV === latestBuild.android_version && (
                      <div className="border rounded-md shadow-lg">
                        <div className=" mt-1 w-28   z-10">
                          <button
                            onClick={() => downloadBuild(latestBuild)}
                            className="w-full  px-1 py-2 text-black text-sm font-semibold"
                          >
                            Download
                          </button>
                          <button className="w-full  px-1 py-2 text-black text-sm font-semibold">
                            See More
                          </button>
                        </div>
                      </div>
                    )}
            </div> */}
          </div>

          {/* Card Header */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Build Details
          </h3>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-x-2 ">
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">Android Version:</span>{" "}
                {latestBuild.android_version}
              </p>
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">Android Build No:</span>{" "}
                {latestBuild.android_BuildNo}
              </p>
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">iOS Version:</span>{" "}
                {latestBuild.ios_version}
              </p>

              <p className="text-gray-700 font-medium">
                <span className="font-semibold">iOS Build No:</span>{" "}
                {latestBuild.ios_BuildNo}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {latestBuild.date}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">History:</span>{" "}
                {latestBuild.history}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                    latestBuild.status === "Stable"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {latestBuild.status}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Updated By:</span>{" "}
                {latestBuild.updatedBy}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Discription:</span>{" "}
                {latestBuild.Discription}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Release Notes:</span>{" "}
                {latestBuild.ReleaseNotes}
              </p>
            </div>
            {/* <div className="px-3 py-4 flex items-center">
                    <button
                      onClick={() => downloadBuild(latestBuild)}
                      className="  text-blue-600 text-md  px-4 py-1 font-semibold underline underline-offset-1  rounded-lg "
                    >
                      Download
                    </button>
                  </div> */}
          </div>
        </div>
      </div>

      <div className="w-full px-2 mt-2">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-2 relative overflow-hidden">
          {/* LEFT SIDE - APP CHANGES */}
          <div className="border-r border-gray-100 pr-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              App Changes
            </h1>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">1.</span>
                <span>App key changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">2.</span>
                <span>Project display name changes</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - SCREEN CHANGES */}
        </div>
      </div>
      <div className="w-full px-2 mt-2">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-2 relative overflow-hidden">
          <div className="pl-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Screen Changes
            </h1>
            <div className="border-b overflow-hidden">
              {/* Header Row */}
              <div className="flex justify-between bg-gray-100 px-4 py-2 border-b">
                <h1 className="text-sm font-semibold text-gray-600 w-1/4">
                  SCREEN
                </h1>
                <h1 className="text-sm font-semibold text-gray-600 w-2/4">
                  DESCRIPTION
                </h1>
                <h1 className="text-sm font-semibold text-gray-600 w-1/4 text-right">
                  ACTION
                </h1>
              </div>

              {/* Data Rows */}
              {homeSections.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-50 transition-all"
                >
                  <h1 className="text-gray-800 font-medium w-1/4">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-sm w-2/4">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleView(item)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm w-1/4 text-right"
                  >
                    See More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {popUp && (
        <CustomizePopUp setPOpUp={setPOpUp}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-1/3 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 flex justify-center "
          >
            <button
              onClick={() => setPOpUp(false)}
              className="absolute top-1 right-1 text-xl text-red-500"
            >
              <RxCross2 />
            </button>
            <div className="relative w-full max-w-[360px] h-[48rem] aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
              <div className="relative flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                <div className={` bg-secondary`}>
                  {/* <Header1 header={currentConfig.header} /> */}
                  <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                    <img
                      //   src={currentConfig.screen.image}
                      alt="home"
                      className="w-full p-0"
                    />
                  </div>
                  <div className="bg-secondary bottom-4">
                    {/* {currentConfig.bottomtab.isActive && <BottomTab1 />} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomizePopUp>
      )}
    </div>
  );
}

export default BuildDetailComponent;
