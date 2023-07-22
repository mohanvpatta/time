const ImportDialog = () => {
  const importOptionsStyle =
    "border border-noir-10 h-[150px] rounded-[4px] border-dashed  flex justify-center items-center text-noir-5 text-[14px] w-[50%] hover:bg-noir-13";

  return (
    <div className="max-w-[386px] mx-auto bg-noir-14 rounded mt-16 border border-noir-11">
      <div className="flex p-3.5 border-b border-noir-11 cursor-pointer">
        <div className={`${importOptionsStyle} rounded-r-none`}>
          Upload a save file
        </div>
        <div
          className={`${importOptionsStyle} border-l-transparent rounded-l-none`}
        >
          Add links manually
        </div>
      </div>
      <div className="h-[36px] bg-noir-13 flex items-center pl-3.5 pr-2 rounded-b cursor-pointer">
        <div className="flex gap-2.5">
          <div className="text-noir-5 text-[13px]">
            .json or newline separated .txt files
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportDialog;
