import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-acupuncture-safety-infant',
  title: 'Is Acupuncture Safe for Babies?',
  category: 'medical',
  searchTerms: [
    'acupuncture for baby safe',
    'infant acupuncture colic',
    'baby acupuncture risks',
    'acupuncture newborn',
    'acupuncture for baby reflux',
    'pediatric acupuncture safety',
    'acupuncture baby sleep',
    'alternative medicine baby',
    'acupressure for infants',
    'needle therapy baby',
  ],
  quickAnswer:
    'There is limited scientific evidence supporting the use of acupuncture in infants, and major pediatric medical organizations do not recommend it as a standard treatment. While some small studies suggest acupuncture may help with colic, the evidence is not strong enough for a recommendation. If you are considering acupuncture for your baby, discuss it with your pediatrician first and ensure any practitioner is licensed and experienced with infants.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some parents consider acupuncture for colic or excessive crying in newborns. A few small studies have explored this with mixed results. The risks at this age include pain and distress from needle insertion, potential for infection (though rare with sterile technique), and bruising. Most pediatricians recommend evidence-based approaches for colic first, such as feeding adjustments, soothing techniques, and time (colic typically resolves by 3-4 months). If you are interested in non-needle approaches, gentle infant massage has more supporting evidence.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies grow, some parents explore acupuncture for conditions like reflux, sleep difficulties, or recurrent illness. The evidence base for these uses in infants is very limited. Acupressure (applying finger pressure to specific points without needles) is sometimes used as a gentler alternative and carries fewer risks. Any complementary therapy should be discussed with your pediatrician and used alongside, not instead of, conventional medical care for conditions that need treatment.',
    },
    {
      ageRange: '12-36 months',
      context:
        'For toddlers, some practitioners offer acupuncture for allergies, frequent colds, or behavioral issues. The scientific evidence remains limited for most of these applications. If you choose to pursue acupuncture for your toddler, ensure the practitioner is specifically trained in pediatric acupuncture, uses minimal and very thin needles, and that sessions are brief. Laser acupuncture (non-needle) is sometimes offered for children and may be better tolerated, though evidence for its effectiveness is similarly limited.',
    },
  ],
  whenNormal: [
    'You are curious about complementary therapies and want to discuss options with your pediatrician before proceeding.',
    'You have tried acupressure or infant massage and found it soothing for your baby without any adverse effects.',
    'You are using conventional medical treatment for your baby\'s condition and considering acupuncture as a complementary addition.',
  ],
  whenToMention: [
    'You are using or considering acupuncture for your baby and want your pediatrician\'s input on safety and efficacy.',
    'Your baby has a medical condition and you are considering alternative therapies instead of or in addition to conventional treatment.',
    'Your baby had an adverse reaction to acupuncture such as prolonged crying, bruising, or skin irritation at needle sites.',
  ],
  whenToActNow: [
    'Your baby develops signs of infection at a needle site - redness, swelling, warmth, discharge, or fever.',
    'Your baby has a severe or unusual reaction during or after an acupuncture session, including difficulty breathing or extreme distress.',
    'You have been advised to stop a medically necessary treatment in favor of acupuncture - always seek a second medical opinion before discontinuing prescribed treatments.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-colic-gut-microbiome-link',
    'baby-essential-oil-diffuser-risk',
    'baby-amber-necklace-evidence',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health. Acupuncture: What You Need to Know.',
      url: 'https://www.nccih.nih.gov/health/acupuncture-what-you-need-to-know',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Complementary and Alternative Medicine in Pediatrics. Pediatrics, 2017.',
      url: 'https://publications.aap.org/pediatrics/article/140/4/e20172070/38247',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Acupuncture for Infantile Colic: A Systematic Review. Acupuncture in Medicine, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31032612/',
    },
  ],
};
