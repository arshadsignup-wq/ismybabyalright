import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-hair-twirling',
  title: 'Toddler Hair Twirling Habit',
  category: 'behavior',
  searchTerms: [
    'toddler twirling hair',
    'baby pulling own hair',
    'toddler hair twisting habit',
    'toddler plays with hair to sleep',
    'toddler pulling hair out',
    'child hair twirling',
    'toddler hair stroking habit',
    'is hair twirling normal toddler',
    'toddler self-soothing hair',
    'trichotillomania toddler',
  ],
  quickAnswer:
    'Hair twirling is one of the most common self-soothing behaviors in young children and is usually completely harmless. Many toddlers twirl their own hair (or a parent\'s hair) when tired, falling asleep, nursing, or feeling stressed. It is similar to thumb-sucking or blanket-rubbing as a comfort habit. In the vast majority of cases, children outgrow hair twirling on their own without any intervention needed.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies often discover hair as a soothing texture during feeding or while falling asleep. They may stroke, grab, or twirl their own hair or a parent\'s hair. This is normal sensory exploration and early self-soothing. If your baby is pulling your hair painfully, gently redirect their hands to a soft toy or blanket with an interesting texture.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Hair twirling often becomes more established as a comfort habit during this period. Your toddler may reach for hair specifically when tired, stressed, or transitioning to sleep. This is a healthy self-regulation strategy. There is no need to stop it unless it is causing hair breakage or bald spots. Offering a substitute comfort object (a silky blanket or soft stuffed animal) can be helpful if you want to redirect.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Hair twirling is very common at this age, especially at naptime and bedtime. Some children also twirl when watching TV, riding in the car, or during quiet activities. As long as your child is not pulling hair out or creating bald patches, this is a benign habit that provides genuine comfort and self-regulation.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Most children naturally reduce or stop hair twirling as they develop other coping strategies. If your child is actively pulling hair out in clumps, eating hair, or has noticeable bald patches, this goes beyond typical hair twirling and should be discussed with your pediatrician. This could be trichotillomania, which is more common than many parents realize and responds well to behavioral therapy when identified early.',
    },
  ],
  whenNormal: [
    'Your toddler twirls hair gently as a self-soothing behavior during sleep, feeding, or quiet times',
    'Hair twirling does not cause bald patches, hair breakage, or skin irritation',
    'Your child also has other ways of self-soothing and does not rely exclusively on hair twirling',
    'The habit comes and goes and does not interfere with daily activities or social interactions',
  ],
  whenToMention: [
    'Your child is pulling hair out and you notice thinning areas, bald spots, or broken hair',
    'Hair twirling has become so constant that it interferes with play, learning, or social interactions',
    'Your child is eating the pulled hair, which can cause digestive issues',
  ],
  whenToActNow: [
    'You notice a large bald patch, your child is eating hair regularly, or your child seems distressed and unable to stop even when they want to',
    'Hair pulling is accompanied by other repetitive self-injurious behaviors like skin picking, head banging, or self-biting',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Repetitive Behaviors. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Repetitive-Behaviors.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Trichotillomania (Hair Pulling Disorder).',
      url: 'https://www.nimh.nih.gov/health/statistics/obsessive-compulsive-disorder-ocd',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Trichotillomania. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001517.htm',
    },
  ],
};
