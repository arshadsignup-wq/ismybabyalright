import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-heat-rash',
  title: 'My Baby Has Heat Rash',
  category: 'skin',
  searchTerms: [
    'baby heat rash',
    'baby prickly heat',
    'baby miliaria',
    'baby red bumps hot weather',
    'baby rash from sweating',
    'baby rash neck folds heat',
    'infant heat rash treatment',
    'baby rash in creases',
    'newborn heat rash',
    'baby heat rash vs eczema',
  ],
  quickAnswer:
    'Heat rash (miliaria) is very common in babies and occurs when sweat ducts become blocked, trapping perspiration beneath the skin. It appears as small red or clear bumps, often in skin folds, on the neck, chest, groin, or diaper area. Heat rash is not dangerous and typically resolves on its own within a few days once the baby is cooled down. The best treatment is cooling the skin, dressing your baby in loose clothing, and avoiding overheating.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially prone to heat rash because their sweat ducts are immature and easily blocked. Miliaria crystallina (clear, tiny blisters) and miliaria rubra (red bumps often called prickly heat) are the most common types. Heat rash in newborns commonly appears on the face, neck, upper chest, and diaper area. It is often caused by overdressing, being held close to a warm body, or being in a warm room. Keep your baby\'s room at a comfortable temperature (68-72 degrees F), avoid overdressing, and use lightweight, breathable cotton clothing. A cool bath (not cold) can help.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies become more active, heat rash may appear in skin folds where moisture accumulates — in the neck creases, behind the ears, in elbow bends, and in the diaper area. Keeping these areas clean and dry is key. After baths, gently pat skin folds completely dry. Avoid thick creams or ointments on the rash, as they can further block sweat ducts. Calamine lotion may provide soothing relief. If your baby has a rash in skin folds that looks raw, weepy, or has an odor, this may be a yeast infection rather than heat rash, which requires different treatment.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers can develop heat rash during active play, especially in warm weather. The rash often appears on areas covered by clothing or where skin rubs against skin. Prevention is key: dress your toddler in loose, breathable fabrics, take breaks from outdoor play in hot weather, and use fans or air conditioning to keep them cool. Heat rash should resolve within 2-3 days of cooling measures. If the rash worsens, spreads, develops pus-filled bumps, or your child develops a fever, see your pediatrician, as secondary bacterial infection can occasionally complicate heat rash.',
    },
  ],
  whenNormal: [
    'Small, clear or red bumps appear in skin folds or areas covered by clothing during warm weather and resolve with cooling.',
    'The rash appears after your baby has been overdressed or in a warm environment and fades within 1-3 days of cooling measures.',
    'Your baby does not seem bothered by the rash (though some babies may be slightly fussy from the prickly sensation).',
  ],
  whenToMention: [
    'The heat rash does not improve within 3-4 days despite cooling measures.',
    'The rash recurs frequently and you want advice on prevention strategies.',
    'You are unsure whether the rash is heat rash, eczema, or another skin condition.',
  ],
  whenToActNow: [
    'The rash develops pus-filled bumps, becomes warm and swollen, or has red streaks spreading from it — this may indicate a secondary bacterial infection requiring antibiotics.',
    'Your baby has a rash accompanied by fever, lethargy, or signs of heat exhaustion — seek medical care to rule out more serious heat-related illness.',
    'The rash is widespread, blistering, or your baby appears to be in significant distress — see your pediatrician promptly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-prickly-heat-rash-recurring', 'baby-heat-exhaustion-signs', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Heat Rash (Prickly Heat)',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Heat-Rash.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Heat Rash: Symptoms and Causes',
      url: 'https://www.mayoclinic.org/diseases-conditions/heat-rash/symptoms-causes/syc-20373276',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Miliaria',
      url: 'https://medlineplus.gov/ency/article/001456.htm',
    },
  ],
};
