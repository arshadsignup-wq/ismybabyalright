import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby Emergency Guide',
  description: 'Step-by-step emergency response guides for parents. Choking, CPR, burns, falls, poisoning, and more. Know what to do before the ambulance arrives.',
  alternates: { canonical: '/emergency' },
};

const categories = [
  { id: 'medical', label: 'Medical Emergencies', description: 'Choking, CPR, seizures, breathing emergencies', icon: '🚑', href: '/emergency/medical' },
  { id: 'injuries', label: 'Injury Response', description: 'Falls, burns, cuts, broken bones', icon: '🩹', href: '/emergency/injuries' },
  { id: 'ingestion', label: 'Poisoning & Ingestion', description: 'Button batteries, medications, chemicals', icon: '⚠️', href: '/emergency/ingestion' },
  { id: 'environmental', label: 'Environmental', description: 'Drowning, heat stroke, hypothermia', icon: '🌡️', href: '/emergency/environmental' },
  { id: 'preparedness', label: 'Be Prepared', description: 'Emergency kits, plans, CPR training', icon: '📋', href: '/emergency/preparedness' },
];

export default function EmergencyHubPage() {
  const schema = getCollectionPageSchema({
    name: 'Baby Emergency Guide',
    description: 'Step-by-step emergency response guides for parents.',
    path: '/emergency',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Emergency Guide' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ label: 'Emergency Guide' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4 mb-6">
          <p className="text-sm font-bold text-red-800">If your child is in immediate danger, call 911 now.</p>
          <p className="text-xs text-red-700 mt-1">These guides help while you wait for help or for non-emergency situations.</p>
        </div>

        <h1>Baby Emergency Guide</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'AHA', 'Red Cross']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={[
          'Stay calm — your baby needs you to think clearly',
          'Call 911 for any life-threatening emergency before starting first aid',
          'Learn infant CPR and choking response BEFORE you need it',
          'Keep Poison Control number saved: 1-800-222-1222',
        ]} />

        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">Emergency Categories</h2>
          <div className="space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="flex items-start gap-4 rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{cat.icon}</span>
                <div>
                  <span className="font-semibold text-sm text-foreground">{cat.label}</span>
                  <p className="text-xs text-muted mt-0.5">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border-2 border-yellow-200 bg-yellow-50 p-5">
          <h2 className="text-base font-bold text-yellow-800">911 vs ER vs Urgent Care</h2>
          <div className="mt-3 space-y-3 text-sm text-yellow-900">
            <div>
              <p className="font-semibold">Call 911 when:</p>
              <p>Not breathing, choking and turning blue, seizure, head injury with loss of consciousness, severe allergic reaction, unresponsive</p>
            </div>
            <div>
              <p className="font-semibold">Go to ER when:</p>
              <p>Broken bone, deep cut needing stitches, high fever in newborn, severe dehydration, ingestion of dangerous substance</p>
            </div>
            <div>
              <p className="font-semibold">Urgent care when:</p>
              <p>Minor burns, small cuts, ear pain, mild allergic reaction, fever in older baby who looks well</p>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </article>
  );
}
