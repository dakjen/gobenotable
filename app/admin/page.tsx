"use client";
import { useState } from "react";

type Application = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  work_impact: string;
  brings_others: string;
  linkedin: string;
  website: string;
  status: string;
  created_at: string;
};

type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"applications" | "contacts">("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const storedPassword = () => password;

  async function login() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/applications", {
        headers: { "x-admin-password": password },
      });
      if (!res.ok) {
        setError("Invalid password");
        setLoading(false);
        return;
      }
      const apps = await res.json();
      setApplications(apps);
      setAuthed(true);

      const contactsRes = await fetch("/api/admin/contacts", {
        headers: { "x-admin-password": password },
      });
      if (contactsRes.ok) setContacts(await contactsRes.json());
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
    await fetch("/api/admin/applications", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": storedPassword(),
      },
      body: JSON.stringify({ id, status }),
    });
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }

  const statusColor = (s: string) => {
    if (s === "approved") return "bg-green-100 text-green-800";
    if (s === "denied") return "bg-red-100 text-red-800";
    return "bg-yellow-100 text-yellow-800";
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-bone flex items-center justify-center px-6">
        <div className="bg-white border border-warm p-8 max-w-sm w-full">
          <h1 className="font-display text-2xl text-ink mb-1">Admin Access</h1>
          <p className="text-[12px] font-light text-[#888] mb-6">
            Enter your admin password to continue.
          </p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            className="bg-white border border-warm text-ink font-sans text-[13px] font-light px-4 py-3.5 outline-none focus:border-crimson w-full mb-4"
          />
          {error && (
            <p className="text-[12px] text-red-600 mb-3">{error}</p>
          )}
          <button
            onClick={login}
            disabled={loading}
            className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 hover:bg-crimson2 transition-colors duration-200 cursor-pointer border-none w-full"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bone px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-3xl text-ink mb-2">Admin Dashboard</h1>
        <p className="text-[12px] font-light text-[#888] mb-8">
          Review submissions and manage Vanguard applications.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-warm">
          <button
            onClick={() => setTab("applications")}
            className={`text-[10px] font-semibold tracking-[2.5px] uppercase pb-3 border-b-2 transition-colors duration-200 cursor-pointer bg-transparent ${
              tab === "applications"
                ? "border-crimson text-crimson"
                : "border-transparent text-[#999] hover:text-ink"
            }`}
          >
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setTab("contacts")}
            className={`text-[10px] font-semibold tracking-[2.5px] uppercase pb-3 border-b-2 transition-colors duration-200 cursor-pointer bg-transparent ${
              tab === "contacts"
                ? "border-crimson text-crimson"
                : "border-transparent text-[#999] hover:text-ink"
            }`}
          >
            Contact Submissions ({contacts.length})
          </button>
        </div>

        {/* Applications Tab */}
        {tab === "applications" && (
          <div className="flex flex-col gap-6">
            {applications.length === 0 && (
              <p className="text-[13px] font-light text-[#999]">No applications yet.</p>
            )}
            {applications.map((app) => (
              <div key={app.id} className="bg-white border border-warm p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl text-ink">
                      {app.first_name} {app.last_name}
                    </h3>
                    <p className="text-[12px] font-light text-[#888]">
                      {app.email} {app.phone && `· ${app.phone}`}
                    </p>
                    {(app.company || app.industry) && (
                      <p className="text-[12px] font-light text-[#888]">
                        {[app.company, app.industry].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded ${statusColor(app.status)}`}>
                      {app.status}
                    </span>
                    <select
                      value={app.status}
                      onChange={(e) => updateStatus(app.id, e.target.value)}
                      className="text-[11px] font-light border border-warm px-2 py-1.5 outline-none bg-white cursor-pointer"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="denied">Denied</option>
                    </select>
                  </div>
                </div>
                {app.work_impact && (
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold tracking-[2px] uppercase text-mauve mb-1">Work & Impact</p>
                    <p className="text-[13px] font-light text-ink leading-relaxed">{app.work_impact}</p>
                  </div>
                )}
                {app.brings_others && (
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold tracking-[2px] uppercase text-mauve mb-1">Brings Others</p>
                    <p className="text-[13px] font-light text-ink leading-relaxed">{app.brings_others}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-4 text-[11px] font-light text-[#888]">
                  {app.linkedin && (
                    <a href={app.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                      LinkedIn
                    </a>
                  )}
                  {app.website && (
                    <a href={app.website} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                      Website
                    </a>
                  )}
                  <span>Submitted {new Date(app.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contacts Tab */}
        {tab === "contacts" && (
          <div className="flex flex-col gap-4">
            {contacts.length === 0 && (
              <p className="text-[13px] font-light text-[#999]">No contact submissions yet.</p>
            )}
            {contacts.map((c) => (
              <div key={c.id} className="bg-white border border-warm p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-display text-lg text-ink">
                      {c.first_name} {c.last_name}
                    </h3>
                    <p className="text-[12px] font-light text-[#888]">
                      {c.email} {c.phone && `· ${c.phone}`}
                    </p>
                  </div>
                  {c.service && (
                    <span className="text-[10px] font-semibold tracking-[2px] uppercase text-mauve bg-bone px-3 py-1.5">
                      {c.service}
                    </span>
                  )}
                </div>
                {c.message && (
                  <p className="text-[13px] font-light text-ink leading-relaxed mt-2">{c.message}</p>
                )}
                <p className="text-[11px] font-light text-[#aaa] mt-3">
                  Submitted {new Date(c.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
