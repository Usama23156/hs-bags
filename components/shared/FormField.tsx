import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
}

export function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-2" dir="rtl">
      <label className="block font-arabic text-sm text-charcoal text-right">
        {label}
      </label>
      {children}
    </div>
  );
}

const contactInputStyles =
  "w-full border border-border bg-[#f7f7f7] rounded px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 font-arabic focus:outline-none focus:border-copper transition-colors";

interface ContactInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface ContactTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function ContactInput({ className = "", ...props }: ContactInputProps) {
  return <input className={`${contactInputStyles} ${className}`} {...props} />;
}

export function ContactTextarea({
  className = "",
  ...props
}: ContactTextareaProps) {
  return (
    <textarea
      className={`${contactInputStyles} resize-none min-h-[140px] ${className}`}
      {...props}
    />
  );
}
