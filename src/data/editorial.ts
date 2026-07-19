export interface Reviewer {
  id: string;
  name: string;
  credentials?: string;
  title: string;
  bio: string;
  profileUrl?: string;
  externalUrl?: string;
}

export const defaultReviewer: Reviewer = {
  id: 'editorial-team',
  name: 'Is My Baby Alright? Editorial Team',
  title: 'Editorial Team',
  bio: 'Our editorial team reviews every page against published clinical guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH. We do not publish content based on anecdotal evidence or personal opinion.',
};

/** Named reviewers — add future medical professionals here */
export const reviewers: Reviewer[] = [];

export const editorialProcess = {
  sourceHierarchy: [
    { org: 'CDC', fullName: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov' },
    { org: 'WHO', fullName: 'World Health Organization', url: 'https://www.who.int' },
    { org: 'AAP', fullName: 'American Academy of Pediatrics', url: 'https://www.aap.org' },
    { org: 'ACOG', fullName: 'American College of Obstetricians and Gynecologists', url: 'https://www.acog.org' },
    { org: 'ASHA', fullName: 'American Speech-Language-Hearing Association', url: 'https://www.asha.org' },
    { org: 'NIH', fullName: 'National Institutes of Health', url: 'https://www.nih.gov' },
  ],
  factCheckingSteps: [
    'Identify the clinical claim or developmental milestone being described.',
    'Locate the corresponding published guideline from one or more authoritative sources.',
    'Verify that age ranges, timelines, and symptom descriptions match the source material.',
    'Confirm that urgency tiers (normal, mention, act now) are supported by the guideline.',
    'Ensure no unsupported claims, diagnoses, or treatment recommendations are present.',
    'Validate that all source links are active and point to the correct documents.',
    'Review the final page for clarity, accuracy, and consistency with site-wide standards.',
  ],
  updateCadence: 'Content is updated when new guidelines are published by source organizations and during periodic site-wide reviews.',
  lastSiteWideReview: '2026-06',
};
