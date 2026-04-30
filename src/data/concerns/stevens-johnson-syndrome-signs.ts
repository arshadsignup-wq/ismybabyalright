import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'stevens-johnson-syndrome-signs',
  title: 'Stevens-Johnson Syndrome Warning Signs in Children',
  category: 'medical',
  searchTerms: [
    'stevens johnson syndrome baby',
    'SJS baby',
    'severe drug reaction baby',
    'baby rash after medication',
    'baby blistering rash with fever',
    'toxic epidermal necrolysis baby',
    'baby skin peeling after medication',
    'severe medication allergy baby',
    'target lesion rash baby',
    'baby mouth sores after antibiotic',
    'drug reaction rash child',
  ],
  quickAnswer:
    'Stevens-Johnson syndrome (SJS) is a rare but serious reaction, most often triggered by medications, that causes painful blistering of the skin and mucous membranes (mouth, eyes, genitals). It is a medical emergency requiring immediate hospital care. SJS is very rare in infants and young children but can be triggered by certain antibiotics, anti-seizure medications, and NSAIDs. Early recognition and stopping the offending medication are critical for the best outcome.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'SJS is extremely rare in infants. When it occurs, it is most often triggered by a medication the baby was given directly (such as an antibiotic) or, rarely, by a medication passed through breast milk. The first signs are usually a flu-like illness with fever, followed by a painful, spreading rash. Because babies cannot describe pain, watch for sudden irritability, refusal to eat, and redness or blistering around the mouth and eyes. Seek emergency care immediately if suspected.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, SJS most commonly follows the use of antibiotics (especially sulfonamides), anti-seizure medications, or certain over-the-counter medications. The rash typically starts as flat, reddish or purplish spots that develop painful blisters in the center (target or "bulls-eye" lesions). The mouth, eyes, and genital area become painful with sores. If your child develops a widespread painful rash with any mucous membrane involvement after starting a new medication, seek emergency care without delay.',
    },
  ],
  whenNormal: [
    'A mild, non-painful rash after starting an antibiotic that does not involve the mouth or eyes (likely a simple drug rash)',
    'A viral rash that is not painful and does not cause blistering',
    'Mild redness at the site of a topical medication application',
  ],
  whenToMention: [
    'Your child develops any rash after starting a new medication',
    'Your child has a history of drug allergies and you want to discuss which medications to avoid',
    'You notice red, sore-looking eyes after starting a new medication',
  ],
  whenToActNow: [
    'Your child develops a painful, spreading rash with blisters after starting any medication',
    'Your child has painful sores in the mouth, eyes, or genital area along with a skin rash',
    'Your child has a rash with target-shaped (bulls-eye) lesions and fever',
    'Your child\'s skin looks like it is peeling or sliding off when touched',
    'Your child has a fever, appears very ill, and has a rapidly worsening rash after taking medication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rash-after-antibiotics', 'fever-with-rash', 'baby-blisters-on-skin', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Drug Reactions and Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Stevens-Johnson Syndrome. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459323/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Stevens-Johnson Syndrome.',
      url: 'https://www.niams.nih.gov/health-topics/stevens-johnson-syndrome',
    },
  ],
};
