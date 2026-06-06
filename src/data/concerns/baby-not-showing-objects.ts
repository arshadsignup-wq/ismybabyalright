import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-showing-objects',
  title: 'Baby Not Showing Things to Parents',
  category: 'behavior',
  searchTerms: [
    'baby not showing objects', 'baby doesn\'t show me things', 'baby not holding up things',
    'baby not sharing objects', 'when do babies show objects', 'baby doesn\'t display toys',
    'showing milestone baby', 'baby not presenting items', 'baby won\'t show things to parents',
    'joint attention showing objects',
  ],
  quickAnswer:
    'Showing objects to share interest, such as holding up a toy for you to see, typically develops between 10 and 14 months. This is a key joint attention skill that demonstrates your baby wants to share experiences with you. If your child is not showing objects to share by 15 months, mention it to your pediatrician, as it is an important social communication milestone.',
  byAge: [
    { ageRange: '6-9 months', context: 'Babies are beginning to develop joint attention. They may follow your gaze and look at things you point to. Showing objects has not yet developed. They focus primarily on exploring objects themselves.' },
    { ageRange: '9-12 months', context: 'Some babies begin holding up objects to show them to caregivers. This is different from reaching to ask for help. When showing, the baby holds the object up and looks at your face to share the experience.' },
    { ageRange: '12-15 months', context: 'Showing objects is typically well-established. Your baby may bring you a book, hold up a toy, or display a found object with clear excitement about sharing. This skill is closely related to joint attention and pointing.' },
    { ageRange: '15-18 months', context: 'If your child has never shown you objects to share by 15 months, especially alongside limited pointing and reduced eye contact, a developmental screening is recommended. These joint attention skills are important early social communication milestones.' },
    { ageRange: '18-24 months', context: 'Showing objects continues alongside other sharing behaviors. Children bring things to show and tell about. Absence of these sharing behaviors at this age warrants evaluation.' },
  ],
  whenNormal: [
    'Your baby is under 12 months and is not yet holding up objects to show', 'Your baby shows objects to familiar people but not strangers',
    'Your baby shows objects sometimes but not consistently', 'Your baby is beginning to point and show around 12 months',
  ],
  whenToMention: [
    'Your baby is over 15 months and has never held up objects to share interest', 'Your baby explores objects alone without any desire to share the experience with you',
    'Absent showing is combined with limited pointing, reduced eye contact, and not responding to name',
  ],
  whenToActNow: [
    'Your baby shows no joint attention behaviors of any kind by 15 months, including no showing, pointing, or gaze sharing',
    'Your baby had been showing objects and has stopped alongside other skill regression',
  ],
  relatedMilestones: ['joint-attention', 'social-engagement', 'pointing', 'eye-contact'],
  showSelfReferral: true,
  relatedConcernSlugs: ['no-joint-attention', 'not-pointing', 'baby-not-giving-objects'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By One Year.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-1yr.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development: 8 to 12 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-to-12-Months.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Joint Attention Development.', url: 'https://www.zerotothree.org/resource/tuning-in-how-communication-develops/' },
  ],
};
