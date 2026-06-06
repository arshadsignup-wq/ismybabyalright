import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-after-loss',
  title: 'Pregnancy After Miscarriage or Stillbirth',
  category: 'maternal',
  searchTerms: ['pregnancy after miscarriage', 'pregnancy after stillbirth', 'pregnant again after loss', 'scared to be pregnant again', 'pregnancy after loss anxiety', 'rainbow baby', 'pregnancy after miscarriage risk', 'when to try again after loss', 'pregnancy after late loss'],
  quickAnswer: 'Pregnancy after loss is often a complex emotional experience filled with hope, anxiety, and grief simultaneously. You may feel joy about the new pregnancy while still mourning your previous loss. These mixed feelings are completely normal. Extra monitoring and emotional support during a subsequent pregnancy can help you feel safer and more supported.',
  byAge: [
    { ageRange: 'First trimester', context: 'The first trimester after a loss can be especially anxiety-provoking, particularly around the gestational age when the previous loss occurred. Many providers offer earlier and more frequent ultrasounds for reassurance. It is okay to ask for extra appointments. Connecting with a therapist who specializes in perinatal loss can be very helpful during this time.' },
    { ageRange: 'Second trimester', context: 'As you pass the stage of your previous loss, anxiety may ease somewhat or may shift to new worries. Each milestone can bring both relief and renewed anxiety. Honor your feelings without judgment. Support groups for pregnancy after loss can connect you with others who truly understand your experience.' },
    { ageRange: 'Third trimester', context: 'The approach of delivery can intensify emotions. Work with your provider to create a care plan that addresses your needs, which may include additional monitoring, specific birth preferences, and mental health support. It is okay to feel a mix of excitement, fear, and grief as your due date approaches.' },
  ],
  whenNormal: ['Feeling intense anxiety, especially around the gestational age of your previous loss', 'Difficulty bonding with the new pregnancy as a protective mechanism', 'Grieving your previous baby while celebrating this pregnancy', 'Needing extra reassurance from your care team'],
  whenToMention: ['You would like additional monitoring or more frequent appointments for reassurance', 'Anxiety is constant and overwhelming', 'You need referrals for counseling or support groups for pregnancy after loss'],
  whenToActNow: ['Anxiety is so severe that you cannot function or care for yourself', 'You are having symptoms similar to your previous loss (bleeding, pain, decreased movement)', 'You are experiencing thoughts of self-harm'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Early Pregnancy Loss. ACOG Practice Bulletin No. 200, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss' },
    { org: 'NIH', citation: 'National Library of Medicine. Psychological Impact of Pregnancy After Loss. BMC Pregnancy and Childbirth, 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/29523099/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Getting Pregnant After a Loss. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/getting-pregnant-after-a-loss.aspx' },
  ],
  relatedConcernSlugs: ['rainbow-baby-anxiety', 'pregnancy-loss-grief-support', 'pregnancy-anxiety'],
};
