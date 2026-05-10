import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'noise-induced-hearing-damage-baby',
  title: 'Noise-Induced Hearing Damage',
  category: 'medical',
  searchTerms: [
    'loud noise damage baby ears',
    'noise induced hearing loss baby',
    'baby exposed to loud music',
    'fireworks damage baby hearing',
    'concert damage baby ears',
    'how loud is too loud for baby',
    'baby hearing protection',
    'loud toys damage baby hearing',
    'noise exposure infant ears',
  ],
  quickAnswer:
    'Babies and toddlers are vulnerable to noise-induced hearing damage because their ear canals are smaller (which can amplify sound) and the delicate structures of the inner ear are still developing. Sounds above 85 decibels (dB) with prolonged exposure can cause permanent damage. Many common situations  -  concerts, fireworks, power tools, loud toys, and even some restaurants  -  can reach harmful levels. Unlike many other causes of hearing loss, noise-induced damage is entirely preventable. Use hearing protection for your baby in loud environments and keep toy volume in check.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have very sensitive hearing and should be protected from sudden loud sounds and sustained noise above 60-65 dB (about the level of normal conversation). NICUs carefully monitor noise levels because premature and newborn babies are especially vulnerable. At home, avoid placing your baby near loud appliances, television at high volumes, or in environments with sustained loud noise. If you must be in a loud setting, infant earmuffs designed for newborns can provide protection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby becomes more alert and engaged, they may be brought to more social events. Be mindful of noise levels at restaurants, family gatherings, and sporting events. Baby-sized noise-reducing earmuffs (rated for 0-2 years) are available and should be used in environments where you need to raise your voice to be heard. A good rule: if you can\'t have a normal conversation at arm\'s length, it is too loud for your baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are increasingly mobile and curious. Check the volume of sound-making toys  -  many exceed 85 dB when held close to the ear. You can test toys by holding them near your own ear; if they seem uncomfortably loud to you, they are too loud for your baby. Use tape over speaker holes to reduce volume if needed. Continue using earmuffs at fireworks displays, concerts, or any event where noise is sustained and loud.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers love loud toys, music, and noisy environments. Set limits on volume for electronic devices and toys. When attending events like parades, sporting events, or fireworks, ensure your toddler wears properly fitting hearing protection. Noise-induced hearing loss is cumulative and irreversible  -  each exposure adds to lifetime risk. Establish healthy hearing habits now, including keeping headphone volume low if your toddler uses any audio devices.',
    },
  ],
  whenNormal: [
    'Your baby startles at a sudden loud sound but recovers quickly and continues to respond normally to sounds afterward  -  the startle reflex is protective.',
    'Your baby was briefly exposed to a moderately loud environment (like a restaurant) and shows no change in hearing behavior.',
    'Your toddler cries or covers their ears in loud environments  -  this is a healthy protective response that should be respected.',
    'Your baby seems sensitive to sounds that others find normal  -  some babies have lower thresholds for noise discomfort, which is a variation of normal.',
  ],
  whenToMention: [
    'Your baby was exposed to a very loud event (fireworks, concert, gunshot nearby) without hearing protection and you want to ensure their hearing is intact.',
    'Your toddler frequently uses headphones or earbuds and you are unsure whether the volume is at a safe level.',
    'You notice your baby or toddler seems less responsive to sounds after a loud exposure event.',
  ],
  whenToActNow: [
    'Your baby was exposed to an extremely loud noise (explosion, gunfire at close range, or sustained concert-level noise without protection) and now seems less responsive to sounds or cries inconsolably touching their ears  -  seek a hearing evaluation promptly.',
    'Your toddler has a noticeable change in hearing (not responding to name, needing higher TV volume, saying "what?" more often) after a known loud noise exposure  -  immediate audiological evaluation is warranted.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Loud Noise Can Cause Hearing Loss.',
      url: 'https://www.cdc.gov/hearing-loss-children/noise/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Noise-Induced Hearing Loss.',
      url: 'https://www.nidcd.nih.gov/health/noise-induced-hearing-loss',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Deafness and Hearing Loss: Safe Listening.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss',
    },
  ],
};
