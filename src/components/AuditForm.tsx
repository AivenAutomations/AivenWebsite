"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { Icon } from "./Icons";
import { Button } from "./Button";

const BUSINESS_TYPES = [
  "Clinic / Health",
  "Dental Office",
  "Automotive",
  "Real Estate",
  "Gym / Fitness",
  "Internet / Telecom",
  "Agency / Consulting",
  "Other",
];

const TIME_LOSS_OPTIONS = [
  "Answering the same customer questions repeatedly",
  "Following up with leads manually",
  "Creating tickets or requests by hand",
  "Coordinating internally between team members",
  "Responding outside business hours",
  "Other",
];

const CALENDAR_URL = "https://cal.com/aiven-automations/free-audit";

type Status = "idle" | "submitting" | "success" | "error";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, unknown> = {};
    const timeLoss: string[] = [];
    formData.forEach((value, key) => {
      if (key === "timeLoss") {
        timeLoss.push(value as string);
      } else {
        payload[key] = value;
      }
    });
    payload.timeLoss = timeLoss;

    if (timeLoss.length === 0) {
      setStatus("error");
      setErrorMsg("Please select at least one area where your team loses time.");
      return;
    }

    payload.source = "aivenautomations.com /audit";
    payload.submittedAt = new Date().toISOString();

    const endpoint = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL;

    setStatus("submitting");
    setErrorMsg(null);

    try {
      if (!endpoint) {
        // Allow local dev to "succeed" without a configured webhook
        await new Promise((r) => setTimeout(r, 700));
        if (process.env.NODE_ENV === "production") {
          throw new Error(
            "Form endpoint is not configured. Set NEXT_PUBLIC_AUDIT_WEBHOOK_URL.",
          );
        }
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      }

      setStatus("success");
      // Hand the visitor straight to the booking calendar.
      window.location.href = CALENDAR_URL;
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-10 text-center sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aqua/10 text-aqua">
          <Icon.Check width={26} height={26} strokeWidth={2.2} />
        </div>
        <h2 className="mt-6 font-display text-[24px] font-bold tracking-tight text-graphite">
          Taking you to the calendar...
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-graphite/75">
          Redirecting you to book your free audit. If nothing happens,{" "}
          <a href={CALENDAR_URL} className="text-aqua underline">
            click here
          </a>
          .
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <Field
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
        />
        <Field
          label="Business Name"
          name="businessName"
          required
          autoComplete="organization"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
        />

        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Type of Business
            <span className="ml-1 text-aqua">*</span>
          </span>
          <div className="relative mt-2">
            <select
              name="businessType"
              required
              defaultValue=""
              className="block w-full appearance-none rounded-xl border border-line bg-white px-4 py-3 pr-10 text-[15px] text-graphite transition-colors focus:border-aqua focus:outline-none focus-visible:outline-none"
            >
              <option value="" disabled>
                Select your type of business
              </option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <Icon.ChevronDown
              width={16}
              height={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </label>

        <fieldset>
          <legend className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Where does your team lose the most time?
            <span className="ml-1 text-aqua">*</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {TIME_LOSS_OPTIONS.map((opt) => (
              <label
                key={opt}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] text-graphite/85 transition-all hover:border-aqua/40 hover:text-graphite has-[input:checked]:border-aqua has-[input:checked]:bg-aqua/10 has-[input:checked]:text-aqua"
              >
                <input
                  type="checkbox"
                  name="timeLoss"
                  value={opt}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="grid h-4 w-4 place-items-center rounded border border-line bg-white text-aqua transition-colors peer-checked:border-aqua peer-checked:bg-aqua"
                >
                  <Icon.Check
                    width={10}
                    height={10}
                    strokeWidth={2.6}
                    className="opacity-0 peer-checked:opacity-100"
                  />
                </span>
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {errorMsg && (
        <p
          role="alert"
          className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
        >
          {errorMsg}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          aria-busy={submitting}
          className={clsx(submitting && "opacity-80")}
        >
          {submitting ? (
            <>
              <Spinner /> Sending...
            </>
          ) : (
            <>
              Book My Free Audit
              <Icon.ArrowRight width={14} height={14} />
            </>
          )}
        </Button>
        <p className="text-center text-[12px] leading-relaxed text-muted">
          Takes under a minute. You&apos;ll pick a time on the next screen.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search";
  placeholder?: string;
  textarea?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  autoComplete,
  inputMode,
  placeholder,
  textarea,
}: FieldProps) {
  const common =
    "block w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-graphite placeholder:text-muted/70 transition-colors focus:border-aqua focus:outline-none focus-visible:outline-none";
  return (
    <label className="block">
      <span className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          {label}
          {required && <span className="ml-1 text-aqua">*</span>}
        </span>
        {optional && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/70">
            Optional
          </span>
        )}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={clsx(common, "mt-2 resize-y")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          placeholder={placeholder}
          className={clsx(common, "mt-2")}
        />
      )}
    </label>
  );
}

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.2-8.55" />
    </svg>
  );
}
