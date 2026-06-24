import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-stranger-danger-refusal-everyone',
  title: 'Baby Cries with Everyone Except Parents (Stranger Anxiety)',
  category: 'behavior',
  searchTerms: [
    'baby cries with everyone',
    'baby stranger anxiety extreme',
    'baby only wants mom',
    'baby screams at strangers',
    'baby won\'t go to anyone',
    'baby refuses all relatives',
    'stranger anxiety baby',
    'baby afraid of people',
    'separation anxiety baby extreme',
    'baby clings to parent',
    'baby won\'t let anyone else hold them',
  ],
  quickAnswer:
    'Stranger anxiety is a completely normal developmental stage that typically begins around 6-8 months and can peak between 12-18 months. It shows your baby has developed a healthy attachment to their primary caregivers and can distinguish familiar from unfamiliar faces. While it can be socially awkward and exhausting for parents, it is a sign of healthy cognitive and emotional development. Most children gradually outgrow intense stranger anxiety by 2-3 years.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies are generally comfortable with most people and will happily go to different caregivers. Around 4-6 months, some babies start showing early preferences for familiar faces and may become slightly wary of new people. This is an early sign of object permanence and attachment developing normally. If your very young baby seems extremely distressed by everyone, even primary caregivers, discuss this with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the classic age for stranger anxiety to emerge. Your baby has developed the cognitive ability to remember familiar people and recognize when someone is unfamiliar. They may cry, cling, hide their face, or refuse to be held by anyone but their parents. This is healthy and normal. Help your baby feel safe by staying calm, not forcing interactions, and allowing them to warm up to people at their own pace. Brief separations from parents are normal and important for building independence.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Stranger anxiety may intensify around 12-18 months as separation anxiety peaks. Your toddler may refuse even well-known relatives or cry at daycare drop-off. This is still developmentally normal. To help: maintain consistent routines, practice brief separations, validate their feelings, and give advance warning about transitions. By 2-3 years, most children become more comfortable with new people and situations. If your toddler shows no anxiety around strangers at all (will go with anyone), that can also be worth mentioning to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby starts crying when unfamiliar people approach or try to hold them around 6-12 months.',
    'Your baby clings to you in new environments but warms up after some time.',
    'Your toddler cries at daycare drop-off but calms down shortly after you leave.',
  ],
  whenToMention: [
    'Stranger anxiety is so severe that your baby will not even tolerate familiar grandparents or regular caregivers.',
    'Your child\'s anxiety extends well beyond 3 years and significantly impacts daily functioning.',
    'Your baby shows no stranger anxiety at all and will go with anyone equally (lack of selective attachment).',
  ],
  whenToActNow: [
    'Your baby shows no attachment to any person, including primary caregivers, and seems indifferent to who cares for them.',
    'Your child has extreme anxiety that prevents them from functioning in any social situation, including with familiar people.',
    'Your baby was previously social and suddenly becomes fearful of everyone, which could indicate trauma or abuse.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['attachment-concerns', 'fear-of-bath-baby', 'defiant-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Social and Emotional Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Separation Anxiety. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001542.htm',
    },
  ],
};
