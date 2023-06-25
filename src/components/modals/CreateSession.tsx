import React from "react";
import { ModalWindowsIcon, EllipsisIcon } from "../../utils/icons";

const Note = ({ note }: { note: boolean }) => {
  if (note) {
    return (
      <div className="border border-noir-10 w-[340px] h-[48px] rounded-[4px] text-noir-2 py-2 px-3.5 bg-noir-12">
        <textarea name="note" id="note" placeholder="Add a note"></textarea>
      </div>
    );
  } else {
    return (
      <div className="border border-noir-10 w-[340px] h-[48px] rounded-[4px] border-dashed  flex justify-center items-center text-noir-5">
        + Add a note
      </div>
    );
  }
};

const Header = () => {
  return (
    <div className="h-[40px] bg-noir-13 border border-noir-11 flex justify-between items-center pl-3.5 pr-2 rounded-t">
      <div className="flex gap-2">
        <div className=" bg-noir-11 border border-noir-9 px-3.5 py-[3px] rounded text-[13px]">
          Open
        </div>
        <div className=" bg-noir-11 border border-noir-9 px-3.5 py-[3px] rounded text-[13px]">
          Overwrite
        </div>
      </div>
      <div className="">
        <EllipsisIcon />
      </div>
    </div>
  );
};

const CreateSession = () => {
  const [saved, setSaved] = React.useState(true);
  const [note, setNote] = React.useState(false);

  return (
    <div className="max-w-[386px] mx-auto mt-16 bg-noir-14 rounded">
      {saved && <Header />}
      <div
        className={`h-[68px] border  border-noir-11 border-t-transparent  flex justify-center items-center ${
          !saved && "rounded-t border-t-noir-11"
        }`}
      >
        <div className="h-[34px] flex justify-center">
          <div className="w-[40px]  bg-noir-11 flex shrink-0 justify-center items-center rounded-l-[3px]">
            <ModalWindowsIcon />
          </div>
          <div className="w-[300px] bg-noir-13 flex pl-2.5 rounded-r-[3px] border border-noir-11">
            <input type="text" placeholder="Save the session as" />
          </div>
        </div>
      </div>
      <div className="h-[80px] border border-x-noir-11 border-y-transparent flex justify-center items-center ">
        {<Note note={note} />}
      </div>
      <div className="h-[36px] bg-noir-13 border border-noir-11 flex justify-between items-center pl-3.5 pr-2 rounded-b">
        <div className="flex gap-2.5">
          <div className="text-noir-3 text-[13px]">32 tabs</div>
          <div className="text-noir-3 text-[13px]">2 windows</div>
        </div>
        <div className=" bg-noir-11 border border-noir-9 px-3.5 py-[3px] rounded text-[13px]">
          Save
        </div>
      </div>
    </div>
  );
};

export default CreateSession;
