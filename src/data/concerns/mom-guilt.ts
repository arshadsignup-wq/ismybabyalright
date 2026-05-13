import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'mom-guilt',
  title: 'Mom Guilt',
  category: 'behavior',
  searchTerms: [
    'mom guilt',
    'feeling like a bad mom',
    'guilty about going back to work',
    'guilty about using formula',
    'guilty about screen time baby',
    'not enjoying motherhood guilt',
    'parenting guilt',
    'feeling inadequate as a mother',
    'mom shame',
    'guilty about needing time alone',
  ],
  quickAnswer:
    'Mom guilt  -  the persistent feeling that you are not doing enough or not doing it right  -  is one of the most universal experiences of parenthood. It is not a reflection of your actual parenting quality. Research consistently shows that a "good enough" parent who is present, responsive, and takes care of their own well-being raises children who thrive.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is a prime time for guilt to take hold. You may feel guilty about how the birth went, about feeding choices, about not feeling an instant bond, or about struggling to enjoy a time everyone says should be magical. Postpartum hormonal shifts amplify these feelings. The truth is that the newborn period is survival mode for most parents, and getting through it  -  however you manage it  -  is an achievement, not a failure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the initial fog lifts, guilt often shifts to new targets: returning to work (or choosing to stay home), sleep training decisions, screen exposure, or comparing yourself to other parents on social media. Remember that there is no single "right" way to raise a baby. Children need a caregiver who is responsive and present  -  and a caregiver who takes breaks, asks for help, and maintains their own identity is better equipped to provide that.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Guilt about food choices (purees versus baby-led weaning, organic versus conventional, homemade versus store-bought) often peaks as babies start solids. You may also feel guilty about your baby\'s screen exposure, about not doing enough enrichment activities, or about feeling bored or frustrated. These feelings are normal. Your baby needs a fed, safe, and loved environment  -  the specific details of how you provide that matter far less than the overall quality of your relationship.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlerhood brings guilt about discipline approaches, tantrum responses, and whether you are providing enough stimulation, socialization, or outdoor time. You may feel guilty about losing your patience. The reality is that all parents lose their patience sometimes. What matters is how you repair  -  reconnecting with your child after a difficult moment teaches them about resilience and relationships far more than never having difficult moments at all.',
    },
  ],
  whenNormal: [
    'You feel occasional guilt about parenting choices but can still enjoy your daily life and your relationship with your baby',
    'You question your decisions sometimes but are able to move forward without getting stuck in rumination',
    'You feel guilty about taking time for yourself but recognize that self-care helps you be a better parent',
    'You compare yourself to other parents occasionally but can remind yourself that every family is different',
  ],
  whenToMention: [
    'Guilt is so persistent and overwhelming that it interferes with your ability to enjoy time with your baby or your daily functioning',
    'You feel like nothing you do is good enough and the feeling of inadequacy is constant rather than occasional',
    'You are withdrawing from your baby, partner, or social connections because of shame about your parenting',
    'The guilt is accompanied by persistent sadness, anxiety, irritability, or changes in sleep or appetite  -  these may indicate a postpartum mood disorder',
  ],
  whenToActNow: [
    'You are having thoughts that your baby would be better off without you or with someone else  -  this is a sign of a treatable condition, not a reflection of reality. Call the Postpartum Support International helpline (1-800-944-4773) or your healthcare provider immediately',
    'You are having thoughts of harming yourself  -  call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parenting Stress and Self-Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Parental-Stress-and-Self-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Postpartum Depression. NIMH.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Are You a New Mom? Common Feelings After Birth.',
      url: 'https://www.postpartum.net/learn-more/common-perinatal-mood-and-anxiety-disorders/',
    },
  ],
};
