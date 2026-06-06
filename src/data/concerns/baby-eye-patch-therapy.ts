import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eye-patch-therapy',
  title: 'My Baby Needs Eye Patching for Lazy Eye',
  category: 'medical',
  searchTerms: [
    'baby eye patch lazy eye',
    'patching therapy baby',
    'amblyopia patching infant',
    'baby occlusion therapy',
    'how long to patch baby eye',
    'baby won\'t keep eye patch on',
    'lazy eye treatment baby',
    'baby eye patch schedule',
    'patching one eye baby',
    'amblyopia treatment infant',
  ],
  quickAnswer:
    'Eye patching (occlusion therapy) is a standard treatment for amblyopia (lazy eye). By covering the stronger eye, the brain is forced to use the weaker eye, strengthening its visual pathway. Treatment is most effective when started early, ideally before age 3-4. Your ophthalmologist will prescribe the number of hours per day based on severity. Consistency is more important than perfection - any patching helps.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Patching is occasionally started this early for severe amblyopia or after cataract surgery. Very young babies may tolerate patches better than older babies because they have not yet developed the coordination to remove them. Use adhesive patches designed for infant skin. Apply when your baby is awake and supervised.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Starting patching early takes advantage of the brain\'s peak visual development period. Your ophthalmologist may start with 1-2 hours per day and adjust based on response. Your baby will fuss initially because the patch covers their better-seeing eye, but most adapt within 1-2 weeks. Distraction with engaging toys and activities helps.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are more adept at removing patches. Try applying the patch before engaging activities. Some parents find that placing the patch immediately upon waking, before the baby is fully alert, helps. Adhesive patches work better than clip-on patches for this age. If the skin becomes irritated, rotate patch brands or use a skin barrier spray.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may resist patching strongly. Strategies include: patching during favorite TV shows or activities, positive reinforcement, letting them decorate patches with stickers, and building patching into a daily routine. Atropine eye drops (which blur the stronger eye) may be an alternative if patching compliance is very difficult.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can begin to understand why they need the patch with simple explanations. Sticker charts and small rewards for completing patching time help motivate compliance. Treatment may be needed for months to years. Regular follow-up with your ophthalmologist ensures the treatment is working and adjusts the plan as needed.',
    },
  ],
  whenNormal: [
    'Your baby fusses when the patch is applied but engages in normal activities while wearing it',
    'You notice gradual improvement in the weaker eye\'s alignment or visual attention over weeks to months',
    'The skin under the patch is slightly red from the adhesive but not broken or blistered',
  ],
  whenToMention: [
    'Your baby absolutely refuses to keep the patch on and you cannot achieve the prescribed hours',
    'You do not see any improvement after several months of consistent patching',
    'The skin under the patch is becoming significantly irritated or breaking down',
  ],
  whenToActNow: [
    'You notice the previously stronger eye seems to be worsening (reverse amblyopia from over-patching), with that eye turning or seeming to see poorly',
    'Your baby develops a severe skin reaction to the patch adhesive with blistering or infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-glasses-needed-infant',
    'eye-alignment-issues-infant',
    'amblyopia-lazy-eye-treatment-timing',
    'baby-pediatric-ophthalmologist-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amblyopia (Lazy Eye). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Amblyopia-Lazy-Eye.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Amblyopia (Lazy Eye).',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/amblyopia-lazy-eye',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Lazy eye (amblyopia): Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/lazy-eye/diagnosis-treatment/drc-20352397',
    },
  ],
};
