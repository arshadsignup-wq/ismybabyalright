import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'inguinal-hernia-baby',
  title: 'My Baby Has a Lump in Their Groin',
  category: 'medical',
  searchTerms: [
    'baby inguinal hernia',
    'baby groin lump',
    'baby bulge in groin',
    'inguinal hernia symptoms baby',
    'baby hernia surgery',
    'swelling groin baby boy',
    'swelling groin baby girl',
    'baby hernia pain',
    'reducible hernia baby',
    'incarcerated hernia baby',
  ],
  quickAnswer:
    'An inguinal hernia is a bulge in the groin area where part of the intestine pushes through a weak spot in the abdominal wall. It\'s common in babies, especially boys and premature infants. Most hernias come and go (reducible), but if a hernia becomes stuck (incarcerated), it\'s a medical emergency. All inguinal hernias in babies require surgical repair.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Inguinal hernias are often noticed in young infants, especially when crying, coughing, or straining. You may see a bulge in the groin or scrotum (in boys) or labia (in girls) that comes and goes. If the bulge is soft and disappears when your baby is calm or lying down, it\'s likely a reducible hernia. Contact your pediatrician - all inguinal hernias in babies need surgical repair, typically scheduled within weeks to months of diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby is diagnosed with an inguinal hernia, surgery is usually recommended fairly soon. The procedure is safe and typically done as an outpatient. Watch for signs of incarceration: the bulge becomes firm, won\'t go away, or your baby seems in pain, vomits, or has a swollen, red groin area. These are emergency signs - go to the ER immediately.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Inguinal hernias can develop at any age during infancy. If you notice a new bulge in your baby\'s groin, have it evaluated. Most hernias are repaired before 12 months to prevent complications. Recovery from hernia surgery is usually quick - most babies are back to normal within a few days. Follow your surgeon\'s instructions for wound care and activity.',
    },
    {
      ageRange: '12 months+',
      context:
        'Inguinal hernias in toddlers are managed the same way as in infants: surgical repair is needed. Your child may be able to tell you if the area hurts, which helps identify symptoms. After surgery, most toddlers recover quickly and can return to normal activities within 1-2 weeks. Recurrence is rare but possible.',
    },
  ],
  whenNormal: [
    'Your baby has a diagnosed inguinal hernia and surgery is scheduled',
    'The hernia bulge comes and goes and is soft and easily reducible (goes back in)',
    'Your baby is comfortable, feeding well, and has normal bowel movements',
    'You\'ve been educated on signs of incarceration and when to seek emergency care',
    'Your baby has recovered well from hernia repair surgery',
  ],
  whenToMention: [
    'You\'ve noticed a bulge in your baby\'s groin that comes and goes',
    'Your baby has a diagnosed hernia and you have questions about surgery timing',
    'The hernia seems to be getting bigger or more frequent',
    'You want to understand how to tell if the hernia becomes incarcerated',
  ],
  whenToActNow: [
    'The hernia bulge is firm, won\'t reduce (go back in), or is very painful',
    'Your baby is vomiting, especially with a hernia that won\'t reduce',
    'The groin or scrotum becomes red, swollen, or discolored',
    'Your baby seems very irritable, cries inconsolably, or appears in severe pain',
    'Your baby has a fever along with a firm, irreducible hernia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Inguinal Hernia. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Inguinal-Hernia.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Pediatric Surgical Association. Inguinal Hernia. APSA, 2023.',
      url: 'https://www.eapsa.org/parents/learn-about-a-condition/h-o/inguinal-hernia/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hernias in Children. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/10/541/34601/Inguinal-Hernia',
    },
  ],
};
