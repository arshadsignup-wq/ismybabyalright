import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-dirt-sand',
  title: 'My Baby Keeps Eating Dirt and Sand',
  category: 'feeding',
  searchTerms: ['baby eating dirt', 'baby eating sand', 'toddler eating dirt', 'toddler eating sand playground', 'baby puts dirt in mouth', 'is eating dirt dangerous baby', 'baby sandbox eating', 'toddler dirt mouth', 'baby eating soil', 'pica dirt eating baby'],
  quickAnswer: 'Babies and toddlers explore the world by putting everything in their mouths, including dirt and sand. Small tastes are very common and usually not harmful. However, soil can contain parasites, bacteria, pesticides, or lead, so it should be discouraged. If your child repeatedly seeks out and eats large amounts of dirt, this could be pica, which may indicate a nutritional deficiency like iron.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies this age do not typically encounter dirt or sand as they are not yet mobile.' },
    { ageRange: '4-6 months', context: 'As babies begin to sit and reach for things, they may encounter outdoor materials. Supervise closely during outdoor play.' },
    { ageRange: '6-9 months', context: 'Crawling babies are magnets for dirt, sand, and other ground-level materials. They will put everything in their mouth. Redirect consistently and keep play areas as clean as possible.' },
    { ageRange: '9-12 months', context: 'The mouthing stage continues. Baby will taste dirt and sand if given the opportunity. Supervise outdoor play closely and redirect to appropriate items. A small taste is unlikely to cause harm.' },
    { ageRange: '12-24 months', context: 'Toddlers are curious and may deliberately eat dirt or sand during outdoor play. Redirect firmly but gently. If your toddler seeks out and eats large amounts of non-food items repeatedly, discuss with your pediatrician. Iron deficiency screening may be appropriate.' },
  ],
  whenNormal: ['Baby tastes dirt or sand once and spits it out', 'Baby puts everything in their mouth including outdoor materials during the normal mouthing phase', 'Toddler occasionally gets sand in their mouth at the playground'],
  whenToMention: ['Child repeatedly and deliberately eats dirt or sand in large amounts', 'Child seeks out non-food items to eat regularly which may be pica', 'You are concerned about the safety of the soil in your area regarding lead or chemicals'],
  whenToActNow: ['Child has eaten dirt in an area known to be contaminated with lead or chemicals', 'Child develops symptoms like vomiting, diarrhea, or abdominal pain after eating dirt'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-eating-plants-leaves', 'toddler-iron-deficiency-risk'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pica: Eating Non-Food Items. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Pica.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Lead in Soil. 2023.', url: 'https://www.cdc.gov/nceh/lead/prevention/sources/soil.htm' },
  ],
};
