import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-girls-different', title: 'Autism Presentation in Girls', category: 'behavior',
  searchTerms: ['autism in girls', 'autism girls different', 'autism female presentation', 'girls autism signs', 'autism masking girls', 'girls autism underdiagnosed', 'autism girls vs boys', 'autism presentation girls toddler', 'autism female toddler', 'girls autism missed diagnosis'],
  quickAnswer: 'Autism can present differently in girls than in boys, leading to underdiagnosis. Girls with autism may have better superficial social skills, more subtle restricted interests (like an intense focus on animals or fictional characters rather than numbers or trains), and may "mask" their differences by imitating peers. If you have concerns about your daughter\'s social communication development, trust your instincts and request an evaluation.',
  byAge: [
    { ageRange: '12-24 months', context: 'Early signs in girls may be similar to boys: limited eye contact, reduced pointing, and delayed language. However, some girls may show better eye contact and social smiling, making early identification harder.' },
    { ageRange: '24-36 months', context: 'Girls with autism may appear to play more socially than boys with autism, but close observation may reveal they are following rather than initiating, mimicking peers rather than truly engaging, or playing alongside without true interaction.' },
    { ageRange: '3-4 years', context: 'Girls may develop pretend play that looks typical but is actually rigid and scripted. Their restricted interests may be "gender-typical" like dolls or animals, making them less obvious. Social difficulties may appear as shyness rather than autism.' },
    { ageRange: '4-5 years', context: 'Social demands increase and girls with autism may struggle more. They may have one close friendship but difficulty in groups. They may become anxious or withdrawn as social situations become more complex.' },
    { ageRange: '5-7 years', context: 'School entry reveals social challenges. Girls may be described as shy, anxious, or sensitive rather than autistic. If you notice your daughter struggling socially despite appearing capable, an evaluation is warranted.' },
  ],
  whenNormal: ['Your daughter is naturally shy or introverted but makes friends and communicates well', 'Your daughter has strong interests that she shares with others socially', 'Your daughter is developing communication and social skills on track for her age'],
  whenToMention: ['Your daughter mimics peers but seems to struggle with genuine social understanding', 'Your daughter has intense interests that dominate her attention and conversation', 'Your daughter seems exhausted or has meltdowns after social situations, suggesting masking'],
  whenToActNow: ['Your daughter is losing social skills or becoming increasingly withdrawn', 'Your daughter\'s anxiety about social situations is severely affecting her daily functioning'],
  relatedMilestones: ['social-engagement', 'joint-attention', 'pretend-play', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['baby-autism-screening-concerns', 'toddler-high-functioning-autism-signs', 'toddler-autism-evaluation-process'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism in Girls and Women.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. ASD Data and Statistics.', url: 'https://www.cdc.gov/ncbddd/autism/data.html' },
  ],
};
