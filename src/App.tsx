import React, { useMemo, useState } from "react";
import { universities, type UniversityData } from "./data";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversityId, setSelectedUniversityId] = useState("");

  const countries = useMemo(() => {
    return Array.from(new Set(universities.map((u) => u.country))).sort();
  }, []);

  const filteredUniversities = useMemo(() => {
    if (!selectedCountry) return [];
    return universities
      .filter((u) => u.country === selectedCountry)
      .sort((a, b) => a.university.localeCompare(b.university));
  }, [selectedCountry]);

  const selectedUniversity: UniversityData | null = useMemo(() => {
    if (!selectedUniversityId) return null;
    return universities.find((u) => u.id === selectedUniversityId) ?? null;
  }, [selectedUniversityId]);

  return (
    <div className="min-h-screen">
      <header className="px-6 py-5 border-b border-black/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-sm opacity-70">GENAI</div>
            <div className="text-xl font-semibold tracking-tight">Governance Explorer</div>
          </div>
          <div className="text-sm opacity-70">Static • No API keys • GitHub Pages-ready</div>
        </div>
      </header>

      <main className="px-6 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <section className="p-6 rounded-2xl bg-white/60 border border-black/10">
            <h1 className="text-2xl font-semibold">Inventory of centrally provisioned GenAI services</h1>
            <p className="mt-2 opacity-80">
              Browse institutions by country. This build is fully static: it only reads the curated dataset in <code>src/data.ts</code>.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <select
                  className="w-full rounded-xl border border-black/15 bg-white px-3 py-2"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedUniversityId("");
                  }}
                >
                  <option value="">Select a country…</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">University</label>
                <select
                  className="w-full rounded-xl border border-black/15 bg-white px-3 py-2"
                  value={selectedUniversityId}
                  onChange={(e) => setSelectedUniversityId(e.target.value)}
                  disabled={!selectedCountry}
                >
                  <option value="">{selectedCountry ? "Select a university…" : "Select a country first…"}</option>
                  {filteredUniversities.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.university}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {selectedUniversity && (
            <section className="p-6 rounded-2xl bg-white/60 border border-black/10">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-sm opacity-70">{selectedUniversity.region}</div>
                  <h2 className="text-xl font-semibold">{selectedUniversity.university}</h2>
                  <div className="text-sm opacity-70 mt-1">{selectedUniversity.country}</div>
                </div>
              </div>

              <div className="mt-6 grid lg:grid-cols-2 gap-4">
                <Card title="Provided tools" content={selectedUniversity.tools} />
                <Card title="Eligibility" content={selectedUniversity.eligible} />
                <Card title="Authentication & data protection" content={selectedUniversity.auth} />
                <Card title="Data classification & rules" content={selectedUniversity.dataRules} />
                <Card title="Logging, retention & audit" content={selectedUniversity.logging} />
                <Card title="Training & approvals" content={selectedUniversity.training} />
                <Card title="Licensing model" content={selectedUniversity.licensing} />
              </div>

              {selectedUniversity.links?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold">References & policy links</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedUniversity.links.map((l, i) => (
                      <li key={i}>
                        <a
                          className="underline underline-offset-4"
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.title}
                        </a>
                        <div className="text-xs opacity-70 break-all">{l.url}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          <footer className="py-6 text-sm opacity-70">
            <div className="max-w-5xl mx-auto">
              Dataset is curated in <code>src/data.ts</code>. Add entries there, redeploy, done.
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-black/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed opacity-90 whitespace-pre-wrap">{content}</div>
    </div>
  );
}
