import React from "react";
import { Link } from "react-router-dom";

function DisplayBillingDetails() {
  const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Main Street, City, State, 123456",
  };

  const invoice = {
    id: "INV-1001",
    date: "2025-10-17",
  };

  const items = [
    { name: "Product A", quantity: 2, price: 500 },
    { name: "Product B", quantity: 1, price: 1200 },
    // { name: "Service C", quantity: 3, price: 300 },
  ];

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const taxRate = 0.18; // 18% GST
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Function to format currency
  const formatCurrency = (amount: any) => `₹${amount.toFixed(2)}`;

  // Generate PDF - All logic restored and finalized
  // const handleDownloadPDF = () => {
  //   // eslint-disable-next-line no-undef
  //   const doc = new jsPDF();
  //   let currentY = 40;

  //   // --- Header ---
  //   doc.setFont("helvetica", "bold");
  //   doc.setFontSize(24);
  //   doc.setTextColor(40, 40, 40);
  //   doc.text("INVOICE", 14, currentY);
  //   currentY += 10;

  //   doc.setFont("helvetica", "normal");
  //   doc.setFontSize(10);
  //   doc.setTextColor(100, 100, 100);
  //   doc.text(`Invoice ID: ${invoice.id}`, 14, currentY);
  //   doc.text(`Date: ${invoice.date}`, 14, currentY + 5);
  //   currentY += 15;

  //   // --- Customer Details ---
  //   doc.setFontSize(14);
  //   doc.setTextColor(0, 0, 0);
  //   doc.text("Billed To:", 14, currentY);
  //   currentY += 5;

  //   doc.setFontSize(10);
  //   doc.setTextColor(50, 50, 50);
  //   doc.text(`Name: ${customer.name}`, 14, currentY + 5);
  //   doc.text(`Email: ${customer.email}`, 14, currentY + 10);
  //   doc.text(`Phone: ${customer.phone}`, 14, currentY + 15);
  //   doc.text(`Address: ${customer.address}`, 14, currentY + 20);
  //   currentY += 30; // Move down after customer details

  //   // --- Table of items (using autoTable) ---
  //   const tableData = items.map((item) => [
  //     item.name,
  //     item.quantity.toString(),
  //     formatCurrency(item.price),
  //     formatCurrency(item.price * item.quantity),
  //   ]);

  //   // Apply autoTable
  //   // eslint-disable-next-line no-undef
  //   autoTable(doc, {
  //     startY: currentY,
  //     head: [["Item", "Quantity", "Price", "Total"]],
  //     body: tableData,
  //     theme: "grid",
  //     styles: { fontSize: 10, cellPadding: 3 },
  //     headStyles: {
  //       fillColor: [30, 64, 175], // Blue header
  //       textColor: 255,
  //       fontStyle: "bold",
  //     },
  //   });

  //   // Get the final Y position after the table
  //   const finalY = doc.lastAutoTable.finalY;

  //   // --- Summary ---
  //   doc.setFontSize(10);
  //   doc.setFont("helvetica", "normal");

  //   const summaryX = 150; // Align summary to the right side of the page

  //   // Subtotal
  //   doc.text(`Subtotal:`, summaryX, finalY + 10, { align: "right" });
  //   doc.text(formatCurrency(subtotal), summaryX + 40, finalY + 10, {
  //     align: "right",
  //   });

  //   // Tax
  //   doc.text(`Tax (${taxRate * 100}% GST):`, summaryX, finalY + 16, {
  //     align: "right",
  //   });
  //   doc.text(formatCurrency(tax), summaryX + 40, finalY + 16, {
  //     align: "right",
  //   });

  //   // Total (Bold and larger)
  //   doc.setDrawColor(0);
  //   doc.setLineWidth(0.5);
  //   doc.line(summaryX - 50, finalY + 18, 195, finalY + 18); // Horizontal line separator

  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "bold");
  //   doc.text(`Total Due:`, summaryX, finalY + 24, { align: "right" });
  //   doc.text(formatCurrency(total), summaryX + 40, finalY + 24, {
  //     align: "right",
  //   });

  //   doc.save(`Invoice-${invoice.id}.pdf`);
  // };

  // Print functionality
  const handlePrint = () => {
    const printContent = document.getElementById("print-section");
    const originalContent = document.body.innerHTML;

    if (printContent) {
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="flex justify-end w-2/3  mt-20 mb-3 gap-4  print:hidden ">
        <button
          onClick={handlePrint}
          className="px-6 py-2 rounded-xl bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-600 transition-all flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 4v3H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm4 7a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          Print
        </button>
        <button
          // onClick={handleDownloadPDF}
          className="px-6 py-2 rounded-xl bg-[#7ed957] text-white font-semibold shadow-lg hover:bg-[#89d966] transition-all flex items-center gap-2 transform hover:scale-[1.02]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path d="M10 2a1 1 0 011 1v7h-2V3a1 1 0 011-1z" />
          </svg>
          Download PDF
        </button>
      </div>
      {/* Action Buttons - HIDDEN ON PRINT */}

      {/* Invoice Card */}
      <div
        id="print-section"
        className="card-bg p-4 w-7/12 h-4/6  rounded-2xl shadow-2xl border border-gray-200"
      >
        {/* Page Header */}
        <div className="flex justify-between items-center  pb-3 mb-3">
          <div>
            <div className="flex items-center justify-center  py-2.5">
              <Link
                to="/"
                className="flex items-center gap-0 text-xl text-[#7ed957] font-extrabold tracking-tight"
              >
                <img
                  src="/assets/MobifieLogo.svg"
                  alt="Mobifie Logo"
                  className="w-[75px]"
                />
                <span className="text-3xl leading-none">Mobifie</span>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-end mr-14 text-[#7ed957]">
              INVOICE
            </h1>
            <p className="text-gray-500 mt-1  text-sm">Invoice no :001</p>
            {/* <span className="text-gray-500 mt-0.5 text-sm">
              Invoice no :001
            </span>{" "}
            <span className="text-gray-500 mt-0.5 text-sm">
              Invoice no :001
            </span> */}
            <p className="text-gray-500 mt-0.5 text-sm">Date :25/08/2024</p>
            <p className="text-gray-500 mt-0.5 text-sm">Due Date :25/08/2025</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="mb-3 mx-8 flex justify-between">
          <div>
            <h1 className="mb-2 font-medium text-gray-500">From</h1>
            <h1 className="text-2xl font-semibold">Mobifie</h1>
            <p>abc@mobifie.gmail.com</p>
            <p>1234567892</p>
            <p>mobifie.com</p>
            <p>
              <span>GST IN:</span>1234567890098765
            </p>
          </div>
          <div>
            <h1 className="mb-2 font-medium text-gray-500">Bill to</h1>
            <h1 className="text-2xl font-semibold">Xyz</h1>
            <p>abc@xyz.gmail.com</p>
            <p>1234567892</p>
            {/* <p>xyz.com</p> */}
            <p>
              <span>GST IN:</span>1234567890098765
            </p>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-4 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7ed957] text-white uppercase text-sm font-bold">
                <th className="p-3 ">Description</th>
                <th className="p-3  text-center w-24">Date</th>
                <th className="p-3  text-right w-32">Price</th>
                {/* <th className="p-3  text-center w-24">Due Date</th> */}
                <th className="p-3  text-center w-24">Tax</th>
                <th className="p-3  text-center w-24">Discount</th>
                <th className="p-3 text-right w-32">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={idx}
                  className={`text-gray-700 hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4 border-r border-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    aliquam nam cumque quae pariatur a iste! Omnis hic maxime
                  </td>
                  <td className="p-1 border-r border-gray-200 text-center">
                    28/05/2025
                  </td>
                  <td className="p-1 border-r border-gray-200 text-right">
                    {formatCurrency(item.price)}
                  </td>
                  {/* <td className="p-1 text-right border-r border-gray-200 font-medium">
                    28/05/2026
                  </td> */}
                  <td className="p-1 text-right border-r border-gray-200 font-medium">
                    18%
                  </td>
                  <td className="p-1 text-right border-r border-gray-200 font-medium">
                    30%
                  </td>
                  <td className="p-1 text-right border-r border-gray-200 font-medium">
                    499
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold">Payment Detail</h1>
            {[
              ["Method", "Bank Transfer (NEFT)"],
              ["Transaction ID", "NEFT20251017XYZ1234"],
              ["Payment Date", "17 Oct 2025"],
              ["Paid Amount", "₹1,500.00"],
              [
                "Status",
                <span className="text-green-600 font-semibold">Paid</span>,
              ],
              ["Bank", "State Bank of India"],
              ["Account Name", "Mobifie Pvt Ltd"],
              ["Account No.", "12345678901"],
              ["IFSC", "SBIN0001234"],
              ["Branch", "Connaught Place, New Delhi"],
            ].map(([label, value], i) => (
              <div key={i} className="text-sm flex">
                <p>{label}:</p>
                {value}
              </div>
            ))}
          </div>
          <div className="w-full sm:w-80">
            <div className="text-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-600">Subtotal:</span>
                <span className="text-gray-800">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-600">Tax:</span>
                <span className="text-gray-800">{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-600">Discount:</span>
                <span className="text-gray-800">-{formatCurrency(tax)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-600">Total:</span>
                <span className="text-gray-800">{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-600">Amount paid:</span>
                <span className="text-gray-800">-{formatCurrency(tax)}</span>
              </div>
            </div>
            <div className="flex justify-between border-t border-[#7ed957] pt-4 mt-4 font-bold text-lg text-gray-900">
              <span>Balance D:</span>
              <span className="text-[#7ed957]">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
        <div className="border mt-3 flex justify-end p-3">
          <div>
            <p>For Mobifie Pvt Ltd</p>
            <img
              className="h-12"
              src="https://tse1.mm.bing.net/th/id/OIP.zMhsEzqRNUWOwXFqlwWZVAAAAA?pid=Api&P=0&h=220"
              alt=""
            />

            <p>Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayBillingDetails;
