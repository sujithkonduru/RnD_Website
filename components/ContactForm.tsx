"use client";

import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { collaborationPaths } from "@/lib/data";
import { cn } from "@/lib/utils";

const researchAreas = [
  "Industrial IoT",
  "Embedded systems",
  "Software engineering",
  "Automation",
  "AI and data analysis",
  "Sensor systems",
  "Aquaculture and environment",
  "School R&D programme",
  "College R&D programme",
  "Other",
];

type Status = "idle" | "sending" | "success" | "error";
type Errors = Record<string, string>;

const inputClass =
  "mt-2 w-full border border-biscuit/[0.22] bg-deep px-3.5 py-3 text-[0.9375rem] text-ivory placeholder:text-ivory/25 transition-colors duration-300 hover:border-biscuit/40 focus:border-biscuit focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 text-[0.75rem] leading-relaxed text-[#E3A9AE]">
      {message}
    </p>
  );
}

export default function ContactForm({ initialType = "industry" }: { initialType?: string }) {
  const validType = collaborationPaths.some((path) => path.id === initialType)
    ? initialType
    : "industry";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      payload[key] = String(value);
    });

    const nextErrors: Errors = {};
    if (!payload.name?.trim()) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(payload.email ?? "")) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!payload.organisation?.trim()) {
      nextErrors.organisation = "Enter the organisation you represent.";
    }
    if (!payload.problem?.trim()) {
      nextErrors.problem = "Describe the problem you want investigated.";
    }
    if (!payload.description?.trim() || payload.description.trim().length < 20) {
      nextErrors.description = "Describe the project in at least 20 characters.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "The enquiry could not be sent.");
      setStatus("success");
      form.reset();
    } catch (error) {
      setServerError((error as Error).message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-biscuit/25 bg-deep p-8 sm:p-10">
        <span className="flex h-11 w-11 items-center justify-center border border-biscuit/40 text-biscuit">
          <Check size={18} strokeWidth={1.6} aria-hidden />
        </span>
        <h3 className="t-h3 mt-6 text-ivory">Enquiry sent</h3>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ivory/[0.65]">
          Your enquiry has been passed to the Stackenzo R&amp;D team. If it fits our research
          scope, we will respond with an initial view and next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-outline btn-small mt-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <fieldset>
          <legend className="annotation text-biscuit/[0.45]">Collaboration type</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {collaborationPaths.map((path) => (
              <div key={path.id} className="relative">
                <input
                  type="radio"
                  id={`org-type-${path.id}`}
                  name="orgType"
                  value={path.id}
                  defaultChecked={path.id === validType}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`org-type-${path.id}`}
                  className="block cursor-pointer border border-biscuit/20 px-4 py-3 text-[0.8125rem] leading-snug text-ivory/[0.65] transition-[border-color,background-color,color] duration-300 hover:border-biscuit/[0.45] hover:text-ivory peer-checked:border-brick peer-checked:bg-brick/[0.15] peer-checked:text-ivory peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-biscuit"
                >
                  {path.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <label htmlFor="name" className="annotation text-biscuit/60">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          placeholder="Your name"
        />
        <FieldError id="name" message={errors.name} />
      </div>

      <div>
        <label htmlFor="organisation" className="annotation text-biscuit/60">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          required
          autoComplete="organization"
          aria-invalid={Boolean(errors.organisation)}
          aria-describedby={errors.organisation ? "organisation-error" : undefined}
          className={inputClass}
          placeholder="Company, school, college or institution"
        />
        <FieldError id="organisation" message={errors.organisation} />
      </div>

      <div>
        <label htmlFor="email" className="annotation text-biscuit/60">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          placeholder="name@organisation.com"
        />
        <FieldError id="email" message={errors.email} />
      </div>

      <div>
        <label htmlFor="phone" className="annotation text-biscuit/60">
          Phone <span className="normal-case tracking-normal text-biscuit/[0.35]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+91"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="area" className="annotation text-biscuit/60">
          Research area
        </label>
        <select id="area" name="area" className={cn(inputClass, "appearance-none")} defaultValue="">
          <option value="" disabled>
            Select the closest area
          </option>
          {researchAreas.map((area) => (
            <option key={area} value={area} className="bg-deep text-ivory">
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="problem" className="annotation text-biscuit/60">
          Problem statement
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={3}
          required
          aria-invalid={Boolean(errors.problem)}
          aria-describedby={errors.problem ? "problem-error" : "problem-hint"}
          className={cn(inputClass, "resize-y")}
          placeholder="What is failing, for whom, and how do you measure it today?"
        />
        <p id="problem-hint" className="mt-1.5 text-[0.75rem] leading-relaxed text-ivory/[0.35]">
          One paragraph is enough to start. We will ask for detail if the problem fits.
        </p>
        <FieldError id="problem" message={errors.problem} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="description" className="annotation text-biscuit/60">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
          className={cn(inputClass, "resize-y")}
          placeholder="Context, constraints, existing systems and what has already been tried."
        />
        <FieldError id="description" message={errors.description} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="collaboration" className="annotation text-biscuit/60">
          Expected collaboration
        </label>
        <textarea
          id="collaboration"
          name="collaboration"
          rows={2}
          className={cn(inputClass, "resize-y")}
          placeholder="For example: feasibility study, prototype build, final-year project support."
        />
      </div>

      {/* Honeypot — hidden from users and assistive technology */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <div className="flex flex-col gap-4 border-t border-biscuit/[0.15] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-[0.75rem] leading-relaxed text-ivory/[0.35]">
            Your details are used to respond to this enquiry only.
          </p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-primary min-w-[11rem] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={15} strokeWidth={1.8} className="animate-spin" aria-hidden />
                Sending
              </>
            ) : (
              "Submit enquiry"
            )}
          </button>
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="mt-4 border-l border-[#E3A9AE] pl-3 text-[0.8125rem] leading-relaxed text-[#E3A9AE]"
          >
            {serverError ||
              "The enquiry could not be sent. Please try again or contact us directly."}
          </p>
        )}
      </div>
    </form>
  );
}
