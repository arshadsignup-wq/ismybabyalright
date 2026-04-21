import ActionTier from "@/components/shared/ActionTier";

interface ActionTiersProps {
  whenNormal: string[];
  whenToMention: string[];
  whenToActNow: string[];
}

export default function ActionTiers({
  whenNormal,
  whenToMention,
  whenToActNow,
}: ActionTiersProps) {
  return (
    <section aria-label="When to take action" className="space-y-4">
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">
        When to take action
      </h2>

      <ActionTier
        tier="green"
        title="Probably normal when..."
        items={whenNormal}
      />

      <ActionTier
        tier="yellow"
        title="Mention at your next visit when..."
        items={whenToMention}
      />

      <ActionTier
        tier="red"
        title="Act now when..."
        items={whenToActNow}
      />
    </section>
  );
}
