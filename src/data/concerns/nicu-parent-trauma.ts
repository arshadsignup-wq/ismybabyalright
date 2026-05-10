import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'nicu-parent-trauma',
  title: 'NICU Parent Trauma and Stress',
  category: 'behavior',
  searchTerms: [
    'NICU parent stress',
    'NICU trauma',
    'baby in NICU emotional toll',
    'NICU PTSD',
    'coping with baby in NICU',
    'guilt baby in NICU',
    'preemie parent anxiety',
    'NICU discharge anxiety',
  ],
  quickAnswer:
    'Having a baby in the NICU is one of the most stressful experiences a parent can face. Research shows that up to 70% of NICU parents experience clinically significant anxiety or depression, and a substantial number develop PTSD symptoms. The helplessness, fear, separation from your baby, and disruption of expected parenthood are legitimately traumatic. Your pain is real and you deserve support.',
  byAge: [
    {
      ageRange: 'During NICU stay',
      context:
        'While your baby is in the NICU, you may experience a wide range of intense emotions — fear, helplessness, guilt, anger, grief for the birth experience you expected, and exhaustion. The medical environment, alarms, and seeing your baby connected to equipment can be overwhelming. Many parents describe feeling like they are not really the parent because medical staff are providing the care. Kangaroo care, participating in feedings, and being present can help, but the emotional toll is immense.',
    },
    {
      ageRange: '0-3 months after discharge',
      context:
        'Coming home from the NICU is both a relief and a new source of anxiety. Many parents experience hypervigilance — obsessively monitoring the baby\'s breathing, panicking at normal newborn sounds, or being afraid to sleep. You may also feel isolated, since friends with healthy newborns cannot fully understand your experience. NICU-related PTSD symptoms often emerge or intensify after discharge.',
    },
    {
      ageRange: '3-6 months after discharge',
      context:
        'As your baby grows and thrives, some of the acute anxiety may ease, but many NICU parents carry lasting effects. Flashbacks to the NICU, difficulty trusting that your baby is healthy, and avoidance of hospitals or medical settings are common. If these symptoms persist, trauma-focused therapy can help you process the experience.',
    },
    {
      ageRange: '6-12 months after discharge',
      context:
        'Long-term effects of the NICU experience can include ongoing anxiety about your child\'s development, difficulty with subsequent pregnancies, and strain on your relationship. The anniversary of the NICU admission or discharge can trigger strong emotions. Processing this experience — with a therapist, support group, or NICU parent community — is valuable at any stage.',
    },
  ],
  whenNormal: [
    'Feeling afraid, sad, and overwhelmed while your baby is in the NICU — this is an entirely appropriate response to a scary situation',
    'Heightened anxiety about your baby\'s health in the weeks after coming home from the NICU',
    'Feeling grief about the birth or early parenthood experience you missed',
    'Needing time to adjust and build confidence as a parent after the NICU',
  ],
  whenToMention: [
    'Anxiety about your baby\'s health is persistent and significantly interfering with your daily life or ability to enjoy your baby months after discharge',
    'You are experiencing flashbacks, nightmares, or intrusive memories about the NICU stay',
    'You are avoiding medical appointments, hospitals, or discussions about your baby\'s NICU stay because they trigger intense distress',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself — call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room immediately',
    'You feel unable to care for your baby due to paralyzing anxiety or depression — call the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-ptsd-birth-trauma',
    'bonding-difficulty-with-baby',
    'parenting-anxiety-constant-worry',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When Your Baby is in the NICU. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/When-Your-Baby-is-in-the-NICU.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Psychological Distress in Parents of Preterm Infants. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6372357/',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. NICU Families and Perinatal Mood Disorders.',
      url: 'https://www.postpartum.net/learn-more/nicu-families/',
    },
  ],
};
