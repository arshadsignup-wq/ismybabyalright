import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grandparent-raising-grandchild-legal-challenges',
  title: 'Legal Challenges When Grandparents Raise Grandchildren',
  category: 'behavior',
  searchTerms: [
    'grandparent custody of grandchild',
    'grandparent guardianship legal process',
    'kinship care legal rights',
    'grandparent legal authority medical decisions',
    'grandparent raising grandchild without custody',
    'how to get custody of grandchild',
    'power of attorney grandchild',
    'grandparent rights legal',
    'informal kinship care legal issues',
    'grandparent can\'t enroll grandchild school',
  ],
  quickAnswer:
    'Grandparents raising grandchildren often face significant legal hurdles because without formal custody or guardianship, they may lack authority to make medical decisions, enroll the child in school, or access government benefits. Approximately 2.4 million grandparents are primary caregivers in the U.S., and many operate without legal documentation. Establishing legal custody, guardianship, or at minimum a caregiver authorization affidavit is critical for the child\'s welfare and the grandparent\'s ability to provide full care.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'For infant grandchildren, legal authority is especially urgent because babies require frequent medical care, vaccinations, and may need emergency treatment. Without legal documentation, hospitals may be unable to treat the child without parental consent. Options include: a caregiver authorization affidavit (simplest, available in many states), temporary guardianship through family court, or power of attorney from the parent if they are willing to sign. Contact your local legal aid society for free assistance if cost is a barrier.',
    },
    {
      ageRange: '6-24 months',
      context:
        'As the child grows, healthcare decisions continue (vaccinations, sick visits, developmental screenings) and legal authority remains essential. If the parents are incarcerated, in treatment, or have abandoned the child, you may qualify for kinship foster care through your local child welfare agency, which provides both legal authority and financial support. Some states have simplified court processes specifically for kinship placements. Document everything: when the child came into your care, why, and any communication with the parents.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By this age, school enrollment and early intervention services may require legal guardianship documentation. If you have been caring for the child informally, now is an important time to formalize the arrangement. Full legal custody provides the most comprehensive rights and stability. Adoption may be an option if parental rights have been terminated. Each state has different requirements, so consult with a family law attorney or legal aid organization for guidance specific to your situation.',
    },
  ],
  whenNormal: [
    'You have formal legal custody or guardianship and can make all necessary decisions for the child.',
    'The child\'s parents are cooperating and have signed appropriate legal documents.',
    'You have connected with legal aid or kinship care services and have a plan to formalize the arrangement.',
  ],
  whenToMention: [
    'You are caring for a grandchild without any legal documentation and need guidance on next steps.',
    'The stress of the legal situation is affecting your mental health or ability to care for the child.',
    'You need referrals to legal aid organizations or kinship care navigators.',
  ],
  whenToActNow: [
    'Your grandchild needs medical care and you are being turned away because you lack legal authority to consent to treatment - go to the emergency room, as they must treat the child regardless.',
    'You believe the child is in danger if returned to the parents and need emergency custody.',
    'Child protective services is involved and you need legal representation to maintain or gain custody.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-raising-baby-financial-strain',
    'grandparent-boundary-setting-baby',
    'nicu-baby-bonding-difficulty-parent',
  ],
  sources: [
    {
      org: 'ACF',
      citation:
        'Administration for Children and Families, U.S. Department of Health and Human Services. Kinship Caregivers and the Child Welfare System.',
      url: 'https://www.childwelfare.gov/topics/outofhome/kinship/',
    },
    {
      org: 'ABA',
      citation:
        'American Bar Association. Grandparent Caregivers and the Law.',
      url: 'https://www.americanbar.org/groups/law_aging/resources/grandparents/',
    },
    {
      org: 'Generations United',
      citation:
        'Generations United. State Law and Policy Resource Center for Grandfamilies.',
      url: 'https://www.grandfamilies.org/',
    },
  ],
};
