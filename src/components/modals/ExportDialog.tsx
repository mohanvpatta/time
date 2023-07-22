import { ModalWindowIcon, ModalWindowsIcon } from "../../utils/icons";
import { Button, SplitButton } from "../Buttons";

const Dialog = () => {
  return (
    <div className="max-w-[386px] mx-auto  bg-noir-13 rounded mt-16 border border-noir-11">
      <div className="flex p-6 flex-col gap-3 pb-4 border-b border-noir-11">
        <div className="">Export Recommender Systems Research as</div>
        <div className="flex gap-3">
          <Button text="Plaintext" />
          <SplitButton options={["JSON", "w/ Metadata"]} />
        </div>
      </div>
      <div className="h-[36px] bg-noir-14 flex items-center pl-3.5 pr-2 rounded-b">
        <div className="flex gap-2.5">
          <div className="text-noir-5 text-[13px]">
            Links separated by a new line
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
