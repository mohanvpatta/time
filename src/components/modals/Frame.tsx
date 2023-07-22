import CreateSession from "./CreateSession";
import History from "./History";
import OverwriteDialog from "./OverwriteDialog";
import ExportDialog from "./ExportDialog";
import ImportDialog from "./ImportDialog";

const Frame = () => {
  return (
    <div className="w-[440px] h-[800px] bg-noir-16 max-h-[440px] overflow-y-scroll ">
      <CreateSession />
      <History />
      <OverwriteDialog />
      <ExportDialog />
      <ImportDialog />
    </div>
  );
};

export default Frame;
