import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-homeopathy-teething-tablets-risk',
  title: 'Are Homeopathic Teething Tablets Safe for My Baby?',
  category: 'medical',
  searchTerms: [
    'homeopathic teething tablets safe baby',
    'teething tablet recall',
    'belladonna teething tablets danger',
    'Hyland teething tablets safe',
    'homeopathic teething gel baby',
    'natural teething remedy safety',
    'teething tablet FDA warning',
    'homeopathic medicine baby teething',
    'teething tablets side effects baby',
    'are teething tablets dangerous',
  ],
  quickAnswer:
    'The FDA has strongly warned against giving homeopathic teething tablets and gels to infants and children. Testing has found inconsistent and sometimes dangerously high levels of belladonna (a toxic substance) in some products, and over 400 adverse events including seizures, breathing difficulty, and at least 10 deaths have been reported. The FDA advises parents to stop using these products immediately and use safer alternatives for teething pain.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Early teething can begin as young as 3-4 months, leading parents to seek relief for their fussy baby. Homeopathic teething products should be avoided entirely at any age. The FDA has issued multiple warnings since 2010 about homeopathic teething products containing belladonna. Because homeopathic products are not manufactured to the same standards as FDA-approved drugs, the amount of belladonna can vary significantly between tablets, posing an unpredictable toxicity risk. Safe alternatives for young teething babies include chilled (not frozen) teething rings, clean fingers for gum massage, and cold wet washcloths to chew on.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most active teething period, when most babies get their first teeth. Avoid both homeopathic teething tablets and topical benzocaine gels (like Orajel for babies), which the FDA has also warned against due to the risk of methemoglobinemia, a serious condition that reduces oxygen in the blood. Safe teething relief options include: firm rubber teething toys (chilled in the refrigerator), gum massage with a clean finger, cold washcloths, and if needed, an age-appropriate dose of acetaminophen or ibuprofen (for babies 6+ months) as directed by your pediatrician.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers continue to get new teeth through about age 3. The same cautions against homeopathic teething products apply. Products labeled "natural" or "homeopathic" are not synonymous with "safe" — they may contain active pharmacological ingredients in variable amounts. If your child has previously used homeopathic teething products, discontinue them and watch for symptoms of belladonna toxicity: flushing, rapid heartbeat, dilated pupils, muscle twitching, seizures, or difficulty breathing. Consult your pediatrician about safe pain management for teething discomfort.',
    },
  ],
  whenNormal: [
    'You use safe teething alternatives such as chilled teething rings, gum massage, or cold washcloths to relieve your baby\'s discomfort.',
    'Your baby is teething with typical symptoms (drooling, mild fussiness, chewing on objects) and you manage it without homeopathic products.',
    'You give pediatrician-approved doses of acetaminophen or ibuprofen for significant teething pain.',
  ],
  whenToMention: [
    'You have been using homeopathic teething products and want guidance on safer alternatives.',
    'Your baby has significant teething pain that does not respond to cold teething toys and gum massage.',
    'You are unsure which teething products are safe and which have been recalled or warned against.',
  ],
  whenToActNow: [
    'Your baby has used a homeopathic teething product and develops seizures, difficulty breathing, muscle twitching, lethargy, flushing, or agitation — call 911 or Poison Control (1-800-222-1222) immediately.',
    'Your baby has symptoms of belladonna toxicity: dilated pupils, rapid heartbeat, fever, dry mouth, confusion, or hallucinations — seek emergency medical care.',
    'Your baby has had an adverse reaction to any teething product — seek medical attention and report the event to the FDA MedWatch program.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-herbal-supplement-risk', 'baby-osteopathy-evidence-safety'],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — FDA Warns Against Homeopathic Teething Products',
      url: 'https://www.fda.gov/consumers/consumer-updates/fda-warns-against-use-homeopathic-teething-tablets-and-gels',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Teething Pain Relief Tips',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health — Homeopathy',
      url: 'https://www.nccih.nih.gov/health/homeopathy',
    },
  ],
};
