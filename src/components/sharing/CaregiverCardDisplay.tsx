import type { CaregiverCard } from "@/data/sharing/types";

interface CaregiverCardDisplayProps {
  card: CaregiverCard;
}

export default function CaregiverCardDisplay({ card }: CaregiverCardDisplayProps) {
  return (
    <div className="card p-5 print:border-2 print:border-black" role="region" aria-label="Caregiver card">
      <h2 className="text-lg font-bold text-foreground mb-1">
        {card.babyName}  -  What You Need to Know
      </h2>
      <p className="text-xs text-muted mb-4">
        Born {card.birthDate}
      </p>

      <div className="flex flex-col gap-4">
        {/* Allergies */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-1">Allergies</h3>
          {card.allergies.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {card.allergies.map((a, i) => (
                <span
                  key={i}
                  className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-concern-light text-concern-foreground border border-concern-border"
                >
                  {a}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">None listed</p>
          )}
        </div>

        {/* Medications */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-1">Current Medications</h3>
          {card.medications.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-foreground">
              {card.medications.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">None listed</p>
          )}
        </div>

        {/* Pediatrician */}
        {card.pediatrician && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Pediatrician</h3>
            <p className="text-sm text-foreground">{card.pediatrician.name}</p>
            <a
              href={`tel:${card.pediatrician.phone}`}
              className="text-sm text-primary font-medium"
            >
              {card.pediatrician.phone}
            </a>
            {card.pediatrician.clinic && (
              <p className="text-xs text-muted">{card.pediatrician.clinic}</p>
            )}
          </div>
        )}

        {/* Emergency contacts */}
        {card.emergencyContacts.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Emergency Contacts</h3>
            <div className="flex flex-col gap-2">
              {card.emergencyContacts.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-medium text-foreground">{c.name}</span>
                    {c.relationship && (
                      <span className="text-muted ml-1">({c.relationship})</span>
                    )}
                  </div>
                  <a href={`tel:${c.phone}`} className="text-primary font-medium">
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {card.notes && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Notes</h3>
            <p className="text-sm text-foreground whitespace-pre-wrap">{card.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
