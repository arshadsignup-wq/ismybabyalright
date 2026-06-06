import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-nose-picking-habit', title: 'Toddler Nose Picking Habit', category: 'behavior',
  searchTerms: ['toddler nose picking','toddler picks nose constantly','child nose picking habit','stop toddler picking nose','toddler finger in nose','toddler nose picking bleeding','toddler nose picking public','why toddler picks nose','toddler compulsive nose picking','toddler eats boogers'],
  quickAnswer: 'Nose picking is one of the most universal childhood habits. Studies show that the vast majority of people pick their nose, and children do it openly because they have not yet learned social norms. Toddlers pick their noses because something feels uncomfortable (dry mucus, irritation), out of boredom, or because it has become a mindless habit. For most children, social awareness eventually motivates them to stop doing it in public.',
  byAge: [
    { ageRange: '12-24 months', context: 'Your toddler has recently discovered they have a nose with holes in it - of course they are going to explore it. This is body exploration, not a concerning habit. Keep nails trimmed to prevent scratching, and gently redirect when you notice it without making it a big deal.' },
    { ageRange: '2-3 years', context: 'Nose picking becomes more habitual. Your child may do it when bored, watching TV, or falling asleep. Avoid nagging or shaming. Provide tissues and model their use: "When your nose feels yucky, use a tissue like this." Gentle redirection without drama is most effective.' },
    { ageRange: '3-4 years', context: 'You can begin teaching social awareness: "We do not pick our noses around other people. If your nose is bothering you, go to the bathroom and use a tissue." Make sure the air in your home is not too dry (dry air increases nose discomfort and picking). A humidifier can help.' },
    { ageRange: '4-6 years', context: 'Social motivation kicks in. Peers may comment, which often motivates stopping more than parental nagging ever did. If nose picking is compulsive and causing frequent nosebleeds, discuss with your pediatrician. Saline nasal spray can reduce irritation that triggers picking.' },
  ],
  whenNormal: ['Most children pick their noses at some point','Nose picking that decreases with social awareness','Your child can be redirected to use a tissue','No injury from the habit'],
  whenToMention: ['Nose picking causes frequent nosebleeds','Your child picks compulsively and cannot stop even when they want to','Picking has caused injury or infection to the nasal tissue','Nose picking is accompanied by other compulsive behaviors'],
  whenToActNow: ['Nose picking has caused a significant infection','Severe or uncontrollable nosebleeds from picking'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Habits.aspx' },
    { org: 'NIH', citation: 'Jefferson JW, Thompson TD. Rhinotillexomania: Psychiatric disorder or habit? J Clin Psychiatry. 1995;56(2):56-59.', url: 'https://pubmed.ncbi.nlm.nih.gov/7852253/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nosebleeds. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Nosebleeds.aspx' },
  ],
  relatedConcernSlugs: ['toddler-nail-biting-habit','toddler-tic-motor-vocal','toddler-ocd-like-behaviors','toddler-comfort-object-dependency'],
};
