import React from "react";

interface EmailTemplateProps {
  name: string;
  phoneNumber: string;
  service: string;
  message: string;
}

const EmailTemplate = ({
  name,
  phoneNumber,
  service,
  message,
}: EmailTemplateProps) => {
  return (
    <div className="font-sans text-gray-800">
      <h1 className="text-2xl font-bold mb-4">New Form Submission</h1>

      <p className="mb-6">
        Kamu menerima form baru dari website. Berikut detailnya:
      </p>

      <div className="border border-gray-300 rounded-md p-4 mb-6">
        <p className="mb-2">
          <span className="font-semibold">Nama:</span> {name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Nomor HP:</span> {phoneNumber}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Layanan:</span> {service}
        </p>
        <p className="mt-4">
          <span className="font-semibold">Pesan:</span>
          <br />
          {message}
        </p>
      </div>

      <p className="text-sm text-gray-500">
        Email ini dikirim otomatis dari form website.
      </p>
    </div>
  );
};

export default EmailTemplate;
