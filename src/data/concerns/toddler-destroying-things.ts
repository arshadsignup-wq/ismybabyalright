import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-destroying-things',
  title: 'Toddler Destroying and Breaking Things on Purpose',
  category: 'behavior',
  searchTerms: ['toddler destroying things','toddler breaks everything','toddler throws everything','toddler destructive behavior','toddler tears books','toddler smashes toys','toddler knocks everything down','toddler breaks things on purpose','destructive toddler','toddler trashes room','toddler rips everything','is my toddler destructive or normal'],
  quickAnswer: 'Toddlers are naturally destructive because they are driven by curiosity, cause-and-effect learning, and limited understanding of consequences. Knocking down block towers, throwing food, ripping paper, and taking things apart are developmental activities, not behavioral problems. Your toddler is learning about physics, materials, and their own power. This becomes a concern when destruction is targeted and angry (deliberately destroying valued items during rage), is the primary play pattern with no constructive play, or escalates despite consistent limits.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies learn by destroying - tearing paper, knocking over stacks, pulling things apart, and throwing objects to the floor. This is cause-and-effect experimentation and sensory exploration. They are not being naughty. Give them appropriate destruction outlets: tissue boxes with scarves to pull out, blocks to knock down, safe containers to empty. Redirect rather than punish - move breakable items out of reach and offer alternatives.' },
    { ageRange: '12-18 months', context: 'Destruction intensifies as your toddler gains strength and mobility. They may throw food, dump water, tear pages from books, and knock things off tables. They are not doing this to be defiant - they genuinely enjoy the sensory experience and the reaction it produces. Provide supervised destruction opportunities: old magazines to tear, playdough to smash, water play. Begin setting simple limits: "Books are for reading, not tearing. You can tear this paper."' },
    { ageRange: '18-24 months', context: 'Your toddler may now destroy things during frustration or tantrums - throwing toys when angry, pushing items off shelves when told no. This is emotional expression, not calculated destruction. Stay calm, set the limit ("I won\'t let you throw the blocks"), and help them with the emotion. If destruction happens mainly during meltdowns, focus on the underlying emotion rather than the destruction itself. Child-proof valuable items and accept that some things will get broken.' },
    { ageRange: '2-3 years', context: 'Constructive play should be emerging alongside destructive play. Your toddler should sometimes build, create, and put things together, not only take them apart. If your child only destroys and never constructs, or if destruction is always angry and targeted (deliberately breaking a sibling\'s creation, destroying books when told no), address the underlying cause. Some children with sensory processing needs seek the intense input that destruction provides - a sensory diet of heavy work, crashing, and physical play can help channel this need.' },
  ],
  whenNormal: ['Your toddler knocks things down, takes things apart, and throws objects as part of exploration','Destruction is interspersed with constructive play - your toddler builds AND knocks down','Your toddler seems delighted (not angry) when things crash, fall, or come apart','Destructive behavior decreases as your child gains more constructive play skills'],
  whenToMention: ['Your child only destroys and does not engage in any constructive or creative play','Destruction is always angry and targeted - deliberately breaking specific items when upset','Your child seems driven to destroy things and cannot stop even when directed to other activities','Destructive behavior is escalating in intensity despite consistent limits'],
  whenToActNow: ['Your child is destroying property in a way that could cause injury to themselves or others','Destructive behavior is accompanied by hurting animals, people, or extreme aggression','Sudden destructive behavior in a previously calm child that seems to be out of their control'],
  relatedMilestones: ['social-emotional-regulation'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-aggressive-hitting-kicking','toddler-constant-meltdowns','toddler-obsessive-repetitive-behavior'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Why Do Toddlers Throw Things?', url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior/' },
    { org: 'NIH', citation: 'Tremblay RE. The Development of Aggressive Behaviour During Childhood. International Journal of Behavioral Development. 2000.', url: 'https://pubmed.ncbi.nlm.nih.gov/15286219/' },
  ],
};
