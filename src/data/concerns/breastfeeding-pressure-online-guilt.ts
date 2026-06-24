import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-pressure-online-guilt',
  title: 'Online Pressure and Guilt About Breastfeeding',
  category: 'maternal',
  searchTerms: [
    'breastfeeding guilt',
    'feeling guilty about not breastfeeding',
    'breastfeeding pressure',
    'mom guilt breastfeeding',
    'shamed for formula feeding',
    'breastfeeding judgment online',
    'breastfeeding mom shaming',
    'feeling like a bad mom formula',
    'breast is best pressure',
    'breastfeeding shame',
    'judged for stopping breastfeeding',
  ],
  quickAnswer:
    'Feeling guilt or pressure about breastfeeding is incredibly common, affecting up to 75% of mothers in some studies. Online platforms can amplify these feelings through idealized portrayals and "breast is best" messaging that fails to acknowledge the many valid reasons parents use formula. Both breast milk and formula are nutritionally adequate options for feeding your baby. How you feed your baby matters far less than that your baby is fed, loved, and cared for.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'The early postpartum period is when breastfeeding pressure is often felt most acutely. Struggling with latch, supply, or pain while being bombarded with messages about the superiority of breastfeeding can be emotionally devastating. If breastfeeding is not working despite best efforts, or if you choose not to breastfeed for any reason, that is a valid decision. Fed is best. If guilt is overwhelming, consider limiting social media exposure and speaking with your healthcare provider or a therapist who specializes in postpartum issues.',
    },
    {
      ageRange: '6 weeks - 6 months postpartum',
      context:
        'As breastfeeding challenges continue or evolve, mothers may feel increasing pressure to persist even when it is affecting their mental health, physical well-being, or relationship with their baby. Some mothers combo feed (breast and formula) and feel judged by "both sides." Remember that partial breastfeeding still provides benefits, and any amount of breast milk you are able to provide is valuable. Your mental health matters for your baby\'s well-being too.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Mothers who wean before 12 months may face guilt-inducing comments, while those who continue breastfeeding past social norms may face different judgment. The decision about when and how to wean is personal and should be based on what works for your family. Research shows that the long-term differences between breastfed and formula-fed children, when controlling for socioeconomic factors, are much smaller than social media claims suggest.',
    },
  ],
  whenNormal: [
    'You feel occasional guilt or uncertainty about your feeding choices, especially when encountering judgment online.',
    'You compare yourself to other mothers on social media but can generally put it in perspective.',
    'You have mixed feelings about weaning but are managing those emotions.',
  ],
  whenToMention: [
    'Guilt about breastfeeding is affecting your bond with your baby or your enjoyment of motherhood.',
    'You are continuing to breastfeed despite significant pain, mental health impacts, or medical reasons to stop because of external pressure.',
    'You are experiencing persistent sadness, anxiety, or shame related to feeding your baby.',
  ],
  whenToActNow: [
    'You are having thoughts of self-harm or feeling like your baby would be better off without you because of feeding struggles.',
    'Breastfeeding guilt or pressure is contributing to severe postpartum depression or anxiety.',
    'You feel completely unable to bond with or care for your baby because of overwhelming guilt and shame.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['breastfeeding-feeling-inadequate-supply', 'breastfeeding-misinformation-social-media', 'breastfeeding-fatigue-exhaustion', 'formula-ingredient-fear-social-media'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Psychological Burden of Infant Feeding Experiences. PLOS ONE.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29346407/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Challenges and Maternal Mental Health.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/02/optimizing-support-for-breastfeeding-as-part-of-obstetric-practice',
    },
  ],
};
