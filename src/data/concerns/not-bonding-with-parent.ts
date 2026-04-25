import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-bonding-with-parent',
  title: 'I\'m Worried My Baby Isn\'t Bonding with Me',
  category: 'behavior',
  searchTerms: [
    'baby not bonding with me',
    'I don\'t feel bonded to my baby',
    'baby doesn\'t seem attached to me',
    'baby doesn\'t look at me',
    'baby won\'t cuddle with me',
    'I feel like my baby doesn\'t love me',
    'delayed bonding with baby',
    'baby prefers other people over me',
    'is it normal to not feel bonded to baby',
    'bonding with baby after difficult birth',
  ],
  quickAnswer:
    'Bonding is not always instant, and that is completely normal. Many parents  -  particularly after difficult births, postpartum mood changes, or NICU stays  -  need time to develop a strong connection with their baby. Bonding is a process that builds over weeks and months through everyday caregiving, not a single magical moment. If you are caring for your baby, you are bonding, even if it does not feel like it yet.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many parents expect to feel an overwhelming rush of love at birth, but studies show that up to 20% of mothers and an even higher percentage of fathers do not feel instantly bonded. This is normal and does not mean anything is wrong. Newborns show bonding through quieting when held, turning toward your voice, and eventually making eye contact. These subtle signs are easy to miss when you are exhausted and overwhelmed. Bonding builds through every feed, every diaper change, and every moment you hold your baby close.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-6 months, most babies begin showing clear signs of attachment  -  smiling at you, making eye contact, cooing during interactions, and calming more easily in your arms than anyone else\'s. If you still feel disconnected from your baby at this point, it does not mean the bond is broken  -  but it is a good time to talk to your doctor about how you are feeling. Postpartum depression and anxiety can interfere with bonding, and both are very treatable.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most babies show strong attachment to their primary caregivers through separation anxiety, reaching for you, and preferring you for comfort. If your baby does not seem to show any preference for you  -  seeming equally content with any adult or showing no distress when you leave  -  it is worth discussing with your pediatrician. In most cases, the bond is stronger than you realize, but occasionally this pattern warrants further evaluation.',
    },
    {
      ageRange: '12+ months',
      context:
        'By 12 months and beyond, most children have a clearly established attachment to their primary caregivers. If you are still struggling with feelings of disconnection, know that it is never too late to strengthen the bond. Responsive parenting  -  following your child\'s cues, playing together, and being emotionally available  -  builds secure attachment at any stage. If concerns persist on either side (yours or your child\'s), your pediatrician can help determine next steps.',
    },
  ],
  whenNormal: [
    'You did not feel an instant bond at birth  -  research shows this is common and does not predict the quality of your long-term relationship',
    'Your baby seems to prefer the other parent sometimes  -  babies often go through phases of preference, and this does not mean your bond is weaker',
    'Bonding felt harder after a traumatic birth, NICU stay, or period of separation  -  these situations commonly delay but do not prevent bonding',
    'You love your baby and care for them but do not always feel the intense emotional connection you expected',
  ],
  whenToMention: [
    'You have been feeling disconnected, numb, or resentful toward your baby for several weeks and it is not improving  -  this could indicate postpartum depression or anxiety, both highly treatable',
    'Your baby does not seem to show any preference for familiar people by 7-9 months  -  no separation anxiety, no differential response to caregivers versus strangers',
    'You are having intrusive, unwanted thoughts about your baby that are causing you distress  -  this is a common symptom of postpartum OCD and is very treatable',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby  -  call the Postpartum Support International helpline (1-800-944-4773), call 988, or go to your nearest emergency room',
    'Your baby seems completely indifferent to all people  -  not making eye contact with anyone, not responding to voices, and showing no social engagement by 6 months',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-engagement',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bonding with Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Bonding-with-Your-Baby.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Postpartum Depression. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Understanding-Motherhood-and-Mood-Baby-Blues-and-Beyond.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Building a Strong Bond with Your Baby.',
      url: 'https://www.zerotothree.org/resource/building-a-strong-bond-with-your-baby/',
    },
  ],
};
