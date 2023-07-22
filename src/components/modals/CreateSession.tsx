import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ModalWindowsIcon,
  ModalWindowIcon,
  EllipsisIcon,
  MenuExportIcon,
  MenuRemoveIcon,
  MenuHistoryIcon,
} from "../../utils/icons";
import { SmallButton } from "../Buttons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.01,
      staggerDirection: -1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delayChildren: 0.01,
      staggerDirection: -1,
    },
  },
};

const item = (index: number) => {
  return {
    hidden: { opacity: 0, x: 10 * index },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: { opacity: 0, x: 10 * index },
  };
};

const Menu = () => {
  const MenuItemStyling = `h-7 w-9 flex justify-center items-center rounded cursor-pointer flex-shrink-0 hover:bg-noir-14`;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (visibility: boolean) => {
    setShowMenu(visibility);
  };

  return (
    <div
      className="flex items-center gap-1.5"
      onMouseLeave={() => toggleMenu(false)}
    >
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="flex pl-6 py-2"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className={MenuItemStyling} variants={item(3)}>
              <MenuExportIcon />
            </motion.div>
            <motion.div className={MenuItemStyling} variants={item(2)}>
              <MenuHistoryIcon />
            </motion.div>
            <motion.div className={MenuItemStyling} variants={item(1)}>
              <MenuRemoveIcon />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="h-5 w-5 cursor-pointer"
        onMouseEnter={() => toggleMenu(true)}
      >
        {!showMenu && <EllipsisIcon />}
        {/* <EllipsisIcon /> */}
      </div>
    </div>
  );
};

const Header = ({ saved }: { saved: boolean }) => {
  return (
    saved && (
      <div className="h-[40px] bg-noir-13 border-b border-noir-11 flex justify-between items-center pl-3.5 pr-2 rounded-t">
        <div className="flex gap-2">
          <SmallButton text="Open" />
          <SmallButton text="Overwrite" />
        </div>
        <Menu />
      </div>
    )
  );
};

const SessionInput = ({
  saved,
  captureMethod,
  toggleCaptureMethod,
}: {
  saved: boolean;
  captureMethod: string;
  toggleCaptureMethod: () => void;
}) => {
  return (
    <div
      className={`h-[68px] border-b  border-noir-11 border-t-transparent  flex justify-center items-center flex-flex-0 px-[22px]`}
    >
      <div className="h-[34px] flex justify-center flex-grow">
        {!saved && (
          <div
            onClick={toggleCaptureMethod}
            className="w-[40px]  bg-noir-11 flex shrink-0 justify-center items-center rounded-l-[3px] cursor-pointer border border-noir-11 "
          >
            {captureMethod === "all-windows" ? (
              <ModalWindowsIcon />
            ) : (
              <ModalWindowIcon />
            )}
          </div>
        )}

        <div
          className={`flex-grow bg-noir-13 flex pl-2.5 rounded-[3px] border border-noir-11  focus-within:border-noir-9 hover:border-noir-9
          ${!saved && "rounded-l-none"}
          `}
        >
          <input
            type="text"
            placeholder={`${
              saved ? "Rename the session to" : "Save the session as"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Note = ({
  hasNote,
  addNote,
  note,
  updateNote,
}: {
  hasNote: boolean;
  addNote: () => void;
  note: string;
  updateNote: (note: string) => void;
}) => {
  return (
    <div className="h-[80px] border-b border-noir-11 flex justify-center items-center ">
      {hasNote ? (
        <div className="border border-noir-10 w-[340px] h-[48px] rounded-[4px] text-noir-2 py-2 px-2.5 bg-noir-12">
          <textarea
            name="note"
            id="note"
            placeholder="Anything to remember about this session?"
            onChange={(e) => updateNote(e.target.value)}
            defaultValue={note}
          ></textarea>
        </div>
      ) : (
        <div
          className="border border-noir-10 w-[340px] h-[48px] rounded-[4px] border-dashed  flex justify-center items-center text-noir-5 cursor-pointer hover:border-noir-9 hover:bg-noir-13"
          onClick={addNote}
        >
          + Add a note
        </div>
      )}
    </div>
  );
};

const Footer = ({ saveSession }: { saveSession: () => void }) => {
  return (
    <div className="h-[36px] bg-noir-13 flex justify-between items-center pl-3.5 pr-2 rounded-b">
      <div className="flex gap-2.5">
        <div className="text-noir-3 text-[13px]">32 tabs</div>
        <div className="text-noir-3 text-[13px]">2 windows</div>
      </div>
      <SmallButton text="Save" action={saveSession} />
    </div>
  );
};

const CreateSession = () => {
  const [saved, setSaved] = useState(true);
  const [hasNote, setHasNote] = useState(false);
  const [note, setNote] = useState("");
  const [captureMethod, setCaptureMethod] = useState("current-window");

  const toggleCaptureMethod = () => {
    setCaptureMethod(
      captureMethod === "current-window" ? "all-windows" : "current-window"
    );
  };

  const updateNote = (note: string) => {
    setNote(note);
  };

  const addNote = () => {
    setHasNote(true);
  };

  const saveSession = () => {
    if (hasNote && note.length <= 0) {
      setHasNote(false);
    }
    setSaved(true);
  };

  useEffect(() => {
    if (note !== "") {
      setHasNote(true);
    }
  }, []);

  return (
    <div className="max-w-[386px] mx-auto mt-16 bg-noir-14 rounded border border-noir-11">
      <Header saved={saved} />
      <SessionInput
        saved={saved}
        captureMethod={captureMethod}
        toggleCaptureMethod={toggleCaptureMethod}
      />
      <Note
        hasNote={hasNote}
        addNote={addNote}
        note={note}
        updateNote={updateNote}
      />
      <Footer saveSession={saveSession} />
    </div>
  );
};

export default CreateSession;
