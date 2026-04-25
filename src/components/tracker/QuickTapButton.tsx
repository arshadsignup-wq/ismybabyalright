"use client";

interface QuickTapButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  color?: "primary" | "safe" | "monitor" | "concern";
  active?: boolean;
  ariaLabel?: string;
}

const colorMap = {
  primary: "bg-primary-light text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground",
  safe: "bg-safe-light text-safe-foreground border-safe-border hover:bg-safe hover:text-white",
  monitor: "bg-monitor-light text-monitor-foreground border-monitor-border hover:bg-monitor hover:text-white",
  concern: "bg-concern-light text-concern-foreground border-concern-border hover:bg-concern hover:text-white",
};

export default function QuickTapButton({
  label,
  icon,
  onClick,
  color = "primary",
  active,
  ariaLabel,
}: QuickTapButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      className={`
        flex flex-col items-center justify-center gap-1.5
        min-h-[4.5rem] min-w-[4.5rem] p-3
        rounded-xl border-2 font-semibold text-sm
        transition-all duration-150 cursor-pointer
        active:scale-95
        ${colorMap[color]}
        ${active ? "ring-2 ring-primary ring-offset-2" : ""}
      `}
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
