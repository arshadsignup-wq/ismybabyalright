export interface SymptomCategory {
  id: string;
  title: string;
  description: string;
  symptoms: { label: string; triageSlug?: string; concernSlugs: string[] }[];
}

export const symptomCategories: SymptomCategory[] = [
  {
    id: 'fever-pain',
    title: 'Fever & Pain',
    description: 'Temperature changes, discomfort, and pain responses.',
    symptoms: [
      { label: 'Fever', triageSlug: 'fever', concernSlugs: ['baby-fever-teething', 'baby-fever-after-vaccines'] },
      { label: 'Febrile seizure', concernSlugs: ['baby-febrile-seizure'] },
      { label: 'Inconsolable crying', triageSlug: 'crying', concernSlugs: ['baby-colic', 'baby-crying-nonstop'] },
      { label: 'Irritability', concernSlugs: ['baby-irritability', 'baby-fussy-evening'] },
      { label: 'Ear pulling', triageSlug: 'ear-pain', concernSlugs: ['baby-ear-infection', 'baby-pulling-ears'] },
    ],
  },
  {
    id: 'breathing',
    title: 'Breathing & Respiratory',
    description: 'Coughs, congestion, breathing sounds, and respiratory distress.',
    symptoms: [
      { label: 'Fast breathing', triageSlug: 'breathing', concernSlugs: ['baby-breathing-fast', 'baby-rapid-breathing'] },
      { label: 'Noisy breathing', concernSlugs: ['baby-noisy-breathing', 'baby-breathing-sounds'] },
      { label: 'Wheezing', triageSlug: 'breathing', concernSlugs: ['baby-wheezing'] },
      { label: 'Cough', concernSlugs: ['baby-cough', 'baby-barking-cough'] },
      { label: 'Congestion / stuffy nose', triageSlug: 'congestion', concernSlugs: ['baby-stuffy-nose', 'baby-congestion'] },
      { label: 'Stridor', concernSlugs: ['baby-stridor'] },
      { label: 'Snoring', concernSlugs: ['baby-snoring', 'toddler-snoring'] },
    ],
  },
  {
    id: 'skin',
    title: 'Skin & Rashes',
    description: 'Rashes, bumps, discoloration, and skin changes.',
    symptoms: [
      { label: 'Rash', triageSlug: 'rash', concernSlugs: ['baby-rash', 'baby-heat-rash', 'baby-diaper-rash'] },
      { label: 'Eczema / dry patches', concernSlugs: ['baby-eczema', 'baby-dry-skin'] },
      { label: 'Hives', concernSlugs: ['baby-hives'] },
      { label: 'Cradle cap', concernSlugs: ['baby-cradle-cap'] },
      { label: 'Baby acne', concernSlugs: ['baby-acne'] },
      { label: 'Birthmarks', concernSlugs: ['baby-birthmark'] },
      { label: 'Jaundice (yellow skin)', triageSlug: 'jaundice', concernSlugs: ['newborn-jaundice'] },
      { label: 'Peeling skin', concernSlugs: ['newborn-skin-peeling'] },
      { label: 'Bruising', concernSlugs: ['baby-bruising'] },
    ],
  },
  {
    id: 'digestive',
    title: 'Digestive & Feeding',
    description: 'Vomiting, stool changes, reflux, and feeding difficulties.',
    symptoms: [
      { label: 'Vomiting', triageSlug: 'vomiting', concernSlugs: ['baby-vomiting', 'baby-projectile-vomiting'] },
      { label: 'Spit-up / reflux', concernSlugs: ['baby-reflux', 'baby-spit-up'] },
      { label: 'Diarrhea', triageSlug: 'diarrhea', concernSlugs: ['baby-diarrhea'] },
      { label: 'Constipation', triageSlug: 'constipation', concernSlugs: ['baby-constipation'] },
      { label: 'Gas / bloating', concernSlugs: ['baby-gas', 'baby-bloated-belly'] },
      { label: 'Blood in stool', concernSlugs: ['baby-blood-in-stool'] },
      { label: 'Green poop', concernSlugs: ['green-poop'] },
      { label: 'Refusing to eat', concernSlugs: ['baby-refusing-bottle', 'baby-refusing-solids'] },
    ],
  },
  {
    id: 'eyes-ears',
    title: 'Eyes, Ears & Mouth',
    description: 'Eye discharge, ear issues, mouth sores, and related symptoms.',
    symptoms: [
      { label: 'Eye discharge / sticky eyes', triageSlug: 'eye-discharge', concernSlugs: ['baby-eye-discharge', 'baby-blocked-tear-duct'] },
      { label: 'Crossed eyes', concernSlugs: ['baby-crossed-eyes'] },
      { label: 'Ear infection signs', triageSlug: 'ear-pain', concernSlugs: ['baby-ear-infection'] },
      { label: 'Thrush (white patches in mouth)', concernSlugs: ['baby-thrush'] },
      { label: 'Drooling', concernSlugs: ['baby-excessive-drooling'] },
      { label: 'Mouth sores', concernSlugs: ['baby-mouth-sores'] },
    ],
  },
  {
    id: 'head-neuro',
    title: 'Head & Neurological',
    description: 'Head shape, fontanelle changes, seizures, and neurological signs.',
    symptoms: [
      { label: 'Flat head (plagiocephaly)', concernSlugs: ['baby-flat-head'] },
      { label: 'Bulging fontanelle', concernSlugs: ['baby-bulging-fontanelle'] },
      { label: 'Sunken fontanelle', concernSlugs: ['baby-sunken-fontanelle'] },
      { label: 'Head banging', concernSlugs: ['baby-head-banging', 'toddler-head-banging'] },
      { label: 'Seizures / convulsions', concernSlugs: ['baby-febrile-seizure', 'baby-seizures'] },
      { label: 'Lethargy', concernSlugs: ['baby-lethargy', 'baby-sleepy'] },
      { label: 'Stiffness / arching', concernSlugs: ['baby-arching-back', 'baby-stiff'] },
    ],
  },
  {
    id: 'movement',
    title: 'Movement & Motor',
    description: 'Motor development concerns, limping, stiffness, and coordination.',
    symptoms: [
      { label: 'Not rolling over', concernSlugs: ['not-rolling-over'] },
      { label: 'Not crawling', concernSlugs: ['not-crawling'] },
      { label: 'Not walking', concernSlugs: ['not-walking'] },
      { label: 'Toe walking', concernSlugs: ['toddler-toe-walking'] },
      { label: 'Limping', concernSlugs: ['toddler-limping'] },
      { label: 'Favoring one side', concernSlugs: ['baby-favoring-one-side'] },
      { label: 'Floppy / low tone', concernSlugs: ['baby-floppy', 'baby-low-muscle-tone'] },
      { label: 'Stiff / high tone', concernSlugs: ['baby-stiff', 'baby-hypertonia'] },
    ],
  },
  {
    id: 'behavior-development',
    title: 'Behavior & Development',
    description: 'Speech delays, social concerns, regression, and behavioral changes.',
    symptoms: [
      { label: 'Not talking', concernSlugs: ['not-talking'] },
      { label: 'Not responding to name', concernSlugs: ['not-responding-to-name'] },
      { label: 'No eye contact', concernSlugs: ['baby-no-eye-contact'] },
      { label: 'Repetitive behaviors', concernSlugs: ['toddler-repetitive-behavior'] },
      { label: 'Loss of skills (regression)', concernSlugs: ['baby-developmental-regression'] },
      { label: 'Separation anxiety', concernSlugs: ['baby-separation-anxiety'] },
      { label: 'Tantrums', concernSlugs: ['toddler-tantrums'] },
      { label: 'Biting / hitting', concernSlugs: ['toddler-biting', 'toddler-hitting'] },
      { label: 'Sleep changes', concernSlugs: ['baby-sleep-regression'] },
    ],
  },
];
