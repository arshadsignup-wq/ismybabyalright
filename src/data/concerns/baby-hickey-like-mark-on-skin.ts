import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hickey-like-mark-on-skin',
  title: 'Hickey-Like Mark or Suction Bruise on Baby\'s Skin',
  category: 'skin',
  searchTerms: ['baby hickey mark', 'baby suction bruise', 'toddler hickey-like mark', 'baby round bruise', 'baby mark on arm', 'baby unexplained round mark', 'toddler suction mark skin', 'baby circular bruise', 'baby mark on neck', 'baby red circle on skin'],
  quickAnswer: 'A hickey-like or suction bruise on a baby\'s skin is surprisingly common and is usually self-inflicted. Babies and toddlers frequently suck on their own arms, hands, and wrists, creating round, reddish-purple marks that look like a hickey. These are harmless and fade within a few days to a week. Other causes of similar-looking marks include a hemangioma (birthmark), a bruise from a fall, or rarely a skin condition. If the mark appeared suddenly without a clear explanation and is in an unusual location, consult your pediatrician.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies frequently suck on their arms, wrists, and hands for self-soothing, which can create red or purple suction marks. These marks are completely harmless. You can also see suction blisters on newborns\' hands or wrists from sucking in the womb. Mongolian spots (flat, blue-gray birthmarks) can sometimes be mistaken for bruise marks. If you notice an unexplained bruise-like mark on a non-mobile baby that is not in a typical self-sucking location, discuss it with your pediatrician.' },
    { ageRange: '1-3 years', context: 'Toddlers may suck on their arms or hands when self-soothing, teething, or stressed, leaving temporary suction marks. These are not harmful. Toddlers also bruise easily from normal play, and round bruises can result from bumping into furniture edges or toys. If your toddler has marks you cannot explain, in unusual locations, or if you have concerns about how they were caused, speak with your pediatrician. Petechiae (tiny pinpoint red dots) can sometimes look like marks and should be evaluated promptly.' },
  ],
  whenNormal: ['A round mark on the arm or wrist from self-sucking', 'Suction blisters on a newborn\'s hands from sucking in the womb', 'A mark that fades over a few days', 'A bruise in a typical fall location (shins, forehead) on a mobile toddler'],
  whenToMention: ['The mark is in an unusual location and you are not sure of the cause', 'Marks are appearing frequently and your child does not seem to be sucking on the area', 'The mark is not fading after a week', 'You want reassurance about the cause of any mark on your baby'],
  whenToActNow: ['Unexplained bruise-like marks on a non-mobile baby', 'Marks accompanied by petechiae (tiny red dots that don\'t blanch when pressed)', 'Multiple unexplained marks in different stages of healing', 'Any mark you are concerned about - trust your instincts and ask your pediatrician'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-bruise-that-wont-go-away', 'birthmarks', 'petechiae-baby', 'mongolian-spots'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bruises in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Bruises.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Skin Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Bruising in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
