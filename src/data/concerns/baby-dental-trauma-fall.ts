import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dental-trauma-fall',
  title: 'My Baby\'s Tooth Was Knocked Out or Loosened by a Fall',
  category: 'medical',
  searchTerms: [
    'baby tooth knocked out fall',
    'baby loose tooth fall',
    'baby fell hit tooth',
    'baby tooth knocked loose',
    'baby avulsed tooth',
    'baby tooth displaced fall',
    'baby tooth pushed up into gum',
    'toddler tooth fall what to do',
    'baby tooth bleeding after fall',
    'baby tooth trauma',
  ],
  quickAnswer:
    'If a baby tooth is knocked out, do NOT try to replant it (unlike permanent teeth). Apply gentle pressure with gauze to stop bleeding. If a tooth is loosened or displaced, see a dentist within 24 hours. If a tooth is pushed up into the gum (intruded), see a dentist promptly as this can affect the permanent tooth developing underneath. Save any tooth fragments for the dentist to examine.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Dental trauma is extremely rare before teeth erupt. If your young baby has gum bleeding from a fall or impact to the mouth, apply gentle pressure with a clean cloth. If bleeding does not stop within 10 minutes or the gum is significantly cut, seek medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Newly erupting teeth can be damaged by falls. If a newly erupted tooth is loosened, see a dentist within 24 hours. The dentist may recommend monitoring the tooth. Watch for changes in tooth color (pink, gray, or dark) over the following weeks, which may indicate nerve damage.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies learn to stand and walk, falls affecting the front teeth become common. Upper front teeth are most frequently injured. After any mouth injury: control bleeding with gentle pressure, check all teeth for looseness or displacement, and look inside the mouth for cuts. An intruded tooth (pushed up into the gum) needs dental evaluation to protect the permanent tooth bud.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers fall frequently while learning to walk and run. If a baby tooth is completely knocked out, do not replant it as this can damage the permanent tooth underneath. Control bleeding and see a dentist. If a tooth is pushed sideways, your dentist may reposition it. Keep the tooth or fragments to show the dentist.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Active play increases dental trauma risk. If a tooth is chipped, save the fragment and see the dentist. A broken tooth exposing pink tissue (pulp) needs urgent dental care. After any dental trauma, monitor the affected tooth for weeks to months for color changes, which may indicate the tooth nerve has died. Your dentist will guide follow-up.',
    },
  ],
  whenNormal: [
    'Minor gum bleeding after a bump that stops within 10 minutes with gentle pressure',
    'A slightly loose tooth that tightens back up on its own within a few weeks',
    'A small chip on a tooth that does not expose pink pulp tissue',
  ],
  whenToMention: [
    'A tooth is noticeably loose after a fall',
    'You notice a tooth changing color in the weeks after an injury',
    'A small chip on a tooth and you want to know if it needs repair',
  ],
  whenToActNow: [
    'A tooth is pushed up into the gum (intruded), pushed significantly out of alignment, or knocked out completely - see a dentist as soon as possible',
    'A tooth is broken with pink tissue visible, there is heavy bleeding that will not stop, or your child has jaw pain or cannot close their mouth normally after a fall',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-dental-injury-chipped-tooth',
    'baby-dental-abscess-signs',
    'baby-lip-laceration-split',
    'baby-tongue-injury-bleeding',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dental Emergencies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/Dental-Emergencies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Knocked-out tooth: First aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-knocked-out-tooth/basics/art-20056602',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Dental Trauma in Children.',
      url: 'https://www.nidcr.nih.gov/health-info/tooth-decay',
    },
  ],
};
