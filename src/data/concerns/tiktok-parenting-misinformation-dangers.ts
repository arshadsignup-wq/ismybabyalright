import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tiktok-parenting-misinformation-dangers',
  title: 'Dangerous Baby Advice on TikTok and Social Media - What to Ignore',
  category: 'behavior',
  searchTerms: [
    'TikTok parenting advice dangerous',
    'social media baby advice wrong',
    'TikTok baby misinformation',
    'Instagram parenting advice harmful',
    'natural parenting TikTok dangerous',
    'anti-vaccine TikTok baby',
    'refuse vitamin K newborn TikTok',
    'crunchy mom TikTok dangerous',
    'social media parenting misinformation',
    'TikTok baby health advice',
    'viral baby advice wrong',
    'influencer parenting advice harmful',
    'should I follow TikTok parenting advice',
    'how to spot bad parenting advice online',
    'evidence-based parenting vs social media',
  ],
  quickAnswer:
    'An AAP study found that 61% of "natural parenting" TikTok videos contradicted established pediatric guidelines, and misinformation videos get nearly 3 times more engagement than evidence-based content. Common dangerous trends include refusing newborn vitamin K shots, skipping vaccines, using honey for babies under 1 year, and homemade formula recipes. Always verify social media health advice with your pediatrician before applying it to your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The most dangerous misinformation targets newborn care. Viral trends have encouraged parents to refuse the vitamin K shot (which prevents a rare but fatal bleeding disorder), skip the hepatitis B vaccine, avoid erythromycin eye ointment, and delay or refuse the newborn hearing screening. Other harmful trends include "lotus birth" (leaving the placenta attached), applying breastmilk to treat eye infections instead of seeking medical care, and using essential oils on newborns. All routine newborn procedures recommended by the AAP exist because the evidence supports them.',
    },
    {
      ageRange: '3-12 months',
      context:
        'At this age, common misinformation includes: giving honey before 12 months (risk of infant botulism), making homemade formula (dangerous nutritional deficiencies), putting rice cereal in bottles (choking risk, does not help sleep), using amber teething necklaces (strangulation risk, no evidence of benefit), and delaying solid food introduction beyond 6 months for allergen avoidance (the opposite of current evidence). If advice you see online contradicts what your pediatrician recommends, trust your pediatrician.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler-related misinformation often focuses on diet (raw milk is better, organic-only prevents all illness), discipline (never saying no causes emotional damage, always saying no causes emotional damage), and developmental expectations (your toddler should be reading, your toddler should not be watching any screens ever). The reality is more nuanced than any viral video allows. The AAP provides evidence-based guidelines, and your pediatrician knows your specific child.',
    },
  ],
  whenNormal: [
    'You see parenting content online and fact-check it against medical sources before trying anything with your baby.',
    'You feel confused or anxious after seeing conflicting advice online - this is a normal reaction to the volume of misinformation.',
    'You use social media for parenting community support while relying on your pediatrician for medical decisions.',
  ],
  whenToMention: [
    'You saw something online that contradicts what your pediatrician recommended and you want clarification.',
    'You skipped or delayed a recommended treatment or vaccine based on something you saw on social media and want to discuss it.',
    'You feel overwhelmed by conflicting parenting information and need help identifying trustworthy sources.',
  ],
  whenToActNow: [
    'You followed social media advice to give honey to a baby under 12 months, use a homemade formula, or apply an untested remedy, and your baby is showing any symptoms.',
    'You refused the newborn vitamin K shot based on social media and your baby has any unusual bleeding or bruising.',
    'Your baby is experiencing symptoms after you tried a "natural remedy" promoted on social media.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'conflicting-parenting-advice',
    'parental-decision-fatigue-conflicting-advice',
    'comparison-anxiety-social-media',
    'amber-teething-necklace-safety-risk',
  ],
  sources: [
    {
      org: 'AAP',
      citation: 'AAP Contemporary Pediatrics - Study: Eco-Influencers Spread Pediatric Health Misinformation on TikTok (2025)',
      url: 'https://www.contemporarypediatrics.com/view/study-eco-influencers-spread-pediatric-health-misinformation-on-tiktok',
    },
    {
      org: 'AAP',
      citation: 'AAP HealthyChildren.org - How to Evaluate Health Information Online',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/How-to-Evaluate-Online-Health-Information.aspx',
    },
    {
      org: 'NIH',
      citation: 'NIH - Health Misinformation on Social Media: Impact and Mitigation',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9201850/',
    },
  ],
};
