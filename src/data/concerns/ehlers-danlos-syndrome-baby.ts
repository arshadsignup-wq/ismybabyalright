import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ehlers-danlos-syndrome-baby',
  title: 'Ehlers-Danlos Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'ehlers danlos syndrome baby',
    'baby very stretchy skin',
    'baby hypermobile joints',
    'EDS baby signs',
    'baby bruises easily loose joints',
    'ehlers danlos infant',
    'baby skin tears easily',
    'baby very flexible double jointed',
    'connective tissue disorder infant',
  ],
  quickAnswer:
    'Ehlers-Danlos syndromes (EDS) are a group of inherited connective tissue disorders characterized by joint hypermobility, skin that stretches more than normal, and tissue fragility. The most common type, hypermobile EDS, affects an estimated 1 in 5,000 people. Signs in babies are often subtle and can include very flexible joints, soft or stretchy skin, and easy bruising. Most types of EDS are manageable with appropriate care and physical therapy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'EDS may be suspected at birth in severe forms if a baby has very loose joints, fragile or stretchy skin, or is born prematurely with premature rupture of membranes. The vascular type (vEDS), the most serious form, may present with translucent skin and visible veins. Kyphoscoliotic EDS may present with severe hypotonia and scoliosis at birth. Many milder forms are not apparent this early. Family history of EDS is an important diagnostic clue.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with EDS may have noticeably loose or "floppy" joints, skin that feels unusually soft and stretchy, and may bruise more easily than expected. Motor development may be slightly delayed due to joint laxity and low muscle tone. Some babies have difficulty with feeding if oral tissues are affected. If you notice these features, especially with a family history, mention them to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, joint hypermobility may become more apparent — joints may bend beyond the normal range. Sitting and crawling may be delayed. Skin may show easy bruising or slow wound healing. Subluxations (partial dislocations) can occasionally occur with normal handling. Physical therapy focused on strengthening muscles around hypermobile joints is the primary intervention.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with EDS may be late walkers due to joint instability and low tone, and they may fall frequently. Skin injuries may heal slowly and leave wide, thin scars (in classic EDS). Joint protection strategies become important — strengthening exercises rather than stretching. Occupational therapy can help with fine motor tasks. With appropriate support, most children with EDS can participate fully in daily activities.',
    },
  ],
  whenNormal: [
    'Your baby has flexible joints without pain, instability, or dislocation',
    'Your baby\'s skin is soft but does not tear easily or bruise excessively',
    'Your baby is meeting developmental milestones even if slightly on the later side',
    'You have benign joint hypermobility in the family without other connective tissue features',
  ],
  whenToMention: [
    'Your baby has extremely flexible joints that seem to extend well beyond the normal range, combined with unusually soft or stretchy skin',
    'Your baby bruises very easily with minimal contact or has skin that tears or scars unusually',
    'Your baby or a family member has been diagnosed with EDS and you want your baby evaluated',
  ],
  whenToActNow: [
    'Your baby has sudden joint swelling or appears to be in pain after a joint seemed to pop or shift out of place',
    'Your baby with suspected vascular EDS (translucent skin, visible veins) develops sudden abdominal pain, swelling, or signs of internal bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Ehlers-Danlos Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/ehlers-danlos-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Ehlers-Danlos Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/ehlers-danlos-syndrome/symptoms-causes/syc-20362125',
    },
  ],
};
