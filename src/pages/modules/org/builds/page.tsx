import React, { useState } from "react";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import { RiMoreLine } from "react-icons/ri";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

interface ColumnConfig {
  key: string;
  title: string;
}

const builds = [
  {
    version: "v2.0.1",
    date: "2025-10-09",
    history: "Bug fixes",
    status: "Stable",
    updatedBy: "Anubhav",
  },
  {
    version: "v2.0.0",
    date: "2025-10-07",
    history: "New features added",
    status: "Stable",
    updatedBy: "Rohan",
  },
  {
    version: "v1.9.5",
    date: "2025-10-05",
    history: "Performance improvements",
    status: "Beta",
    updatedBy: "Priya",
  },
  {
    version: "v1.9.0",
    date: "2025-10-03",
    history: "Minor bug fixes",
    status: "Stable",
    updatedBy: "Aakash",
  },
];

function page() {
  const navigate = useNavigate();
  const latestBuild = builds[0];
  const olderBuilds = builds.slice(1);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [opendV, setOpendV] = useState<string>("");

  const downloadBuild = (build: typeof latestBuild) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Build Details", 14, 15);

    doc.setFontSize(12);
    doc.text(`Version: ${build.version}`, 14, 30);
    doc.text(`Date: ${build.date}`, 14, 40);
    doc.text(`History: ${build.history}`, 14, 50);
    doc.text(`Status: ${build.status}`, 14, 60);
    doc.text(`Updated By: ${build.updatedBy}`, 14, 70);

    doc.save(`${build.version}.pdf`);
  };

  const columns: ColumnConfig[] = [
    { key: "version", title: "Version" },
    { key: "date", title: "Date" },
    { key: "history", title: "History" },
    { key: "status", title: "Status" },
    { key: "updatedBy", title: "Updated By" },
    // { key: "action", title: "Action" },
  ];
  return (
    <DashboardMask name={DashboardTypeEnums.BUILDS}>
      <HeadingMask name={"Builds"}>
        <div></div>
      </HeadingMask>

      <div className="w-full px-2 mt-8">
        {/* Latest Build */}
        <div className=" bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6 relative overflow-hidden">
          {/* Ribbon or Label */}
          <div className="absolute top-0 left-0 bg-[#7ed957] text-black text-xs font-semibold px-3 py-1 rounded-br-lg">
            Latest Build
          </div>
          <div
            onMouseOver={() => {
              setIsMore(true);
              setOpendV(latestBuild.version);
            }}
            onMouseOut={() => setIsMore(false)}
            className="absolute top-0 right-0 px-3.5 py-1.5"
          >
            <div className="relative">
              <div className="flex justify-end">
                <RiMoreLine className="text-black text-2xl cursor-pointer" />
              </div>

              {isMore && opendV === latestBuild.version && (
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
            </div>
          </div>

          {/* Card Header */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Build Details
          </h3>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">Version:</span>{" "}
                {latestBuild.version}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {latestBuild.date}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">History:</span>{" "}
                {latestBuild.history}
              </p>
            </div>
            <div>
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

        {/* Older Builds Table */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 ">
          <div className="grid grid-cols-6 bg-gray-50 text-gray-700 text-xl font-bold border-b border-gray-200">
            {columns.map((col) => (
              <>
                <div
                  key={col.key}
                  className="px-6 py-3 uppercase tracking-wide text-[13px]"
                >
                  {col.title}
                </div>
              </>
            ))}
            <div className="h-full text-right px-4 py-2">Action</div>
          </div>

          {olderBuilds.map((build, index) => (
            <div
              key={index}
              className={`grid grid-cols-6 text-sm ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all duration-200`}
            >
              <div className="px-6 py-4 font-medium text-gray-800">
                {build.version}
              </div>
              <div className="px-6 py-4 text-gray-600">{build.date}</div>
              <div className="px-6 py-4 text-gray-600">{build.history}</div>
              <div className="px-6 py-4">
                <span
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    build.status === "Stable"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {build.status}
                </span>
              </div>
              <div className="px-6 py-4 text-gray-600">{build.updatedBy}</div>
              {/* <div className="px-3 py-4 flex items-center">
                <button
                  onClick={() => downloadBuild(build)}
                  className="  text-blue-600 text-md  px-4 py-1 font-semibold underline underline-offset-1  rounded-lg "
                >
                  Download
                </button>
              </div> */}
              <div className="flex justify-end items-center">
                <div
                  key={index}
                  className="relative  mr-10" // relative parent
                  onMouseEnter={() => {
                    setIsMore(true);
                    setOpendV(build.version);
                  }}
                  onMouseLeave={() => setIsMore(false)}
                >
                  {/* Icon */}
                  <div className="flex justify-end pr-0">
                    <RiMoreLine className="text-black text-2xl cursor-pointer" />
                  </div>

                  {/* Floating Dropdown */}
                  {isMore && opendV === build.version && (
                    <div className="absolute right-0 top-full mt-[-0px] z-20 border rounded-md shadow-lg bg-white w-28">
                      <button
                        onClick={() => downloadBuild(build)}
                        className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => navigate("/details")}
                        className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        see More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardMask>
  );
}

export default page;
