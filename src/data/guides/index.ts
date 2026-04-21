import type { ConditionGuide } from './types';

const febrileSeizures: ConditionGuide = {
  slug: 'febrile-seizures',
  title: 'Febrile Seizures',
  subtitle:
    'When a fever triggers a seizure — scary to witness, but usually harmless',
  whatHappened:
    'Your child had a febrile seizure, which is a convulsion triggered by a rapid rise in body temperature, most often during a fever from a common illness like a cold or ear infection. Febrile seizures are NOT epilepsy, and they do not mean your child has a seizure disorder. They happen because a young child\'s developing brain is more sensitive to fever. These seizures are the most common type of convulsion in children, occurring in about 2–5% of children between 6 months and 5 years of age. A simple febrile seizure typically lasts less than 15 minutes, involves the whole body (generalized shaking), and happens only once in a 24-hour period.',
  keyFacts: [
    'Febrile seizures affect 2–5% of children between 6 months and 5 years old — they are common.',
    'They are caused by fever, not by the illness itself. Even a low-grade fever can trigger one if the temperature rises quickly.',
    'Simple febrile seizures (lasting under 15 minutes) do not cause brain damage, developmental delays, or epilepsy.',
    'About 1 in 3 children (roughly 30%) who have one febrile seizure will have another one during a future illness with fever.',
    'The risk of developing epilepsy after simple febrile seizures is only slightly higher than in the general population (about 1–2%).',
    'Febrile seizures tend to run in families. If a parent or sibling had them, your child may be more likely to have one.',
  ],
  whatToExpect: [
    'Your child may be sleepy, confused, or irritable for a short time after the seizure. This is normal and is called the postictal period.',
    'Your pediatrician will likely examine your child to identify the cause of the fever (such as an ear infection or virus), not the seizure itself.',
    'In most cases, no further testing (EEG, brain imaging) is needed after a simple febrile seizure.',
    'Your doctor will probably not prescribe daily anti-seizure medication, since the risks of medication outweigh the benefits for simple febrile seizures.',
    'If your child has another fever in the future, you may see another seizure — this does not mean something is getting worse.',
  ],
  whenToWorry: [
    'Call 911 if the seizure lasts longer than 5 minutes.',
    'Call 911 if your child has trouble breathing, turns blue, or does not start to recover within a few minutes after the seizure stops.',
    'Call 911 if a second seizure occurs within the same 24-hour period.',
    'See your doctor the same day if this is your child\'s first seizure of any kind.',
    'See your doctor if the seizure involved only one side of the body (focal seizure), as this may need further evaluation.',
    'See your doctor if your child is under 6 months old or over 5 years old, as seizures in these age groups are less commonly simple febrile seizures.',
  ],
  actionPlan: [
    'During a seizure: place your child on their side on a safe surface. Do NOT put anything in their mouth. Time the seizure.',
    'After the seizure: keep your child comfortable and monitor their breathing. They will likely be drowsy — this is expected.',
    'Treat the underlying fever with age-appropriate acetaminophen or ibuprofen (ibuprofen only for children 6 months and older). This helps comfort but does not prevent future febrile seizures.',
    'For future fevers: stay calm. You now know what a febrile seizure looks like. Have a plan (timer, safe surface) and know when to call 911 (seizure over 5 minutes).',
    'Talk to your pediatrician about whether a rescue medication (such as rectal diazepam) should be prescribed to have on hand, especially if your child has a history of prolonged seizures.',
    'Let caregivers, daycare providers, and family members know what to do if a seizure occurs while your child is in their care.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011;127(2):389-394.',
      url: 'https://publications.aap.org/pediatrics/article/127/2/389/65074',
    },
    {
      org: 'National Institute of Neurological Disorders and Stroke',
      citation:
        'Febrile Seizures Fact Sheet. National Institutes of Health.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/febrile-seizures',
    },
    {
      org: 'Centers for Disease Control and Prevention',
      citation: 'Seizures and Epilepsy: Information for Parents.',
      url: 'https://www.cdc.gov/epilepsy/about/index.html',
    },
  ],
};

