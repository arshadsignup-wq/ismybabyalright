import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-understanding-emotions', title: 'Toddler Cannot Read Other People\'s Feelings', category: 'behavior',
  searchTerms: ['toddler not understanding emotions', 'toddler can\'t read feelings', 'toddler doesn\'t recognize emotions', 'toddler emotion recognition', 'toddler can\'t tell if someone is sad', 'toddler emotional awareness low', 'toddler doesn\'t notice feelings', 'toddler blind to emotions', 'emotional understanding delay toddler', 'toddler can\'t identify emotions'],
  quickAnswer: 'Understanding others\' emotions develops gradually throughout toddlerhood. By 18 months, most children can recognize basic emotions like happy and sad in familiar people. By age 3 to 4, children can name emotions and respond appropriately. If your child seems consistently unaware of others\' emotional states by age 3, this may indicate a social cognition difference.',
  byAge: [
    { ageRange: '12-18 months', context: 'Babies respond to emotional tone and may become distressed when a caregiver is upset. They are beginning to recognize facial expressions but cannot yet name emotions. This is a normal developmental stage.' },
    { ageRange: '18-24 months', context: 'Toddlers show awareness of others\' emotions and may try to comfort someone who is crying. They understand happy and sad expressions. Not all toddlers show this equally, and some need more time.' },
    { ageRange: '24-36 months', context: 'Children begin naming emotions and matching them to situations. They may say "mommy sad" or "baby happy." Understanding of emotions expands beyond happy and sad to include mad, scared, and surprised.' },
    { ageRange: '3-4 years', context: 'Children can identify basic emotions in themselves and others. They understand that different situations cause different emotions. If your child seems unable to recognize basic emotions by this age, mention it to your pediatrician.' },
    { ageRange: '4-5 years', context: 'Emotional understanding becomes more sophisticated. Children understand that people can feel different things about the same situation. Persistent difficulty reading emotions may benefit from targeted social skills support.' },
  ],
  whenNormal: ['Your toddler is under 2 and is still developing emotion recognition skills', 'Your toddler recognizes emotions in familiar people but not strangers', 'Your toddler understands happy and sad but not yet more complex emotions', 'Your toddler sometimes misreads emotions, which is normal for their age'],
  whenToMention: ['Your child is over 3 and seems genuinely unaware when people around them are upset, angry, or happy', 'Your child cannot name any basic emotions in themselves or others', 'Your child responds inappropriately to others\' emotional displays, like laughing when someone is crying'],
  whenToActNow: ['Your child shows no response to any emotional cues combined with other social communication differences', 'Your child\'s emotional understanding has decreased over time'],
  relatedMilestones: ['emotional-development', 'social-engagement', 'perspective-taking', 'empathy'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-showing-empathy', 'toddler-not-comforting-others', 'baby-not-responding-to-facial-expressions'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social-Emotional Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Social-Emotional Skills.', url: 'https://www.zerotothree.org/resource/social-emotional-development-birth-to-3-months/' },
  ],
};
