import { FAQData } from "../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
interface FaqProps {
  data?: FAQData;
}
import { useState } from "react";
export default function Faq({ data }: FaqProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  return (
    <div className="w-11/12 mt-10  space-y-4">
      {data?.faqs?.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className="w-full border  shadow-sm">
            {/* Question */}
            <div
              className={`flex justify-between items-center px-6 py-6 bg-secondary secondary-inverse cursor-pointer transition duration-300 `}
              onClick={() =>
                setOpenIndexes((prev:any) =>
                  prev.includes(index)
                    ? prev.filter((i:any) => i !== index)
                    : [...prev, index]
                )
              }
            >
              <h5 className=" font-medium secondary-inverse">
                {item.question}
              </h5>
              <div className="text-green-600">
                {isOpen ? (
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M20 60L50 30L80 60"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 100 100">
                    <path
                      d="M20 40L50 70L80 40"
                      fill="none"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Answer */}
            <div
              className={`px-6 overflow-hidden transition-all duration-500 ${
                isOpen
                  ? "max-h-[1000px] opacity-100 py-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <p className="primary-inverse text-sm">{item.answer}</p>
            </div>
          </div>
        );
      })}
      {
        !data&&<p>OOPs on result</p>
      }
    </div>
  );
}
