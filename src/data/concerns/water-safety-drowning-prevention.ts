import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'water-safety-drowning-prevention',
  title: 'Water Safety and Drowning Prevention',
  category: 'medical',
  searchTerms: [
    'baby drowning prevention tips',
    'toddler pool safety rules',
    'drowning silent how to prevent',
    'bathtub drowning baby',
    'how fast can baby drown',
    'water safety for toddlers',
    'pool fence requirements baby',
    'infant water safety',
    'secondary drowning signs baby',
  ],
  quickAnswer:
    'Drowning is the leading cause of death for children ages 1-4 in the United States. It can happen silently and in as little as 1-2 inches of water. Constant, attentive supervision within arm\'s reach is the single most important prevention measure. The AAP recommends four-sided pool fencing, swim survival lessons starting at age 1, and never leaving a child unattended near any water source — including bathtubs, buckets, toilets, and kiddie pools. No flotation device, swim lesson, or barrier replaces active supervision.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Never leave a baby unattended in any amount of water, including the bath. Sponge baths are recommended until the umbilical cord falls off. Once bathing in a tub, keep one hand on the baby at all times. Drain the tub immediately after use. Keep toilet lids closed and bathroom doors shut.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bath time requires constant, hands-on supervision. Never leave a baby in a bath seat unattended — bath seats can tip over. Empty buckets, basins, and wading pools immediately after use. A baby can drown in just 1-2 inches of water.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, they may crawl toward water sources. Ensure all pools have four-sided fencing (at least 4 feet high) with self-closing, self-latching gates. Keep bathroom doors closed. Be vigilant about pet water bowls, buckets, and any standing water.',
    },
    {
      ageRange: '12 months+',
      context:
        'The AAP recommends considering swim survival lessons starting at age 1. These teach basic skills like floating and getting to the pool edge. However, swim lessons do not make your child drown-proof. Active supervision within arm\'s reach remains essential around all water. Designate a "water watcher" at pool parties and gatherings — a specific adult whose only job is watching children in the water.',
    },
  ],
  whenNormal: [
    'You maintain constant hands-on or within-arm\'s-reach supervision whenever your child is near water',
    'You have four-sided fencing around your pool with a self-closing, self-latching gate',
    'You empty all containers of standing water after use',
    'Your child is enrolled in or beginning swim survival lessons at age 1 or older',
  ],
  whenToMention: [
    'You want guidance on when and what type of swim lessons are appropriate for your child',
    'Your child had a brief water scare and you want to know what signs to watch for',
    'You need help assessing whether your home water safety measures are adequate',
  ],
  whenToActNow: [
    'Your child has had a submersion event — even if they seem fine, seek immediate medical evaluation, as secondary drowning can occur hours later with symptoms like persistent coughing, difficulty breathing, or unusual sleepiness',
    'Your child pulled from water is not breathing, is unconscious, or is coughing persistently — call 911 immediately and begin CPR if trained',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'pool-water-safety-baby',
    'beach-safety-baby-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention of Drowning. Pediatrics. 2010.',
      url: 'https://publications.aap.org/pediatrics/article/126/1/e253/65558/Prevention-of-Drowning',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Drowning Facts.',
      url: 'https://www.cdc.gov/drowning/data-research/facts/index.html',
    },
  ],
};
