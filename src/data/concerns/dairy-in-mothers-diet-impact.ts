import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dairy-in-mothers-diet-impact',
  title: 'Dairy in Your Diet and Your Breastfed Baby',
  category: 'feeding',
  searchTerms: [
    'dairy breastfeeding baby fussy',
    'cow milk protein breastfeeding',
    'dairy intolerance breastfed baby',
    'milk allergy through breast milk',
    'eliminating dairy breastfeeding',
    'dairy free breastfeeding',
    'baby reacting to dairy in breast milk',
    'CMPA breastfeeding',
    'blood in stool dairy breastfeeding',
  ],
  quickAnswer:
    'Cow\'s milk protein is one of the most common dietary proteins that can pass into breast milk and cause reactions in sensitive babies. Symptoms may include excessive fussiness, mucousy or bloody stools, eczema, or congestion. If your baby has a confirmed cow\'s milk protein sensitivity, eliminating dairy from your diet usually resolves symptoms within two to four weeks.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cow\'s milk protein allergy or intolerance in breastfed babies most commonly presents in the first few months of life. Symptoms can include excessive crying, green or mucousy stools, streaks of blood in the stool, eczema, or frequent spitting up. If your pediatrician suspects a dairy sensitivity, they may recommend a two to four week elimination trial where you remove all dairy from your diet to see if symptoms improve.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If you eliminated dairy and your baby\'s symptoms improved, your doctor may suggest you continue the dairy-free diet for several more months. Some babies outgrow cow\'s milk protein sensitivity by six months. A supervised reintroduction of dairy can help determine if your baby has developed tolerance. Make sure you are getting adequate calcium from other sources during elimination.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Many babies with cow\'s milk protein sensitivity begin to tolerate dairy by nine to twelve months. As your baby starts solids, your pediatrician may suggest cautious introduction of baked dairy products first, as the proteins are altered by heat and may be better tolerated. Continue to follow your doctor\'s guidance about your own dairy intake while breastfeeding.',
    },
  ],
  whenNormal: [
    'Your baby has occasional fussiness that is not clearly linked to your dairy consumption',
    'You eat dairy freely and your baby has normal stools, comfortable digestion, and healthy skin',
    'Your baby had mild symptoms that resolved after a brief elimination and is now tolerating dairy through your milk',
  ],
  whenToMention: [
    'Your baby has persistent mucousy, green, or blood-streaked stools and you suspect a dairy connection',
    'You have eliminated dairy for two weeks but your baby\'s symptoms have not improved',
    'Your baby has worsening eczema, chronic congestion, or excessive vomiting that might be related to your diet',
    'You need guidance on ensuring adequate nutrition while on a dairy-free diet',
  ],
  whenToActNow: [
    'Your baby has significant bloody stools, failure to gain weight, or appears to be in distress after feedings',
    'Your baby develops hives, facial swelling, or difficulty breathing, which could indicate a severe allergic reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Protein Allergy in Infants. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4298661/',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Allergies and Food Sensitivities.',
      url: 'https://llli.org/breastfeeding-info/allergies/',
    },
  ],
};
