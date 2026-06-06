import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-pretend-playing', title: 'Toddler Not Engaging in Pretend Play', category: 'behavior',
  searchTerms: ['toddler not pretend playing', 'toddler no imaginative play', 'toddler doesn\'t play pretend', 'when do toddlers pretend play', 'toddler not feeding dolls', 'toddler not playing make believe', 'pretend play milestone', 'toddler no symbolic play', 'toddler doesn\'t use imagination in play', 'lack of pretend play toddler'],
  quickAnswer: 'Pretend play typically emerges between 12 and 18 months with simple actions like feeding a doll or pretending to drink from a cup. By age 2, children engage in more complex pretend scenarios. If your child shows no pretend play by 24 months, this is worth discussing with your pediatrician, as pretend play is closely linked to language and social development.',
  byAge: [
    { ageRange: '12-18 months', context: 'Simple pretend play emerges, like putting a phone to their ear or feeding a stuffed animal. These brief, imitative actions show your child is beginning to think symbolically.' },
    { ageRange: '18-24 months', context: 'Pretend play becomes more common. Children may pretend to cook, clean, or care for dolls. They use objects symbolically, such as a block as a phone. Some pretend play should be visible by 24 months.' },
    { ageRange: '24-36 months', context: 'Pretend play becomes more elaborate with longer scenarios. Children may set up tea parties or play doctor. Absence of pretend play at this age warrants a developmental evaluation.' },
    { ageRange: '3-4 years', context: 'Dramatic play with roles and themes develops. Children play house, school, and superhero. Persistent absence of pretend play may be associated with autism spectrum features.' },
    { ageRange: '4-5 years', context: 'Pretend play is complex and collaborative. If your child has never engaged in pretend play, a comprehensive developmental evaluation is important.' },
  ],
  whenNormal: ['Your child is under 18 months and pretend play has not yet emerged', 'Your child pretends with simple actions but not elaborate scenarios', 'Your child pretends with some toys but not others', 'Your child pretends more during play with parents than independently'],
  whenToMention: ['Your child is over 24 months and shows no pretend play of any kind', 'Your child only plays with toys functionally', 'Absent pretend play is combined with other social communication concerns'],
  whenToActNow: ['Your child had pretend play and has stopped completely', 'Your child is over 2 with no pretend play, limited language, and reduced social engagement'],
  relatedMilestones: ['pretend-play', 'symbolic-thinking', 'social-engagement', 'language-development'],
  showSelfReferral: true, relatedConcernSlugs: ['delayed-pretend-play', 'toddler-pretend-play-repetitive', 'toddler-not-role-playing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Power of Play. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Power-of-Play.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By 2 Years.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2yr.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. The Development of Pretend Play.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
