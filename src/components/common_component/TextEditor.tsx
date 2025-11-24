import { useState } from "react";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export default function TextEditor({ description }: { description: string }) {
  // const formats = [
  //   "font",
  //   "size",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "color",
  //   "background",
  //   "align",
  // ];
  const [value, setValue] = useState(description);

  return (
    <div className="p-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        // formats={formats}
        className=""
      />
    </div>
  );
}
