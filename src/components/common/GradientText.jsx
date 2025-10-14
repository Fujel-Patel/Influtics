import { cn } from "@/lib/utils";

export default function GradientText({ children, className, ...props }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-brand-pink to-brand-orange text-transparent bg-clip-text",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
