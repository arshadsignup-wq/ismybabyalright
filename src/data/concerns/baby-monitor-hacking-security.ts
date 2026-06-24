import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-monitor-hacking-security',
  title: 'Baby Monitor Hacking - How to Protect Your Family',
  category: 'behavior',
  searchTerms: [
    'baby monitor hacked',
    'baby monitor hacking',
    'someone hacked our baby monitor',
    'baby monitor security',
    'wifi baby monitor safe',
    'baby monitor camera hacked voice',
    'can baby monitors be hacked',
    'baby monitor stranger talking',
    'baby monitor cybersecurity',
    'secure baby monitor setup',
    'baby monitor privacy',
    'how to prevent baby monitor hacking',
    'smart baby monitor danger',
    'baby monitor false alarm Owlet',
    'IoT baby monitor security',
  ],
  quickAnswer:
    'Baby monitor hacking is real and documented - the FBI has investigated multiple cases where strangers gained access to WiFi-connected baby monitors, sometimes speaking to infants or silently watching. Most hacks exploit weak passwords, outdated firmware, or unsecured WiFi networks. You can significantly reduce risk by using strong unique passwords, enabling two-factor authentication, keeping firmware updated, and choosing monitors from reputable brands with strong security track records.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Most parents use baby monitors most intensively during the first year. If you use a WiFi-connected camera monitor, take these steps immediately: change the default password to something strong and unique, enable two-factor authentication if available, update the monitor\'s firmware to the latest version, use WPA3 encryption on your WiFi router, and create a separate guest network for IoT devices. Consider whether you truly need remote viewing capability - a non-WiFi audio or video monitor cannot be hacked remotely.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As toddlers become more aware of their surroundings, a hacked monitor becomes more distressing - children this age can be frightened by unfamiliar voices. Signs that your monitor may have been compromised include: the camera moving on its own, unfamiliar voices coming from the speaker, changes to settings you did not make, or the indicator light turning on when you have not opened the app. If you notice any of these, unplug the monitor immediately, change all passwords, and contact the manufacturer.',
    },
  ],
  whenNormal: [
    'You use a baby monitor with a strong unique password, updated firmware, and a secure WiFi network.',
    'You chose a non-WiFi (DECT or FHSS) monitor that communicates on a closed frequency and cannot be accessed via the internet.',
    'You feel anxious about monitor security after reading news stories - taking basic security steps provides strong protection.',
  ],
  whenToMention: [
    'You suspect your baby monitor was accessed by an unauthorized person - document what happened and report it to local law enforcement.',
    'You want recommendations on the most secure baby monitor options.',
  ],
  whenToActNow: [
    'You heard an unfamiliar voice coming from your baby monitor - unplug the device immediately, check on your baby, and contact law enforcement.',
    'Your monitor camera is moving on its own or pointing in directions you did not set.',
    'You receive notifications that your monitor account was accessed from an unfamiliar device or location.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sharing-baby-photos-online-safety',
    'sleep-safe-environment-checklist',
  ],
  sources: [
    {
      org: 'FBI',
      citation: 'FBI - Securing Your Internet-Connected Devices Including Baby Monitors',
      url: 'https://www.ic3.gov/Media/Y2019/PSA190917',
    },
    {
      org: 'FTC',
      citation: 'FTC - Securing Your Home Network and Internet-Connected Devices',
      url: 'https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network',
    },
    {
      org: 'Consumer Reports',
      citation: 'Consumer Reports - Baby Monitor Security Testing and Recommendations',
      url: 'https://www.consumerreports.org/electronics/wireless-security-cameras/how-to-secure-your-baby-monitor-a1029853584/',
    },
  ],
};
