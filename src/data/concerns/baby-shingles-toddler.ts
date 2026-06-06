import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-shingles-toddler',
  title: 'Shingles (Herpes Zoster) in Young Children',
  category: 'skin',
  searchTerms: ['baby shingles', 'toddler shingles', 'shingles young child', 'herpes zoster baby', 'baby shingles after chickenpox vaccine', 'child shingles', 'toddler painful rash one side', 'baby rash one side body stripe', 'shingles infant rare', 'zoster toddler'],
  quickAnswer: 'Shingles (herpes zoster) is rare but can occur in young children, usually in a mild form. It happens when the varicella-zoster virus (chickenpox virus) reactivates from dormancy. In children, it can occur after chickenpox infection or rarely after vaccination. Childhood shingles is typically mild, localized to one area, and resolves within 2 to 4 weeks.',
  byAge: [
    { ageRange: '0-3 months', context: 'Shingles in young infants is very rare but can occur if the mother had chickenpox during pregnancy, as the virus can be transmitted to the fetus. If a newborn develops a band-like blistering rash on one side of the body, seek medical evaluation. Treatment with antivirals may be needed.' },
    { ageRange: '3-6 months', context: 'Shingles remains very uncommon at this age. The characteristic sign is a painful or itchy blistering rash that follows a dermatomal pattern (a stripe on one side of the body). In infants, pain may be less prominent than in adults. Have any suspicious rash evaluated by your pediatrician.' },
    { ageRange: '6-12 months', context: 'Babies who had chickenpox in the first months of life may develop shingles, though this is uncommon. The rash typically appears as grouped blisters on a red base, following a nerve pattern on one side of the body. It is much less painful in children than in adults and usually resolves without complications.' },
    { ageRange: '12-24 months', context: 'Toddlers who received the varicella vaccine can very rarely develop shingles from the vaccine strain. This is typically mild and self-limiting. If your toddler develops a band-like rash with blisters on one side of the body, see your pediatrician. Antiviral medication may be prescribed, especially if the rash involves the face.' },
  ],
  whenNormal: ['A small patch of blisters on one side of the body that is mild and the child is acting well'],
  whenToMention: ['A band-like rash with blisters appears on one side of your child\'s body', 'You suspect shingles and want confirmation and treatment guidance', 'Your child seems uncomfortable or the rash is spreading'],
  whenToActNow: ['Shingles near the eye, ear, or tip of the nose, which can affect vision or hearing', 'Shingles in an immunocompromised child', 'Widespread blisters beyond a single dermatome, or a child who appears very unwell'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Shingles (Herpes Zoster). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Shingles-Herpes-Zoster.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Shingles (Herpes Zoster).', url: 'https://www.cdc.gov/shingles/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Herpes Zoster in Childhood. Pediatric Infectious Disease Journal.', url: 'https://pubmed.ncbi.nlm.nih.gov/21164388/' },
  ],
  relatedConcernSlugs: ['baby-chickenpox-mild-vaccinated', 'baby-blister-rash-fluid-filled', 'baby-herpes-simplex-cold-sore'],
};
