import { useEffect, useState } from "react";
import supportticket from "../../../../../../utils/api/supportticketApi/GetSupportTicketById";
import { useloader } from "../../../../../../context/loader_context/LoaderContext";
import { SupportTicketByIdResponse } from "../../../../../../../network/public/project_api/getSupportTicketbyId/GetSupportTicketById.interface";
import { supportTicketId } from "../../../../../../../network/public/project_api/getSupportTicketbyId/GetSupportTicketById.api";
import TextEditor from "../../../../../../components/common_component/TextEditor";

function SupportTicketDetail({ id }: { id: string }) {
  const { setLoader } = useloader();
  const [apiResponse, setApiResponse] = useState<SupportTicketByIdResponse>();
  const [apiError, setApiError] = useState<Error>();

  useEffect(() => {
    supportTicketId._id = id;
    supportticket(setApiResponse, setApiError, setLoader);
  }, [id]);
  useEffect(() => {
    console.log(apiResponse);
  }, [apiResponse]);
  return (
    <>
      <div className=" mt-28 flex gap-2">
        <img
          className="h-12 w-12 rounded-sm "
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="">
          <p className="text-[#7ed957]">Teams in the Space / TISP-2</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-[-5px] ">
            {apiResponse?.data.ticket.subject || "Untitled Ticket"}
          </h1>
        </div>
      </div>
      <div className="mt-6 w-full flex md:flex-row flex-col gap-4">
        <div className="w-full md:w-2/3">
          <div className="flex gap-2 my-6">
            <button className="py-1 px-4 border rounded-md bg-slate-200">
              Edit
            </button>
            <button className="py-1 px-4 border rounded-md bg-slate-200">
              Add comment
            </button>
            <button className="py-1 px-4 border rounded-md bg-slate-200">
              Assign
            </button>
            <button className="py-1 px-4 border rounded-md bg-slate-200">
              More
            </button>
            <button className="py-1 px-4 border rounded-md bg-slate-200">
              To Do
            </button>
          </div>
          {/* Heading outside the box */}

          {/* Info Card */}
          <div className=" ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 card-bg rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="font-semibold text-gray-700 text-lg mb-2">
                Detail
              </h2>
              <br />
              <p>
                <span className="font-semibold text-gray-500">Priority: </span>
                <span className="text-gray-800 capitalize text-md">
                  {apiResponse?.data.ticket.priority || "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-500">
                  Escalation Level:{" "}
                </span>
                <span className="text-gray-800 capitalize text-md">
                  {apiResponse?.data.ticket.escalation_level || "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-500">Status: </span>
                <span className="text-gray-800 capitalize text-md">
                  {apiResponse?.data.ticket.status || "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-500">
                  Project ID:{" "}
                </span>
                <span className="text-gray-800 text-md">
                  {apiResponse?.data.ticket.project_id || "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-500">
                  Customer ID:{" "}
                </span>
                <span className="text-gray-800 text-md">
                  {apiResponse?.data.ticket.customer_id || "N/A"}
                </span>
              </p>
            </div>

            <div className="mt-6 card-bg rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="font-semibold text-gray-700 mb-2">Description:</h2>
              {apiResponse?.data.ticket.description && (
                <TextEditor
                  description={
                    apiResponse?.data.ticket.description ||
                    "No description provided."
                  }
                />
              )}

              {/* <p className="text-gray-600 leading-relaxed">
                {apiResponse?.data.ticket.description ||
                  "No description provided."}
              </p> */}
            </div>
            <div className="mt-6 card-bg rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="font-semibold text-gray-700 mb-2">Attachments</h2>
              <p className="text-gray-600 leading-relaxed">
                {apiResponse?.data.ticket.description ||
                  "No description provided."}
              </p>
            </div>
            <div className="mt-6 card-bg rounded-2xl shadow-md p-6 border border-gray-100">
              {/* <h2 className="font-semibold text-gray-700 mb-2">Activity</h2> */}

              {/* Tab Container */}
              <div className="flex border-b border-gray-200 gap-8 px-3">
                {/* Active Tab */}
                <button
                  className="relative text-[#7ed957] font-semibold px-3 py-2
      after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#7ed957]
      bg-blue-50/60 rounded-t-md backdrop-blur-sm"
                >
                  Comments
                </button>

                <button className="text-gray-500 hover:text-blue-500 px-3 py-2 font-medium">
                  Activity
                </button>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mt-6">
                {apiResponse?.data.ticket.description ||
                  "No description provided."}
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-full  card-bg rounded-2xl shadow-md mt-20 p-4 ">
          <div className="mt-3">
            <h2 className="font-semibold text-gray-700 mb-2 text-xl">People</h2>
            <p>
              <span className="font-semibold text-gray-500">Assignee: </span>
              <span className="text-gray-800 capitalize text-md">
                Unassigned
                {/* {apiResponse?.data.ticket.escalation_level || "N/A"} */}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Reporter: </span>
              <span className="text-gray-800 capitalize text-md">
                Prakhar
                {/* {apiResponse?.data.ticket.escalation_level || "N/A"}  */}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Watchers: </span>
              <span className="text-gray-800 capitalize text-md">
                stop watching this issue
                {/* {apiResponse?.data.ticket.escalation_level || "N/A"} */}
              </span>
            </p>
            <div></div>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold text-gray-500 mb-2">Dates</h2>
            <p>
              <span className="font-semibold text-gray-500">Created: </span>
              <span className="text-gray-800 capitalize text-md">
                5 Days ago
                {/* {apiResponse?.data.ticket.escalation_level || "N/A"}  */}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Updated: </span>
              <span className="text-gray-800 capitalize text-md">
                Just now
                {/* {apiResponse?.data.ticket.escalation_level || "N/A"}  */}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportTicketDetail;
