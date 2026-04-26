import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-afraid-of-potty',
  title: 'Toddler Afraid of the Potty',
  category: 'behavior',
  searchTerms: [
    'toddler afraid of potty',
    'toddler scared of toilet',
    'child fears flushing',
    'toddler afraid of toilet seat',
    'toddler cries on potty',
    'toddler potty fear',
    'toddler scared to poop on toilet',
    'child afraid of bathroom',
    'potty anxiety toddler',
    'toddler terrified of toilet flush',
    'toddler won\'t sit on toilet scared',
  ],
  quickAnswer:
    'Fear of the potty or toilet is very common in toddlers and is a normal part of development. The toilet can genuinely seem scary to a small child - it is loud, it has a big hole, and things disappear into it. Some children are afraid of falling in, others are afraid of the flushing sound, and some are worried about losing a part of themselves. With patience, gradual exposure, and zero pressure, most children overcome potty fears completely.',
  byAge: [
    {
      ageRange: '18 months - 2 years',
      context:
        'Fears are developing rapidly at this age, and the toilet is a genuinely new and potentially scary experience. A small, child-sized potty on the floor feels much less intimidating than a full-sized toilet. Let your child explore the potty without any expectation of using it. They might sit on it clothed, put toys on it, or just look at it. All of this is progress.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'Many toddlers develop specific fears around toileting at this age, especially fear of the flush or fear of falling in. Practical solutions include letting your child flush after they leave the room, using a potty seat that fits securely on the big toilet, and keeping a step stool so their feet are supported. Never force a frightened child to sit on the toilet, as this can create a lasting negative association.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'If fear has led to stool withholding, this can quickly become a cycle where constipation makes bowel movements painful, which increases fear further. Address constipation with your pediatrician if needed. Use books, videos, and role-play with stuffed animals to normalize toilet use. Let your child go at their own pace and celebrate any small step of bravery.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'Most children overcome potty fears by this age, but some take longer and that is okay. If your child\'s fear is so intense that it is interfering with daily life, causing significant distress, or leading to chronic stool withholding, your pediatrician may recommend working with a behavioral specialist or child psychologist who can help with gradual desensitization.',
    },
  ],
  whenNormal: [
    'Your toddler is cautious about a new potty or toilet and needs time to warm up to it',
    'Your child dislikes the flushing sound and prefers to leave the room before you flush',
    'Fear is mainly about the full-sized toilet and your child is more comfortable with a small potty chair',
    'Your child gradually becomes more comfortable with gentle encouragement and no pressure',
  ],
  whenToMention: [
    'Your child is withholding stool due to fear, leading to constipation, pain, or soiling',
    'Potty fear is extreme and generalized to the entire bathroom, interfering with bathing or handwashing',
    'Your child is over 4 and fear has not improved despite a patient, gradual approach over many months',
  ],
  whenToActNow: [
    'Your child has not had a bowel movement in several days due to withholding and is in visible pain or has a distended belly',
    'Your child develops sudden, intense fear of the bathroom after previously being comfortable, combined with other behavioral changes',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toilet Training Resistance. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Toilet-Training-Resistance.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Toilet Training. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/toilettraining.html',
    },
  ],
};
