"use client";

import Button from "@/components/shared/Button";
import { Input, Textarea } from "@/components/shared/Input";

export default function InquiryForm() {
  return (
    <section aria-labelledby="inquiry-heading">
      <h2
        id="inquiry-heading"
        className="font-arabic text-lg font-bold text-charcoal mb-5 text-right"
        dir="rtl"
      >
        الاستفسار
      </h2>
      <form
        className="space-y-4"
        dir="rtl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="email" placeholder="البريد الإلكتروني" />
          <Input type="text" placeholder="الاسم" />
          <Input type="tel" placeholder="رقم الهاتف" />
          <Input type="text" placeholder="العنوان" />
        </div>
        <Textarea placeholder="رسالتك أو ملاحظاتك..." />
        <Button variant="primary-full" type="submit" className="font-arabic">
          اطلب
        </Button>
      </form>
    </section>
  );
}
