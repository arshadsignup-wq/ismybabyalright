import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cord-blood-banking-decisions',
  title: 'Cord Blood Banking Questions',
  category: 'maternal',
  searchTerms: ['cord blood banking', 'cord blood storage', 'stem cells cord blood', 'private cord blood bank', 'public cord blood bank', 'cord blood banking worth it', 'cord blood banking cost', 'should I bank cord blood', 'cord blood benefits', 'cord blood donation'],
  quickAnswer: 'Cord blood contains stem cells that can be used to treat certain blood disorders and cancers. You can donate cord blood to a public bank (free, available to anyone in need) or store it in a private bank (paid, reserved for your family). ACOG recommends public donation over private banking for most families, as the chance of a child needing their own stored cord blood is very small.',
  byAge: [
    { ageRange: 'Second trimester', context: 'The second trimester is a good time to research cord blood banking options and make your decision. Public cord blood banking is free and altruistic, potentially saving another person\'s life. Private banking costs $1,500-$2,500 upfront plus annual storage fees. Private banking may be more appropriate if you have a family member with a condition treatable with stem cells.' },
    { ageRange: 'Third trimester', context: 'If you decide to bank cord blood, arrange it well before your due date. Your provider needs to know your decision. Public donation requires enrollment and compatibility with a participating hospital. Private banking requires ordering a collection kit in advance. Cord blood collection does not affect labor, delivery, or delayed cord clamping.' },
  ],
  whenNormal: ['Wanting more information to make an informed decision', 'Feeling unsure about whether cord blood banking is worthwhile', 'Deciding not to bank cord blood - this is a perfectly valid choice'],
  whenToMention: ['You have a family history of blood cancers, bone marrow disorders, or inherited immune deficiencies', 'You want to understand the difference between public and private banking', 'You need referrals to cord blood banking services'],
  whenToActNow: ['This is not an urgent medical concern - cord blood banking is an optional decision to make during pregnancy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Cord Blood Banking. ACOG Committee Opinion No. 771, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/03/umbilical-cord-blood-banking' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cord Blood Banking for Potential Future Transplantation. Pediatrics, 2017.', url: 'https://publications.aap.org/pediatrics/article/140/5/e20172695/38289' },
    { org: 'NIH', citation: 'National Library of Medicine. Cord Blood Stem Cells. MedlinePlus, 2023.', url: 'https://medlineplus.gov/cordbloodstemcells.html' },
  ],
  relatedConcernSlugs: ['delayed-cord-clamping'],
};
