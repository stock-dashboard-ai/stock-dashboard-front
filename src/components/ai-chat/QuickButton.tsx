interface QuickButtonProps {
  label: string;
  onClick: () => void;
}

export default function QuickButton({ label, onClick }: QuickButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#111f3d] hover:bg-[#1a3a6a] border border-[#1a3a6a] text-[#c0d4ee] px-[12px] py-[8px] rounded-[8px] text-[12px] font-[600] transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
