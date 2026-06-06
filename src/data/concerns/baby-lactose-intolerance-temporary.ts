import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lactose-intolerance-temporary',
  title: 'Temporary Lactose Intolerance After Illness',
  category: 'digestive',
  searchTerms: [
    'baby temporary lactose intolerance',
    'baby lactose intolerance after stomach bug',
    'secondary lactose intolerance baby',
    'baby can\'t digest milk after illness',
    'post infection lactose intolerance baby',
    'baby diarrhea milk after virus',
    'baby formula intolerance after illness',
    'temporary milk intolerance baby',
    'transient lactose intolerance infant',
    'baby lactose diarrhea after gastro',
  ],
  quickAnswer:
    'Temporary (secondary) lactose intolerance can occur after a stomach virus because the infection damages the intestinal lining where lactase enzyme is produced. This typically causes watery diarrhea, gas, and bloating when consuming milk or lactose-containing formula. It usually resolves within 2 to 6 weeks as the gut heals. Most babies do not need to permanently avoid lactose.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True lactose intolerance in newborns is extremely rare. If a young infant develops diarrhea after an illness, continue breastfeeding (which contains lactose but also factors that help gut healing). For formula-fed babies with persistent diarrhea, your pediatrician may recommend a lactose-free formula temporarily.',
    },
    {
      ageRange: '3-6 months',
      context:
        'After a stomach bug, you may notice your baby has more gas, bloating, and watery stools when resuming normal milk feeds. This usually means the gut is still healing. Your pediatrician may suggest a temporary switch to a lactose-free formula for 2 to 4 weeks, then gradually reintroducing the regular formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Secondary lactose intolerance is common after rotavirus or other severe gastroenteritis at this age. Continue breast milk and offer lactose-free alternatives for a few weeks. The gut lining regenerates and lactase production resumes as healing occurs. Most babies can return to normal dairy intake within 2 to 6 weeks.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers recovering from a stomach bug may develop temporary intolerance to milk, yogurt, and cheese. You may notice watery, frothy diarrhea returning when dairy is reintroduced. Reducing dairy for 2 to 4 weeks while offering other calcium sources (fortified alternatives, broccoli, calcium-set tofu) and then gradually reintroducing usually works.',
    },
  ],
  whenNormal: [
    'Temporary looser stools after reintroducing dairy following a stomach bug that improve over 2 to 4 weeks',
    'Gas and mild bloating with dairy that gradually resolves as the gut heals',
  ],
  whenToMention: [
    'Dairy-related diarrhea persists beyond 6 weeks after the illness',
    'You need guidance on alternative feeding during temporary intolerance',
    'You are unsure whether the intolerance is temporary or permanent',
  ],
  whenToActNow: [
    'Severe dehydration from ongoing diarrhea related to milk feeds',
    'Bloody stools with dairy, which suggests cow\'s milk protein allergy rather than lactose intolerance',
    'Failure to thrive or weight loss during the period of intolerance',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Lactose Intolerance in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Lactose-Intolerance-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Lactose Intolerance.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
  ],
  relatedConcernSlugs: ['diarrhea', 'baby-food-intolerance-vs-allergy', 'baby-stomach-virus-duration', 'baby-gerd-vs-milk-allergy'],
};
