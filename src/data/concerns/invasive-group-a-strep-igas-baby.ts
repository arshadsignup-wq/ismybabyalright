import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'invasive-group-a-strep-igas-baby',
  title: 'Invasive Group A Strep (iGAS) in Babies - Post-COVID Surge',
  category: 'medical',
  searchTerms: [
    'invasive group A strep baby',
    'iGAS infection infant',
    'group A strep baby dangerous',
    'strep A invasive baby',
    'GAS infection baby symptoms',
    'invasive strep baby after COVID',
    'group A strep surge children',
    'streptococcal toxic shock baby',
    'necrotizing fasciitis baby strep',
    'group A strep pneumonia baby',
    'strep A baby hospital',
    'is group A strep dangerous for babies',
    'scarlet fever turning into sepsis',
    'strep throat complications baby',
  ],
  quickAnswer:
    'Invasive Group A Streptococcus (iGAS) infections in young children surged 7x above pre-pandemic levels after COVID restrictions were lifted, likely due to an "immunity gap" from reduced pathogen exposure during lockdowns. While most Group A Strep infections (like strep throat or impetigo) are mild and treatable with antibiotics, invasive disease can cause pneumonia, bone and joint infections, sepsis, and necrotizing fasciitis. Babies under 1 year are especially vulnerable. Early antibiotic treatment is critical.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can acquire Group A Strep during or after delivery. In young infants, iGAS may present as fever, poor feeding, irritability, lethargy, or a rapidly worsening skin infection. Because newborns cannot localize infections well, what starts as a mild-looking skin rash can progress to bloodstream infection quickly. Any fever (100.4F/38C or higher) in a baby under 3 months requires immediate medical evaluation regardless of suspected cause.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies in this age group may develop iGAS from skin wounds, chickenpox lesions (which allow bacteria entry), or respiratory exposure from family members with strep throat. Symptoms of invasive disease include: high fever that does not respond well to medication, a rapidly spreading red or swollen area on the skin, refusal to use a limb (suggesting bone or joint infection), rapid breathing, and appearing very unwell. If your baby has a skin infection that is spreading despite treatment, or develops a high fever with any of these symptoms, seek emergency care.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are increasingly exposed to Group A Strep through daycare and social settings. Most infections at this age are superficial (strep throat, impetigo, scarlet fever) and respond well to oral antibiotics. However, if your toddler has scarlet fever or strep throat and is getting worse despite 48 hours of antibiotics, or develops new symptoms like severe pain in an arm or leg, spreading redness, swelling, or difficulty breathing, seek urgent evaluation. The post-pandemic strains (particularly emm1) have been associated with more severe outcomes in young children.',
    },
  ],
  whenNormal: [
    'Your child has mild strep throat or impetigo and is improving with prescribed antibiotics.',
    'Your child has scarlet fever (strep throat with a sandpaper rash) and is responding to antibiotic treatment.',
    'Your child was exposed to someone with strep but has no symptoms.',
  ],
  whenToMention: [
    'Your child has a skin infection that does not seem to be improving after 48 hours of prescribed antibiotics.',
    'Your child keeps getting recurrent strep infections.',
    'Someone in your household has strep throat and you want to know how to protect your baby.',
  ],
  whenToActNow: [
    'Your baby under 3 months has a fever of 100.4F (38C) or higher - this always needs immediate evaluation.',
    'Your child has a rapidly spreading area of redness, swelling, or skin that looks infected and is growing over hours.',
    'Your child has a high fever and appears very unwell - unusually lethargic, inconsolable, or difficult to rouse.',
    'Your child has a fever and severe pain in a limb, refuses to move an arm or leg, or is limping and getting worse.',
    'Your child with strep throat or scarlet fever is deteriorating despite being on antibiotics.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-strep-throat',
    'baby-first-fever',
    'when-to-call-pediatrician',
    'baby-skin-infection-cellulitis',
    'impetigo-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation: 'CDC - Group A Streptococcal Disease: Surveillance and Trends',
      url: 'https://www.cdc.gov/group-a-strep/php/surveillance/index.html',
    },
    {
      org: 'AAP',
      citation: 'AAP Red Book - Group A Streptococcal Infections: Clinical Guidance',
      url: 'https://publications.aap.org/redbook/resources/latest-news',
    },
    {
      org: 'NIH',
      citation: 'NIH - Post-Pandemic Surge in Invasive Group A Streptococcal Infections in Children',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37963058/',
    },
  ],
};
