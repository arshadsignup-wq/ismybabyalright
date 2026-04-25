import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'aggressive-toward-pets',
  title: 'My Toddler Is Aggressive Toward Pets',
  category: 'behavior',
  searchTerms: [
    'toddler hitting the dog',
    'toddler pulling cat tail',
    'toddler hurting pets',
    'toddler aggressive with animals',
    'baby rough with pets',
    'toddler kicking the dog',
    'how to teach toddler to be gentle with pets',
    'toddler throwing things at cat',
    'is it normal for toddler to hurt animals',
    'toddler squeezing pet too hard',
  ],
  quickAnswer:
    'Toddlers being rough with pets is extremely common and almost never reflects true aggression or cruelty. Young children lack the motor control to be consistently gentle and do not yet understand that animals feel pain the way they do. With patient, consistent teaching about gentle touch and close supervision, most toddlers learn to interact safely with pets by age 3-4.',
  byAge: [
    {
      ageRange: '9-14 months',
      context:
        'Babies at this age are fascinated by pets but have almost no ability to regulate their grip or movements. They may grab fur, pull tails, or poke eyes simply because they are exploring and do not understand that the animal has feelings. This is entirely driven by curiosity and limited motor control, not aggression. Always supervise closely and gently redirect their hands while narrating: "Gentle hands. We pet the kitty softly."',
    },
    {
      ageRange: '14-24 months',
      context:
        'Toddlers in this range may begin intentionally testing boundaries with pets  -  hitting, chasing, or being rough even after being told not to. This is normal boundary-testing behavior, the same impulse that drives them to throw food or hit people. They are not being cruel; they are trying to understand rules and cause-and-effect. Consistent, calm intervention is key: physically guide gentle touch, remove the child if needed, and keep instructions simple.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Two-year-olds are developing empathy but still struggle with impulse control. They may understand "be gentle" but still hit the dog when excited or frustrated. This is normal for the developmental stage. Role-modeling gentle behavior, reading books about animal care, and praising gentle interactions help build the skills they need. Roughness should be decreasing over time even if it has not stopped completely.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children can follow rules about pet interaction most of the time, though they may still forget when excited. If your child is deliberately and repeatedly hurting animals at this age  -  especially without remorse, with clear intent to cause pain, or if the behavior is escalating  -  it is worth discussing with your pediatrician. This pattern is different from the normal roughness of younger toddlers.',
    },
  ],
  whenNormal: [
    'Your baby or toddler is rough with pets because they lack motor control and do not understand they are causing pain',
    'Your toddler is testing boundaries with pets the same way they test boundaries with people  -  hitting, grabbing, and seeing what happens',
    'Your child is rough with the pet when excited or overstimulated but shows gentle behavior at calmer times',
    'Roughness with pets is gradually decreasing with consistent teaching and supervision',
  ],
  whenToMention: [
    'Your child is over 3 and continues to deliberately hurt animals despite consistent teaching, and shows no remorse when the animal cries or recoils',
    'Aggression toward pets is escalating rather than improving, or your child seems to seek out the pet specifically to hurt it',
    'Your child is also showing significant aggression toward people, destroying property, or having difficulty with empathy in other areas',
  ],
  whenToActNow: [
    'Your child has seriously injured an animal or shows preoccupation with hurting animals at any age',
    'Aggression toward pets appears suddenly alongside other behavior changes such as regression, withdrawal, sleep disturbance, or fearfulness, which could signal trauma or emotional distress',
  ],
  relatedMilestones: [
    'social-emotional-empathy',
    'social-emotional-regulation',
    'fine-motor-control',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Shape and Manage Your Young Child\'s Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Aggressive Behavior in Toddlers.',
      url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/',
    },
  ],
};
