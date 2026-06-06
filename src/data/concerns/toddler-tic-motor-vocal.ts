import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-tic-motor-vocal', title: 'Tics in Toddlers: Motor and Vocal Tics', category: 'behavior',
  searchTerms: ['toddler tics','toddler motor tic','toddler vocal tic','child eye blinking tic','toddler repetitive movement','toddler throat clearing tic','toddler facial tic','toddler involuntary movement','toddler tic disorder','child tic normal or concerning'],
  quickAnswer: 'Tics - sudden, repetitive movements or sounds - are relatively common in children, affecting up to 10-20% of school-age children at some point. Common motor tics include eye blinking, shoulder shrugging, or facial grimacing. Common vocal tics include throat clearing, sniffing, or grunting. Most childhood tics are transient (lasting less than a year) and resolve on their own without treatment.',
  byAge: [
    { ageRange: '2-3 years', context: 'Tics are uncommon before age 3 but can occur. Repetitive movements in toddlers are more often self-stimulatory behaviors (rocking, hand flapping during excitement) rather than true tics. If you notice a new repetitive movement, observe without drawing attention to it. Many resolve on their own.' },
    { ageRange: '3-5 years', context: 'Simple tics may first appear in this age range. Eye blinking, nose scrunching, or throat clearing are common first tics. Tics often worsen with stress, excitement, or fatigue and improve during focused activities. The most important thing: do not draw attention to the tic, as this can increase it.' },
    { ageRange: '5-7 years', context: 'This is the most common age for tic onset. Most tics at this age are transient - they come and go over weeks to months. New tics may replace old ones. If tics have persisted for over a year and include both motor and vocal tics, your pediatrician may evaluate for Tourette syndrome.' },
    { ageRange: '7-12 years', context: 'Tic severity often peaks around age 10-12 and then decreases. About 50-80% of children with tics see significant improvement by adulthood. If tics are causing distress, social difficulties, or interfering with functioning, treatment options are available.' },
  ],
  whenNormal: ['A simple tic that comes and goes over a few weeks','Your child is not distressed by the tic','The tic does not interfere with activities','Tics worsen with stress and improve with calm focus'],
  whenToMention: ['Tics have persisted for more than a few months','Multiple tics (motor and vocal) are present','Tics are increasing in frequency or intensity','Your child is distressed or embarrassed by the tics'],
  whenToActNow: ['Sudden onset of severe tics with other neurological symptoms','Tics involve self-injurious movements','Tics began after a strep infection (could indicate PANDAS)'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tics and Tourette Syndrome. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Tics-Tourette-Syndrome.aspx' },
    { org: 'NIH', citation: 'Tourette Association of America. Understanding Tics. National Institutes of Health.', url: 'https://www.ninds.nih.gov/health-information/disorders/tourette-syndrome' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Tourette Syndrome.', url: 'https://www.cdc.gov/ncbddd/tourette/index.html' },
  ],
  relatedConcernSlugs: ['toddler-ocd-like-behaviors','toddler-nail-biting-habit','toddler-anxiety-signs-early','toddler-nose-picking-habit'],
};
