import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'postpartum-ocd-intrusive-thoughts',
  title: 'Postpartum OCD and Intrusive Thoughts',
  category: 'behavior',
  searchTerms: [
    'intrusive thoughts about baby',
    'scary thoughts about hurting baby',
    'postpartum OCD',
    'unwanted thoughts new mom',
    'afraid I will drop baby',
    'images of baby getting hurt',
    'obsessive thoughts after baby',
    'cannot stop thinking something bad will happen to baby',
  ],
  quickAnswer:
    'Intrusive, unwanted thoughts about harm coming to your baby are extremely common — studies suggest they affect up to 70-100% of new parents to some degree. Having these thoughts does NOT mean you want to act on them. Postpartum OCD involves distressing, repetitive thoughts that the parent finds horrifying, which is actually a sign of how much you love and want to protect your baby. Treatment is very effective.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'Intrusive thoughts often begin in the early postpartum weeks, when heightened vigilance about your newborn combines with hormonal changes and sleep deprivation. Common themes include images of the baby falling, being dropped, suffocating, or being harmed. These thoughts are ego-dystonic — meaning they go against your true desires. The distress you feel about them is actually protective.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'If intrusive thoughts have persisted or worsened, you may be developing compulsive behaviors to manage them — excessive checking, avoidance of certain activities (bathing the baby, being alone with them), or mental rituals. These compulsions provide temporary relief but reinforce the cycle. This is a treatable condition and you do not need to keep suffering.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Untreated postpartum OCD can become more entrenched over time. You may be avoiding situations, seeking constant reassurance, or experiencing significant anxiety about your baby\'s safety. Evidence-based treatments like cognitive behavioral therapy (CBT) and exposure and response prevention (ERP) are highly effective, even months after onset.',
    },
    {
      ageRange: '12 months+',
      context:
        'Postpartum OCD can continue well beyond the first year if not addressed. Some parents also find that intrusive thoughts shift to new themes as the child grows (choking on food, accidents as baby becomes mobile). It is never too late to get help — specialized perinatal mental health providers understand these experiences without judgment.',
    },
  ],
  whenNormal: [
    'Occasional fleeting thoughts about something bad happening to your baby that pass quickly — this is your brain\'s way of alerting you to protect your infant',
    'Checking on a sleeping baby once or twice for reassurance',
    'Feeling a flash of worry when someone else holds your newborn',
    'Brief anxiety about SIDS or accidents that does not dominate your day',
  ],
  whenToMention: [
    'Intrusive thoughts are frequent, vivid, and distressing — occupying significant portions of your day',
    'You are avoiding activities with your baby (bathing, diaper changes, being alone with them) because of the thoughts',
    'You have developed rituals or compulsions (checking, counting, seeking reassurance repeatedly) to manage the anxiety',
  ],
  whenToActNow: [
    'You are unable to care for your baby or yourself because the thoughts are so overwhelming — call the Postpartum Support International helpline at 1-800-944-4773 (call or text)',
    'You are having thoughts of suicide or self-harm — call 988 (Suicide and Crisis Lifeline) immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parenting-anxiety-constant-worry',
    'bonding-difficulty-with-baby',
    'postpartum-ptsd-birth-trauma',
  ],
  sources: [
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Obsessive-Compulsive Disorder (OCD).',
      url: 'https://www.postpartum.net/learn-more/postpartum-obsessive-compulsive-disorder/',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Obsessive-Compulsive Disorder.',
      url: 'https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Scary Thoughts and Postpartum OCD. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/understanding-motherhood-and-mood-baby-blues-and-beyond.aspx',
    },
  ],
};
