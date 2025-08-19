"use client";

import { useState } from "react";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  zip?: string;
  message?: string;
};

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Prevent multiple submissions
    if (submitting) return;
    
    // Reset all states at the start
    setSubmitting(true);
    setError(null);
    setSubmitted(false);

    const formData = new FormData(event.currentTarget);
    const payload: LeadPayload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim() || undefined,
      service: String(formData.get("service") || "").trim() || undefined,
      zip: String(formData.get("zip") || "").trim() || undefined,
      message: String(formData.get("message") || "").trim() || undefined,
    };

    try {
      console.log("Submitting form:", payload);
      
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      
      // Success - clear error and set submitted
      console.log("Form submitted successfully");
      setSubmitted(true);
      setError(null);
      (event.currentTarget as HTMLFormElement).reset();
      
    } catch (e) {
      console.error("Form submission error:", e);
      setError("Something went wrong. Please call us if this persists.");
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">Request Service</h3>
      <p className="mt-1 text-sm text-black/70 dark:text-white/70">Fast response. Licensed • Insured • ROC360510</p>
      
      {submitted && (
        <div className="mt-3 rounded-md bg-green-50 dark:bg-green-900/20 p-3 text-sm text-green-800 dark:text-green-200">
          Thanks! We received your request and will contact you shortly.
        </div>
      )}
      
      {error && !submitted && (
        <div className="mt-3 rounded-md bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-200">{error}</div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium text-black dark:text-white">Full name</label>
          <input 
            id="name" 
            name="name" 
            required 
            placeholder="Jane Doe" 
            className="h-10 rounded-md border border-black/15 dark:border-white/15 px-3 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700 placeholder-black/50 dark:placeholder-white/50" 
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-black dark:text-white">Phone</label>
          <input 
            id="phone" 
            name="phone" 
            required 
            placeholder="(480) 555-0199" 
            className="h-10 rounded-md border border-black/15 dark:border-white/15 px-3 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700 placeholder-black/50 dark:placeholder-white/50" 
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">Email (optional)</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="you@example.com" 
            className="h-10 rounded-md border border-black/15 dark:border-white/15 px-3 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700 placeholder-black/50 dark:placeholder-white/50" 
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="service" className="text-sm font-medium text-black dark:text-white">Service needed</label>
          <select 
            id="service" 
            name="service" 
            className="h-10 rounded-md border border-black/15 dark:border-white/15 px-3 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700"
          >
            <option>Custom Home</option>
            <option>Renovation / Remodel</option>
            <option>Service & Repairs</option>
            <option>Bathtubs & Showers</option>
            <option>Faucets & Fixtures</option>
            <option>Water Heaters</option>
            <option>Other</option>
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="zip" className="text-sm font-medium text-black dark:text-white">ZIP code</label>
          <input 
            id="zip" 
            name="zip" 
            placeholder="85001" 
            className="h-10 rounded-md border border-black/15 dark:border-white/15 px-3 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700 placeholder-black/50 dark:placeholder-white/50" 
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-medium text-black dark:text-white">Brief description</label>
          <textarea 
            id="message" 
            name="message" 
            rows={3} 
            placeholder="Tell us what's going on" 
            className="rounded-md border border-black/15 dark:border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-primary] text-black dark:text-white bg-white dark:bg-gray-700 placeholder-black/50 dark:placeholder-white/50" 
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-red-700 px-4 text-sm font-semibold text-white shadow hover:bg-red-800 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Get Help Now"}
        </button>
      </form>
    </div>
  );
}


