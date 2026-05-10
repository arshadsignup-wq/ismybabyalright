import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'aggressive-play-vs-normal-play',
  title: 'Aggressive Play vs Normal Play',
  category: 'behavior',
  searchTerms: [
    'toddler plays too rough with other kids',
    'is rough play normal for toddlers',
    'toddler play fighting worried',
    'toddler pretend fighting guns',
    'rough and tumble play toddler',
    'when is rough play too aggressive',
    'toddler war play normal',
    'toddler wrestling with friends safe',
    'pretend violence toddler play',
  ],
  quickAnswer:
    'Rough-and-tumble play — wrestling, chasing, play-fighting, and superhero battles — is a normal and important part of child development, particularly for toddlers and preschoolers. It helps children develop physical coordination, social skills, self-regulation, and an understanding of boundaries. The key distinction between normal rough play and concerning aggression is whether both children are having fun, there is turn-taking in roles, and no one is intentionally trying to hurt the other.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Play at this age consists of gentle interactions like cooing, gazing, and simple movement games with caregivers.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies enjoy physical play like being bounced, lifted in the air, or gently swung. These are precursors to rough-and-tumble play and help babies develop body awareness and a sense of trust.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies begin to enjoy more active play — being chased while crawling, gentle tickling, and peekaboo. They may grab, pull hair, or hit during play, but this is accidental and exploratory, not aggressive.',
    },
    {
      ageRange: '12 months+',
      context:
        'Rough-and-tumble play becomes more common between ages 2 and 5. Children may wrestle, chase, pretend to be monsters, or engage in superhero play. This is healthy when both children are laughing, they can stop when asked, and roles are reciprocal. Set clear safety rules (no hitting the face, stop when someone says stop) rather than banning rough play entirely.',
    },
  ],
  whenNormal: [
    'Both children are laughing and willingly participating in rough play',
    'Your toddler can switch between being the "chaser" and the "chased" or the "fighter" and the one being "fought"',
    'Rough play stops or de-escalates when one child says stop or becomes upset',
    'Your child engages in pretend weapon play or superhero fighting without real aggression toward others',
  ],
  whenToMention: [
    'Your child\'s rough play consistently crosses into real aggression — they intentionally try to hurt other children and do not stop when the other child cries or protests',
    'Your child shows a pattern of targeting specific children for rough treatment, especially younger or smaller children',
    'Play themes are persistently dark, violent, or involve real-world trauma scenarios and your child seems distressed rather than joyful during play',
  ],
  whenToActNow: [
    'Your child is causing repeated injuries to others during play and shows no remorse or understanding that they have hurt someone',
    'Your child acts out violent scenarios that suggest exposure to real violence, abuse, or trauma',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-hitting-baby-sibling',
    'toddler-bossiness-control',
    'sibling-rivalry-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development. Pediatrics. 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing',
    },
    {
      org: 'NIH',
      citation:
        'Pellegrini, A. & Smith, P. The Nature of Play: Great Apes and Humans. Guilford Press. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
