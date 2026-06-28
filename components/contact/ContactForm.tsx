"use client";

import Button from "@/components/shared/Button";
import {
  ContactInput,
  ContactTextarea,
  FormField,
} from "@/components/shared/FormField";

export default function ContactForm() {
  return (
    <section aria-labelledby="contact-form-heading">
      <div className="relative border-t-2 border-l-2 border-copper pt-8 pl-8">
        <h2 id="contact-form-heading" className="sr-only">
          Contact form
        </h2>
        <form
          className="space-y-5"
          dir="rtl"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField label="الاسم">
            <ContactInput type="text" placeholder="أدخلي اسمك" />
          </FormField>
          <FormField label="الإيميل">
            <ContactInput type="email" placeholder="example@email.com" />
          </FormField>
          <FormField label="رقم الهاتف">
            <ContactInput type="tel" placeholder="01xxxxxxxxx" />
          </FormField>
          <FormField label="عنوان الرسالة">
            <ContactInput type="text" placeholder="موضوع رسالتك" />
          </FormField>
          <FormField label="رسالتك">
            <ContactTextarea placeholder="اكتبي رسالتك هنا..." />
          </FormField>
          <Button variant="send" type="submit" className="font-arabic">
            إرسال
          </Button>
        </form>
      </div>
    </section>
  );
}
