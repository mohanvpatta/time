export const SmallButton = ({
  text,
  action,
}: {
  text: string;
  action?: () => void;
}) => {
  return (
    <div
      className="bg-noir-11 border border-noir-9 px-3.5 py-[3px] rounded text-[13px] max-h-[25px] cursor-pointer hover:bg-noir-10"
      onClick={action}
    >
      {text}
    </div>
  );
};

export const Button = ({
  icon,
  text,
}: {
  icon?: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex bg-noir-11 border border-noir-9 px-3.5 py-[5px] rounded text-[13px] gap-2 place-items-center cursor-pointer hover:bg-noir-10">
      {icon && <div className="">{icon}</div>}
      {text}
    </div>
  );
};

export const SplitButton = ({ options }: { options: string[] }) => {
  return (
    <div className="flex">
      <div className="flex bg-noir-11 border-y border-l border-noir-9 px-3.5 py-[5px] pr-2.5 rounded-l  text-[13px] gap-2 place-items-center cursor-pointer hover:bg-noir-10">
        {options[0]}
      </div>
      <div className="flex bg-noir-11 border border-noir-9 px-3.5 py-[5px] pl-2.5 rounded-r text-[13px] gap-2 place-items-center cursor-pointer hover:bg-noir-10">
        {options[1]}
      </div>
    </div>
  );
};
