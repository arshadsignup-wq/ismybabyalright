import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-travel-altitude-ears',
  title: 'Baby Ear Pain During Flights and Altitude Changes',
  category: 'medical',
  searchTerms: ['baby ear pain flying', 'baby ears on airplane', 'toddler crying on plane', 'baby ear pressure flight', 'baby flying ear pain', 'toddler airplane ears', 'baby altitude ear pain', 'baby flying tips ears', 'baby ear popping plane', 'toddler ear pain driving mountains'],
  quickAnswer: 'Ear pain during flights and altitude changes is caused by pressure differences between the middle ear and the outside environment. Babies and toddlers are more affected because their Eustachian tubes are smaller and less efficient at equalizing pressure. The most pain occurs during descent (landing). To help: breastfeed, bottle-feed, or offer a pacifier during takeoff and landing (swallowing helps equalize pressure), use saline nasal drops before the flight if your child is congested, and avoid flying if your child has an active ear infection. Older toddlers can try sipping water or eating a snack during ascent and descent.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies cannot consciously pop their ears, so they rely on swallowing and sucking to equalize ear pressure. During takeoff and especially landing, offer a breast, bottle, or pacifier to encourage swallowing. If your baby is asleep during the flight, there is no need to wake them - most babies equalize pressure naturally during sleep. If your baby has a cold, nasal congestion can make pressure equalization harder. Use saline drops and a nasal aspirator before the flight. Ask your pediatrician about infant-dose acetaminophen before the flight if ear pain is expected. Avoid flying with a baby who has an active ear infection if possible.' },
    { ageRange: '1-3 years', context: 'Toddlers may cry and pull at their ears during altitude changes. Help equalize pressure by offering a sippy cup of water, a snack that requires chewing, a lollipop (if age-appropriate), or by encouraging them to yawn. Avoid giving a toddler a pacifier if they have outgrown it just for the flight. If your toddler is congested, discuss using an age-appropriate decongestant with your pediatrician before flying. Distraction with toys, books, or screens during takeoff and landing can also help. For car travel in mountains, offer water or a snack during altitude changes.' },
  ],
  whenNormal: ['Mild fussiness during takeoff and landing that resolves once at cruising altitude or on the ground', 'Your child rubbing or pulling at their ears during altitude changes', 'A brief period of crying during descent that resolves after landing'],
  whenToMention: ['Ear pain that persists for hours after a flight', 'Your child has an ear infection and you need to fly', 'Your child consistently has severe ear pain during flights', 'Fluid or blood draining from the ear after a flight'],
  whenToActNow: ['Severe, persistent ear pain after a flight that does not resolve', 'Hearing loss after a flight (rare but possible from barotrauma)', 'Blood or clear fluid from the ear after altitude changes', 'Signs of a ruptured eardrum: sudden relief from pain followed by drainage'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['ear-infection', 'baby-ear-pulling', 'chronic-congestion', 'baby-ear-infection-vs-teething'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Flying With Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Flying-with-Baby.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Travel Safety Tips. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Barotitis Media in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
