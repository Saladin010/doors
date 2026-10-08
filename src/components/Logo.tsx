import { cn } from "@/utils/cn";

export function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img 
        src="/logo.jpg" 
        alt="سمارت لتصنيع أبواب الطوارئ" 
        className="h-12 w-auto object-contain rounded-md"
      />
    </span>
  );
}
