import { ReactNode } from "react";

interface Name {
  name: string;
  children: ReactNode;
}
const HeadingMask = ({ name, children }: Name) => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <h1 className="table-heading text-3xl pl-2">{name}</h1>
      </div>
      <div className=" flex  gap-2  ">{children}</div>
    </div>
  );
};

export default HeadingMask;
