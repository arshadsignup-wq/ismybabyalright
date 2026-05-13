import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaccine-reactions-vs-illness',
  title: 'Vaccine Reactions vs. Coincidental Illness',
  category: 'medical',
  searchTerms: [
    'baby sick after vaccine',
    'fever after vaccination baby',
    'baby got sick from vaccine',
    'vaccine side effects vs illness',
    'cold after vaccination baby',
    'is baby sick from shots',
    'symptoms after immunization baby',
    'vaccine caused illness baby',
    'runny nose after vaccine',
  ],
  quickAnswer:
    'Mild symptoms like low-grade fever, fussiness, and soreness at the injection site are common and expected after vaccination, typically lasting 1-2 days. Because babies receive vaccines frequently during their first year, it is common for an unrelated illness like a cold to begin around the same time as a vaccine visit by coincidence. Vaccines do not cause colds, ear infections, or stomach bugs -- these are caused by the many viruses young children naturally encounter.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'After the 2-month vaccines, it is normal for your baby to be fussier than usual, sleep more, and have a mild fever (under 101°F or 38.3°C) for a day or two. If symptoms begin more than 48 hours after vaccines, they are very likely unrelated to the vaccination. A new fever appearing 3 or more days after vaccines, nasal congestion, cough, or vomiting and diarrhea are almost certainly from a separate illness and should be evaluated on their own.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a period of frequent well-child visits and vaccine doses, and also a time when babies begin encountering more germs. If your baby develops a runny nose or cough a few days after a vaccine visit, it is almost certainly a coincidental viral infection. Expected vaccine reactions like injection-site redness and mild fever typically resolve within 48 hours.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range are increasingly exposed to viruses, especially if they attend daycare. A mild illness that starts around the time of a vaccine visit is usually coincidental. One exception is the MMR vaccine (given around 12 months), which can cause a mild fever and faint rash 7-12 days later -- this is a normal immune response, not an illness, and is not contagious.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers catch an average of 8-10 viral infections per year, so the chance of a cold coinciding with a vaccine visit is high. If your toddler develops a prolonged fever, earache, green nasal discharge, or persistent symptoms beyond 2-3 days after vaccination, these likely represent an independent illness that should be addressed by your pediatrician.',
    },
  ],
  whenNormal: [
    'Low-grade fever (under 101°F or 38.3°C), fussiness, or decreased appetite for 1-2 days after vaccination',
    'Redness, swelling, or a small hard lump at the injection site that resolves within a few days',
    'Mild sleepiness or irritability on the day of vaccination',
    'A faint, non-itchy rash appearing 7-12 days after the MMR vaccine',
  ],
  whenToMention: [
    'You are unsure whether your baby\'s symptoms are from the vaccine or a separate illness',
    'Fever persists beyond 48 hours after vaccination or returns after initially resolving',
    'Your baby develops new symptoms like cough, congestion, vomiting, or diarrhea more than 2 days after vaccination',
    'The injection site becomes increasingly red, warm, or swollen over several days',
  ],
  whenToActNow: [
    'Your baby develops a high fever above 104°F (40°C), inconsolable crying for more than 3 hours, or signs of an allergic reaction such as hives, facial swelling, or difficulty breathing within hours of vaccination',
    'Your baby becomes limp, unusually pale, or unresponsive at any time after vaccination',
    'Your baby has a seizure, even a brief one, after receiving vaccines',
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
        'American Academy of Pediatrics. Possible Side Effects of Vaccines. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Possible-Side-Effects-of-Vaccines.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Vaccine Side Effects and Adverse Events. National Institute of Allergy and Infectious Diseases.',
      url: 'https://www.niaid.nih.gov/research/vaccine-side-effects',
    },
  ],
};
