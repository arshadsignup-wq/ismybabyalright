import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sharing-baby-photos-online-safety',
  title: 'Sharing Baby Photos Online Safety',
  category: 'behavior',
  searchTerms: [
    'is it safe to post baby photos online',
    'sharing baby pictures on social media risks',
    'sharenting dangers',
    'digital footprint baby',
    'Facebook baby photos privacy',
    'Instagram baby pictures safety',
    'should I post my baby on social media',
    'protecting baby privacy online',
    'stranger using my baby photos',
  ],
  quickAnswer:
    'Sharing baby photos online is a personal decision, but parents should be aware of the risks. Once an image is posted online, you lose control over how it is used or shared. Concerns include digital privacy for your child, the potential for images to be downloaded by strangers, digital identity creation before your child can consent, and location data embedded in photos. The AAP recommends being thoughtful about what you share and adjusting privacy settings on social media accounts.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many parents share newborn photos during this exciting time. Consider using private messaging or closed groups rather than public posts. Avoid sharing photos that include identifying information such as hospital bracelets, street signs, or home exteriors. Strip location metadata from photos before posting.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As you share more milestone photos, be mindful of bath photos, diaper-only photos, or any images that could be misused. Even innocent photos can be taken out of context. Use privacy settings to limit who can see your posts.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Your baby\'s digital footprint is growing with each post. Consider whether the content you share could embarrass your child later — messy eating photos and funny moments may seem innocent now but may not be appreciated by your child as they grow older.',
    },
    {
      ageRange: '12 months+',
      context:
        'As your child becomes more recognizable and social media algorithms build a profile around them, the privacy implications increase. Establish family rules about photo sharing, ask grandparents and friends to respect your sharing boundaries, and begin thinking about your child\'s future consent and digital identity.',
    },
  ],
  whenNormal: [
    'You share occasional photos with privacy settings enabled and a curated audience',
    'You avoid sharing nude, bath, or potentially embarrassing photos publicly',
    'You have asked family members to respect your sharing preferences',
    'You are mindful about location data and identifying information in photos',
  ],
  whenToMention: [
    'You discover that your child\'s photos have been taken and used without your permission on another platform or by a stranger',
    'Disagreements about photo sharing between co-parents or family members are causing significant family conflict',
    'You are experiencing anxiety about your child\'s online presence that is affecting your daily life or ability to enjoy parenting moments',
  ],
  whenToActNow: [
    'You discover your child\'s images are being used on inappropriate websites or in contexts suggesting exploitation — contact law enforcement and the platform immediately',
    'Someone is using your child\'s photos to impersonate or create a false identity — report to the platform and authorities',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-monitor-anxiety-parent',
    'nanny-cam-trust-issues',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sharing Social Media Guidelines with Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/Media/Pages/Advise-Families-Social-Media-Use.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Steinberg, S. Sharenting: Children\'s Privacy in the Age of Social Media. Emory Law Journal. 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
