import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'auditory-neuropathy-spectrum-disorder',
  title: 'My Baby Has Auditory Neuropathy — What Does This Mean?',
  category: 'medical',
  searchTerms: [
    'auditory neuropathy spectrum disorder baby',
    'ANSD baby',
    'auditory neuropathy newborn hearing screen',
    'baby failed ABR passed OAE',
    'auditory neuropathy hearing loss baby',
    'auditory neuropathy cochlear implant',
    'NICU hearing loss auditory neuropathy',
    'auditory dyssynchrony baby',
    'auditory neuropathy prognosis',
    'auditory neuropathy treatment baby',
  ],
  quickAnswer:
    'Auditory neuropathy spectrum disorder (ANSD) is a hearing condition where the inner ear (cochlea) detects sound normally, but the signal is not transmitted properly to the brain via the auditory nerve. This means your baby may pass one type of hearing test (OAE) but fail another (ABR). ANSD affects about 10-15% of children diagnosed with permanent hearing loss. The hearing ability of children with ANSD is highly variable — some hear almost normally, others have severe hearing loss, and hearing can fluctuate. Early intervention with hearing aids or cochlear implants, combined with speech therapy, gives the best outcomes.',
  byAge: [
    {
      ageRange: '0-3 months (diagnosis)',
      context:
        'ANSD is often identified through newborn hearing screening, particularly in NICU babies (who are at higher risk). The classic finding is present otoacoustic emissions (OAEs) but absent or abnormal auditory brainstem response (ABR). Risk factors include prematurity, hyperbilirubinemia, hypoxia, and certain genetic conditions. After diagnosis, your baby will need regular audiologic monitoring because hearing levels in ANSD can change over time — sometimes improving, sometimes worsening.',
    },
    {
      ageRange: '3-6 months',
      context:
        'During this period, the audiologist will work to understand how your baby perceives sound. Behavioral observation is added to objective tests. Hearing aids may be trialed, even though predicting benefit is harder with ANSD than with typical hearing loss. Visual communication strategies (sign language, visual cues) are recommended to begin early, regardless of whether hearing aids are used, to support language development during this critical window.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Language development is closely monitored. If your baby is not showing expected auditory responses or language development despite hearing aid use, cochlear implant evaluation may be recommended. Cochlear implants can be very effective for ANSD because they bypass the auditory nerve\'s synchrony problem and directly stimulate nerve fibers. Early cochlear implantation (before 12 months when possible) yields the best speech outcomes.',
    },
    {
      ageRange: '1 year+',
      context:
        'Children with ANSD who receive appropriate intervention (hearing aids, cochlear implants, and/or sign language) can develop strong communication skills. Some children with ANSD have fluctuating hearing — they may hear better some days than others, which can be confusing for parents and caregivers. Close collaboration between your audiologist, speech-language pathologist, and early intervention team is essential. Some forms of ANSD improve spontaneously, particularly in premature babies.',
    },
  ],
  whenNormal: [
    'Your baby has been diagnosed with ANSD and is receiving regular audiological monitoring',
    'Your baby is receiving early intervention services and making communication progress',
    'Your baby\'s ANSD appears to be improving on follow-up testing — this can happen, especially in premature babies',
  ],
  whenToMention: [
    'Your baby does not seem to respond to your voice or environmental sounds',
    'Your baby is not babbling or showing expected communication development',
    'You notice your baby\'s hearing seems to fluctuate — some days better, some worse',
    'You have questions about hearing aids vs. cochlear implants for your child',
  ],
  whenToActNow: [
    'Your baby suddenly stops responding to sound completely — seek urgent audiologic and medical evaluation',
    'You are concerned that your baby is not receiving adequate communication support and early intervention — contact your state\'s early intervention program or Hands & Voices organization',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-cmv-hearing-loss',
    'infant-sensory-processing-red-flags',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Auditory Neuropathy.',
      url: 'https://www.nidcd.nih.gov/health/auditory-neuropathy',
    },
    {
      org: 'Hands & Voices',
      citation:
        'Hands & Voices. Auditory Neuropathy Spectrum Disorder.',
      url: 'https://www.handsandvoices.org/resources/ANSD.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/144/4/e20193062/37055',
    },
  ],
};
