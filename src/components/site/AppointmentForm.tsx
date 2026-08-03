import { useState } from "react";
import { doctors, timeSlots, treatmentOptions } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-sky focus:ring-2 focus:ring-ring/30 focus:outline-none";
const labelClass = "mb-2 block text-xs font-semibold tracking-wide text-navy uppercase";

/**
 * Premium appointment form with client-side validation and a confirmation popup.
 * Submitting is simulated locally — wire it to a backend (e.g. Lovable Cloud or
 * a PHP/PHPMailer endpoint) to persist bookings and send confirmation mails.
 */
export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState<null | { name: string; date: string; time: string }>(
    null,
  );

  return (
    <>
      <form
        className="grid gap-5 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          setSubmitted({
            name: String(data.get("name") ?? ""),
            date: String(data.get("date") ?? ""),
            time: String(data.get("time") ?? ""),
          });
          e.currentTarget.reset();
        }}
      >
        <div>
          <label className={labelClass} htmlFor="name">
            Patient Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9+\s-]{8,15}"
            className={inputClass}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min={1}
              max={110}
              required
              className={inputClass}
              placeholder="32"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="gender">
              Gender
            </label>
            <select id="gender" name="gender" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select
              </option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="date">
            Preferred Date
          </label>
          <input id="date" name="date" type="date" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="time">
            Preferred Time
          </label>
          <select id="time" name="time" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a slot
            </option>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="treatment">
            Treatment
          </label>
          <select id="treatment" name="treatment" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose treatment
            </option>
            {treatmentOptions.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="doctor">
            Doctor
          </label>
          <select id="doctor" name="doctor" defaultValue="Any available doctor" className={inputClass}>
            <option>Any available doctor</option>
            {doctors.map((d) => (
              <option key={d.name}>
                {d.name} — {d.role}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClass}
              placeholder="Tell us about your symptoms or concerns"
            />
          </div>
        )}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-brand px-6 py-4 font-display text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            <i className="fa-solid fa-calendar-check mr-2" /> Confirm Appointment
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Your details stay confidential. Our coordinator calls back within 15 minutes during
            clinic hours.
          </p>
        </div>
      </form>

      {/* Confirmation popup */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
        >
          <div className="glass w-full max-w-md rounded-3xl p-8 text-center animate-scale-in">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
              <i className="fa-solid fa-check text-2xl" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              Appointment Requested
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Thank you{submitted.name ? `, ${submitted.name}` : ""}! Your slot
              {submitted.date ? ` on ${submitted.date}` : ""}
              {submitted.time ? ` at ${submitted.time}` : ""} has been received. Our team will call
              you shortly to confirm.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(null)}
              className="mt-6 w-full rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
