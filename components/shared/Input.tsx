import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const baseStyles =
  "w-full border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/60 font-arabic focus:outline-none focus:border-charcoal transition-colors";

export function Input({ className = "", ...props }: InputProps) {
  return <input className={`${baseStyles} ${className}`} {...props} />;
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`${baseStyles} resize-none min-h-[120px] ${className}`}
      {...props}
    />
  );
}
