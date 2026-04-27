import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hand-flapping',
  title: 'Baby Hand Flapping - Normal or Concern?',
  category: 'behavior',
  searchTerms: [
    'baby hand flapping',
    'baby flapping arms when excited',
    'hand flapping autism sign',
    'baby flapping hands normal',
    'toddler hand flapping',
    'baby arm flapping when happy',
    'is hand flapping always autism',
    'baby flapping arms 6 months',
    'baby shaking hands with excitement',
    'hand flapping when to worry',
    'baby flapping wrists',
    'infant arm flapping stimming',
  ],
  quickAnswer:
    'Hand and arm flapping when excited, happy, or frustrated is extremely common in babies and toddlers and is usually a normal way of expressing big emotions before they have the words to do so. Most babies flap their arms at some point, typically between 6-24 months. Hand flapping becomes a concern only when it is very frequent, occurs outside the context of emotions, is accompanied by other developmental differences (limited eye contact, no pointing, no social engagement), or persists as the primary way of expressing emotion well past age 2.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'Arm flapping in young babies is a normal motor behavior. Babies this age often flap, bang, kick, and wave their arms and legs when excited, during play, or when they see something they want. Their motor system is developing and they do not yet have the fine motor control to express excitement in more subtle ways. This whole-body response to stimulation is expected and is a sign of healthy engagement with the world.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Hand and arm flapping often peaks around 9-12 months as babies become more socially aware and excited by their world but still have limited ways to express themselves. You might see flapping when they see a favorite person, a beloved toy, or food they want. If your baby flaps in these contexts AND makes eye contact, babbles, points, and engages socially, the flapping is simply an exuberant expression of excitement.',
    },
    {
      ageRange: '12-18 months',
      context:
        'As toddlers gain more words and gestures, arm flapping typically decreases because they have better tools for expression. Some toddlers continue to flap when very excited or overwhelmed, and this is still within the range of normal. If flapping is one of your toddler\'s only ways of expressing themselves, and they are not pointing, waving, using words, or engaging in back-and-forth communication, an evaluation may be helpful.',
    },
    {
      ageRange: '18-36 months',
      context:
        'By 18 months, most toddlers are transitioning away from frequent arm flapping as they develop more sophisticated ways to express themselves. Occasional flapping during intense excitement or frustration is still normal. If hand flapping remains very frequent, is accompanied by other repetitive movements (spinning, rocking, toe-walking), occurs when your child seems zoned out rather than engaged, or your child has other developmental concerns, discuss it with your pediatrician. The M-CHAT autism screening at 18 and 24 months will help identify whether further evaluation is needed.',
    },
  ],
  whenNormal: [
    'Your baby flaps their arms when excited, happy, or anticipating something they want - this is emotional expression',
    'Flapping occurs in clear emotional contexts (seeing a parent, getting a desired toy) and your baby makes eye contact and engages during the flapping',
    'Your baby has many other ways of communicating - babbling, pointing, waving, making eye contact',
    'Flapping is gradually decreasing as your child gains more words and gestures',
  ],
  whenToMention: [
    'Hand flapping is very frequent (many times throughout the day) and occurs outside of obvious emotional contexts',
    'Your child flaps while appearing to zone out or disengage from people rather than while excited and engaged',
    'Flapping is accompanied by other repetitive behaviors like spinning objects, rocking, or fixating on parts of toys',
    'Your child is over 18 months and flapping has not decreased despite growing language and communication skills',
  ],
  whenToActNow: [
    'Hand flapping is accompanied by loss of previously acquired social skills, language, or eye contact - any regression warrants prompt evaluation',
    'Your child has frequent hand flapping AND does not point, does not respond to their name, has no words by 16 months, and avoids eye contact - this pattern of multiple social communication differences needs comprehensive evaluation',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
    'fine-motor-development',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['early-signs-of-autism-baby', 'rocking-back-and-forth', 'spinning-in-circles', 'lining-up-toys'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Autism Spectrum Disorder: What Every Parent Needs to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Autism-Spectrum-Disorder.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Signs and Symptoms of Autism Spectrum Disorder.',
      url: 'https://www.cdc.gov/autism/signs-symptoms/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Autism Spectrum Disorder.',
      url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
    },
  ],
};
