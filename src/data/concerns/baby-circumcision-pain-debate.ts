import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-circumcision-pain-debate',
  title: 'Circumcision Pain and Recovery in Newborns',
  category: 'medical',
  searchTerms: [
    'circumcision pain baby',
    'newborn circumcision recovery',
    'circumcision pain management baby',
    'does circumcision hurt baby',
    'circumcision healing time newborn',
    'circumcision aftercare baby',
    'circumcision risks and benefits',
    'circumcision decision baby',
    'baby in pain after circumcision',
    'circumcision complications signs',
  ],
  quickAnswer:
    'The AAP states that the health benefits of newborn male circumcision outweigh the risks but are not great enough to recommend universal circumcision. Modern circumcision procedures use local anesthesia (nerve block or topical cream) to manage pain during the procedure. Recovery typically takes 7-10 days, and appropriate pain management with acetaminophen and proper wound care helps minimize discomfort. The decision is ultimately a personal one involving medical, cultural, and family considerations.',
  byAge: [
    {
      ageRange: '0-2 weeks (newborn)',
      context:
        'Most circumcisions are performed in the first 10 days of life. Current standards of care require adequate pain management during the procedure - typically a dorsal penile nerve block or subcutaneous ring block combined with a sucrose pacifier. After the procedure, the area will appear red and swollen, which is normal. A yellowish film over the healing area is normal granulation tissue, not infection. Petroleum jelly applied with each diaper change prevents the healing wound from sticking to the diaper. Infant acetaminophen can be given for pain as directed by your doctor.',
    },
    {
      ageRange: '2-6 weeks (healing)',
      context:
        'Most circumcisions are fully healed within 7-10 days, though some redness may persist for 2-3 weeks. During healing, the area should be kept clean with gentle washing during diaper changes. Avoid submerging the area in bath water until the wound is healed (sponge baths are fine). Some babies seem fussier than usual for the first few days, which typically resolves quickly. If using a Plastibell device, the plastic ring usually falls off within 5-8 days - do not pull it off.',
    },
    {
      ageRange: '6 weeks+ (post-healing)',
      context:
        'Once healed, the circumcised penis requires no special care beyond normal hygiene. At well-child visits, your pediatrician will check that healing has progressed normally. Adhesions (skin that sticks to the glans) can sometimes form and may need gentle retraction at checkups. If you chose not to circumcise, caring for an uncircumcised penis is simple: wash the outside with soap and water, and never forcibly retract the foreskin in a young child. The foreskin naturally separates over time, usually by puberty.',
    },
  ],
  whenNormal: [
    'The circumcision site looks red and slightly swollen for the first few days after the procedure.',
    'A yellowish film or crust forms over the healing area - this is normal wound healing, not pus.',
    'Your baby is fussier than usual for 1-3 days after the procedure but is eating and producing wet diapers normally.',
    'Small amounts of blood appear on the diaper during the first day or two.',
  ],
  whenToMention: [
    'The healing area is still red or weeping after 10-14 days.',
    'You notice the skin has stuck to the head of the penis (adhesion) at any point.',
    'Your baby seems to be in persistent pain beyond the first few days despite appropriate pain management.',
  ],
  whenToActNow: [
    'Active bleeding that does not stop with gentle pressure for 10 minutes.',
    'Signs of infection - increasing redness spreading beyond the wound, pus, swelling of the entire penis, fever, or foul smell.',
    'Your baby is not urinating within 12 hours after the procedure or seems unable to urinate (straining with no output).',
    'The Plastibell ring has slipped onto the shaft of the penis.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'phimosis-baby',
    'hypospadias',
    'blood-in-diaper-newborn',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Circumcision Policy Statement. Pediatrics, 2012 (reaffirmed).',
      url: 'https://publications.aap.org/pediatrics/article/130/3/585/30235/Circumcision-Policy-Statement',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Circumcision: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/decisions-to-make/Pages/Circumcision.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Pain Management in Neonatal Circumcision. Cochrane Database of Systematic Reviews, 2004.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15495002/',
    },
  ],
};
