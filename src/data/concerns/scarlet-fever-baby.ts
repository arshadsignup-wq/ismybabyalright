import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'scarlet-fever-baby',
  title: 'Scarlet Fever in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'scarlet fever baby',
    'scarlet fever toddler',
    'baby sandpaper rash',
    'baby red rash with sore throat',
    'scarlatina baby',
    'strep rash baby',
    'baby rough red rash fever',
    'scarlet fever treatment baby',
    'strawberry tongue baby',
    'is scarlet fever dangerous for babies',
  ],
  quickAnswer:
    'Scarlet fever is a bacterial infection caused by group A streptococcus (the same bacteria that causes strep throat). It produces a distinctive rough, sandpaper-like red rash along with fever and often a sore throat. While the name sounds alarming, scarlet fever is very treatable with antibiotics and is not more dangerous than strep throat itself. Most children recover fully within a week of starting treatment.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Scarlet fever is uncommon in babies under 1 year because maternal antibodies provide some protection and because strep throat itself is rare at this age. If a young infant develops a widespread red rash with fever, your pediatrician will want to evaluate for other causes first. If group A strep is confirmed, antibiotics are safe and effective even in young babies.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are more likely to develop scarlet fever, especially those in daycare or group settings. The illness typically starts with a fever and sore throat, followed 1-2 days later by a fine, red, sandpaper-textured rash that often begins on the neck and chest before spreading. The tongue may look white-coated at first, then turn bright red with raised bumps (called "strawberry tongue"). The rash usually fades within 3-4 days of starting antibiotics, and skin peeling on the fingertips and toes is common during recovery.',
    },
  ],
  whenNormal: [
    'A fine, rough-textured red rash that blanches (turns white) when you press on it',
    'Fever of 101-104F (38.3-40C) at the start of the illness that improves with antibiotics',
    'A red, bumpy "strawberry tongue" appearance',
    'Skin peeling on the hands, feet, and groin area 1-3 weeks after the rash fades',
    'The rash looking more intense in skin folds (armpits, elbows, groin)',
  ],
  whenToMention: [
    'Your child has a sore throat with a sandpaper-like rash and needs evaluation for strep testing',
    'Symptoms have not improved after 48 hours of antibiotics',
    'Your child develops a new rash or joint pain during or after treatment',
    'Another family member develops a sore throat or rash',
  ],
  whenToActNow: [
    'Your child has difficulty breathing, drooling excessively, or cannot swallow',
    'Your child appears severely ill, is not responsive, or has a very high fever that does not respond to medication',
    'Your child develops dark or cola-colored urine weeks after the illness, which could indicate a rare kidney complication',
    'Your child has swelling of the face or around the eyes after a strep infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['fever-with-rash', 'persistent-fever-baby', 'baby-rash-wont-go-away'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Scarlet Fever. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Scarlet-Fever.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Scarlet Fever: All You Need to Know.',
      url: 'https://www.cdc.gov/group-a-strep/diseases/scarlet-fever.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Group A Streptococcal Disease.',
      url: 'https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/vaccine-standardization/group-a-streptococcus',
    },
  ],
};
