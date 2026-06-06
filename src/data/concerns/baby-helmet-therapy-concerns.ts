import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-helmet-therapy-concerns',
  title: 'My Baby Is Getting a Cranial Helmet - Common Concerns',
  category: 'medical',
  searchTerms: [
    'baby cranial helmet worries',
    'baby helmet therapy concerns',
    'is helmet therapy safe baby',
    'baby helmet side effects',
    'baby uncomfortable in helmet',
    'baby helmet skin irritation',
    'how long baby wear helmet',
    'baby helmet therapy cost',
    'baby helmet adjustment',
    'helmet therapy does it work',
  ],
  quickAnswer:
    'Cranial helmets are safe and well-tolerated by most babies. Common concerns include skin irritation, sweating, smell, and worry about developmental effects - all of which are manageable. The helmet is custom-fitted and worn 23 hours per day (removed for bathing). Most treatment courses last 2-4 months. Side effects are minor: mild skin redness, occasional rash, and increased scalp sweating. Babies typically adjust within a few days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Helmets are rarely fitted before 3-4 months of age. If your very young baby has been recommended for early helmet evaluation, it is usually because of more severe asymmetry. During this period, focus on repositioning, tummy time, and treating any underlying torticollis while preparing for potential helmet therapy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is the optimal time to start helmet therapy. Your baby will have a 3D scan of their head, and a custom helmet is fabricated. Initial wearing begins with shorter periods to allow adjustment, then quickly progresses to 23 hours per day. Most babies adapt within 3-5 days. The helmet should not be painful. If your baby seems distressed beyond the first few days, check the fit.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Helmet therapy at this age is still effective but may take longer. Common concerns include: will the helmet delay crawling (no, it does not), will it hurt my baby (no, properly fitted helmets are painless), and will it cause developmental delays (no, studies show no impact on development). Clean the helmet daily with rubbing alcohol and soap to manage odor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your child is completing helmet therapy at this age, follow-up measurements will track progress. Once the desired correction is achieved or growth slows enough that further improvement is unlikely, the helmet is discontinued. Many families feel emotional about both starting and ending helmet therapy. Know that you are helping your baby\'s head develop optimally.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Helmet therapy is not used at this age. If you have concerns about your older toddler\'s head shape, discuss with your pediatrician. Most asymmetry continues to improve gradually with growth and is increasingly hidden by hair.',
    },
  ],
  whenNormal: [
    'Mild skin redness at pressure points that fades within 30 minutes of helmet removal',
    'Increased scalp sweating during the first few weeks of wear',
    'Your baby fussing for the first 2-3 days but then adjusting to the helmet',
    'Mild smell from the helmet that is managed with daily cleaning',
  ],
  whenToMention: [
    'Persistent skin redness or rash that does not resolve between cleanings',
    'Your baby seems to have pain or significant discomfort wearing the helmet',
    'You are concerned the helmet fit has changed as your baby grows',
  ],
  whenToActNow: [
    'Skin breakdown, blistering, or open sores develop under the helmet',
    'Your baby develops signs of infection at a pressure area: pus, increasing redness, warmth, or fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-plagiocephaly-helmet-therapy',
    'baby-torticollis-vs-head-tilt',
    'baby-cranial-osteopathy-evidence',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Positional Skull Deformities. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Positional-Skull-Deformities-and-Torticollis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Helmet treatment in infants with positional skull deformities.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24796399/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Plagiocephaly treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/plagiocephaly/diagnosis-treatment/drc-20361034',
    },
  ],
};
