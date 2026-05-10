import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'identity-loss-after-baby',
  title: 'Identity Loss After Having a Baby',
  category: 'behavior',
  searchTerms: [
    'lost myself after having a baby',
    'do not know who I am anymore after baby',
    'identity crisis after baby',
    'miss my old life after baby',
    'matrescence',
    'mourning my pre-baby life',
    'feel like I disappeared after baby',
    'who am I now that I am a parent',
  ],
  quickAnswer:
    'The transition to parenthood involves a fundamental reorganization of your identity — a process researchers call "matrescence" (for mothers) or more broadly, the parental identity shift. Mourning the person you were before is not selfish; it is a natural and necessary part of integrating parenthood into your sense of self. You are not losing yourself — you are expanding, and that process can be painful.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'In the early weeks, your entire existence may feel reduced to feeding, changing, and soothing cycles. Hobbies, work, social life, physical appearance, and even your name (you are now "mom" or "dad") can feel erased overnight. The disorientation is real. Give yourself permission to grieve what you have lost while being open to who you are becoming.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As the acute survival mode of the newborn period eases, you may start to notice the gap between your old self and your new reality more acutely. Seeing friends without children living their previous lifestyle can trigger intense feelings of loss. You may wonder if choosing to become a parent was a mistake — and then feel guilty for thinking it. Both feelings can be true simultaneously.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Some parents begin to find a new rhythm at this stage, rediscovering parts of themselves while integrating their parental role. Others feel the identity crisis deepening, especially if their social circle, body, career, or relationship has changed dramatically. If you are struggling to find any sense of self beyond parenthood, reaching out for support is worthwhile.',
    },
    {
      ageRange: '12 months+',
      context:
        'The parental identity shift is a long process — experts suggest it takes two to three years to fully integrate. By the end of the first year, you may start to feel flickers of your new identity emerging. The goal is not to return to who you were but to create a new version of yourself that holds both parent and individual. This is ongoing, nonlinear work.',
    },
  ],
  whenNormal: [
    'Missing hobbies, social life, or career engagement that you had before becoming a parent',
    'Feeling like conversations now revolve entirely around your baby and you have lost your other interests',
    'Not recognizing yourself in the mirror — physically and emotionally — in the early months',
    'Feeling jealous of friends who do not have children',
  ],
  whenToMention: [
    'The sense of loss is persistent and pervasive — you feel like a hollow version of yourself most of the time',
    'You have lost interest in everything, not just pre-baby activities, and nothing brings you joy',
    'You resent your baby or parenthood more often than not and this disturbs you',
  ],
  whenToActNow: [
    'You are having thoughts that your family would be better off without you or thoughts of ending your life — call 988 (Suicide and Crisis Lifeline) immediately',
    'You feel completely unable to connect with anyone or anything and are withdrawing from all relationships — call the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-burnout-signs',
    'guilt-returning-to-work',
    'relationship-strain-after-baby',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. The Transition to Parenthood.',
      url: 'https://www.apa.org/topics/parenting/transition',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Depression.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Neurobiology of Matrescence. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9982255/',
    },
  ],
};
