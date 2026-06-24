import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'noise-exposure-infant-hearing-damage',
  title: 'Noise Exposure and Infant Hearing Damage',
  category: 'medical',
  searchTerms: [
    'loud noise damage baby hearing',
    'baby ears loud music',
    'noise level safe for baby',
    'baby at concert hearing damage',
    'fireworks baby ears',
    'how loud is too loud for baby',
    'baby hearing protection',
    'infant ear protection',
    'noise exposure baby decibels',
    'white noise too loud baby',
  ],
  quickAnswer:
    'Babies\' ears are more vulnerable to noise damage than adults\' because their ear canals are smaller (which amplifies sound) and their auditory systems are still developing. The WHO recommends that infants not be exposed to sound levels above 75 decibels (about the volume of a vacuum cleaner). Sounds above 85 decibels can cause permanent hearing damage, and louder sounds cause damage more quickly. Common sources of dangerous noise exposure for babies include concerts, sporting events, fireworks, power tools, and even excessively loud white noise machines placed too close to the crib.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns should have passed a hearing screening before hospital discharge. Their ears are especially sensitive in the early weeks. White noise machines are popular sleep aids, but the AAP found that some can produce sounds exceeding 85 decibels at close range. Keep white noise machines at least 7 feet from the crib, set them to low volume, and use them only during sleep times, not continuously. Avoid exposing young babies to sudden loud sounds, which can trigger startle reflexes and cause distress even if they don\'t cause immediate hearing damage.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies become more mobile and attend more activities, noise exposure risks increase. Events like sporting games, concerts, parades, and fireworks displays can easily exceed safe noise levels (often 100+ decibels). If you must bring a baby to a loud event, use properly fitted infant hearing protection (ear muffs designed for babies, not earplugs, which are a choking hazard). Limit the duration of exposure even with protection. Signs that noise may be too loud: your baby cries, startles repeatedly, turns away from the sound source, or you have to shout to be heard by someone 3 feet away.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers face ongoing noise exposure risks from electronic toys (some produce sounds above 100 decibels at close range), headphones, tablets and phones at high volume, and household appliances. Choose toys that have volume controls or cover the speaker with tape to reduce output. If using headphones or earbuds with a toddler, choose volume-limiting models (max 85 decibels). Noise-induced hearing loss is cumulative and irreversible. If your child is not responding to sounds, speaking loudly, or showing signs of delayed speech development, have their hearing evaluated.',
    },
  ],
  whenNormal: [
    'Your baby startles at sudden loud sounds but calms quickly, which is a normal protective reflex.',
    'Your baby passed their newborn hearing screening and is responding to sounds appropriately for their age.',
    'You are using a white noise machine at a low volume placed away from the crib.',
  ],
  whenToMention: [
    'Your baby was exposed to a very loud noise event and you are concerned about hearing damage.',
    'Your baby does not seem to respond to sounds, does not turn toward your voice, or seems less reactive to noise than before.',
    'You want guidance on safe noise levels for your baby at home and during activities.',
    'Your baby failed the newborn hearing screening and needs follow-up.',
  ],
  whenToActNow: [
    'Your baby or toddler shows a sudden change in hearing response after a loud noise exposure.',
    'Your baby is not responding to sounds at all or shows no startle response to sudden loud noises.',
    'Your baby has ear discharge, bleeding from the ear, or severe ear pain after noise exposure.',
  ],
  relatedMilestones: [
    'hearing',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'not-responding-to-sounds',
    'infant-vision-screening-milestones',
    'not-babbling-at-9-months',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Noise: A Hazard for the Fetus and Newborn. Pediatrics, 1997.',
      url: 'https://publications.aap.org/pediatrics/article/100/4/724/63124/Noise-A-Hazard-for-the-Fetus-and-Newborn',
    },
    {
      org: 'WHO',
      citation:
        'WHO. World Report on Hearing, 2021.',
      url: 'https://www.who.int/publications/i/item/world-report-on-hearing',
    },
    {
      org: 'CDC',
      citation:
        'CDC. How Do I Know If I Have Hearing Loss Caused by Loud Noise?',
      url: 'https://www.cdc.gov/nceh/hearing_loss/how_do_i_know.html',
    },
  ],
};
