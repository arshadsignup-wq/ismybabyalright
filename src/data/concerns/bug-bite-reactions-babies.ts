import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bug-bite-reactions-babies',
  title: 'Bug Bite Reactions in Babies',
  category: 'skin',
  searchTerms: [
    'baby bug bite swollen',
    'mosquito bite reaction baby',
    'bug bite swelling toddler',
    'insect bite baby allergic reaction',
    'baby bite mark swollen red',
    'large reaction to mosquito bite baby',
    'bug bites on baby treatment',
    'infected bug bite baby',
  ],
  quickAnswer:
    'Babies and toddlers often have exaggerated reactions to insect bites, with large areas of redness and swelling that look alarming but are usually a normal immune response called Skeeter syndrome. Young children have not yet developed tolerance to insect saliva, so their reactions tend to be bigger than what adults experience. Most bite reactions resolve on their own within a few days with simple home care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young infants are typically less exposed to biting insects, but bites can still occur. In this age group, any significant swelling, redness, or signs of distress warrant a call to your pediatrician, as it can be harder to distinguish a bite reaction from other skin conditions or infections in very young babies. Prevention is key -- use mosquito netting over strollers and cribs rather than insect repellent, which is not recommended for babies under 2 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, babies may develop noticeably large, puffy red areas around insect bites that seem disproportionate to the bite itself. This exaggerated local reaction is common because the baby\'s immune system is encountering insect saliva for the first time. A cool compress and close monitoring are usually sufficient. DEET-based repellent can be used on babies 2 months and older per the AAP.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies spend more time outdoors, bug bites become more common. Bites on the face, hands, or feet may swell more dramatically due to the loose tissue in these areas. A single mosquito bite can sometimes cause an area of redness several inches across, which is alarming but usually benign. Watch for signs of infection such as increasing warmth, spreading redness, pus, or fever.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are curious and active outdoors, increasing their exposure to biting insects. They may also scratch bites, which can break the skin and introduce bacteria. Keep nails short, apply anti-itch remedies approved by your pediatrician, and cover bites with a bandage if your toddler is scratching. Over time, with repeated exposure, bite reactions typically become less dramatic.',
    },
  ],
  whenNormal: [
    'A raised, red, warm area around a bug bite that is larger than what you would expect in an adult',
    'Mild swelling and redness that peaks within 24-48 hours and then gradually improves',
    'A small, firm bump at the bite site that takes a week or two to fully resolve',
    'Mild itching that your baby indicates by rubbing or fussing at the area',
  ],
  whenToMention: [
    'Swelling from a bite is very large, affecting a significant portion of a limb or the face',
    'Your baby seems to have frequent or severe reactions to insect bites and you want to discuss prevention strategies',
    'A bite site develops a blister or a central dark area that could indicate a spider bite',
    'Your baby has had an increasingly large reaction with each subsequent bite',
  ],
  whenToActNow: [
    'Your baby develops hives, facial or throat swelling, wheezing, or difficulty breathing after an insect bite or sting -- this could be anaphylaxis requiring emergency care',
    'A bite becomes increasingly red, warm, swollen, and painful over several days, with red streaks spreading outward or pus, suggesting a skin infection',
    'Your baby develops fever along with a bite that looks infected',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Insect Repellent for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Insect-Repellents.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bug Bites and Stings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Bug-Bites.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Prevent Mosquito Bites.',
      url: 'https://www.cdc.gov/mosquitoes/prevention/index.html',
    },
  ],
};
