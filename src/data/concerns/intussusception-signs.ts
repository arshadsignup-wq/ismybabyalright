import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'intussusception-signs',
  title: 'Signs of Intussusception in Babies',
  category: 'digestive',
  searchTerms: [
    'intussusception symptoms baby',
    'baby screaming in pain pulling legs up',
    'currant jelly stool baby',
    'baby vomiting and screaming',
    'what is intussusception',
    'bowel obstruction baby symptoms',
    'baby inconsolable belly pain',
    'red jelly poop baby',
  ],
  quickAnswer: 'Intussusception is a serious but treatable condition where part of the intestine telescopes into itself, causing a blockage. The classic signs are sudden episodes of severe pain (baby screams and pulls legs up), vomiting, and eventually "currant jelly" stools (blood and mucus). It\'s most common between 6-18 months and requires immediate emergency care.',
  byAge: [
    {
      ageRange: '0-6 months',
      context: 'Intussusception is less common in babies under 6 months but can still occur. In young babies, symptoms may be harder to recognize. Watch for unusual crying patterns, especially sudden, intense screaming episodes that come in waves. Baby may pull legs to chest, then seem normal for 10-20 minutes, then scream again. Vomiting and lethargy are common early signs.',
    },
    {
      ageRange: '6-12 months',
      context: 'This is peak age for intussusception. The classic pattern is sudden, severe belly pain that comes in waves (every 15-20 minutes). During pain episodes, baby screams intensely, pulls legs up, and may vomit. Between episodes, baby may seem lethargic or even normal. "Currant jelly" stools (dark red, jelly-like, with blood and mucus) usually appear later but are a key warning sign. Some babies have a palpable "sausage-shaped" mass in the belly.',
    },
    {
      ageRange: '12-24 months',
      context: 'Intussusception remains fairly common in this age range. Symptoms are similar to younger babies but toddlers may be able to point to their belly or show you where it hurts. The pattern of pain coming and going in waves is still the hallmark. Don\'t wait for bloody stools  -  early treatment is much more effective. Any sudden, severe abdominal pain deserves immediate evaluation.',
    },
    {
      ageRange: '2+ years',
      context: 'While less common after age 2, intussusception can still occur. In older toddlers, it\'s sometimes triggered by a "lead point" like swollen lymph nodes from a recent illness. Symptoms include severe belly pain, vomiting, and possibly blood in stool. Older children may be able to tell you their belly hurts badly.',
    },
  ],
  whenNormal: [
    'Fussiness or crying that has an identifiable cause (hunger, gas, tiredness)',
    'Belly pain that improves with comfort measures or passing gas',
    'Normal stools, even if they vary in color from feed to feed',
    'Baby who remains active and interested between fussy periods',
  ],
  whenToMention: [
    'You\'re concerned about unusual crying patterns or belly pain',
    'Baby has had several episodes of vomiting in a short period',
    'Changes in stool appearance that worry you',
  ],
  whenToActNow: [
    'Sudden, severe crying episodes that come in waves (every 10-20 minutes)',
    'Baby pulls legs tightly to chest and screams inconsolably',
    '"Currant jelly" stools  -  dark red, jelly-like, containing blood and mucus',
    'Vomiting bile (green or yellow)',
    'Baby becomes pale, sweaty, or lethargic between pain episodes',
    'You can feel a hard, sausage-shaped lump in baby\'s belly',
    'Baby\'s belly is swollen and painful to touch',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Intussusception: Emergency Warning Signs for Parents (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Intussusception: Diagnosis and Treatment (2024)',
      url: 'https://www.chop.edu',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Intussusception in Infants: When to Seek Emergency Care (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};
