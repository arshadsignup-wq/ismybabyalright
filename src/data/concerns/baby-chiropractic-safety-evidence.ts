import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-chiropractic-safety-evidence',
  title: 'Is Chiropractic Care Safe for My Baby?',
  category: 'medical',
  searchTerms: [
    'chiropractic baby safe',
    'baby chiropractor',
    'chiropractic infant evidence',
    'chiropractic baby colic',
    'is chiropractor safe for newborn',
    'pediatric chiropractic',
    'baby spine adjustment safe',
    'chiropractic care infant risks',
    'baby chiropractor colic reflux',
    'chiropractic vs pediatrician baby',
  ],
  quickAnswer:
    'The evidence for chiropractic care in infants is limited and the safety profile is not well established. While some parents report benefits for colic and fussiness, rigorous scientific studies have not consistently shown chiropractic to be more effective than placebo for infant conditions. The AAP has not endorsed chiropractic spinal manipulation for infants. If you choose chiropractic care, ensure the practitioner uses only gentle techniques appropriate for infants and does not discourage evidence-based medical care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some parents seek chiropractic care for newborn colic, feeding difficulties, or perceived birth-related misalignment. Newborn spines are delicate and mostly cartilaginous. Any manipulation must be extremely gentle. Case reports of adverse events, while rare, include injuries from inappropriate force. Discuss with your pediatrician before pursuing chiropractic care for your newborn.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If considering chiropractic care, choose a practitioner experienced specifically with infants who uses only very gentle techniques. Be cautious of claims that spinal adjustments can treat ear infections, reflux, or immune issues, as these claims are not supported by strong evidence.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The same cautions apply. If your baby has torticollis, physical therapy with a licensed pediatric physical therapist has much stronger evidence than chiropractic care. For feeding or developmental concerns, work with your pediatrician and appropriate specialists.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are more robust than infants, but chiropractic manipulation still carries potential risks if inappropriate force is used. Evidence for treating specific pediatric conditions with chiropractic remains limited.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If your family uses chiropractic care, maintain open communication with your pediatrician about all treatments. Be wary of practitioners who claim to treat or prevent serious medical conditions through spinal manipulation, recommend against vaccines, or discourage conventional medical evaluation.',
    },
  ],
  whenNormal: [
    'You are considering chiropractic as a complement to (not replacement for) evidence-based medical care',
    'The practitioner uses only very gentle techniques and does not claim to cure medical conditions',
    'Your baby shows no distress during or after sessions',
  ],
  whenToMention: [
    'You are considering chiropractic care and want your pediatrician\'s input',
    'A chiropractor has recommended treatments or made claims that seem inconsistent with what your pediatrician has told you',
    'You have questions about evidence-based alternatives for your baby\'s symptoms',
  ],
  whenToActNow: [
    'Your baby shows signs of distress, pain, or new symptoms after a chiropractic visit',
    'A practitioner advises against vaccines, prescribed medications, or recommended medical treatments for your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cranial-osteopathy-evidence',
    'baby-physical-therapy-referral',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chiropractic Care for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/Chiropractic-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health. Spinal Manipulation.',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Chiropractic adjustment.',
      url: 'https://www.mayoclinic.org/tests-procedures/chiropractic-adjustment/about/pac-20393513',
    },
  ],
};
