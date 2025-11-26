"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi").max(50, "Nama terlalu panjang"),
  phoneNumber: z
    .string()
    .min(8, "Nomor tidak valid")
    .regex(/^[0-9]+$/, "Nomor hanya boleh angka"),
  service: z.enum(
    ["Website Landing Page", "Video Editing"],
    "Layanan wajib dipilih",
  ),
  message: z
    .string()
    .min(1, "Pesan wajib diisi")
    .max(800, "Pesan terlalu panjang"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      service: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      toast("Pesan berhasil terkirim!", {
        description: "Kami akan segera menghubungi kamu.",
      });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        {/* NAME */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Nama Anda</FieldLabel>
              <Input
                {...field}
                id="name"
                placeholder="Masukkan nama lengkap"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* PHONE NUMBER */}
        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phoneNumber">Nomor WhatsApp</FieldLabel>
              <Input
                {...field}
                id="phoneNumber"
                placeholder="contoh: 081234567890"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* SERVICE SELECT */}
        <Controller
          name="service"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="service">Layanan</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Layanan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Website Landing Page">
                      Website Landing Page
                    </SelectItem>
                    <SelectItem value="Video Editing">Video Editing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* MESSAGE */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Pesan</FieldLabel>
              <Textarea
                {...field}
                id="message"
                placeholder="Ceritakan kebutuhan Anda..."
                className="min-h-[120px]"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Kirim Pesan
        </Button>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
