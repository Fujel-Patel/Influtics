import { cn } from "@/lib/utils";

export default function SectionTitle({ subtitle, title, description, className, ...props }) {
  return (
    <div className={cn("text-center space-y-3", className)} {...props}>
      {subtitle && (
        <span className="font-semibold text-brand-pink uppercase tracking-widest">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
