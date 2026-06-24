import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-essential-oil-diffuser-risk',
  title: 'Are Essential Oil Diffusers Safe Around Babies?',
  category: 'medical',
  searchTerms: [
    'essential oil diffuser baby safe',
    'essential oils around newborn',
    'lavender oil baby safe',
    'eucalyptus oil baby danger',
    'diffusing essential oils infant',
    'essential oil baby lungs',
    'peppermint oil baby breathing',
    'essential oil diffuser nursery',
    'aromatherapy baby safety',
    'essential oils toxic to baby',
  ],
  quickAnswer:
    'Essential oil diffusers are generally not recommended in rooms with babies and young children. Many essential oils contain compounds that can irritate a baby\'s developing respiratory system, trigger allergic reactions, or be toxic if inhaled in concentrated amounts. Eucalyptus and peppermint oils are particularly risky for young children as they contain compounds that can cause breathing problems. If you choose to diffuse, use only baby-safe oils in very diluted amounts, in a well-ventilated room, for brief periods.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The AAP and most pediatric experts recommend avoiding essential oil diffusers entirely around babies under 6 months. Newborns have immature lungs and a very sensitive respiratory system. Oils like eucalyptus, peppermint, and wintergreen contain menthol and 1,8-cineole, which can slow or stop breathing in young infants. Even oils marketed as baby-safe can cause reactions in very young babies. If you want a pleasant scent in the nursery, ensure good ventilation and use fragrance-free products.',
    },
    {
      ageRange: '6-24 months',
      context:
        'If you choose to use a diffuser around an older baby, take significant precautions. Use only oils considered generally safer for children (such as highly diluted lavender or chamomile), diffuse for no more than 30-60 minutes at a time, ensure the room is well-ventilated, and keep the diffuser out of the baby\'s reach. Never apply undiluted essential oils directly to a baby\'s skin. Stop diffusing immediately if your baby shows any signs of respiratory irritation - coughing, wheezing, runny nose, or difficulty breathing.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Toddlers face additional risks because they may be able to access and potentially ingest essential oils from a diffuser or bottle. Essential oils are highly concentrated and even small amounts ingested can cause serious poisoning. Keep all essential oil bottles locked away and out of reach. If you diffuse around toddlers, the same precautions apply: short duration, good ventilation, child-safer oils only, and monitoring for any adverse reactions. Never let a toddler handle essential oil bottles.',
    },
  ],
  whenNormal: [
    'You use a diffuser briefly in a well-ventilated room with a mild, diluted oil and your baby shows no adverse reactions.',
    'You choose not to diffuse essential oils around your baby - this is the safest option.',
    'You use alternative approaches for pleasant scents, such as opening a window or using unscented products.',
  ],
  whenToMention: [
    'You want guidance on which essential oils, if any, are considered safer to use around children.',
    'Your baby developed a rash after exposure to a diffused essential oil.',
    'You have been applying essential oils to your baby\'s skin and want to know if this is safe.',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing, wheezing, or coughing persistently after essential oil exposure.',
    'Your baby or toddler has ingested any amount of essential oil - call Poison Control (1-800-222-1222) immediately.',
    'Your baby has essential oil on their skin and develops a severe reaction - redness, blistering, or significant swelling.',
    'Your baby has developed chemical burns on skin or in the mouth from essential oil exposure.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-essential-oil-ingestion-danger',
    'baby-cough-home-remedies-safe',
    'baby-amber-necklace-evidence',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Essential Oils and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Essential-Oils-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Toxicity of Essential Oils in Children. Clinical Toxicology, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29565679/',
    },
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Essential Oils: Poisoning and Safety Information.',
      url: 'https://www.poison.org/articles/essential-oils',
    },
  ],
};
