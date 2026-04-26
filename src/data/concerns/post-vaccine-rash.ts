import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'post-vaccine-rash',
  title: 'Post-Vaccine Rash',
  category: 'medical',
  searchTerms: [
    'rash after vaccine',
    'baby rash after shots',
    'post-vaccine rash normal',
    'rash after MMR vaccine',
    'red spots after vaccination',
    'rash at injection site',
    'baby skin reaction after vaccine',
    'vaccine allergic reaction rash',
    'bumps after immunization',
    'hives after vaccine baby',
  ],
  quickAnswer:
    'Mild rashes after vaccination are common and usually harmless. They occur as part of your baby\'s normal immune response. The type and timing of the rash depends on which vaccine was given. Rashes at the injection site (redness, swelling) typically appear within 1-2 days. A more widespread mild rash can appear 7-14 days after live vaccines like MMR and varicella. Most vaccine-related rashes resolve on their own without treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'At the 2, 4, and 6-month vaccine visits, local reactions at the injection site are the most common skin response - redness, mild swelling, or a small firm bump that may last several days to a week. This is a normal inflammatory response and does not require treatment. A cool compress can provide comfort. Widespread rashes after these vaccines are uncommon.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Similar injection-site reactions may occur. If your baby receives the flu vaccine, mild redness at the injection site is common. Keep in mind that babies at this age frequently develop rashes from viral illnesses, so a rash that appears around the same time as a vaccine visit may be coincidental rather than vaccine-related.',
    },
    {
      ageRange: '12-18 months',
      context:
        'The 12-month vaccines include MMR and varicella, both live vaccines that can cause delayed rashes. About 5% of children develop a mild measles-like rash (flat pink spots) 7-12 days after the MMR vaccine. About 4% develop a mild varicella-like rash (a few small bumps or blisters) 5-26 days after the chickenpox vaccine. Both are mild, non-contagious in most cases, and resolve on their own.',
    },
    {
      ageRange: '18 months - 5 years',
      context:
        'Booster doses may cause larger or more noticeable injection-site reactions than earlier doses, especially the DTaP booster. The entire upper arm may become red and swollen, which is sometimes called a "large local reaction." While it looks alarming, it is not dangerous and resolves within a few days. Cool compresses and acetaminophen or ibuprofen for discomfort can help.',
    },
  ],
  whenNormal: [
    'Redness, swelling, or a small hard lump at the injection site that appears within 1-2 days',
    'A mild, widespread pink rash appearing 7-14 days after the MMR or varicella vaccine',
    'The rash is not bothering your child and they seem otherwise well',
    'Injection-site redness or swelling that is less than 2-3 inches across',
    'The rash resolves on its own within a few days to a week',
  ],
  whenToMention: [
    'A rash covers a large area of the body, lasts more than a week, or is accompanied by fever that seems out of proportion to a normal vaccine response',
    'Injection-site redness or swelling is spreading significantly beyond the initial area, feels warm, or is increasingly painful',
  ],
  whenToActNow: [
    'Your baby develops hives (raised, itchy welts that may appear anywhere on the body) within minutes to hours after vaccination - this could indicate an allergic reaction',
    'Rash is accompanied by swelling of the face, lips, or throat, difficulty breathing, wheezing, or your baby seems severely ill - call 911 immediately as this could be anaphylaxis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Possible Side Effects from Vaccines.',
      url: 'https://www.cdc.gov/vaccines/vac-gen/side-effects.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: What You Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. MMR (Measles, Mumps, and Rubella) Vaccine.',
      url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mmr.html',
    },
  ],
};
