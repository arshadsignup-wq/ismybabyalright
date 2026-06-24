import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'placenta-encapsulation-safety-risk',
  title: 'Is Placenta Encapsulation Safe? Risks Parents Should Know',
  category: 'maternal',
  searchTerms: [
    'placenta encapsulation safe',
    'placenta pills safety',
    'eating placenta after birth',
    'placenta encapsulation benefits evidence',
    'placenta capsules risk baby',
    'placenta GBS infection baby',
    'placentophagy safety',
    'placenta encapsulation CDC warning',
    'placenta pills breastfeeding',
    'are placenta pills evidence based',
    'placenta smoothie safe',
    'placenta consumption postpartum',
    'placenta encapsulation infection risk',
    'does eating placenta help postpartum',
  ],
  quickAnswer:
    'There is no scientific evidence that placenta encapsulation provides health benefits, and it carries documented risks. The CDC investigated a case where a newborn developed late-onset Group B Streptococcus (GBS) infection linked to the mother\'s contaminated placental capsules. The encapsulation process does not reliably kill bacteria, and the placenta can harbor GBS, E. coli, and other pathogens. The AAP and most medical organizations advise against the practice.',
  byAge: [
    {
      ageRange: 'Pregnancy (planning)',
      context:
        'Placenta encapsulation is heavily promoted by influencers and doulas as a way to boost energy, increase milk supply, prevent postpartum depression, and restore hormones. None of these claims are supported by peer-reviewed evidence. A 2018 systematic review found no proven benefits and identified potential harms. If you are considering this practice, discuss it with your OB or midwife. Understand that the encapsulation industry is unregulated - there are no standardized safety protocols, and processing is typically done at the encapsulator\'s home.',
    },
    {
      ageRange: 'Baby 0-3 months',
      context:
        'If you are consuming placental capsules while breastfeeding, bacteria and other contaminants can pass to your baby. The CDC documented a case where an Oregon infant developed GBS sepsis twice, and the source was traced to the mother\'s placental capsules, which tested positive for the same GBS strain. The encapsulation process involves dehydrating the placenta at temperatures that may not kill all pathogens. Even if your GBS test was negative during pregnancy, the placenta can become colonized during labor and delivery.',
    },
    {
      ageRange: 'Baby 3+ months',
      context:
        'If you have been taking placental capsules and your baby has been healthy, the immediate infection risk decreases as you presumably finish the supply. However, if your baby develops any fever, lethargy, poor feeding, or signs of illness while you are consuming placental products and breastfeeding, tell your pediatrician about the encapsulation so they can consider it in their evaluation. Looking forward, for future pregnancies, weigh the lack of proven benefits against the documented risks.',
    },
  ],
  whenNormal: [
    'You considered placenta encapsulation, researched it, and decided against it based on the evidence.',
    'You are looking for evidence-based ways to support postpartum recovery - ask your provider about iron supplementation, vitamin D, and omega-3s instead.',
  ],
  whenToMention: [
    'You are currently taking placental capsules and want to discuss whether to continue.',
    'You are planning placenta encapsulation for an upcoming birth and want your provider\'s perspective.',
    'You are breastfeeding while consuming placental capsules and want to understand the risk to your baby.',
  ],
  whenToActNow: [
    'Your baby develops a fever, lethargy, poor feeding, or any signs of infection while you are consuming placental capsules and breastfeeding.',
    'You consumed placental capsules and develop signs of infection yourself: fever, chills, foul-smelling discharge.',
    'Your baby was diagnosed with GBS or another infection and you have been consuming placental capsules - inform your baby\'s medical team immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-infection-sepsis-warning-signs',
    'postpartum-depression-signs',
    'postnatal-depletion-syndrome',
    'group-b-strep-pregnancy',
  ],
  sources: [
    {
      org: 'CDC',
      citation: 'CDC MMWR - Late-Onset Infant Group B Streptococcal Infection Associated with Maternal Consumption of Placenta Capsules',
      url: 'https://www.cdc.gov/mmwr/volumes/66/wr/mm6625a4.htm',
    },
    {
      org: 'ACOG',
      citation: 'ACOG - Placenta Accreta Spectrum and Placentophagy: Risks and Evidence',
      url: 'https://www.acog.org/womens-health/faqs/what-to-expect-after-your-due-date',
    },
    {
      org: 'NIH',
      citation: 'NIH - Human Placentophagy: A Review of the Evidence (Systematic Review)',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29182491/',
    },
  ],
};
