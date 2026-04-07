import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
};

export function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <span className="icon-box" aria-hidden="true">
      <Icon strokeWidth={1.5} />
    </span>
  );
}