const plagiocephaly: ConditionGuide = {
  slug: 'plagiocephaly',
  title: 'Plagiocephaly (Flat Head)',
  subtitle:
    'A common and usually cosmetic condition with a clear path forward',
  whatHappened:
    'Your baby has been diagnosed with plagiocephaly, which means one area of the head has become flattened. This most often happens because babies spend a lot of time on their backs (as they should — back sleeping prevents SIDS). The pressure from lying in one position causes the soft, malleable skull bones to flatten. This is called positional or deformational plagiocephaly, and it is extremely common, affecting up to 47% of infants at some point. It is almost always cosmetic and does not affect brain development. In rare cases, a flat-looking head can be caused by craniosynostosis, where skull bones fuse too early — your pediatrician can tell the difference with a physical exam.',
  keyFacts: [
    'Positional plagiocephaly is very common. Studies show it affects up to 47% of babies at 7–12 weeks of age, though most cases are mild.',
    'It is cosmetic. Positional plagiocephaly does not put pressure on the brain and does not cause developmental problems.',
    'The difference between positional plagiocephaly and craniosynostosis is important. Your pediatrician can usually tell them apart by examining your baby\'s head shape and feeling the sutures (joints between skull bones).',
    'Craniosynostosis is rare (about 1 in 2,000–2,500 births) and requires surgical evaluation. Positional plagiocephaly does not.',
    'Helmets (cranial orthoses) work best when started between 4 and 12 months of age, during the period of fastest head growth.',
    'Many mild to moderate cases improve on their own with repositioning, especially once a baby starts sitting up independently.',
  ],
  whatToExpect: [
    'Your pediatrician may refer you to a specialist (pediatric neurosurgeon or craniofacial clinic) to confirm the diagnosis and rule out craniosynostosis.',
    'If the flattening is mild, your doctor will likely recommend repositioning strategies and monitoring over time.',
    'If the flattening is moderate to severe and your baby is in the 4–12 month window, a helmet may be recommended. Helmets are worn 23 hours per day for several months.',
    'Head shape continues to improve as your child grows, hair comes in, and the skull rounds out. By age 2–3, mild flattening is often not noticeable.',
    'You will not have done anything wrong. The "Back to Sleep" campaign saves lives. Flat spots are a manageable trade-off for safe sleep.',
  ],
  whenToWorry: [
    'If you notice a ridge along any of the suture lines on your baby\'s head, mention it to your pediatrician — this can be a sign of craniosynostosis.',
    'If the flattening is getting worse despite repositioning efforts, ask about a helmet evaluation sooner rather than later, since the treatment window is time-sensitive.',
    'If your baby strongly prefers turning their head to one side and resists looking the other way, they may have torticollis (tight neck muscles), which often accompanies plagiocephaly and benefits from physical therapy.',
    'If your baby\'s forehead or face appears asymmetric (one side bulging forward), bring this up with your doctor.',
  ],
  actionPlan: [
    'Increase supervised tummy time when your baby is awake. Aim for 30–60 minutes of total tummy time per day, spread across multiple sessions. This strengthens neck muscles and reduces time spent on the flat spot.',
    'Alternate the direction your baby faces in the crib. Babies tend to look toward the room or doorway, so switch which end of the crib the head is at.',
    'During feeding, alternate which arm you hold your baby in to encourage head turning in both directions.',
    'Limit time in car seats, bouncers, and swings when your baby is not in a vehicle. These all put pressure on the back of the head.',
    'If torticollis is present, ask for a referral to pediatric physical therapy. Stretching exercises can improve neck range of motion, which helps the head shape improve.',
    'If a helmet is recommended, find a certified orthotist who specializes in pediatric cranial orthoses. The earlier within the 4–12 month window you start, the better the results.',
    'Continue safe sleep practices. Always place your baby on their back to sleep — head shape is not a reason to change sleep position.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Laughlin J, Luerssen TG, Dias MS; Committee on Practice and Ambulatory Medicine, Section on Neurological Surgery. Prevention and management of positional skull deformities in infants. Pediatrics. 2011;128(6):1236-1241.',
      url: 'https://publications.aap.org/pediatrics/article/128/6/1236/30906',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Task Force on Sudden Infant Death Syndrome. SIDS and other sleep-related infant deaths: Updated 2016 recommendations for a safe infant sleeping environment. Pediatrics. 2016;138(5):e20162938.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162938/60309',
    },
    {
      org: 'Centers for Disease Control and Prevention',
      citation:
        'Safe Sleep for Babies. CDC Infant Health.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};

const failureToThrive: ConditionGuide = {
  slug: 'failure-to-thrive',
  title: 'Failure to Thrive (Growth Faltering)',
  subtitle:
    'When weight gain slows — understanding what it means and what you can do',
  whatHappened:
    'Your child has been identified as having "failure to thrive" (FTT), a term doctors use when a child\'s weight gain is significantly slower than expected for their age and sex, or when they are crossing downward across percentile lines on the growth chart. This is not a disease — it is a description of a growth pattern that signals something may need attention. The term can feel alarming, but it does not mean you have failed as a parent. Most cases of growth faltering are caused by straightforward issues like feeding difficulties, a picky eating phase, or a recent illness, and they can be addressed with the right support.',
  keyFacts: [
    'Failure to thrive is defined as weight below the 2nd percentile for age, or a drop across two or more major percentile lines on the growth chart over time.',
    'It is a sign, not a diagnosis. The important next step is figuring out why growth has slowed.',
    'The most common cause is inadequate caloric intake — meaning the child is simply not taking in enough calories, often for fixable reasons (feeding technique, food refusal, formula mixing errors, breastfeeding challenges).',
    'Organic (medical) causes account for fewer than 5% of FTT cases. These include conditions like gastroesophageal reflux, food allergies, celiac disease, or other chronic illnesses.',
    'Most children with growth faltering catch up with appropriate intervention. Permanent effects are uncommon when the issue is identified and addressed early.',
    'Growth charts use population data. Some healthy children naturally track along lower percentiles — what matters is the pattern over time, not a single measurement.',
  ],
  whatToExpect: [
    'Your pediatrician will review your child\'s growth chart carefully, looking at the trend over weeks and months rather than any single data point.',
    'You will likely be asked detailed questions about feeding: what, how much, and how often your child eats. Try not to feel judged — these questions help identify simple fixes.',
    'Your doctor may order basic labs (blood count, metabolic panel, thyroid function) to rule out underlying medical causes, though often no labs are needed.',
    'A dietitian or lactation consultant may be recommended to help optimize your child\'s caloric intake.',
    'You will likely have more frequent weight checks (every 1–2 weeks initially) to monitor progress. This is a good sign — it means your care team is paying close attention.',
  ],
  whenToWorry: [
    'If your child is also losing developmental milestones (not just weight), let your doctor know immediately — this combination requires urgent evaluation.',
    'If your child is persistently refusing to eat, gagging, or vomiting with most feeds, a feeding evaluation (occupational therapy or speech-language pathology) may be needed.',
    'If you notice blood in the stool, persistent diarrhea, or significant vomiting, report these to your doctor as they may point to a medical cause.',
    'If your child seems excessively tired, weak, or has a distended abdomen, seek medical attention the same day.',
    'If you are feeling overwhelmed, anxious, or blamed, tell your healthcare team. Your mental health matters, and stressed parents need support too.',
  ],
  actionPlan: [
    'Keep a food diary for 3–5 days, writing down everything your child eats and drinks, including amounts and times. This gives your doctor valuable data.',
    'Offer calorie-dense foods: avocado, nut butters (if age-appropriate and no allergy), whole-milk yogurt, cheese, olive oil added to foods, and fortified cereals.',
    'For formula-fed infants, double-check that formula is being mixed correctly. Even small errors in preparation can significantly affect calorie delivery.',
    'For breastfed infants, consider a weighted feed with a lactation consultant to assess milk transfer.',
    'Offer meals and snacks on a consistent schedule (every 2–3 hours for infants, every 3–4 hours for toddlers). Avoid grazing, which can reduce appetite at mealtimes.',
    'Minimize distractions during meals. Turn off screens, sit together, and make mealtimes calm and positive — avoid pressuring or forcing food.',
    'Attend all follow-up weight checks. Consistent monitoring is the best way to know whether the plan is working.',
    'Ask your doctor: "What specific weight gain would you like to see, and over what timeframe?" Having a clear target helps you track progress and reduces anxiety.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Cole SZ, Lanham JS. Failure to thrive: An update. American Family Physician. 2011;83(7):829-834.',
      url: 'https://www.aafp.org/pubs/afp/issues/2011/0401/p829.html',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Larson-Nath C, Biank VF. Clinical review of failure to thrive in pediatric patients. Pediatric Annals. 2016;45(2):e46-e49.',
      url: 'https://journals.healio.com/doi/10.3928/00904481-20160114-01',
    },
    {
      org: 'Centers for Disease Control and Prevention',
      citation:
        'WHO Growth Standards Are Recommended for Use in the U.S. for Infants and Children 0 to 2 Years of Age. CDC Growth Charts.',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
  ],
};

const developmentalRegression: ConditionGuide = {
  slug: 'developmental-regression',
  title: 'Developmental Regression',
  subtitle:
    'When your child loses skills they once had — what to do and why speed matters',
  whatHappened:
    'You have noticed that your child has lost skills they previously had. This is called developmental regression, and it is different from a developmental plateau (where a child pauses in gaining new skills but keeps the ones they have). Regression means a child could do something — say words, walk, make eye contact, use their hands purposefully — and now they can no longer do it. This is always worth investigating. The causes range from benign and temporary (such as stress or a new sibling) to conditions that require prompt medical attention. Regression does not automatically mean something devastating, but it does mean your child deserves a thorough evaluation without delay.',
  keyFacts: [
    'Developmental regression means the loss of previously acquired skills — this is different from a child who is slow to gain new skills (delay) or who pauses in development (plateau).',
    'Regression can affect any domain: language (losing words), motor skills (losing the ability to walk or use hands), social skills (losing eye contact or interest in others), or self-care skills (losing toileting ability).',
    'Language regression between 15 and 24 months, especially loss of words combined with loss of social engagement, is one of the patterns seen in autism spectrum disorder. Early evaluation and intervention lead to better outcomes.',
    'In rare cases, regression can signal neurological conditions such as epileptic encephalopathy (like Landau-Kleffner syndrome), metabolic disorders, or neurodegenerative conditions. These are uncommon but treatable or manageable when caught early.',
    'Temporary and reversible regression can occur with major life stressors (new sibling, move, illness, trauma). This type of regression is usually mild and short-lived.',
    'Documentation is powerful. Your observations as a parent are critical clinical data. Write down what your child could do and when they stopped doing it.',
  ],
  whatToExpect: [
    'Your pediatrician should take a report of regression seriously and may refer you to a developmental pediatrician, pediatric neurologist, or both.',
    'A thorough evaluation may include developmental screening questionnaires, hearing and vision tests, blood work (metabolic and genetic panels), and possibly an EEG or brain MRI.',
    'The timeline for evaluation will depend on the type and severity of regression. Loss of motor skills or regression in multiple domains typically warrants urgent referral.',
    'You may hear the phrase "watchful waiting." If the regression is isolated, mild, and recent, a short observation period may be appropriate — but ask for a specific follow-up date and clear criteria for when to escalate.',
    'If autism spectrum disorder is suspected, an evaluation by a developmental specialist can often happen alongside other testing. Do not wait for one evaluation to finish before starting another.',
  ],
  whenToWorry: [
    'Loss of motor skills (can no longer sit, stand, walk, or use hands as before) is always urgent. Contact your pediatrician immediately or go to the emergency room.',
    'Loss of multiple types of skills at the same time (for example, words AND walking AND social engagement) requires immediate medical evaluation.',
    'Regression accompanied by seizures, unusual eye movements, or episodes of staring or unresponsiveness should be evaluated in the emergency department.',
    'Regression after a period of normal development beyond age 2–3 is less common and should be evaluated promptly by a specialist.',
    'If your pediatrician dismisses your concern about skill loss, advocate clearly: "My child used to do X, and now they cannot. I need this evaluated." You can request a referral or seek a second opinion.',
  ],
  actionPlan: [
    'Document everything. Write down the specific skills your child has lost, approximately when they were last observed, and any changes in behavior, sleep, eating, or responsiveness. Include videos if possible — before-and-after comparisons are valuable to specialists.',
    'Call your pediatrician within 24–48 hours of noticing regression. Use the word "regression" explicitly: "My child has lost skills they previously had. I am seeing regression."',
    'Request referrals to a developmental pediatrician and/or pediatric neurologist. If your pediatrician suggests waiting more than 2–4 weeks to refer, ask why and whether an earlier evaluation is possible.',
    'Contact your state\'s Early Intervention program (for children under 3) or your school district (for children 3 and older) for a free developmental evaluation. You do not need a doctor\'s referral for this, and you can pursue it at the same time as medical evaluation.',
    'If your child is losing language and social skills, request an autism-specific evaluation. Early identification and early behavioral intervention (such as ABA or developmental approaches) produce the best outcomes.',
    'Keep a brief daily log of skills you observe — words used, physical abilities, social behaviors. This ongoing record will help specialists see patterns.',
    'Take care of yourself. Watching your child lose skills is frightening. Reach out to other parents through trusted organizations (such as your local Parent Training and Information Center) and consider support for your own emotional wellbeing.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Lipkin PH, Macias MM; Council on Children with Disabilities, Section on Developmental and Behavioral Pediatrics. Promoting optimal development: Identifying infants and young children with developmental disorders through developmental surveillance and screening. Pediatrics. 2020;145(1):e20193449.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971',
    },
    {
      org: 'Centers for Disease Control and Prevention',
      citation:
        'Learn the Signs. Act Early. Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Hyman SL, Levy SE, Myers SM; Council on Children with Disabilities, Section on Developmental and Behavioral Pediatrics. Identification, evaluation, and management of children with autism spectrum disorder. Pediatrics. 2020;145(1):e20193447.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917',
    },
  ],
};

export const allGuides: ConditionGuide[] = [
  febrileSeizures,
  plagiocephaly,
  failureToThrive,
  developmentalRegression,
];

export function getGuideBySlug(slug: string): ConditionGuide | undefined {
  return allGuides.find((g) => g.slug === slug);
}

export { type ConditionGuide } from './types';
