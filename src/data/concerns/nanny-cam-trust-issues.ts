import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'nanny-cam-trust-issues',
  title: 'Nanny Cam and Trust Issues',
  category: 'behavior',
  searchTerms: [
    'should I use a nanny cam',
    'nanny cam legal rules',
    'watching nanny on camera all day',
    'is it wrong to have a nanny cam',
    'hidden camera for babysitter',
    'daycare camera monitoring',
    'trust issues with childcare provider',
    'nanny cam anxiety obsessive watching',
  ],
  quickAnswer:
    'Using a home monitoring camera when a caregiver is with your child is both legal (in most states, for video without audio in your own home) and common among parents. However, there is a difference between using a camera as a reasonable safety measure and obsessively watching it all day due to anxiety. Transparency with your caregiver about cameras is generally recommended and builds trust. If you find yourself unable to work or focus because you are constantly monitoring the camera, this may indicate caregiver trust issues or parental anxiety that should be addressed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'With a newborn, parents may feel especially anxious about leaving their baby with a caregiver. Safe sleep practices, feeding routines, and responsive care are the key concerns. A camera can provide reassurance that guidelines are being followed. If you hire a caregiver, be transparent about cameras and clearly communicate your expectations.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As you potentially return to work and leave your baby with a caregiver for longer periods, camera use may increase. Check in at reasonable intervals rather than watching continuously. Use the camera to confirm routines are being followed, not to micromanage every interaction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby is mobile, safety concerns may increase. A camera can help you see how your caregiver handles safety situations. If you see concerning behavior, address it directly rather than silently watching and growing anxious.',
    },
    {
      ageRange: '12 months+',
      context:
        'As your toddler becomes more communicative, they may begin to tell you about their day. Combine camera monitoring (if used) with open communication with your caregiver. If you trust your caregiver, consider reducing camera check-ins. If you do not trust them, a camera is not a substitute for finding a caregiver you feel confident in.',
    },
  ],
  whenNormal: [
    'You check the camera occasionally during the day for reassurance and go about your activities',
    'You have informed your caregiver about cameras in the home',
    'Camera use gives you peace of mind and allows you to focus on work or other responsibilities',
    'You address concerns directly with your caregiver rather than just watching silently',
  ],
  whenToMention: [
    'You are unable to stop watching the camera and it is significantly interfering with your work or daily functioning',
    'You have seen concerning behavior on camera (rough handling, ignoring the child, unsafe practices) and are unsure how to address it',
    'Camera monitoring has not resolved your anxiety and you still feel unable to trust any caregiver with your child',
  ],
  whenToActNow: [
    'You witness abuse or neglect of your child on camera — remove your child from the caregiver\'s care immediately and report to authorities',
    'Your anxiety about leaving your child with any caregiver is so severe that it is preventing you from working, maintaining relationships, or functioning — this may indicate an anxiety disorder requiring professional support',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-monitor-anxiety-parent',
    'grandparent-boundary-conflicts',
    'helicopter-parenting-effects',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Finding Quality Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Finding-Quality-Child-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Hale, L. et al. Maternal and Child Mental Health in Child Care. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
