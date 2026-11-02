import { NextResponse } from "next/server";
const esc = (s: unknown) => String(s ?? "").replace(/[<>&]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d || d.website) return NextResponse.json({ ok: true }); // honeypot
  if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email || "") || (d.description || "").length < 20) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "Form service is not configured yet." }, { status: 503 });
  const html = Object.entries(d).map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join("");
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to, reply_to: d.email, subject: `R&D enquiry: ${d.organisation}`, html }) });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Could not send. Please try again." }, { status: 502 });
}
