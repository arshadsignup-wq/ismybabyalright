import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'post-vaccine-fussiness',
  title: 'Post-Vaccine Fussiness and Irritability',
  category: 'medical',
  searchTerms: [
    'baby fussy after shots',
    'baby irritable after vaccine',
    'baby crying after vaccination',
    'baby inconsolable after shots',
    'baby won\'t stop crying after vaccine',
    'how long is baby fussy after shots',
    'baby clingy after immunization',
    'baby not eating after vaccine',
    'baby sleepy after shots',
    'vaccine side effects baby fussy',
  ],
  quickAnswer:
    'Fussiness and irritability are among the most common side effects after vaccination, affecting up to half of all babies. Your baby may be more clingy, cry more than usual, eat less, or sleep differently for 1-2 days after their shots. This is a normal response as their immune system does the important work of building protection. Extra cuddles, skin-to-skin contact, and patience are the best medicine. Most babies return to their usual selves within 24-48 hours.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'After the birth Hepatitis B dose and the 1-month dose, significant fussiness is uncommon. If your newborn becomes unusually irritable, inconsolable, or develops a fever of 100.4 degrees F or higher, contact your pediatrician, as any significant change in a very young baby needs evaluation regardless of the cause.',
    },
    {
      ageRange: '2-6 months',
      context:
        'The 2-month, 4-month, and 6-month visits often produce the most notable fussiness because multiple vaccines are given at once. Your baby may cry more than usual, sleep more or less, and feed less for 1-2 days. Comfort measures include extra nursing or bottle feeds, skin-to-skin contact, gentle rocking, and a warm bath. Infant acetaminophen (Tylenol) can be given for discomfort, but check the correct dose with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age may show irritability by being extra clingy, refusing to eat, or having disrupted sleep. The soreness at the injection site can be a significant source of discomfort - your baby may cry when that leg or arm is touched or moved. Gently moving the limb and applying a cool washcloth can help. The discomfort typically peaks within the first 24 hours and improves from there.',
    },
    {
      ageRange: '12 months - 5 years',
      context:
        'Older babies and toddlers may be fussy or out of sorts for 1-2 days after booster vaccines. They can often tell you (through words or pointing) that the injection site hurts. The MMR vaccine may cause delayed fussiness 7-12 days later, coinciding with the mild immune response to the live vaccine. This is normal and lasts 1-2 days.',
    },
  ],
  whenNormal: [
    'Your baby is fussy, clingy, or eating less for 1-2 days after vaccination',
    'Your baby is sleeping more than usual for a day after shots',
    'Your baby cries when the injection site is touched or the leg is moved',
    'Fussiness begins within 24 hours of vaccination and gradually improves',
    'Your baby can still be comforted, even if they need more soothing than usual',
  ],
  whenToMention: [
    'Fussiness lasts more than 3 days after a non-live vaccine or your baby still seems significantly different from their baseline',
    'Your baby is feeding very poorly, producing fewer wet diapers than usual, or seems more lethargic than simply tired',
    'Inconsolable crying lasts more than 3 continuous hours',
  ],
  whenToActNow: [
    'Your baby is completely inconsolable, appears to be in severe pain, or is making unusual high-pitched cries',
    'Fussiness is accompanied by high fever (over 104 degrees F), difficulty breathing, signs of allergic reaction, extreme lethargy, or your baby is unresponsive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Possible Side Effects from Vaccines.',
      url: 'https://www.cdc.gov/vaccines/vac-gen/side-effects.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Ease Your Child\'s Vaccine Pain. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/How-to-Ease-Vaccine-Pain.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: What You Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx',
    },
  ],
};
