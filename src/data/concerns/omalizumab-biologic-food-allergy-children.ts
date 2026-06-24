import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'omalizumab-biologic-food-allergy-children',
  title: 'Omalizumab (Xolair) for Food Allergies in Children',
  category: 'medical',
  searchTerms: [
    'omalizumab food allergy children',
    'Xolair food allergy kids',
    'biologic therapy food allergy',
    'anti-IgE food allergy treatment',
    'Xolair peanut allergy child',
    'omalizumab FDA approval food allergy',
    'new food allergy treatment children',
    'Xolair injection food allergy',
    'biologic food allergy 2024 2025',
    'omalizumab multiple food allergies',
  ],
  quickAnswer:
    'Omalizumab (brand name Xolair) received FDA approval in 2024 as the first biologic therapy for food allergies in children ages 1 and older. It works by blocking IgE antibodies, which are responsible for allergic reactions, thereby raising the threshold of allergen needed to trigger a reaction. In clinical trials, after 16-20 weeks of treatment, 67% of participants could tolerate the equivalent of 2-3 peanuts without a reaction, compared to 7% on placebo. Omalizumab does not cure food allergies but provides a significant safety net against accidental exposures. It is given as an injection every 2-4 weeks.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Food allergies are commonly diagnosed in this age range, with peanut, milk, egg, and tree nut allergies being most prevalent. Omalizumab is FDA-approved for children age 1 and older with IgE-mediated food allergies. For very young children, the decision to use omalizumab should weigh the severity of the allergy, the risk of accidental exposure, and the burden of injections. Some families may prefer to first try oral immunotherapy (OIT) or baked-milk/baked-egg laddering for milk and egg allergies. Discuss all options with a board-certified pediatric allergist.',
    },
    {
      ageRange: '2-5 years',
      context:
        'This age range may benefit most from omalizumab because accidental exposures become more common as children enter daycare and preschool settings where food exposure is harder to control. Omalizumab is particularly valuable for children with multiple food allergies, as OIT typically addresses only one allergen at a time. The medication can be used alongside OIT to improve its safety and effectiveness. Side effects include injection site reactions and, rarely, anaphylaxis to the medication itself (which is why the first doses are given in a medical setting with monitoring).',
    },
    {
      ageRange: '5 years and older',
      context:
        'School-age children face frequent food allergy challenges in school cafeterias, birthday parties, and social settings. Omalizumab reduces but does not eliminate the risk of allergic reactions, so strict allergen avoidance and carrying epinephrine must continue. The medication requires ongoing injections every 2-4 weeks, and its effects wear off if discontinued. Cost can be significant (list price around $2,500/month), though most insurance plans and the manufacturer\'s patient assistance program can reduce out-of-pocket costs. Long-term safety data are still being collected.',
    },
  ],
  whenNormal: [
    'Your child\'s food allergies are well-managed with avoidance, they carry epinephrine, and they have not had recent accidental exposures.',
    'Your child is undergoing successful OIT and does not need additional treatment.',
    'Your child has outgrown a food allergy, as confirmed by supervised oral food challenge.',
  ],
  whenToMention: [
    'Your child has severe or multiple food allergies and you want to discuss omalizumab as a treatment option.',
    'Your child has frequent accidental exposures despite best avoidance efforts.',
    'You want to understand the differences between omalizumab, OIT, and other emerging food allergy treatments.',
    'Your child\'s food allergies are significantly impacting quality of life and you want to explore all options.',
  ],
  whenToActNow: [
    'Your child is having an allergic reaction (hives, vomiting, difficulty breathing, swelling) - use epinephrine and call 911.',
    'Your child had an anaphylactic reaction to an omalizumab injection - seek emergency care.',
    'Your child ingested a known allergen and is showing any symptoms of an allergic reaction.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'oral-immunotherapy-food-allergy-toddler',
    'hives',
    'rash-after-antibiotics',
  ],
  sources: [
    {
      org: 'FDA',
      citation:
        'FDA. FDA Approves First Medication to Help Reduce Allergic Reactions to Multiple Foods After Accidental Exposure, 2024.',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-help-reduce-allergic-reactions-multiple-foods-after-accidental-exposure',
    },
    {
      org: 'NIH',
      citation:
        'NIH/NIAID - OUtMATCH Trial: Omalizumab as Monotherapy and as Adjunct Therapy to Multi-Allergen OIT. New England Journal of Medicine, 2024.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/38407394/',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology. Omalizumab for Food Allergy.',
      url: 'https://acaai.org/allergies/management-and-treatment/omalizumab/',
    },
  ],
};
