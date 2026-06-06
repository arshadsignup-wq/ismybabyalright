import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-asthma-action-plan',
  title: 'Does My Baby Need an Asthma Action Plan?',
  category: 'medical',
  searchTerms: [
    'baby asthma action plan',
    'asthma management baby',
    'baby asthma treatment plan',
    'asthma control baby toddler',
    'asthma action plan children',
    'when to use rescue inhaler baby',
    'baby asthma green yellow red zones',
    'asthma triggers baby',
    'asthma management daycare',
    'baby asthma medication plan',
  ],
  quickAnswer:
    'An asthma action plan is a written guide from your pediatrician that tells you how to manage your baby\'s asthma day-to-day and what to do when symptoms worsen. It typically uses a traffic light system: green (doing well), yellow (caution, symptoms increasing), and red (emergency). Any child diagnosed with asthma or who has recurrent wheezing should have a written action plan.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Formal asthma diagnosis is rarely made this young, but babies with recurrent wheezing may have a preliminary management plan. Work closely with your pediatrician to understand when to use rescue medication and when to seek emergency care. An early action plan focuses on recognizing breathing difficulty and knowing when to call for help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has had multiple wheezing episodes, your pediatrician may develop a preliminary treatment plan even without a formal asthma diagnosis. This may include a rescue inhaler to use when wheezing starts. Ask for written instructions so all caregivers understand the plan.',
    },
    {
      ageRange: '6-12 months',
      context:
        'An action plan at this age typically includes when to use rescue medication (albuterol), how many puffs and how often, when to add or increase controller medication, and when to go to the emergency room. Share the plan with all caregivers, including grandparents and daycare providers.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A comprehensive action plan becomes especially important as your toddler interacts with more environments and triggers. The plan should address daily preventive medications (if prescribed), rescue medication instructions, trigger avoidance strategies, and clear emergency instructions. Review and update the plan with your pediatrician every 3-6 months.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, asthma patterns are usually clearer. Your action plan should be tailored to your child\'s specific triggers and severity. If your child attends preschool or daycare, provide a copy of the action plan along with medications and a spacer. Ensure staff know how to recognize symptoms and administer treatment.',
    },
  ],
  whenNormal: [
    'Your baby\'s symptoms are well controlled in the green zone: no coughing, wheezing, or breathing difficulty',
    'Your baby rarely needs their rescue inhaler (less than twice a week)',
    'Your baby is active, sleeping well, and not limited by breathing symptoms',
  ],
  whenToMention: [
    'Your baby needs their rescue inhaler more than twice a week (you may need to step up treatment)',
    'You want to discuss whether daily preventive medication is appropriate',
    'Your baby\'s action plan needs updating because of changes in symptoms or growth',
  ],
  whenToActNow: [
    'Your baby is in the red zone: severe wheezing or difficulty breathing that does not improve with rescue inhaler, or needing rescue inhaler every 2-4 hours',
    'Your baby has chest retractions, cannot speak or cry normally due to breathing difficulty, or lips turn blue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-wheezing-recurrent',
    'baby-nebulizer-treatment-concerns',
    'baby-inhaler-spacer-use',
    'baby-pediatric-pulmonologist-when',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Asthma Action Plan.',
      url: 'https://www.nhlbi.nih.gov/health-topics/asthma-action-plan',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Asthma. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Asthma.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Asthma Action Plans.',
      url: 'https://www.cdc.gov/asthma/actionplan.html',
    },
  ],
};
