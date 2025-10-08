import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import jsPDF from "jspdf";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
import DynamicTable from "../../../../components/common_component/dynamic_table";
const invoices = [
  { invoicenumber: "INV001", date: "2025-10-07", status: "Paid" },
  { invoicenumber: "INV002", date: "2025-10-06", status: "Pending" },
  { invoicenumber: "INV003", date: "2025-10-05", status: "Cancelled" },
  { invoicenumber: "INV004", date: "2025-10-04", status: "Paid" },
  { invoicenumber: "INV005", date: "2025-10-03", status: "Pending" },
];

function page() {
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
        <div className="bg-white rounded-b-2xl shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-50 text-gray-700 font-semibold text-sm border-b border-gray-200">
            {columns.map((col) => (
              <div
                key={col.key}
                className="px-6 py-3 uppercase tracking-wide text-[13px]"
              >
                {col.title}
              </div>
            ))}
            <div className="px-6 py-3 uppercase tracking-wide text-[13px]">
              Action
            </div>
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
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
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

              <div className="px-6 py-4 flex items-center">
                <button
                  onClick={() => handleDownloadSinglePDF(invoice)}
                  className="bg-black hover:bg-white hover:text-black text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200 active:scale-95"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardMask>
  );
}

export default page;
