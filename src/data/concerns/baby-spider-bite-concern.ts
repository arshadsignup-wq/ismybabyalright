import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-spider-bite-concern',
  title: 'Spider Bite Worry in Baby',
  category: 'skin',
  searchTerms: ['baby spider bite', 'spider bite baby', 'baby bite looks like spider bite', 'toddler spider bite', 'brown recluse baby', 'baby spider bite symptoms', 'is it a spider bite baby', 'baby bump looks like spider bite', 'baby spider bite vs staph', 'spider bite toddler treatment'],
  quickAnswer: 'True spider bites in babies are actually quite rare. Many skin infections, particularly staph infections and MRSA, are commonly misidentified as spider bites. Most spiders cannot bite through baby skin, and the majority of spider species are not medically significant. If your baby has a red, painful, swollen bump, it is more likely a bacterial skin infection than a spider bite.',
  byAge: [
    { ageRange: '0-3 months', context: 'Spider bites in young infants are extremely unlikely. A painful, red, swollen bump on a newborn is much more likely to be a bacterial infection. Seek prompt medical evaluation for any suspicious skin lesion in this age group, as infections in young infants can progress quickly.' },
    { ageRange: '3-6 months', context: 'If you find a red, tender bump on your baby and suspect a spider bite, consider whether a spider was actually seen. Most painful skin bumps are staph infections that resemble what people imagine a spider bite looks like. Have your pediatrician evaluate the bump, as it may need antibiotics or drainage.' },
    { ageRange: '6-12 months', context: 'As babies begin crawling, they may encounter spiders, but actual bites remain uncommon. If a bite does occur, most spider bites cause only minor local reactions similar to other insect bites. Clean the area, apply a cool compress, and monitor. Seek care if the area worsens significantly.' },
    { ageRange: '12-24 months', context: 'Toddlers exploring outdoors may encounter spiders. In the rare event of a bite from a medically significant spider like a brown recluse or black widow, symptoms may include severe pain, a spreading wound, or systemic symptoms like muscle cramping. If you witness a spider bite or suspect one with worsening symptoms, seek medical care promptly.' },
  ],
  whenNormal: ['A small red bump that looks like an insect bite, is not worsening, and resolves within a few days'],
  whenToMention: ['A red, swollen, painful bump that is growing or not improving over 2 to 3 days', 'You want your pediatrician to evaluate whether a skin bump is a bite or an infection', 'A bite mark with surrounding redness that seems to be expanding'],
  whenToActNow: ['A skin lesion that is rapidly expanding with a central dark area or tissue breakdown', 'Your baby develops systemic symptoms like fever, muscle cramps, excessive sweating, or pain spreading beyond the bite site', 'A bite on a young infant with any worsening signs'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Insect Bites and Stings. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Insect-Bites-and-Stings.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Spiders of Public Health Importance.', url: 'https://www.cdc.gov/niosh/topics/spiders/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Spider Bites. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK499987/' },
  ],
  relatedConcernSlugs: ['baby-insect-bite-swelling-large', 'baby-skin-abscess-boil', 'baby-mrsa-skin-infection'],
};
