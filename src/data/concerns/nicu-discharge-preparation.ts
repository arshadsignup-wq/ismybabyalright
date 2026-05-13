import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nicu-discharge-preparation',
  title: 'NICU Discharge: Coming Home with a Preemie',
  category: 'medical',
  searchTerms: [
    'NICU discharge preparation',
    'bringing preemie home',
    'NICU baby coming home',
    'preemie discharge checklist',
    'after NICU care at home',
    'premature baby going home',
    'NICU graduate home care',
    'preemie transition home',
    'what to expect after NICU',
  ],
  quickAnswer:
    'Bringing your baby home from the NICU is an exciting milestone that can also feel overwhelming after weeks or months of having medical support around the clock. Before discharge, the NICU team will ensure your baby can maintain their body temperature, feed adequately by breast or bottle, and breathe independently. It is completely normal to feel anxious about caring for your baby without monitors and nurses, and your NICU team will prepare you with training, a home care plan, and follow-up appointments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most preemies are discharged between 36 and 40 weeks corrected gestational age, meaning they may come home around their original due date or shortly before. In the first weeks at home, your baby may sleep more and eat less per feeding than full-term babies. Use your baby\'s corrected age rather than birth age when thinking about developmental milestones. The NICU will typically schedule follow-up visits within a few days of discharge to check weight gain, feeding, and jaundice.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your preemie grows, many parents find that the developmental gap with full-term peers begins to narrow. Your baby should be gaining weight steadily and becoming more alert and interactive. Some preemies qualify for early intervention services, which can be started during this period to support motor, feeding, or sensory development. Continue using corrected age for milestones and growth charts, which your pediatrician will guide you on.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6-12 months corrected age, many NICU graduates are thriving and catching up to their full-term peers. Some may still receive specialized follow-up care, especially if they were very premature or had complications. Introducing solids should follow your baby\'s corrected age and developmental readiness signs, not their birth age. Continue attending NICU follow-up appointments as recommended, which typically continue through age 2-3 for very premature babies.',
    },
  ],
  whenNormal: [
    'You feel anxious and overwhelmed in the first days and weeks at home, which is a universal experience after NICU discharge',
    'Your baby sleeps a lot and takes small, frequent feedings, which is typical for preemies adjusting to home',
    'Your baby seems behind full-term peers in size and milestones when you use birth age rather than corrected age',
    'You find yourself checking on your baby frequently or watching them sleep, which is a normal response to the NICU experience',
  ],
  whenToMention: [
    'Your baby is not gaining weight as expected at follow-up visits or is feeding poorly at home',
    'You are struggling with anxiety, PTSD symptoms, or postpartum depression related to the NICU experience, which is very common and treatable',
    'You have questions about when to use corrected age versus birth age for milestones, vaccinations, or introducing solids',
    'Your baby has episodes of color change, pauses in breathing, or difficulty regulating temperature at home',
  ],
  whenToActNow: [
    'Your baby has an apnea episode where they stop breathing for more than 20 seconds, turn blue, or become limp',
    'Your baby has a fever of 100.4 degrees Fahrenheit or higher, which in a preemie requires immediate medical evaluation',
    'Your baby is refusing all feeds, has significantly fewer wet diapers than expected, or shows signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Premature Baby: What Parents Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Eunice Kennedy Shriver National Institute of Child Health and Human Development. Preterm Labor and Birth.',
      url: 'https://www.nichd.nih.gov/health/topics/preterm',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Preterm Birth.',
      url: 'https://www.cdc.gov/reproductivehealth/maternalinfanthealth/pretermbirth.htm',
    },
  ],
};
