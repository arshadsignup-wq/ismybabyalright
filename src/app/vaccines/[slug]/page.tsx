import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import SourceBadge from '@/components/shared/SourceBadge';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';
import {
  allVaccineDetails,
  getVaccineDetailBySlug,
  allVaccineDiseases,
  getVaccineDiseaseBySlug,
} from '@/data/vaccines/details';
import type { VaccineDetail, VaccineDisease } from '@/data/vaccines/detail-types';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const vaccineParams = allVaccineDetails.map((v) => ({ slug: v.slug }));
  const diseaseParams = allVaccineDiseases.map((d) => ({ slug: d.slug }));
  return [...vaccineParams, ...diseaseParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const vaccine = getVaccineDetailBySlug(slug);
  if (vaccine) {
    return {
      title: `${vaccine.name} — Schedule, Side Effects & Safety`,
      description: `Everything parents need to know about the ${vaccine.abbreviation} vaccine: schedule, side effects, ingredients, myths vs facts, and safety data. Based on CDC, AAP, and WHO guidelines.`,
      alternates: { canonical: `/vaccines/${slug}` },
      openGraph: {
        type: 'article',
        title: `${vaccine.name} — Schedule, Side Effects & Safety`,
        description: `Complete guide to the ${vaccine.abbreviation} vaccine: schedule, side effects, effectiveness, and FAQs for parents.`,
      },
    };
  }

  const disease = getVaccineDiseaseBySlug(slug);
  if (disease) {
    return {
      title: `${disease.name} — Symptoms, Risks & Prevention`,
      description: `Learn about ${disease.name}: symptoms in babies, serious complications, how it spreads, and how vaccination prevents it. Evidence-based information for parents.`,
      alternates: { canonical: `/vaccines/${slug}` },
      openGraph: {
        type: 'article',
        title: `${disease.name} — Symptoms, Risks & Prevention`,
        description: `Understand ${disease.name}: symptoms, complications, and why vaccination is the best protection for your child.`,
      },
    };
  }

  return { title: 'Not Found' };
}

export default async function VaccineSlugPage({ params }: Props) {
  const { slug } = await params;

  const vaccine = getVaccineDetailBySlug(slug);
  if (vaccine) {
    return <VaccineDetailSection vaccine={vaccine} slug={slug} />;
  }

  const disease = getVaccineDiseaseBySlug(slug);
  if (disease) {
    return <DiseaseDetailSection disease={disease} slug={slug} />;
  }

  notFound();
}

