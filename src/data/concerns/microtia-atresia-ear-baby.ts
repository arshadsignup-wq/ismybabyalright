import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'microtia-atresia-ear-baby',
  title: 'Microtia/Atresia of the Ear',
  category: 'medical',
  searchTerms: [
    'microtia baby',
    'small ear baby',
    'baby born with small ear',
    'atresia ear baby',
    'baby missing ear canal',
    'underdeveloped ear baby',
    'microtia atresia infant',
    'baby one ear smaller than other',
    'congenital ear deformity baby',
  ],
  quickAnswer:
    'Microtia is a congenital condition where the outer ear (pinna) is underdeveloped, and atresia is the absence or closure of the ear canal. They often occur together. Microtia affects approximately 1 in 5,000-7,000 births and is usually unilateral (one ear). While the appearance is the most visible concern, the primary medical consideration is hearing  -  atresia causes conductive hearing loss on the affected side. Early hearing evaluation and intervention are important. Reconstructive surgery is typically an option when the child is older.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Microtia/atresia is identified at birth. Your newborn should receive comprehensive hearing testing (ABR) to assess both ears. Even with one normal ear, monitoring is important. If both ears are affected, hearing intervention is urgent. A bone conduction hearing device (such as a softband with a bone conduction processor) can be fitted within the first few months of life to provide hearing while the ear canal is absent. Your pediatrician may also check for associated conditions affecting the jaw, kidneys, or spine.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a bone conduction device was recommended, your baby should be wearing it consistently by now. For unilateral microtia with a normal opposite ear, your baby may develop speech normally using the hearing ear, but the affected ear should still be monitored. Your medical team (ENT, audiologist, possibly craniofacial specialist) will outline a long-term plan. Ear mold prosthetics are not typically used at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue consistent use of any hearing devices. Speech and language development should be monitored closely, especially if hearing is affected bilaterally. Your child should be enrolled in early intervention services if there are any hearing or speech concerns. The team may begin discussing future surgical options, although reconstruction is not performed this young.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with unilateral microtia and normal hearing in the other ear typically develop speech well but may have difficulty localizing sounds or hearing in noisy environments. Ear reconstruction surgery (using rib cartilage or synthetic frameworks) is typically performed between ages 6-10 depending on the technique. Atresiaplasty (surgically opening the ear canal) may be considered if the anatomy is favorable, usually around age 5-6. Your ENT and audiologist will guide the best timing and approach for your child.',
    },
  ],
  whenNormal: [
    'Your baby has mild microtia (a slightly smaller or differently shaped ear) with a normal ear canal and normal hearing  -  many variations of ear shape are benign.',
    'Your baby has unilateral microtia and is developing speech and language normally using the hearing ear.',
    'Your child with microtia is wearing a bone conduction hearing device and making good progress with hearing and speech.',
    'Your baby\'s ears appear slightly asymmetric  -  mild ear asymmetry is very common and different from microtia.',
  ],
  whenToMention: [
    'Your baby was born with a noticeably small or underdeveloped ear and has not yet had a complete hearing evaluation.',
    'Your child with known microtia/atresia is having difficulty with speech development or hearing in group settings.',
    'You have questions about the timing or options for surgical reconstruction.',
  ],
  whenToActNow: [
    'Your baby has bilateral microtia/atresia (both ears affected) and has not yet been fitted with bone conduction hearing devices  -  bilateral hearing loss requires urgent intervention for language development.',
    'Your child with microtia develops new symptoms such as ear drainage, pain, or sudden change in hearing in either ear.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Anotia/Microtia.',
      url: 'https://www.cdc.gov/birth-defects/about/anotia-microtia.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Microtia. Genetic and Rare Diseases Information Center.',
      url: 'https://rarediseases.info.nih.gov/diseases/10048/microtia',
    },
  ],
};
