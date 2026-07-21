import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rickets-vitamin-d-bones-baby',
  title: 'Rickets in Babies (Vitamin D Bone Disease)',
  category: 'medical',
  searchTerms: [
    'baby rickets signs',
    'vitamin d deficiency baby bones',
    'baby bowed legs rickets',
    'baby soft bones vitamin d',
    'widened wrists baby rickets',
    'delayed fontanelle closure rickets',
    'breastfed baby vitamin d rickets',
    'nutritional rickets baby',
    'toddler rickets symptoms bowed legs',
    'dark skinned baby rickets risk',
  ],
  quickAnswer:
    'Rickets is a condition in which bones become soft and weak due to severe deficiency of vitamin D, calcium, or phosphorus. Signs include bowed legs, widened wrists and ankles, delayed closure of the fontanelle, and poor growth. Exclusively breastfed babies with darker skin tones and limited sun exposure are at highest risk. Rickets is preventable with vitamin D supplementation (the AAP recommends 400 IU daily for all breastfed infants) and is treatable when caught early.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Signs of rickets are uncommon this early but can occur in babies born to mothers with severe vitamin D deficiency. Very early signs include craniotabes (a softening of the skull bones that feels like pressing on a ping-pong ball), irritability, and poor feeding. The AAP recommends all breastfed and partially breastfed infants receive 400 IU of vitamin D drops daily starting within the first few days of life. Formula-fed babies typically get adequate vitamin D if consuming at least 32 ounces of fortified formula per day.',
    },
    {
      ageRange: '3-12 months',
      context:
        'This is when rickets may become more clinically apparent, particularly in exclusively breastfed babies who have not received vitamin D supplementation and who have darker skin pigmentation or limited sun exposure. You may notice the fontanelle (soft spot) seems larger than expected, the wrists appear widened at the bone-cartilage junction, or the ribcage has noticeable bumps along the front (called a rachitic rosary). Delayed motor milestones such as difficulty sitting or pulling to stand may occur because weakened bones and muscles impair movement.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with rickets may develop progressively bowed legs as they begin bearing weight, because softened bones bend under the body\'s load. Other signs include a waddling gait, delayed walking, bone pain or tenderness, dental problems (delayed eruption, enamel defects), and poor linear growth. Diagnosis is confirmed with blood tests showing low vitamin D, low calcium or phosphorus, elevated alkaline phosphatase, and elevated parathyroid hormone, along with X-rays of the wrists or knees showing characteristic widening and fraying of the growth plates.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Rickets in older children can occur with severely restrictive diets, malabsorption conditions such as celiac disease or inflammatory bowel disease, chronic kidney disease, or certain rare genetic forms of rickets (hypophosphatemic rickets). Signs include persistent bone pain, muscle weakness, fatigue, poor growth, and skeletal deformities. Treatment involves high-dose vitamin D and calcium supplementation under medical supervision. Severe bowing that does not improve with medical treatment may eventually require surgical correction.',
    },
  ],
  whenNormal: [
    'Your baby is receiving the recommended 400 IU of vitamin D daily (via drops or adequate formula intake) and is growing well along their growth curve',
    'Your breastfed baby has slightly bowed legs but is receiving vitamin D supplementation and the bowing is consistent with normal physiologic bowing that improves by age 2-3',
    'Your baby\'s fontanelle is still open at 12-18 months, which is within the normal range (fontanelles typically close between 9-24 months)',
    'Your toddler has mildly bowed legs that are symmetrical and gradually improving with age and adequate nutrition',
  ],
  whenToMention: [
    'Your breastfed baby has not been receiving vitamin D supplementation and you notice widened wrists, prominent rib bumps, or worsening bowed legs',
    'Your baby\'s fontanelle seems unusually large or has not shown any signs of closing by 18 months',
    'Your toddler has bowed legs that are getting worse rather than improving, especially with a restricted diet or limited sun exposure',
  ],
  whenToActNow: [
    'Your baby or toddler develops muscle spasms, twitching, or seizures, which can result from dangerously low calcium levels as a complication of severe rickets and require emergency care',
    'Your child sustains a fracture from a minor fall or normal activity, suggesting significantly weakened bones that need urgent evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['vitamin-d-deficiency-baby', 'bowlegged-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention of Rickets and Vitamin D Deficiency in Infants, Children, and Adolescents. Pediatrics. 2008;122(5):1142-1152.',
      url: 'https://publications.aap.org/pediatrics/article/122/5/1142/72758/Prevention-of-Rickets-and-Vitamin-D-Deficiency-in',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Vitamin D Fact Sheet for Health Professionals. 2023.',
      url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamin D: On the Double. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx',
    },
  ],
};
