import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'parenting-anxiety-constant-worry',
  title: 'Parenting Anxiety and Constant Worry',
  category: 'behavior',
  searchTerms: [
    'constant worry about baby',
    'parenting anxiety',
    'postpartum anxiety',
    'cannot stop worrying about baby',
    'always thinking something is wrong with baby',
    'new parent anxiety',
    'health anxiety about baby',
    'anxious parent always checking on baby',
  ],
  quickAnswer:
    'Some worry is hardwired into parenthood — it means you care deeply. But when anxiety becomes constant, overwhelming, and interferes with your ability to function or enjoy your baby, it may be postpartum anxiety, which affects roughly 15-20% of new parents. This is one of the most common perinatal mood disorders and is highly treatable.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The newborn period naturally heightens vigilance. However, postpartum anxiety goes beyond typical new-parent concern. Signs include inability to rest even when the baby is safely sleeping, constant checking of the baby\'s breathing, racing thoughts about everything that could go wrong, physical symptoms like chest tightness or nausea, and dread that something terrible is about to happen.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As your baby becomes more robust and predictable, typical new-parent worries tend to ease. If your anxiety has not diminished or has worsened — if you still cannot relax, if you are avoiding outings because of "what if" scenarios, or if your worry is affecting your sleep, appetite, or relationships — this pattern suggests postpartum anxiety that warrants professional support.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'A mobile baby introduces legitimate new safety concerns, but anxious parents may find themselves unable to let their baby explore, constantly hovering, or catastrophizing minor bumps. If worry is preventing you from letting your child develop independence, or if you are spending hours researching symptoms and diseases online, it is time to talk to a healthcare provider.',
    },
    {
      ageRange: '12 months+',
      context:
        'Untreated parenting anxiety can evolve into a chronic pattern that persists through toddlerhood and beyond. It can limit your child\'s opportunities for exploration and independence, strain your relationships, and diminish your own quality of life. Treatment — therapy, medication, or both — can make a profound difference for the whole family.',
    },
  ],
  whenNormal: [
    'Being extra cautious with a newborn — checking on them, ensuring safe sleep, and feeling protective',
    'Occasional worry about your baby\'s health or development that you can manage and move on from',
    'Anxiety that spikes during illness or developmental changes but returns to baseline',
    'Researching a concern, getting reassurance, and being able to let it go',
  ],
  whenToMention: [
    'Worry is constant, intrusive, and does not respond to reassurance — you always find the next thing to worry about',
    'Physical symptoms of anxiety — racing heart, trouble breathing, nausea, insomnia — are present most days',
    'Anxiety is causing you to avoid activities, places, or people because of what might happen',
  ],
  whenToActNow: [
    'You are having panic attacks — episodes of intense fear with physical symptoms like chest pain, shortness of breath, or feeling like you are dying — seek evaluation from a healthcare provider',
    'Anxiety has led to thoughts that your baby or family would be better off without you, or you are having thoughts of self-harm — call 988 (Suicide and Crisis Lifeline) immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-ocd-intrusive-thoughts',
    'comparison-anxiety-social-media',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Anxiety.',
      url: 'https://www.postpartum.net/learn-more/postpartum-anxiety/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Understanding Motherhood and Mood: Baby Blues and Beyond. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/understanding-motherhood-and-mood-baby-blues-and-beyond.aspx',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Anxiety Disorders.',
      url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
    },
  ],
};
