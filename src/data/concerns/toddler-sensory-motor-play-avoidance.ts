import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-sensory-motor-play-avoidance',
  title: 'My Toddler Avoids Messy Play',
  category: 'physical',
  searchTerms: ['toddler avoids messy play', 'toddler won\'t touch textures', 'toddler hates messy hands', 'toddler sensory avoidance', 'toddler tactile defensiveness', 'toddler won\'t play with sand', 'toddler won\'t finger paint', 'toddler avoids sensory play', 'toddler messy play refusal', 'toddler texture sensitivity hands'],
  quickAnswer: 'Some toddlers are more sensitive to textures and messy experiences than others. Mild reluctance with new textures is normal. However, extreme avoidance of all messy or tactile play, crying when hands get dirty, or refusing to touch common textures may indicate tactile defensiveness, a form of sensory sensitivity that can benefit from occupational therapy.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies at this age naturally explore different textures through touch and mouthing. Some babies are more cautious than others with new textures, which is a temperament difference. If your baby cries or pulls away from most textures, mention it to your pediatrician.' },
    { ageRange: '12-18 months', context: 'Your toddler should be willing to explore a variety of textures during play and feeding, even if they have preferences. Some messiness during eating is expected and healthy. If your toddler screams when food or paint gets on their hands, this may be tactile sensitivity.' },
    { ageRange: '18-24 months', context: 'If your toddler consistently refuses messy play, avoids certain textures, and becomes distressed when hands get dirty, discuss sensory sensitivities with your pediatrician. An occupational therapist can provide a sensory evaluation and strategies.' },
    { ageRange: '2-3 years', context: 'Some texture preferences are normal, but extreme avoidance of common textures that interferes with play, eating, or daily activities may warrant occupational therapy. Gradual, gentle exposure to different textures in a playful way can help.' },
  ],
  whenNormal: ['Your toddler is cautious with new textures but warms up with exposure.', 'Your toddler has some texture preferences but can tolerate most.', 'Your toddler does not like one specific texture but enjoys others.', 'Your toddler participates in messy play with encouragement.'],
  whenToMention: ['Your toddler avoids all messy or textured play.', 'Your toddler cries or panics when hands get dirty.', 'Texture avoidance is affecting eating or daily activities.', 'Your toddler will not touch common surfaces like grass or sand.'],
  whenToActNow: ['Your child has suddenly developed extreme sensory avoidance.', 'Sensory avoidance is accompanied by developmental regression.'],
  relatedMilestones: ['sensory-development', 'fine-motor-manipulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-playground-fear', 'baby-mouthing-objects-after-12-months'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Sensory Processing Issues', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Dunn W. The Impact of Sensory Processing Abilities on Daily Life. Am J Occup Ther. 2001;55(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/12959225/' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring and Screening', url: 'https://www.cdc.gov/ncbddd/actearly/screening.html' },
  ],
};
