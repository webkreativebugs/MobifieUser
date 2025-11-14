import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import jsPDF from "jspdf";
import { RiMoreLine } from "react-icons/ri";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
// import DynamicTable from "../../../../components/common_component/dynamic_table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSortSearchRapper from "../../../../components/common_component/FilterSortSearchRapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const invoices = [
  { invoicenumber: "INV001", date: "2025-10-07", status: "Paid" },
  { invoicenumber: "INV002", date: "2025-10-06", status: "Pending" },
  { invoicenumber: "INV003", date: "2025-10-05", status: "Cancelled" },
  { invoicenumber: "INV004", date: "2025-10-04", status: "Paid" },
  { invoicenumber: "INV005", date: "2025-10-03", status: "Pending" },
];

function page() {
  const navigate = useNavigate();

  const [isMore, setIsMore] = useState<boolean>(false);
  const [opendV, setOpendV] = useState<string>("");
  const columns: ColumnConfig[] = [
    { key: "invoicenumber", title: "Invoice Number" },
    { key: "date", title: "Date" },
    { key: "status", title: "Status" },
  ];
  const handleDownloadSinglePDF = (invoice: {
    invoicenumber: string;
    date: string;
    status: string;
  }) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Invoice Details", 14, 15);

    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoice.invoicenumber}`, 14, 30);
    doc.text(`Date: ${invoice.date}`, 14, 40);
    doc.text(`Status: ${invoice.status}`, 14, 50);

    doc.save(`${invoice.invoicenumber}.pdf`);
  };
  return (
    <DashboardMask name={DashboardTypeEnums.BILLING}>
      <HeadingMask name={"Billing"}>
        <div></div>
      </HeadingMask>
      <div className="w-full px-2 mt-8">
        {/* Page Title */}
        <div>
          <FilterSortSearchRapper />
        </div>
        {/* Header Section */}
        <div className="flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-4 rounded-t-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            Invoice Records
          </h3>
          <p className="text-sm text-gray-500">
            Total: {invoices.length} invoices
          </p>
        </div>

        {/* Invoice List Container */}
        <div className="bg-white rounded-b-2xl shadow-md border border-gray-200 ">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-50 text-gray-700 text-xl font-bold  border-b border-gray-200">
            {columns.map((col) => (
              <div
                key={col.key}
                className="px-6 py-3 uppercase tracking-wide text-[13px]"
              >
                {col.title}
              </div>
            ))}
            <div className="h-full text-right px-4 py-2">Action</div>
          </div>

          {/* Table Rows */}
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 text-sm ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all duration-200`}
            >
              <div className="px-6 py-4 font-medium text-gray-800">
                {invoice.invoicenumber}
              </div>

              <div className="px-6 py-4 text-gray-600">{invoice.date}</div>

              <div className="px-6 py-4">
                <span
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    invoice.status === "Paid"
                      ? "bg-emerald-100 text-emerald-700"
                      : invoice.status === "Pending"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>

              <div className="flex justify-end items-center">
                <div
                  key={index}
                  className="relative  mr-10" // relative parent
                  onMouseEnter={() => {
                    setIsMore(true);
                    setOpendV(invoice.invoicenumber);
                  }}
                  onMouseLeave={() => setIsMore(false)}
                >
                  {/* Icon */}
                  <div className="flex justify-end pr-0">
                    <RiMoreLine className="text-black text-2xl cursor-pointer" />
                  </div>

                  {/* Floating Dropdown */}
                  {isMore && opendV === invoice.invoicenumber && (
                    <div className="absolute right-0 top-full mt-[-0px] z-20 border rounded-md shadow-lg bg-white w-28">
                      <button
                        onClick={() => handleDownloadSinglePDF(invoice)}
                        className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Download
                      </button>
                      <button
                        onClick={() =>
                          navigate("/billing/details", {
                            state: {
                              id: "12345",
                              name: "bill",
                            },
                          })
                        }
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
        <>
          {/* {apiResponse && apiResponse.data?.tickets?.length > 0 && ( */}
          <div className="w-full flex justify-center items-center gap-6 mt-4">
            {/* Previous Button */}
            <button
              className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:opacity-50"
              // disabled={!apiResponse?.data.pageInfo.hasPreviousPage}
              onClick={() => {
                // handlePrev()
              }}
            >
              <IoIosArrowBack className="text-2xl text-[#7ed957]" />
              <span>Prev</span>
            </button>

            {/* Next Button */}
            {/* {apiResponse?.data.pageInfo.hasNextPage && ( */}
            <button
              onClick={() => {
                // getSupport(setApiResponse, setApiError, setLoader);
              }}
              className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              <span>Next</span>
              <IoIosArrowForward className="text-2xl text-[#7ed957]" />
            </button>
            {/* )} */}
          </div>
          {/* )} */}
        </>
      </div>
    </DashboardMask>
  );
}

export default page;
