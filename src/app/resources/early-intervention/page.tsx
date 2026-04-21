"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { stateContacts } from "@/data/early-intervention/states";

export default function EarlyInterventionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");

  const filteredStates = useMemo(() => {
    if (!searchQuery.trim()) return stateContacts;
    const query = searchQuery.toLowerCase();
    return stateContacts.filter(
      (s) =>
        s.state.toLowerCase().includes(query) ||
        s.stateAbbr.toLowerCase().includes(query) ||
        s.programName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const selectedContact = useMemo(() => {
    if (!selectedState) return null;
    return stateContacts.find((s) => s.stateAbbr === selectedState) ?? null;
  }, [selectedState]);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources/mental-health" },
          { label: "Early Intervention" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Early Intervention</h1>

        {/* Key message */}
        <div className="card border-l-4 border-l-primary mb-8 p-6">
          <p className="text-lg font-semibold text-foreground mb-2">
            You can contact Early Intervention directly. No doctor referral
            needed.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Early Intervention (EI) is a free federal program available in every
            state for children from birth to age 3 with developmental delays or
            disabilities. Evaluations are provided at no cost to families,
            regardless of income or insurance status.
          </p>
        </div>

        {/* How it works */}
        <section className="mb-10" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card-alt p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                <h3 className="text-base font-semibold">Make the Call</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Contact your state&apos;s EI program using the number below.
                Anyone can make a referral -- you, a family member, a doctor, or
                a childcare provider.
              </p>
            </div>

            <div className="card-alt p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                <h3 className="text-base font-semibold">Free Evaluation</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                A team of professionals will evaluate your child at no cost.
                This typically happens in your home or a community setting
                within 45 days of referral.
              </p>
            </div>

            <div className="card-alt p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                <h3 className="text-base font-semibold">
                  Individualized Plan
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                If your child qualifies, your family will work with the team to
                create an Individualized Family Service Plan (IFSP) with
                specific goals and services.
              </p>
            </div>

            <div className="card-alt p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </span>
                <h3 className="text-base font-semibold">Services Begin</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Services may include speech therapy, physical therapy,
                occupational therapy, developmental instruction, and more --
                often provided in your home.
              </p>
            </div>
          </div>
        </section>

        {/* State finder */}
        <section className="mb-10" aria-labelledby="state-finder-heading">
          <h2 id="state-finder-heading">Find Your State&apos;s Program</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1">
              <label
                htmlFor="state-search"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Search by state name
              </label>
              <input
                id="state-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedState("");
                }}
                placeholder="e.g. California, TX, Early Steps..."
                className="w-full px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="sm:w-64">
              <label
                htmlFor="state-select"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Or select your state
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSearchQuery("");
                }}
                className="w-full px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">Choose a state...</option>
                {stateContacts.map((s) => (
                  <option key={s.stateAbbr} value={s.stateAbbr}>
                    {s.state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected state result */}
          {selectedContact && (
            <div className="card border-l-4 border-l-safe p-6 mb-6">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {selectedContact.programName}
              </h3>
              <p className="text-sm text-muted mb-4">
                {selectedContact.state} ({selectedContact.stateAbbr})
              </p>

              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="text-lg font-bold text-primary underline"
                  >
                    {selectedContact.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">Website</p>
                  <a
                    href={selectedContact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline break-all"
                  >
                    {selectedContact.website}
                  </a>
                </div>

                {selectedContact.notes && (
                  <p className="text-sm text-muted mt-1">
                    {selectedContact.notes}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Search results */}
          {searchQuery.trim() && !selectedState && (
            <div className="flex flex-col gap-3">
              {filteredStates.length === 0 ? (
                <p className="text-sm text-muted py-4">
                  No states found matching &quot;{searchQuery}&quot;. Try a
                  different search term.
                </p>
              ) : (
                filteredStates.map((contact) => (
                  <button
                    key={contact.stateAbbr}
                    onClick={() => {
                      setSelectedState(contact.stateAbbr);
                      setSearchQuery("");
                    }}
                    className="card text-left p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                  >
                    <p className="font-semibold text-foreground">
                      {contact.state} -- {contact.programName}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {contact.phone}
                    </p>
                  </button>
                ))
              )}
            </div>
          )}
        </section>

        {/* What to say */}
        <section className="mb-10" aria-labelledby="what-to-say-heading">
          <h2 id="what-to-say-heading">What to Say When You Call</h2>
          <div className="card-alt p-6">
            <p className="text-sm text-muted leading-relaxed mb-4">
              It can feel intimidating to make the call. Here is a script you
              can use or adapt:
            </p>

            <blockquote className="border-l-4 border-l-primary pl-4 py-2 mb-4">
              <p className="text-sm text-foreground leading-relaxed italic">
                &quot;Hi, I would like to make a referral for my child for an
                Early Intervention evaluation. My child is [age] and I have
                concerns about [describe what you are seeing -- e.g., not
                walking yet, not saying any words, seems behind other kids their
                age]. I would like to have them evaluated.&quot;
              </p>
            </blockquote>

            <p className="text-sm text-muted leading-relaxed mb-3">
              That is all you need to say. You do not need to have a diagnosis
              or a doctor&apos;s note. You do not need to justify your concerns.
              Your concern as a parent is enough.
            </p>

            <p className="text-sm text-muted leading-relaxed">
              They will ask for your child&apos;s name, date of birth, your
              contact information, and a brief description of your concerns.
              They will then schedule an evaluation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