function VaccineDetailSection({ vaccine, slug }: { vaccine: VaccineDetail; slug: string }) {
  const takeaways = [
    `Prevents: ${vaccine.diseasePrevented.slice(0, 2).join(', ')}`,
    `Schedule: ${vaccine.schedule.length} dose${vaccine.schedule.length > 1 ? 's' : ''} starting at ${vaccine.schedule[0].age}`,
    `Effectiveness: ${vaccine.effectivenessRate.split('.')[0]}.`,
    `Most common side effect: ${vaccine.commonSideEffects[0].split('(')[0].trim()}`,
  ];

  const schema = getContentPageSchema({
    name: vaccine.name,
    description: `Complete guide to the ${vaccine.abbreviation} vaccine for babies: schedule, side effects, safety, and effectiveness.`,
    path: `/vaccines/${slug}`,
    lastModified: '2026-07-01',
    medicalGuidelines: vaccine.sources.map((s) => ({
      name: `${s.org} Vaccine Guidelines`,
      url: s.url,
    })),
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Vaccines', url: '/vaccines' },
    { name: vaccine.name },
  ]);
  const faqSchema = getFAQPageSchema(vaccine.faqItems);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Vaccines', href: '/vaccines' },
        { label: vaccine.name },
      ]} />

      <div className="vaccine-content mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-4">
          {vaccine.abbreviation}
        </span>

        <h1 className="text-2xl font-bold text-foreground mb-2">{vaccine.name}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={vaccine.sources.map(s => s.org)} />
        </div>
        <div className="mb-6">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={takeaways} />

        <section className="mt-8" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-lg font-bold text-foreground mb-3">How it works</h2>
          <p className="text-sm text-muted leading-relaxed">{vaccine.howItWorks}</p>
        </section>

        <section className="mt-8" aria-labelledby="schedule">
          <h2 id="schedule" className="text-lg font-bold text-foreground mb-3">Recommended schedule</h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-alt">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Dose</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Age</th>
                </tr>
              </thead>
              <tbody>
                {vaccine.schedule.map((s) => (
                  <tr key={s.dose} className="border-t border-[#E8E2D9]">
                    <td className="px-4 py-3 text-muted">Dose {s.dose}</td>
                    <td className="px-4 py-3 text-muted">{s.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8" aria-labelledby="side-effects">
          <h2 id="side-effects" className="text-lg font-bold text-foreground mb-3">Side effects</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-[#E8E2D9] bg-white p-4">
              <p className="text-sm font-bold text-foreground mb-2">Common (mild, resolve in 1-2 days)</p>
              <ul className="space-y-2">
                {vaccine.commonSideEffects.map((se, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{se}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
              <p className="text-sm font-bold text-red-800 mb-2">Serious (very rare)</p>
              <ul className="space-y-2">
                {vaccine.seriousReactions.map((sr, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-red-700 leading-relaxed">
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" aria-hidden="true" />
                    <span>{sr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8" aria-labelledby="contraindications">
          <h2 id="contraindications" className="text-lg font-bold text-foreground mb-3">Who should NOT get this vaccine</h2>
          <ul className="space-y-2">
            {vaccine.contraindications.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="effectiveness">
          <h2 id="effectiveness" className="text-lg font-bold text-foreground mb-3">Effectiveness</h2>
          <p className="text-sm text-muted leading-relaxed">{vaccine.effectivenessRate}</p>
        </section>

        <section className="mt-8" aria-labelledby="brands">
          <h2 id="brands" className="text-lg font-bold text-foreground mb-3">Available brands</h2>
          <div className="space-y-2">
            {vaccine.brands.map((brand, i) => (
              <div key={i} className="rounded-lg border border-[#E8E2D9] bg-white px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{brand.name}</p>
                <p className="text-xs text-muted">{brand.manufacturer}</p>
              </div>
            ))}
          </div>
        </section>

        {vaccine.commonMyths.length > 0 && (
          <section className="mt-8" aria-labelledby="myths">
            <h2 id="myths" className="text-lg font-bold text-foreground mb-3">Myths vs. facts</h2>
            <div className="space-y-4">
              {vaccine.commonMyths.map((item, i) => (
                <div key={i} className="rounded-xl border border-[#E8E2D9] bg-white p-4">
                  <p className="text-sm font-semibold text-red-700 mb-2">Myth: &ldquo;{item.myth}&rdquo;</p>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="font-semibold text-green-700">Fact:</span> {item.fact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <FAQSection items={vaccine.faqItems} />
        </div>

        <section className="mt-10" aria-labelledby="vaccine-sources">
          <h3 id="vaccine-sources" className="text-sm font-semibold text-muted mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {vaccine.sources.map((source, i) => (
              <SourceBadge key={i} org={source.org} url={source.url} />
            ))}
          </div>
          <ul className="mt-3 space-y-1">
            {vaccine.sources.map((source, i) => (
              <li key={i} className="text-xs text-muted">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {source.citation}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine
          summary={`The ${vaccine.name} (${vaccine.abbreviation}) is safe, well-studied, and recommended by the CDC, AAP, and WHO. Talk to your pediatrician if you have questions about timing or your child's specific health needs.`}
          supportiveMessage="Choosing to vaccinate your child is one of the most important things you can do to protect their health. If you have concerns, your pediatrician is always happy to talk through them with you."
        />
      </div>
    </article>
  );
}

function DiseaseDetailSection({ disease, slug }: { disease: VaccineDisease; slug: string }) {
  const takeaways = [
    disease.symptoms.find(s => !s.startsWith('Note:')) || disease.symptoms[0],
    `Complications include: ${disease.complications.slice(0, 2).map((c) => c.split('(')[0].trim().split(' — ')[0].trim()).join(', ')}`,
    `Prevented by the ${disease.vaccineSlug.toUpperCase()} vaccine`,
    `Most at risk: ${disease.whoIsAtRisk[0]}`,
  ];

  const schema = getContentPageSchema({
    name: disease.name,
    description: disease.description.slice(0, 155),
    path: `/vaccines/${slug}`,
    lastModified: '2026-07-01',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Vaccines', url: '/vaccines' },
    { name: disease.name },
  ]);

  const faqItems = [
    {
      question: `What are the symptoms of ${disease.name.toLowerCase()} in babies?`,
      answer: `Symptoms of ${disease.name.toLowerCase()} include: ${disease.symptoms.filter(s => !s.startsWith('Note:')).slice(0, 4).join('; ')}. Contact your pediatrician if you notice these signs.`,
    },
    {
      question: `How serious is ${disease.name.toLowerCase()} for infants?`,
      answer: `${disease.name} can be very serious for babies and young children. Potential complications include: ${disease.complications.slice(0, 3).map((c) => c.split('(')[0].trim().split(' — ')[0].trim()).join(', ')}. This is why vaccination is so important.`,
    },
    {
      question: `How can I protect my baby from ${disease.name.toLowerCase()}?`,
      answer: `The most effective protection is vaccination with the ${disease.vaccineSlug.toUpperCase()} vaccine, given according to the CDC-recommended schedule. Until fully vaccinated, avoiding exposure to sick individuals and practicing good hygiene can help reduce risk.`,
    },
    {
      question: `How does ${disease.name.toLowerCase()} spread?`,
      answer: disease.howItSpreads.split('.').slice(0, 2).join('.') + '.',
    },
  ];

  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Vaccines', href: '/vaccines' },
        { label: disease.name },
      ]} />

      <div className="vaccine-content mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700 mb-4">
          Vaccine-Preventable Disease
        </span>

        <h1 className="text-2xl font-bold text-foreground mb-2">{disease.name}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={disease.sources.map(s => s.org)} />
        </div>
        <div className="mb-6">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={takeaways} />

        <section className="mt-8" aria-labelledby="about-disease">
          <h2 id="about-disease" className="text-lg font-bold text-foreground mb-3">About {disease.name}</h2>
          <p className="text-sm text-muted leading-relaxed">{disease.description}</p>
        </section>

        <section className="mt-8" aria-labelledby="symptoms">
          <h2 id="symptoms" className="text-lg font-bold text-foreground mb-3">Symptoms</h2>
          <ul className="space-y-2">
            {disease.symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="complications">
          <h2 id="complications" className="text-lg font-bold text-foreground mb-3">Possible complications</h2>
          <ul className="space-y-2">
            {disease.complications.map((complication, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" aria-hidden="true" />
                <span>{complication}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="transmission">
          <h2 id="transmission" className="text-lg font-bold text-foreground mb-3">How it spreads</h2>
          <p className="text-sm text-muted leading-relaxed">{disease.howItSpreads}</p>
        </section>

        <section className="mt-8" aria-labelledby="risk-groups">
          <h2 id="risk-groups" className="text-lg font-bold text-foreground mb-3">Who is most at risk</h2>
          <ul className="space-y-2">
            {disease.whoIsAtRisk.map((risk, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="history">
          <h2 id="history" className="text-lg font-bold text-foreground mb-3">Historical context</h2>
          <p className="text-sm text-muted leading-relaxed">{disease.historicalContext}</p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <section className="mt-10" aria-labelledby="disease-sources">
          <h3 id="disease-sources" className="text-sm font-semibold text-muted mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {disease.sources.map((source, i) => (
              <SourceBadge key={i} org={source.org} url={source.url} />
            ))}
          </div>
          <ul className="mt-3 space-y-1">
            {disease.sources.map((source, i) => (
              <li key={i} className="text-xs text-muted">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {source.citation}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine
          summary={`${disease.name} is a serious but vaccine-preventable disease. The ${disease.vaccineSlug.toUpperCase()} vaccine is safe, effective, and recommended for all children by the CDC, AAP, and WHO.`}
          supportiveMessage="Vaccination is the single most effective way to protect your child from this disease. Talk to your pediatrician about keeping your baby's immunizations up to date."
        />
      </div>
    </article>
  );
}
