"use client";

import { useState } from "react";

const subjectOptions = [
  { value: "", label: "Konu Seçiniz" },
  { value: "bes", label: "Bireysel Emeklilik (BES)" },
  { value: "hayat", label: "Hayat Sigortası" },
  { value: "genel", label: "Genel Bilgi" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compose WhatsApp message
    const subjectLabel =
      subjectOptions.find((o) => o.value === formData.subject)?.label || "Genel";
    const text = `Merhaba, ben ${formData.firstName} ${formData.lastName}.%0A%0AKonu: ${subjectLabel}%0ATelefon: ${formData.phone}%0A%0A${formData.message}`;
    const waUrl = `https://wa.me/905551234567?text=${text}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);

    // Reset after 3s
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", lastName: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl text-navy-900 placeholder-navy-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all duration-300 font-body text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-firstName" className="block text-sm font-medium text-navy-700 mb-1.5">
            Ad
          </label>
          <input
            id="contact-firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Adınız"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-lastName" className="block text-sm font-medium text-navy-700 mb-1.5">
            Soyad
          </label>
          <input
            id="contact-lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Soyadınız"
            required
            className={inputClasses}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-700 mb-1.5">
          Telefon
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="05XX XXX XX XX"
          required
          className={inputClasses}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy-700 mb-1.5">
          Konu
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClasses}
        >
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 mb-1.5">
          Mesajınız
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={isSubmitted}
        className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-heading font-bold text-base rounded-xl transition-all duration-300 shadow-lg ${
          isSubmitted
            ? "bg-green-500 text-white cursor-default"
            : "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 hover:from-gold-400 hover:to-gold-300 hover:-translate-y-0.5 shadow-gold-500/25"
        }`}
      >
        {isSubmitted ? (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            WhatsApp&apos;a Yönlendirildi!
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ile Gönder
          </>
        )}
      </button>
    </form>
  );
}
