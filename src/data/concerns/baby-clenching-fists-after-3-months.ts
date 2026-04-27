import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-clenching-fists-after-3-months',
  title: 'Baby Clenching Fists After 3 Months',
  category: 'physical',
  searchTerms: ['baby clenching fists','baby fists closed after 3 months','baby hands always closed','baby won\'t open hands','baby tight fists','baby clenched hands normal','when do babies open hands','baby hands not relaxing','baby fists clenched while feeding','cortical thumbs baby','baby thumbs tucked in fists','baby not opening fingers'],
  quickAnswer: 'Newborns naturally keep their fists clenched due to the palmar grasp reflex. Hands should begin opening more by 2 months and be mostly open by 3-4 months. By 4 months, your baby should be reaching for objects with open hands. If your baby\'s fists remain tightly clenched after 3-4 months, especially with thumbs tucked inside the fist (cortical thumbs), it could indicate increased muscle tone (hypertonia) and should be evaluated. However, some babies simply have a stronger grasp reflex that takes longer to fade.',
  byAge: [
    { ageRange: '0-2 months', context: 'Clenched fists are completely normal in newborns. The palmar grasp reflex causes babies to close their fists when anything touches their palm. You may notice your baby\'s hands clench more tightly when crying or startled. The fists should begin relaxing during calm, alert states - you may see the hands open briefly during feeding or sleep. Do not try to force the hands open. The reflex gradually fades as the nervous system matures.' },
    { ageRange: '2-3 months', context: 'Hands should be opening more frequently. You should see periods where the hands are relaxed and open, especially when your baby is calm and alert. The grasp reflex is diminishing and your baby may start swiping at objects. If your baby\'s hands are always tightly fisted with no relaxation, or if the thumbs are consistently tucked inside the fist (cortical thumbs), mention this to your pediatrician at the 2-month well-visit. Some increased tone is normal but persistent fisting may warrant monitoring.' },
    { ageRange: '3-4 months', context: 'By 3-4 months, hands should be mostly open and your baby should be reaching for and grasping objects voluntarily. If fists remain persistently clenched at this age, your pediatrician should evaluate muscle tone. Increased tone in the hands can be isolated or part of a broader pattern of hypertonia. If your baby has normal tone elsewhere (relaxed legs, good head control) and just tends to keep hands fisted, it may simply be a slower-to-resolve reflex. One-sided fisting (one hand always clenched while the other is open) is more concerning than bilateral fisting.' },
    { ageRange: '4-6 months', context: 'Hands should be fully open and actively grasping, reaching, and exploring. By 5-6 months, your baby should be transferring objects between hands. If your baby still has persistently clenched fists at this age, a developmental or neurological evaluation is important. Persistent fisting beyond 4 months can be an early sign of cerebral palsy or other neuromotor conditions. However, many babies with slightly delayed hand opening develop normally - early intervention with physical or occupational therapy can support development if needed.' },
  ],
  whenNormal: ['Your newborn under 2 months has clenched fists - this is the normal palmar grasp reflex','Your baby\'s hands are fisted when crying or active but open when calm and relaxed','Hands are gradually opening more over weeks and months','Your baby is starting to swipe at and reach for objects by 3-4 months'],
  whenToMention: ['Your baby\'s hands remain tightly fisted after 3 months with little relaxation','Thumbs are consistently tucked inside the fists (cortical thumbs)','One hand is always fisted while the other is open','Your baby is not reaching for or grasping objects by 4-5 months'],
  whenToActNow: ['Persistent fisting with overall increased body tone - legs stiff, arms tight, arching','Fisting combined with difficulty feeding, swallowing, or head control problems','Your baby had a difficult birth or NICU stay and has persistent fisting - early evaluation is important'],
  relatedMilestones: ['fine-motor-grasp','gross-motor-reaching'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-legs-shaking-when-standing','baby-hand-flapping','early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand and Finger Skills. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-Birth-to-12-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby by 4 Months.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html' },
    { org: 'NIH', citation: 'Palmar Grasp Reflex. StatPearls. National Library of Medicine.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557453/' },
  ],
};
