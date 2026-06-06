import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-turning-pages',
  title: 'My Baby Can\'t Turn Book Pages',
  category: 'physical',
  searchTerms: ['baby can\'t turn pages', 'baby not turning book pages', 'when can baby turn pages', 'toddler page turning milestone', 'baby book page turning', 'baby fine motor pages', 'baby can\'t flip pages', 'toddler can\'t turn one page', 'page turning skill baby', 'book skills toddler'],
  quickAnswer: 'Turning board book pages typically develops around 12-15 months, though it is clumsy at first with multiple pages turning at once. Turning single pages of a thin paper book does not develop until around 2-3 years. If your child enjoys books but cannot turn thick board book pages by 15 months, mention it at your next visit.',
  byAge: [
    { ageRange: '6-9 months', context: 'Babies at this age enjoy looking at books and may grab at pages, but purposeful page turning is not expected. Your baby may crumple or mouth pages, which is normal exploration. Board books are ideal at this stage.' },
    { ageRange: '9-12 months', context: 'Some babies start to turn board book pages with help. Others are still more interested in chewing the book. Both are normal. Page turning requires thumb-finger coordination that is still developing.' },
    { ageRange: '12-18 months', context: 'Most toddlers can turn thick board book pages, though they often flip several pages at once. If your toddler shows no interest or ability in page turning by 15-16 months, try demonstrating and encouraging. If they still cannot by 18 months, mention it to your pediatrician.' },
    { ageRange: '18-36 months', context: 'Page turning becomes more refined, progressing from multiple board book pages to eventually turning single thin pages around age 2-3. If your child cannot turn any pages by 18 months, occupational therapy may help develop the fine motor skills needed.' },
  ],
  whenNormal: ['Your baby is under 12 months and cannot turn pages independently.', 'Your toddler turns multiple pages at once rather than one at a time.', 'Your child turns board book pages but not thin paper pages.', 'Page turning is clumsy but improving.'],
  whenToMention: ['Your child is over 18 months and cannot turn board book pages.', 'Your child shows no interest in manipulating books at all.', 'Your child has difficulty with other fine motor tasks as well.'],
  whenToActNow: ['Your child has lost fine motor skills they previously had.', 'Your child\'s hands seem weak or unable to grasp effectively.'],
  relatedMilestones: ['fine-motor-pincer', 'fine-motor-manipulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['fine-motor-delay-general', 'delayed-fine-motor', 'toddler-not-scribbling'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Case-Smith J. Fine Motor Outcomes in Preschool Children. Am J Occup Ther. 2000;54(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/10906126/' },
  ],
};
