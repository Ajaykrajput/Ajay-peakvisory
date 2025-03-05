import { useRef, ReactNode } from "react";

interface ToolTipProps {
  children: ReactNode;
  tooltip?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = `${clientX - left}px`;
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip && (
        <span
          ref={tooltipRef}
          className="invisible z-10 group-hover:visible opacity-0 group-hover:opacity-100 transition bg-primary/70 text-white p-1 px-3 rounded absolute top-full mt-0 whitespace-nowrap"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default ToolTip;
