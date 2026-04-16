"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    subject: "BES (Bireysel Emeklilik Sistemi)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          apikey: "f40f028d-0335-43e7-8815-46dc76f7a067",
          "Ad Soyad": `${formData.name} ${formData.surname}`,
          Telefon: formData.phone,
          "İlgilenilen Ürün": formData.subject,
          Mesaj: formData.message,
          subject: "Yeni İletişim Formu Mesajı - Cumba Sigorta",
          from_name: "Cumba Sigorta Web",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        // Formu temizle
        setFormData({
          name: "",
          surname: "",
          phone: "",
          subject: "BES (Bireysel Emeklilik Sistemi)",
          message: "",
        });

        // 5 saniye sonra başarı mesajını gizle
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form gönderim hatası", result);
        alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }
    } catch (error) {
      console.error("Fetch hatası", error);
      alert("Bir bağlantı hatası oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSuccess && (
        <div
          className="p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200 transition-all"
          role="alert"
        >
          <p className="font-semibold font-heading text-base mb-1">Başarılı!</p>
          <p className="font-body">
            Mesajınız başarıyla iletildi, en kısa sürede dönüş yapacağız.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy-900 mb-2 font-heading"
          >
            Adınız
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-semibold text-navy-900 mb-2 font-heading"
          >
            Soyadınız
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            required
            value={formData.surname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="Soyadınız"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy-900 mb-2 font-heading"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="05XX XXX XX XX"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-navy-900 mb-2 font-heading"
          >
            İlgilendiğiniz Konu
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
          >
            <option value="BES (Bireysel Emeklilik Sistemi)">
              BES (Bireysel Emeklilik)
            </option>
            <option value="Hayat Sigortasi">Hayat Sigortası</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-navy-900 mb-2 font-heading"
        >
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
          placeholder="Size nasıl yardımcı olabiliriz?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-gold-500 hover:bg-gold-600 text-navy-900 font-heading font-bold text-lg rounded-lg shadow-lg shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
