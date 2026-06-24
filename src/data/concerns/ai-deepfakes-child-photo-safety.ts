import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ai-deepfakes-child-photo-safety',
  title: 'AI Deepfakes and Your Baby\'s Photos - Protecting Your Child Online',
  category: 'behavior',
  searchTerms: [
    'AI deepfake child photos',
    'baby photos AI danger',
    'sharenting AI risk',
    'child photos scraped AI training',
    'protect baby photos online AI',
    'deepfake child exploitation',
    'should I post my baby online AI',
    'AI generating child images from photos',
    'baby photo privacy AI',
    'CSAM AI generated',
    'TAKE IT DOWN Act',
    'stop posting baby photos AI',
    'child digital footprint AI risk',
    'social media baby photos scraped',
    'how to protect child photos AI deepfakes',
  ],
  quickAnswer:
    'AI technology has created a new risk for children\'s photos shared online. NCMEC received over 1.5 million tips related to AI-generated child exploitation material in 2025 - a 2,000% increase from the previous year. Parents\' innocent photos of children are being scraped from social media to train AI models or manipulated into harmful content. This does not mean you can never share photos of your child, but it does mean taking precautions: limiting audience, avoiding full-face images in public posts, stripping metadata, and understanding that once a photo is online, you lose control of it.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'New parents naturally want to share their joy, and baby photos are among the most commonly posted content on social media. Before posting, consider: Is this account private or public? Can followers screenshot and reshare? Does the image contain identifying information (hospital name, home address visible, birthdate)? For the safest approach, share photos only in private messaging groups or password-protected albums with trusted family and friends. If you do post publicly, avoid nude or bath photos (even innocent ones), images showing your home or frequent locations, and photos with identifying details.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As your child grows, their digital footprint grows with them. By age 2, the average child already has nearly 1,500 photos of them online. Consider establishing a family photo policy: who can post photos of your child (grandparents, daycare, friends)? What platforms are acceptable? Some parents use a watermark, avoid showing their child\'s face in public posts, or use a nickname online instead of their child\'s real name. Talk to caregivers and family members about your preferences - many grandparents share photos without realizing the risks.',
    },
    {
      ageRange: '3+ years',
      context:
        'Children who grow up with an extensive online presence they did not consent to may face consequences including embarrassment, identity theft, and the inability to control their digital narrative. Some countries have begun establishing children\'s rights to their own image. Consider whether the photo you are about to share is something your child would want public when they are a teenager. The TAKE IT DOWN Act (2025) provides a mechanism to request removal of intimate images, but prevention is far more effective than removal.',
    },
  ],
  whenNormal: [
    'You share baby photos in private messaging groups or password-protected albums with family and friends.',
    'You post occasional photos on a private social media account with a limited, trusted audience.',
    'You feel a tension between wanting to share and wanting to protect - this awareness itself is healthy.',
  ],
  whenToMention: [
    'You discovered that photos of your child appear on websites or accounts you did not authorize.',
    'A family member or caregiver is posting photos of your child publicly against your wishes.',
    'You want to establish a family photo-sharing policy and need guidance on what is reasonable.',
  ],
  whenToActNow: [
    'You found images of your child being used in an exploitative context - contact NCMEC (CyberTipline.org or 1-800-843-5678) and law enforcement immediately.',
    'You received threats or demands related to photos of your child.',
    'You believe someone is using photos of your child to create AI-generated content - report to the platform and NCMEC.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sharing-baby-photos-online-safety',
    'comparison-anxiety-social-media',
    'baby-monitor-hacking-security',
  ],
  sources: [
    {
      org: 'NCMEC',
      citation: 'National Center for Missing & Exploited Children - CyberTipline Reports and AI-Generated CSAM',
      url: 'https://www.missingkids.org/theissues/csam',
    },
    {
      org: 'UNICEF',
      citation: 'UNICEF - Protecting Children in the Age of AI: Global Threat Assessment (2026)',
      url: 'https://www.unicef.org/protection/child-protection-and-technology',
    },
    {
      org: 'AAP',
      citation: 'AAP - Children and Media: Tips for Families',
      url: 'https://www.aap.org/en/patient-care/media-and-children/',
    },
  ],
};
