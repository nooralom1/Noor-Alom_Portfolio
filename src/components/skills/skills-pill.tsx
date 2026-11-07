import { FC, SVGProps } from "react";

import { classNames } from "@/utility/classNames";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  highlight?: boolean;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon, highlight } = props;
  return (
    <div
      className={classNames(
        "group flex w-max items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:px-3.5 sm:py-2.5 sm:text-sm",
        highlight
          ? "bg-accent/15 border-accent/40 text-foreground shadow-sm shadow-accent/10 hover:border-accent hover:bg-accent/25 hover:shadow-accent/25"
          : "border-accent/15 bg-background/80 text-foreground/90 hover:border-accent/40 hover:bg-accent/10 hover:text-foreground hover:shadow-md hover:shadow-accent/10",
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:scale-110 sm:h-5 sm:w-5" />
      <span className="leading-tight">{name}</span>
    </div>
  );
}
