import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pediatrician-disagreement-concerns',
  title: 'When You Disagree with Your Pediatrician',
  category: 'behavior',
  searchTerms: [
    'disagree with pediatrician',
    'pediatrician dismissed my concerns',
    'doctor not listening parent concerns',
    'should I get second opinion baby',
    'changing pediatricians',
    'pediatrician wrong about my baby',
    'doctor not taking me seriously baby',
    'when to seek second opinion child',
    'advocating for child at doctor',
  ],
  quickAnswer:
    'Disagreeing with your pediatrician can feel intimidating, but the parent-doctor relationship should be a partnership where both perspectives are valued. If you feel your concerns are being dismissed or you disagree with a recommendation, you have every right to ask questions, request further evaluation, or seek a second opinion. Good pediatricians welcome engaged parents and are willing to explain their reasoning.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the newborn period, common areas of disagreement include feeding recommendations, weight gain expectations, and whether certain behaviors warrant investigation. If your pediatrician says your baby is fine but you feel strongly that something is off, bring specific observations to support your concern. Statements like "she has not had a wet diaper in eight hours" or "his cry has changed and sounds different" provide concrete data that helps your doctor reassess.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Disagreements at this stage may arise around topics like solid food introduction timing, sleep training, or whether a developmental pattern warrants referral. If your doctor recommends watchful waiting and you feel action is needed, ask specifically what signs would change their recommendation and set a clear timeline for follow-up. This ensures your concern is documented and revisited.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Parental concerns about motor delays, feeding difficulties, or sensory issues may sometimes be met with "wait and see" advice. While this is often appropriate, research shows that earlier intervention generally leads to better outcomes. If your instinct says your baby needs evaluation, asking for a referral to a specialist is a reasonable request that most pediatricians will honor, even if they believe it is likely normal.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Developmental and behavioral concerns at this age, particularly around speech, social engagement, and autism screening, can be areas of significant parent-doctor disagreement. If you feel your child needs a formal evaluation, you can request one through your pediatrician, contact your state\'s early intervention program directly, or seek an evaluation from a developmental pediatrician. You do not need your pediatrician\'s permission to access these services.',
    },
  ],
  whenNormal: [
    'You and your pediatrician have occasional differences of opinion but can discuss them openly and reach understanding',
    'Your pediatrician explains their reasoning when you question a recommendation and you find their explanation reasonable',
    'You sometimes seek additional information after an appointment and bring your questions to the next visit',
    'Your pediatrician respects your decisions even when they differ from their initial recommendation',
  ],
  whenToMention: [
    'You feel your concerns are consistently being minimized or dismissed and it is affecting your trust in your child\'s care',
    'You want a formal developmental screening or specialist referral that your pediatrician has not recommended',
    'You received advice that contradicts current evidence-based guidelines and want to discuss the discrepancy',
    'The disagreement is about a significant medical decision and you want to make sure you are making an informed choice',
  ],
  whenToActNow: [
    'You believe your child has an acute medical condition that is not being adequately addressed and their symptoms are worsening',
    'Your pediatrician has recommended a treatment you believe may be harmful and you need immediate guidance from another provider',
    'Your child\'s condition is deteriorating and you feel you are not being heard; seeking emergency care is always your right',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Choose a Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Talking to Your Doctor. MedlinePlus.',
      url: 'https://medlineplus.gov/talkingtoyourdoctor.html',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You Are Concerned About Your Child\'s Development.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
  ],
};
