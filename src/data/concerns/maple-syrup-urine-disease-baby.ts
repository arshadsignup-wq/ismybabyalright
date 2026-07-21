import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'maple-syrup-urine-disease-baby',
  title: 'Maple Syrup Urine Disease (MSUD) in Babies',
  category: 'medical',
  searchTerms: [
    'maple syrup urine disease baby',
    'MSUD newborn screening',
    'baby urine smells sweet',
    'branched chain amino acids baby',
    'MSUD symptoms newborn',
    'maple syrup urine disease treatment',
    'newborn screening MSUD positive',
    'baby metabolic crisis MSUD',
    'MSUD diet baby',
    'leucine isoleucine valine disorder baby',
  ],
  quickAnswer:
    'Maple syrup urine disease (MSUD) is a rare inherited metabolic disorder in which the body cannot properly break down three amino acids: leucine, isoleucine, and valine (branched-chain amino acids). It is named for the characteristic sweet, maple syrup-like odor of the urine. MSUD is detected through newborn screening, and with prompt dietary treatment started within the first days of life, babies with MSUD can develop normally. False positives on newborn screening are possible, so a positive screen requires confirmatory testing.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Babies with MSUD appear healthy at birth. Symptoms typically begin within 2-3 days as branched-chain amino acids accumulate. Without treatment, newborns may develop poor feeding, vomiting, lethargy, and a distinctive sweet smell to their urine, earwax, and sweat. Newborn screening usually detects MSUD before symptoms become severe. If your baby\'s screening is positive, confirmatory blood tests (plasma amino acids) will be done urgently, and a special formula free of leucine, isoleucine, and valine is started immediately.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Babies on a properly managed MSUD diet grow and develop normally. Blood levels of branched-chain amino acids are monitored very frequently — often twice weekly in the early months — to keep leucine levels in the safe range. Your metabolic team will carefully titrate the amount of regular formula or breast milk mixed with the special MSUD formula. During illnesses, even minor ones like a cold, leucine levels can spike dangerously, so your team will provide a sick-day protocol.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introducing solid foods requires careful planning with your metabolic dietitian. Most fruits and some vegetables are naturally low in branched-chain amino acids and can be introduced. High-protein foods like meat, dairy, and legumes must be carefully measured or avoided. Your baby should continue to meet developmental milestones on schedule with well-managed treatment. Leucine levels are still monitored regularly.',
    },
    {
      ageRange: '1-3 years',
      context:
        'MSUD is a lifelong condition requiring strict dietary management. Toddlers can be challenging because of food preferences and refusal, but maintaining the diet is critical to prevent brain damage. Metabolic crises can occur during illness, fasting, or stress. Some families keep emergency supplies of a leucine-free formula for sick days. Liver transplantation is a potential option that can allow an unrestricted diet, though it carries its own risks.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for MSUD',
    'Your baby is on MSUD treatment and leucine levels are consistently in the target range',
    'Your treated baby is meeting developmental milestones on schedule',
    'A positive newborn screen was followed by normal confirmatory testing — false positives do occur',
  ],
  whenToMention: [
    'You received an abnormal or borderline MSUD result on your baby\'s newborn screen and are awaiting confirmatory testing',
    'Your baby on MSUD treatment has leucine levels that are running above target',
    'You are struggling to maintain the MSUD diet and need additional support from your metabolic team',
    'Your baby with MSUD is developing a minor illness and you need guidance on the sick-day protocol',
  ],
  whenToActNow: [
    'Your newborn has a positive MSUD screen and you have not yet been contacted by a metabolic specialist — call your pediatrician immediately, as MSUD can cause a life-threatening metabolic crisis within days',
    'Your baby with MSUD is vomiting, refusing to eat, unusually sleepy, or has a sweet maple syrup smell — these may indicate a metabolic crisis requiring emergency treatment',
    'Your baby with MSUD has any change in alertness, abnormal movements, or difficulty breathing — go to the emergency room immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'newborn-metabolic-screening-results', 'baby-metabolic-disorder-signs'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Maple Syrup Urine Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/maple-syrup-urine-disease/',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Maple Syrup Urine Disease. NORD, 2023.',
      url: 'https://rarediseases.org/rare-diseases/maple-syrup-urine-disease/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Newborn Screening Tests for Your Baby. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/find-support/topics/planning-baby/newborn-screening-tests-your-baby',
    },
  ],
};
