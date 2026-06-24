import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-osteopathy-evidence-safety',
  title: 'Is Osteopathy Safe and Effective for My Baby?',
  category: 'medical',
  searchTerms: [
    'osteopathy for babies safe',
    'cranial osteopathy baby',
    'baby osteopath for colic',
    'craniosacral therapy infant',
    'osteopathy baby evidence',
    'baby chiropractor vs osteopath',
    'osteopathy for reflux baby',
    'osteopathy for flat head baby',
    'is cranial osteopathy effective for babies',
    'pediatric osteopathy safety',
  ],
  quickAnswer:
    'Cranial osteopathy and craniosacral therapy are alternative manual therapies sometimes sought by parents for conditions like colic, reflux, plagiocephaly, and sleep difficulties. The current scientific evidence for their effectiveness in treating infant conditions is limited and inconclusive. While these therapies are generally considered low-risk when performed by trained practitioners, they should not replace evidence-based medical care. Always discuss complementary therapies with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some parents seek cranial osteopathy for newborns based on the theory that birth can cause subtle misalignments that affect the baby\'s comfort. Common reasons include colic, excessive crying, feeding difficulties, and torticollis. A 2019 systematic review published in BMC Pediatrics found limited evidence that osteopathic manipulative treatment may reduce crying time in infants with colic, but the studies had significant methodological limitations. The gentle touch used in cranial osteopathy is unlikely to cause harm when performed by a licensed practitioner, but parents should be cautious about claims that it can treat serious conditions.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Parents may seek osteopathic treatment for reflux, sleep issues, or plagiocephaly (flat head). There is no strong evidence that cranial osteopathy treats reflux — standard medical management (positioning, thickened feeds, medication if needed) is the evidence-based approach. For plagiocephaly, evidence-based treatments include tummy time, repositioning, and in some cases, helmet therapy. The AAP does not endorse cranial osteopathy for any specific infant condition. If you choose to pursue osteopathic treatment, ensure the practitioner is licensed (DO or licensed osteopath), and continue all recommended medical care and well-baby visits.',
    },
    {
      ageRange: '12-36 months',
      context:
        'For toddlers, some parents seek osteopathic treatment for developmental delays, frequent ear infections, or behavioral concerns. There is no strong scientific evidence that osteopathic manipulation effectively treats these conditions in children. Be cautious of any practitioner who claims to diagnose or treat conditions like autism, speech delays, or neurological problems through manual therapy alone. Effective treatments for developmental concerns include early intervention programs, speech and occupational therapy, and medical management as recommended by your pediatrician. Always inform your pediatrician about any complementary therapies your child is receiving.',
    },
  ],
  whenNormal: [
    'You are exploring complementary therapies alongside evidence-based medical care and have discussed it with your pediatrician.',
    'Your baby receives gentle osteopathic treatment from a licensed practitioner and continues all regular medical care.',
    'You understand the limitations of the evidence and are using osteopathy as a complement to, not replacement for, pediatric care.',
  ],
  whenToMention: [
    'You are considering osteopathic treatment for your baby and want your pediatrician\'s perspective.',
    'An osteopath has identified a concern with your baby that your pediatrician has not — discuss this to ensure appropriate evaluation.',
    'You want to understand which of your baby\'s symptoms would benefit more from conventional medical treatment.',
  ],
  whenToActNow: [
    'A practitioner recommends delaying or replacing evidence-based medical treatment (such as vaccines, medication, or surgery) with osteopathic treatment — seek a second medical opinion immediately.',
    'Your baby experiences any adverse effects after osteopathic treatment: unusual crying, changes in behavior, difficulty feeding, or apparent pain — contact your pediatrician.',
    'A practitioner claims they can diagnose or cure serious conditions like autism, seizures, or developmental disorders through manual therapy alone — this is not supported by evidence.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-herbal-supplement-risk', 'baby-homeopathy-teething-tablets-risk'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health — Spinal Manipulation',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Complementary and Alternative Medicine',
      url: 'https://publications.aap.org/pediatrics/article/138/6/e20163070/60355/Mind-Body-Therapies-in-Children-and-Youth',
    },
    {
      org: 'Cochrane',
      citation:
        'Cochrane Library — Manipulative Therapies for Infant Colic',
      url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004796.pub2/full',
    },
  ],
};
