import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rainbow-baby-anxiety',
  title: 'Anxiety in Pregnancy After Loss (Rainbow Baby)',
  category: 'maternal',
  searchTerms: ['rainbow baby anxiety', 'pregnant after loss anxious', 'scared baby will die', 'anxiety after miscarriage new pregnancy', 'can\'t enjoy pregnancy after loss', 'hypervigilant pregnancy after loss', 'waiting for something to go wrong pregnant', 'pregnancy after loss support'],
  quickAnswer: 'Anxiety during a pregnancy after loss (often called a "rainbow baby" pregnancy) is extremely common and valid. Research shows that up to 50% of people experience significant anxiety in pregnancies following loss. You are not being dramatic or ungrateful - your brain is trying to protect you based on past experience. Support is available and can help you navigate this journey.',
  byAge: [
    { ageRange: 'First trimester', context: 'The first trimester may feel like holding your breath. You might check for bleeding constantly, analyze every symptom, or feel unable to connect with the pregnancy. This hypervigilance is a normal trauma response. Consider requesting early ultrasounds for reassurance. A therapist experienced in perinatal loss can provide valuable coping strategies.' },
    { ageRange: 'Second trimester', context: 'You may feel cautious about celebrating milestones, buying baby items, or telling people. Some parents describe feeling superstitious or like they are "jinxing" things. It is okay to do things at your own pace. You might feel guilt about being anxious rather than purely happy. Both the anxiety and the joy are valid.' },
    { ageRange: 'Third trimester', context: 'As the pregnancy progresses, you may develop new anxieties about stillbirth or birth complications. Kick counting can provide reassurance but may also fuel anxiety. Work with your provider on a monitoring plan that balances reassurance with managing anxiety. Have a plan for how to reach your provider quickly if you have concerns.' },
  ],
  whenNormal: ['Intense anxiety that ebbs and flows throughout the pregnancy', 'Difficulty bonding or feeling guarded about the pregnancy', 'Checking for bleeding or symptoms frequently', 'Difficulty enjoying the pregnancy like others seem to'],
  whenToMention: ['Anxiety is persistent and consuming most of your thoughts', 'You are having panic attacks or difficulty sleeping due to worry', 'You want support or referrals for pregnancy-after-loss counseling'],
  whenToActNow: ['Anxiety is so severe you cannot eat, sleep, or function', 'You are having intrusive thoughts about harming yourself', 'You are experiencing a medical emergency (bleeding, decreased movement, severe pain)'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'NIH', citation: 'National Library of Medicine. Anxiety in Pregnancy Following Perinatal Loss. Archives of Women\'s Mental Health, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/30680530/' },
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Screening for Perinatal Mental Health. ACOG, 2023.', url: 'https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum' },
    { org: 'March of Dimes', citation: 'March of Dimes. Pregnancy After Loss. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/getting-pregnant-after-a-loss.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-after-loss', 'pregnancy-anxiety', 'pregnancy-loss-grief-support'],
};
