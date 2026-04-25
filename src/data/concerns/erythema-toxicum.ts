import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'erythema-toxicum',
  title: 'Red Blotchy Rash on My Newborn',
  category: 'skin',
  searchTerms: [
    'erythema toxicum',
    'newborn blotchy rash',
    'red splotchy rash baby',
    'toxic erythema newborn',
    'baby rash with white bumps',
    'newborn rash that comes and goes',
    'erythema toxicum neonatorum',
    'baby hives looking rash',
    'red patches on newborn',
    'newborn flea bite rash',
  ],
  quickAnswer:
    'Erythema toxicum is a very common, harmless newborn rash that appears as red blotches with small white or yellow bumps in the center. Despite its alarming name, it is completely benign, affects about half of all full-term newborns, and clears up on its own within a week or two without any treatment.',
  byAge: [
    {
      ageRange: '0-2 days',
      context:
        'Erythema toxicum rarely appears on the first day of life. Most babies are born with clear skin, and the rash develops over the next 24-48 hours. It often starts on the face or trunk and can look quite dramatic when it first appears, causing understandable concern for new parents.',
    },
    {
      ageRange: '2-5 days',
      context:
        'This is the peak time for erythema toxicum to appear. The rash consists of red patches or blotches with tiny white or yellow bumps in the center, resembling flea bites or hives. It can appear anywhere on the body except the palms and soles. The rash may come and go, appearing in different spots throughout the day, which is completely normal.',
    },
    {
      ageRange: '5-14 days',
      context:
        'Erythema toxicum typically begins to fade during this period without any treatment. The red blotches lighten, and the white bumps disappear. The rash does not itch, hurt, or bother your baby in any way. No creams, ointments, or medications are needed. Simply continue regular gentle bathing and skin care.',
    },
    {
      ageRange: '2+ weeks',
      context:
        'By this age, erythema toxicum has usually completely resolved. If a blotchy rash appears for the first time after two weeks of age, it is not erythema toxicum and should be evaluated by your pediatrician. Common considerations at this age include baby acne, eczema, or viral rashes.',
    },
  ],
  whenNormal: [
    'Red blotchy patches with small white or yellow bumps appearing on day 2-5 of life',
    'The rash comes and goes, appearing in different locations throughout the day',
    'The rash is limited to the face, trunk, arms, and legs but does not involve the palms or soles',
    'Your baby is otherwise well, feeding normally, and has no fever or signs of illness',
    'Gradual fading and complete resolution within 1-2 weeks without any treatment',
  ],
  whenToMention: [
    'The rash persists beyond 2 weeks of age or seems to be worsening rather than improving',
    'You are unsure if the rash is erythema toxicum or another newborn rash condition',
    'The bumps seem to be forming large pustules or blisters rather than tiny pinpoint bumps',
  ],
  whenToActNow: [
    'Your baby develops a fever (rectal temperature over 100.4°F/38°C) along with the rash',
    'The rash is accompanied by poor feeding, lethargy, irritability, or other signs of illness',
    'Blisters, skin peeling, or purplish spots develop along with the rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Newborn Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Erythema Toxicum Neonatorum.',
      url: 'https://www.aad.org/public/diseases/a-z/newborn-rashes',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Erythema Toxicum. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001458.htm',
    },
  ],
};
