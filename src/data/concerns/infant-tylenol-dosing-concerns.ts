import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-tylenol-dosing-concerns',
  title: 'Infant Tylenol Dosing Concerns',
  category: 'medical',
  searchTerms: [
    'infant tylenol dosing',
    'baby tylenol how much',
    'acetaminophen dose baby',
    'infant tylenol dosage chart',
    'baby tylenol too much',
    'can I give baby tylenol',
    'how often can I give baby tylenol',
    'infant tylenol overdose symptoms',
    'tylenol for 2 month old',
    'baby motrin vs tylenol',
    'acetaminophen dosing by weight baby',
  ],
  quickAnswer:
    'Infant acetaminophen (Tylenol) is generally safe when dosed correctly by weight. The most important rules are to dose by weight rather than age, use the measuring device that comes with the product, never give more than 5 doses in 24 hours, and always use infant-concentration products for babies. When in doubt, call your pediatrician before giving the first dose - they can give you the exact amount based on your baby\'s current weight. Never give acetaminophen to babies under 2 months without consulting a doctor first.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Acetaminophen should generally not be given to babies under 2 months (or under 6 pounds) without direct guidance from your pediatrician. Fever in this age group is a serious concern that needs medical evaluation - not just symptom management at home. If your newborn has a rectal temperature of 100.4 degrees F (38 degrees C) or higher, contact your pediatrician or go to the emergency department rather than giving Tylenol.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Acetaminophen can be given to babies 2 months and older (over 6 pounds) for fever or pain. Always dose by your baby\'s current weight, not age. The standard concentration for infant acetaminophen is 160 mg per 5 mL. Your pediatrician can provide a dosing chart specific to your baby\'s weight. Do not give ibuprofen (Motrin/Advil) until 6 months of age. Doses can be repeated every 4-6 hours, up to 5 times in 24 hours.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After 6 months, you can use either acetaminophen or ibuprofen for fever and pain. Some pediatricians recommend alternating the two for high fevers, but always confirm this approach with your doctor first. Double-check the dose each time, as your baby\'s weight changes quickly during this period. Never use both medications at the same time without specific instructions from your pediatrician.',
    },
    {
      ageRange: '1-5 years',
      context:
        'As your child grows, the dose will increase with their weight. Be careful when transitioning from infant drops to children\'s liquid formulations, as the concentrations may differ. Always read the label carefully and use the measuring device that comes with the specific product. If your child takes acetaminophen regularly for teething or pain, track the timing to ensure you are not exceeding 5 doses in 24 hours.',
    },
  ],
  whenNormal: [
    'Your baby is over 2 months old and you are giving the correct weight-based dose for fever or discomfort',
    'You are using the measuring device that came with the product and dosing every 4-6 hours as needed',
    'Your baby responds to the medication with reduced fever or improved comfort within 30-60 minutes',
    'You have confirmed the correct dose with your pediatrician',
  ],
  whenToMention: [
    'You are unsure about the correct dose for your baby\'s weight or are confused about different product concentrations',
    'Your baby needs acetaminophen for more than 3 consecutive days, which may indicate an illness that needs evaluation',
    'You accidentally gave a slightly higher dose than recommended but your baby seems fine',
  ],
  whenToActNow: [
    'You believe your baby may have received a significantly higher dose than recommended - call Poison Control (1-800-222-1222) immediately, even if your baby seems fine, as acetaminophen overdose symptoms can be delayed',
    'Your baby is vomiting, unusually lethargic, has yellowing of the skin or eyes, or is behaving very differently after taking acetaminophen',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Acetaminophen Dosing Table for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Acetaminophen-for-Fever-and-Pain.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Acetaminophen. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/druginfo/meds/a681004.html',
    },
  ],
};
