import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-turn-taking-skills',
  title: 'Teaching My Toddler Turn-Taking Skills',
  category: 'behavior',
  searchTerms: [
    'toddler turn taking skills',
    'teaching toddler to take turns',
    'toddler won\'t take turns',
    'toddler turn taking age',
    'toddler waiting for turn',
    'toddler sharing and turn taking',
    'when do toddlers learn turns',
    'toddler turn taking games',
    'toddler patience taking turns',
    'toddler social skills turn taking',
  ],
  quickAnswer:
    'Turn-taking is a foundational social skill that develops gradually throughout toddlerhood and the preschool years. Simple turn-taking in structured activities (rolling a ball back and forth) can begin around 18-24 months with adult guidance. By age 3-4, most children can take turns in games with clear rules and adult supervision. True patience while waiting for a turn develops slowly and requires impulse control that is still maturing throughout early childhood.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'The earliest forms of turn-taking happen naturally in parent-child interactions — you say something, baby responds with babbling, you respond back. This conversational turn-taking is the foundation for all social turn-taking skills. You can reinforce it through games like rolling a ball back and forth, stacking blocks one at a time ("my turn, your turn"), and playing peek-a-boo. Keep it simple, fun, and low-pressure. Your toddler is not cognitively ready to wait for a turn in group settings yet.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers can begin practicing turn-taking in structured one-on-one activities with adult support. Use clear verbal cues: "It is your turn" and "Now it is my turn." Keep turns short — toddlers cannot wait long. Activities that work well include: taking turns putting blocks in a bucket, taking turns going down a slide, or taking turns feeding a stuffed animal. Expect that your toddler will struggle with giving up a turn and may protest. This is normal — they are learning through practice and your patient modeling.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Turn-taking skills improve significantly between ages 2-4. Simple board games designed for preschoolers (like Candy Land or Hi Ho Cherry-O) can help practice turn-taking in a structured format. Use visual aids like a turn-taking chart or a special object ("whoever holds the talking stick gets to talk"). In peer play, expect to coach turn-taking actively — sit nearby and narrate: "First Maya goes, then it is your turn." By age 4, most children can take turns with minimal adult intervention in familiar activities.',
    },
  ],
  whenNormal: [
    'Your toddler needs constant reminders and adult support to take turns — this is normal for children under 3',
    'Your toddler can take turns in one-on-one activities with you but struggles in groups — peer turn-taking is harder',
    'Your toddler protests when it is not their turn but can be redirected or distracted',
    'Turn-taking skills are inconsistent — better on some days and worse on others',
  ],
  whenToMention: [
    'Your child is over 3.5 years and cannot participate in any structured turn-taking activity even with adult guidance',
    'Your toddler becomes extremely aggressive when asked to wait for a turn, every single time',
    'Your toddler shows no awareness that other children also have needs or desires',
  ],
  whenToActNow: [
    'Your toddler has lost social skills they previously demonstrated, including turn-taking and interactive play',
    'Your toddler shows no interest in any social interaction with adults or children',
    'Your toddler\'s inability to take turns is accompanied by other social-communication red flags such as no eye contact, no pointing, or no pretend play',
  ],
  relatedMilestones: [
    'social-emotional-peer-interaction',
    'social-emotional-regulation',
    'cognitive-understanding-rules',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-sharing-teaching-strategies',
    'toddler-parallel-play-vs-interactive',
    'toddler-frustration-management',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development: 2 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Social-Development-2-Year-Olds.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Learning to Share and Take Turns.',
      url: 'https://www.zerotothree.org/resource/learning-to-share/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (2-3 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html',
    },
  ],
};
