import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'thrush',
  title: 'Baby Oral Thrush (Mouth Yeast Infection)',
  category: 'medical',
  searchTerms: [
    'baby white patches in mouth',
    'baby oral thrush',
    'baby thrush symptoms',
    'white tongue baby',
    'baby mouth white spots',
    'thrush in baby mouth',
    'baby yeast infection mouth',
    'baby thrush won\'t go away',
    'thrush breastfeeding',
    'candida baby mouth',
    'baby white coating on tongue',
  ],
  quickAnswer:
    'Oral thrush is a common yeast infection (Candida) that causes creamy white patches on the tongue, gums, and inner cheeks. Unlike milk residue, thrush patches do not easily wipe away. It is very common in babies under 6 months, is usually mild, and is easily treated with a prescribed antifungal medication.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Thrush is most common in the first few months of life because a baby\'s immune system is still maturing. Babies can acquire the Candida yeast during birth or from everyday exposure. Signs include creamy white patches inside the cheeks, on the tongue, or on the gums that look like cottage cheese. Your baby may be fussier during feedings or pull away from the breast or bottle. If you are breastfeeding, you and your baby may pass the yeast back and forth, so both may need treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Thrush remains common at this age. If your baby has been on antibiotics, this can disrupt the normal balance of bacteria and yeast, making thrush more likely. Treatment typically involves applying a prescribed antifungal (usually nystatin suspension) to the white patches several times a day for 7-14 days. It is important to complete the full course even if the patches clear early.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Thrush becomes less common as the immune system matures. If thrush occurs, it is treated the same way with antifungal medication. Sterilizing pacifiers, bottle nipples, and teething toys that go in the mouth can help prevent reinfection. If thrush keeps coming back frequently, mention this to your pediatrician as they may want to explore whether there is an underlying reason.',
    },
    {
      ageRange: '12 months+',
      context:
        'Thrush is uncommon in healthy toddlers. Occasional episodes after antibiotics or illness are not unusual, but recurrent thrush in a child over 12 months may warrant further evaluation by your pediatrician to rule out any immune system concerns or other contributing factors such as inhaled steroid use for asthma.',
    },
  ],
  whenNormal: [
    'Your baby has a white coating only on the tongue that wipes off easily, which is likely milk residue rather than thrush',
    'A single episode of thrush in a baby under 6 months that responds to prescribed antifungal treatment',
    'Mild thrush that develops after a course of antibiotics',
    'Your baby is feeding reasonably well despite the white patches',
  ],
  whenToMention: [
    'You see creamy white patches in your baby\'s mouth that do not wipe away easily, or leave a red sore area when scraped',
    'Your baby is fussy during feeds, pulling away from the breast or bottle, and you notice white patches in the mouth',
    'Thrush has come back after completing a full course of treatment',
    'You are breastfeeding and have sore, red, or burning nipples along with your baby\'s oral thrush',
  ],
  whenToActNow: [
    'Your baby refuses to eat and is not taking in enough fluids, showing signs of dehydration such as fewer wet diapers or lethargy',
    'Thrush keeps recurring frequently in a baby over 12 months without an obvious cause such as recent antibiotics, as this may need further evaluation',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Thrush and Other Candida Infections.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Candidiasis (Thrush).',
      url: 'https://www.cdc.gov/candidiasis/about/index.html',
    },
  ],
};
