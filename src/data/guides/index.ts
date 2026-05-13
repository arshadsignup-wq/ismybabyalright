import type { ConditionGuide } from './types';

const febrileSeizures: ConditionGuide = {
  slug: 'febrile-seizures',
  title: 'Febrile Seizures',
  subtitle:
    'When a fever triggers a seizure  -  scary to witness, but usually harmless',
  whatHappened:
    'Your child had a febrile seizure, which is a convulsion triggered by a rapid rise in body temperature, most often during a fever from a common illness like a cold or ear infection. Febrile seizures are NOT epilepsy, and they do not mean your child has a seizure disorder. They happen because a young child\'s developing brain is more sensitive to fever. These seizures are the most common type of convulsion in children, occurring in about 2–5% of children between 6 months and 5 years of age. A simple febrile seizure typically lasts less than 15 minutes, involves the whole body (generalized shaking), and happens only once in a 24-hour period.',
  keyFacts: [
    'Febrile seizures affect 2–5% of children between 6 months and 5 years old  -  they are common.',
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
    'If your child has another fever in the future, you may see another seizure  -  this does not mean something is getting worse.',
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
    'After the seizure: keep your child comfortable and monitor their breathing. They will likely be drowsy  -  this is expected.',
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
    'Your baby has been diagnosed with plagiocephaly, which means one area of the head has become flattened. This most often happens because babies spend a lot of time on their backs (as they should  -  back sleeping prevents SIDS). The pressure from lying in one position causes the soft, malleable skull bones to flatten. This is called positional or deformational plagiocephaly, and it is extremely common, affecting up to 47% of infants at some point. It is almost always cosmetic and does not affect brain development. In rare cases, a flat-looking head can be caused by craniosynostosis, where skull bones fuse too early  -  your pediatrician can tell the difference with a physical exam.',
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
    'If you notice a ridge along any of the suture lines on your baby\'s head, mention it to your pediatrician  -  this can be a sign of craniosynostosis.',
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
    'Continue safe sleep practices. Always place your baby on their back to sleep  -  head shape is not a reason to change sleep position.',
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
    'When weight gain slows  -  understanding what it means and what you can do',
  whatHappened:
    'Your child has been identified as having "failure to thrive" (FTT), a term doctors use when a child\'s weight gain is significantly slower than expected for their age and sex, or when they are crossing downward across percentile lines on the growth chart. This is not a disease  -  it is a description of a growth pattern that signals something may need attention. The term can feel alarming, but it does not mean you have failed as a parent. Most cases of growth faltering are caused by straightforward issues like feeding difficulties, a picky eating phase, or a recent illness, and they can be addressed with the right support.',
  keyFacts: [
    'Failure to thrive is defined as weight below the 2nd percentile for age, or a drop across two or more major percentile lines on the growth chart over time.',
    'It is a sign, not a diagnosis. The important next step is figuring out why growth has slowed.',
    'The most common cause is inadequate caloric intake  -  meaning the child is simply not taking in enough calories, often for fixable reasons (feeding technique, food refusal, formula mixing errors, breastfeeding challenges).',
    'Organic (medical) causes account for fewer than 5% of FTT cases. These include conditions like gastroesophageal reflux, food allergies, celiac disease, or other chronic illnesses.',
    'Most children with growth faltering catch up with appropriate intervention. Permanent effects are uncommon when the issue is identified and addressed early.',
    'Growth charts use population data. Some healthy children naturally track along lower percentiles  -  what matters is the pattern over time, not a single measurement.',
  ],
  whatToExpect: [
    'Your pediatrician will review your child\'s growth chart carefully, looking at the trend over weeks and months rather than any single data point.',
    'You will likely be asked detailed questions about feeding: what, how much, and how often your child eats. Try not to feel judged  -  these questions help identify simple fixes.',
    'Your doctor may order basic labs (blood count, metabolic panel, thyroid function) to rule out underlying medical causes, though often no labs are needed.',
    'A dietitian or lactation consultant may be recommended to help optimize your child\'s caloric intake.',
    'You will likely have more frequent weight checks (every 1–2 weeks initially) to monitor progress. This is a good sign  -  it means your care team is paying close attention.',
  ],
  whenToWorry: [
    'If your child is also losing developmental milestones (not just weight), let your doctor know immediately  -  this combination requires urgent evaluation.',
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
    'Minimize distractions during meals. Turn off screens, sit together, and make mealtimes calm and positive  -  avoid pressuring or forcing food.',
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
    'When your child loses skills they once had  -  what to do and why speed matters',
  whatHappened:
    'You have noticed that your child has lost skills they previously had. This is called developmental regression, and it is different from a developmental plateau (where a child pauses in gaining new skills but keeps the ones they have). Regression means a child could do something  -  say words, walk, make eye contact, use their hands purposefully  -  and now they can no longer do it. This is always worth investigating. The causes range from benign and temporary (such as stress or a new sibling) to conditions that require prompt medical attention. Regression does not automatically mean something devastating, but it does mean your child deserves a thorough evaluation without delay.',
  keyFacts: [
    'Developmental regression means the loss of previously acquired skills  -  this is different from a child who is slow to gain new skills (delay) or who pauses in development (plateau).',
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
    'You may hear the phrase "watchful waiting." If the regression is isolated, mild, and recent, a short observation period may be appropriate  -  but ask for a specific follow-up date and clear criteria for when to escalate.',
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
    'Document everything. Write down the specific skills your child has lost, approximately when they were last observed, and any changes in behavior, sleep, eating, or responsiveness. Include videos if possible  -  before-and-after comparisons are valuable to specialists.',
    'Call your pediatrician within 24–48 hours of noticing regression. Use the word "regression" explicitly: "My child has lost skills they previously had. I am seeing regression."',
    'Request referrals to a developmental pediatrician and/or pediatric neurologist. If your pediatrician suggests waiting more than 2–4 weeks to refer, ask why and whether an earlier evaluation is possible.',
    'Contact your state\'s Early Intervention program (for children under 3) or your school district (for children 3 and older) for a free developmental evaluation. You do not need a doctor\'s referral for this, and you can pursue it at the same time as medical evaluation.',
    'If your child is losing language and social skills, request an autism-specific evaluation. Early identification and early behavioral intervention (such as ABA or developmental approaches) produce the best outcomes.',
    'Keep a brief daily log of skills you observe  -  words used, physical abilities, social behaviors. This ongoing record will help specialists see patterns.',
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

const breastfeedingTroubleshooting: ConditionGuide = {
  slug: 'breastfeeding-troubleshooting',
  title: 'Breastfeeding Troubleshooting Guide',
  subtitle:
    'Common breastfeeding challenges and how to work through them',
  whatHappened:
    'Breastfeeding is often described as "natural," but that does not mean it comes naturally to every mother and baby. Many families encounter significant challenges in the early days and weeks, and these struggles are incredibly common  -  you are not alone, and you are not doing anything wrong. Common breastfeeding problems include difficulty with latch (the way the baby attaches to the breast), concerns about milk supply (whether you are making enough), nipple pain or damage, engorgement (when breasts become overly full, hard, and painful), clogged milk ducts (a firm, tender lump in the breast caused by a blocked duct), mastitis (an infection of the breast tissue that causes flu-like symptoms, redness, and pain), and thrush (a yeast infection that can affect both the nipple and the baby\'s mouth). Each of these issues is common, well-understood, and  -  with the right support  -  almost always resolvable. The fact that breastfeeding is hard does not mean it is not working or that you should give up. It means you deserve help.',
  keyFacts: [
    'In a major study, 92% of new mothers reported at least one breastfeeding concern by the third day postpartum. Early difficulties are the norm, not the exception.',
    'Most breastfeeding problems are solvable with proper support. A trained lactation consultant (IBCLC) can identify and correct latch issues, often in a single visit.',
    'Perceived low milk supply is the most commonly cited reason for stopping breastfeeding, but true insufficient supply is rare. Most mothers produce enough milk when feeding frequency and latch are optimized.',
    'Nipple pain in the first week is common as tissues adjust, but pain that persists beyond the first 1-2 weeks, or pain that is severe, cracking, or bleeding, usually indicates a latch problem or other treatable condition.',
    'Mastitis affects approximately 10-20% of breastfeeding mothers, most commonly in the first 6 weeks. Prompt treatment with continued breastfeeding (or pumping) and, when needed, antibiotics leads to full recovery.',
    'Thrush can pass back and forth between the mother\'s nipple and the baby\'s mouth, so both must be treated simultaneously for the infection to resolve.',
    'The World Health Organization recommends exclusive breastfeeding for the first 6 months, with continued breastfeeding alongside complementary foods up to 2 years or beyond. Any amount of breastfeeding provides benefits.',
  ],
  whatToExpect: [
    'A lactation consultant (IBCLC) will observe a full feeding, assess your baby\'s latch, check for tongue-tie or other oral restrictions, and help you find positioning that works. Many problems improve dramatically after one or two sessions.',
    'If supply is a concern, your provider may recommend a weighted feed (weighing the baby before and after nursing) to measure exactly how much milk the baby is transferring. This replaces guesswork with data.',
    'Improvement timelines vary by issue: latch corrections can show results immediately, supply concerns typically improve within 3-7 days of increased feeding frequency, and mastitis symptoms usually resolve within 48-72 hours of treatment.',
    'Your pediatrician will monitor your baby\'s weight gain closely  -  this is the most reliable indicator that breastfeeding is going well. Expect frequent weight checks in the first few weeks.',
    'You may be advised to supplement temporarily (with pumped milk or formula) while working on the underlying issue. Supplementing is a tool, not a failure  -  it keeps your baby fed while you get support.',
  ],
  whenToWorry: [
    'If you develop a fever over 101F (38.3C), a red and hot area on the breast, or flu-like symptoms (body aches, chills), you may have mastitis. Contact your doctor or midwife within 24 hours  -  antibiotics may be needed.',
    'If your baby is not producing at least 6 wet diapers per day by day 5, or if urine appears dark or concentrated, contact your pediatrician the same day  -  this may indicate insufficient milk intake.',
    'If your baby has lost more than 10% of birth weight by day 3-5, or has not returned to birth weight by 2 weeks of age, seek immediate support from your pediatrician and a lactation consultant.',
    'If you see blood in your baby\'s stool (not related to cracked nipples), or if your baby is lethargic and difficult to wake for feedings, seek medical attention the same day.',
    'If you experience persistent pain (sharp, shooting, or burning) during and between feedings that is not improving, this may indicate thrush, vasospasm, or a latch issue that needs professional evaluation.',
    'If you feel overwhelmed, hopeless, or that breastfeeding is affecting your mental health, tell your provider. Your wellbeing matters as much as the feeding method, and there is no shame in exploring all options.',
  ],
  actionPlan: [
    'Find an International Board Certified Lactation Consultant (IBCLC) as early as possible  -  ideally before you leave the hospital, or within the first week postpartum. Many insurance plans cover lactation support.',
    'For latch issues: ensure your baby opens wide before latching, aim the nipple toward the roof of the baby\'s mouth, and bring the baby to the breast (not the breast to the baby). Pain beyond a brief initial tug is a sign the latch needs adjustment.',
    'For supply concerns: nurse frequently (8-12 times per 24 hours in the newborn period), offer both breasts at each feeding, ensure effective milk removal, and avoid unnecessary supplementation unless medically indicated, as supply is driven by demand.',
    'For engorgement: apply warm compresses or take a warm shower before feeding to help milk flow, hand-express just enough to soften the areola so the baby can latch, and apply cold compresses between feedings to reduce swelling.',
    'For clogged ducts: continue nursing frequently, positioning the baby\'s chin toward the clog if possible, gently massage the area during feeding, and apply warm compresses before nursing. Most clogs resolve within 24-48 hours.',
    'For mastitis: do not stop breastfeeding or pumping  -  continued milk removal is essential. Rest, stay hydrated, and contact your provider about antibiotics if symptoms do not improve within 12-24 hours or if you develop a fever.',
    'For thrush: see your provider for antifungal treatment for both you and your baby. Wash anything that touches the breast or baby\'s mouth in hot water. Thrush often takes 1-2 weeks of consistent treatment to fully resolve.',
    'Join a breastfeeding support group (La Leche League, hospital-sponsored groups, or online communities). Peer support from other nursing mothers is a powerful resource during challenging times.',
  ],
  sources: [
    {
      org: 'La Leche League International',
      citation:
        'Breastfeeding Info: Common Breastfeeding Challenges. La Leche League International.',
      url: 'https://www.llli.org/breastfeeding-info/',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Meek JY, Noble L; Section on Breastfeeding. Policy statement: Breastfeeding and the use of human milk. Pediatrics. 2022;150(1):e2022057988.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347',
    },
    {
      org: 'World Health Organization',
      citation:
        'Breastfeeding. World Health Organization Nutrition Topics.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};

const prematureBabyGuide: ConditionGuide = {
  slug: 'premature-baby-guide',
  title: 'Premature Baby: A Comprehensive Guide',
  subtitle:
    'Understanding your preemie\'s unique needs and development timeline',
  whatHappened:
    'Your baby was born premature, meaning before 37 weeks of gestation. A full-term pregnancy lasts about 40 weeks, and babies born early miss important developmental time in the womb. Prematurity ranges from late preterm (34-36 weeks) to very preterm (28-32 weeks) to extremely preterm (before 28 weeks). The earlier a baby is born, the more support they may need. Many premature babies spend time in the Neonatal Intensive Care Unit (NICU), which can be an overwhelming experience for families. One of the most important concepts to understand is "corrected age" (also called "adjusted age")  -  this is your baby\'s age calculated from their original due date, not their birth date. For example, a baby born 2 months early who is now 6 months old has a corrected age of 4 months. Doctors use corrected age to assess development until your child is about 2-3 years old. Premature babies follow their own timeline, and most catch up to their full-term peers  -  it just takes a little longer.',
  keyFacts: [
    'Approximately 1 in 10 babies in the United States is born prematurely. You are part of a large community of families who have navigated this experience.',
    'Corrected age (adjusted age) is the standard used to track your preemie\'s developmental milestones. A baby born at 32 weeks is expected to reach milestones about 2 months later than a full-term baby of the same birth date.',
    'Survival rates for premature babies have improved dramatically. Babies born at 28 weeks or later have greater than 90% survival rates in modern NICUs.',
    'Late preterm babies (34-36 weeks) are the largest group of preemies and, while they often look healthy, they face higher risks for feeding difficulties, jaundice, temperature regulation problems, and readmission than full-term babies.',
    'Premature babies are at higher risk for certain health issues including respiratory problems, feeding difficulties, infections, anemia, and vision or hearing concerns. Most of these are manageable with proper follow-up care.',
    'The brain undergoes significant development in the final weeks of pregnancy. Premature babies may need extra support and monitoring for cognitive, motor, and behavioral development throughout early childhood.',
    'Kangaroo care (skin-to-skin contact) has been shown to improve outcomes for premature babies, including better weight gain, more stable heart rate and breathing, and stronger parent-infant bonding.',
  ],
  whatToExpect: [
    'The NICU experience varies greatly depending on how early your baby was born. Stays can range from a few days (for late preterm babies) to several months (for very early preemies). Your baby will need to meet specific milestones before discharge, including maintaining body temperature, feeding adequately, and having stable breathing.',
    'After discharge, your baby will have more frequent pediatric visits than a full-term baby. Expect close monitoring of growth (using preemie-specific growth charts initially), development, hearing, and vision.',
    'Your pediatrician will likely refer you to an early intervention program and/or a neonatal follow-up clinic. These programs provide developmental assessments and therapies (physical, occupational, speech) at no or low cost.',
    'Feeding a premature baby can be challenging. Some preemies need fortified breast milk or specialized preterm formula. Breastfeeding may take longer to establish because the suck-swallow-breathe coordination matures later in preemies.',
    'RSV (respiratory syncytial virus) poses a greater risk to premature babies. Your doctor may recommend palivizumab (Synagis) injections during RSV season and will advise you on precautions to reduce infection exposure.',
  ],
  whenToWorry: [
    'If your baby has episodes of apnea (pauses in breathing lasting more than 20 seconds) or turns blue around the lips or face, call 911 immediately.',
    'If your baby is not feeding well after discharge  -  taking less than expected, falling asleep during every feeding, or showing signs of dehydration (fewer than 6 wet diapers per day, dry mouth, sunken fontanelle)  -  contact your pediatrician the same day.',
    'If your baby develops a fever (rectal temperature of 100.4F/38C or higher) in the first few months after discharge, seek immediate medical attention. Premature babies have immature immune systems and infections can escalate quickly.',
    'If your baby is not meeting developmental milestones even when using corrected age  -  for example, not tracking objects with eyes by 3 months corrected, not reaching for toys by 5 months corrected, or not babbling by 9 months corrected  -  bring this up with your pediatrician.',
    'If your baby shows signs of respiratory distress (fast breathing, grunting, flaring nostrils, retractions where the skin pulls in between the ribs), seek medical attention immediately.',
    'If you notice your baby\'s eyes are not tracking together, one eye turns in or out, or you have any concerns about vision, request a referral to a pediatric ophthalmologist.',
  ],
  actionPlan: [
    'Learn about corrected age and use it as your frame of reference for developmental milestones. Share this concept with family members and caregivers so everyone has realistic expectations.',
    'Practice kangaroo care (skin-to-skin contact) as much as possible, both in the NICU and after discharge. This benefits your baby\'s growth, temperature regulation, and your bonding.',
    'Establish care with a pediatrician experienced with premature babies before discharge. Bring your NICU discharge summary to the first visit  -  it contains critical information about your baby\'s history and ongoing needs.',
    'Enroll in your state\'s Early Intervention program. You do not need to wait for a problem to appear  -  premature birth alone qualifies your baby for evaluation in most states, and early support produces better outcomes.',
    'Create a safe sleep environment following AAP guidelines. Premature babies are at higher risk for SIDS. Always place your baby on their back to sleep, on a firm flat surface, with no loose bedding, toys, or bumpers.',
    'Protect your baby from infections during the first RSV season. Limit visitors, ask everyone to wash hands before holding the baby, avoid crowded indoor spaces, and keep your baby away from anyone who is sick.',
    'Keep all follow-up appointments, including ophthalmology, audiology, and developmental assessments. Some issues related to prematurity (such as retinopathy of prematurity or hearing loss) are treatable when caught early.',
    'Connect with other preemie parents through organizations like the March of Dimes NICU Family Support or local parent groups. The NICU and post-discharge journey is emotionally intense, and peer support makes a real difference.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Pediatric Care Online: Preterm Infant. In: Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents. 4th ed. American Academy of Pediatrics; 2017.',
      url: 'https://publications.aap.org/pediatriccare',
    },
    {
      org: 'March of Dimes',
      citation:
        'Premature Babies: Complications and Care. March of Dimes Pregnancy and Baby Health Education Center.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/premature-babies',
    },
    {
      org: 'National Institutes of Health',
      citation:
        'Preterm Labor and Birth: Overview. Eunice Kennedy Shriver National Institute of Child Health and Human Development (NICHD).',
      url: 'https://www.nichd.nih.gov/health/topics/preterm',
    },
  ],
};

const developmentalAssessmentGuide: ConditionGuide = {
  slug: 'developmental-assessment-guide',
  title: 'Understanding Developmental Assessment',
  subtitle:
    'What to expect when your child is referred for developmental evaluation',
  whatHappened:
    'Your child has been referred for a developmental assessment, and this can feel worrying. It is important to understand that a referral is not a diagnosis  -  it is simply a closer look to understand how your child is developing and whether they could benefit from support. Developmental assessments are used when there is a question about whether a child is meeting expected milestones in areas like communication, motor skills, social interaction, cognition, or self-help skills. Referrals can come from a pediatrician, a teacher, a childcare provider, or even from your own concerns as a parent. The evaluation process is thorough and collaborative: a team of specialists observes your child, asks you detailed questions, and uses standardized tools to understand your child\'s strengths and areas where they may need help. The goal is not to label your child, but to create a clear picture of where they are right now and to connect your family with services and therapies that can make a meaningful difference  -  the earlier, the better.',
  keyFacts: [
    'A referral for developmental evaluation is not a diagnosis. It is a tool to gather more information about your child\'s development and determine whether support would be beneficial.',
    'Approximately 1 in 6 children (about 17%) in the United States has a developmental disability. Many more have developmental concerns that benefit from early support even without a formal diagnosis.',
    'Early intervention works. Research consistently shows that children who receive developmental support early  -  before age 3 when possible  -  have significantly better outcomes in language, cognition, and adaptive behavior than those who start later.',
    'Developmental assessments evaluate multiple domains: gross motor (walking, jumping), fine motor (grasping, drawing), speech and language (understanding and using words), cognitive (problem-solving, learning), social-emotional (interaction, regulation), and adaptive (self-care skills).',
    'The evaluation team may include a developmental pediatrician, psychologist, speech-language pathologist, occupational therapist, physical therapist, and/or social worker, depending on the concerns.',
    'Under the Individuals with Disabilities Education Act (IDEA), children from birth to age 3 are entitled to a free evaluation through the Early Intervention program, and children ages 3 and older can be evaluated through their local school district  -  at no cost to families.',
    'Parents are essential members of the evaluation team. Your observations about your child\'s behavior at home, their history, and your concerns are critical data that no test can replace.',
  ],
  whatToExpect: [
    'The evaluation typically takes 1-3 hours, sometimes split across multiple sessions. Your child will be observed during play, asked to complete age-appropriate tasks, and assessed using standardized developmental tools. You will be asked detailed questions about your child\'s history, behavior, and daily routines.',
    'After the evaluation, the team will share their findings with you, explain what the results mean, and outline recommendations. This may include a specific diagnosis, a description of developmental concerns without a formal diagnosis, or reassurance that your child is developing within the expected range.',
    'If your child qualifies for services, you will work with the team to create an Individualized Family Service Plan (IFSP for children under 3) or an Individualized Education Program (IEP for children 3 and older). These plans outline specific goals and the therapies or supports your child will receive.',
    'Common therapies include speech-language therapy, occupational therapy, physical therapy, developmental therapy, and behavioral support. Services for children under 3 are often delivered in your home or childcare setting.',
    'The evaluation process can feel emotional. It is normal to feel anxious, defensive, relieved, or all of these at once. Many parents report that getting answers  -  even difficult ones  -  is better than the uncertainty of not knowing.',
  ],
  whenToWorry: [
    'If your child is not babbling by 12 months, not using any single words by 16 months, not using 2-word phrases by 24 months, or has lost any language skills at any age, request a developmental evaluation promptly.',
    'If your child is not walking independently by 18 months or shows significant asymmetry in movement (using one side of the body much more than the other), discuss this with your pediatrician and request a motor evaluation.',
    'If your child does not respond to their name consistently by 12 months, avoids eye contact, does not point or wave by 12 months, or shows limited interest in other children by 24 months, these are signs that warrant a developmental and/or autism-specific evaluation.',
    'If your child\'s preschool or daycare raises concerns about behavior, learning, or social interaction, take these observations seriously. Teachers see your child in a peer context that reveals patterns you may not see at home.',
    'If you have been told to "wait and see" but your gut tells you something is off, trust your instincts. You have the right to request an evaluation at any time, and there is no harm in evaluating early  -  only harm in waiting too long.',
    'If your child has already been evaluated and is receiving services, but you feel progress has stalled or new concerns have emerged, request a re-evaluation. Children\'s needs change over time, and their support plan should evolve accordingly.',
  ],
  actionPlan: [
    'Contact your state\'s Early Intervention program (for children under 3) or your local school district\'s special education department (for children 3 and older) to request a free developmental evaluation. You do not need a doctor\'s referral for this  -  any parent can request an evaluation directly.',
    'Prepare for the evaluation by writing down your concerns, your child\'s developmental history (when they first smiled, sat, crawled, walked, said words), any family history of developmental conditions, and questions you want answered.',
    'Bring a list of your child\'s current medications, any previous evaluations or therapy reports, and videos of behaviors that concern you (these are invaluable when the behavior may not occur during the evaluation visit).',
    'During the evaluation, answer honestly and completely. Do not downplay your concerns or your child\'s difficulties. The evaluation is most useful when the team has the full picture.',
    'After receiving results, ask the team to explain anything you do not understand. Key questions include: "What are my child\'s strengths?", "What areas need support?", "What specific services do you recommend and why?", and "What can I do at home to help?"',
    'If your child qualifies for services, start them as soon as possible. Research is clear that earlier intervention leads to better outcomes. Do not wait to see if your child "grows out of it."',
    'Keep organized records of all evaluations, therapy reports, and communication with providers. A binder or digital folder will serve you well as you navigate the system and advocate for your child over time.',
    'Remember that you are your child\'s best advocate. Learn about your rights under IDEA, connect with your local Parent Training and Information Center (PTI), and do not hesitate to ask questions or push for the services your child needs.',
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
        'Learn the Signs. Act Early. Developmental Monitoring and Screening.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
    {
      org: 'U.S. Department of Education',
      citation:
        'Individuals with Disabilities Education Act (IDEA): Early Intervention Program for Infants and Toddlers with Disabilities.',
      url: 'https://sites.ed.gov/idea/about-idea/',
    },
  ],
};

export const allGuides: ConditionGuide[] = [
  febrileSeizures,
  plagiocephaly,
  failureToThrive,
  developmentalRegression,
  breastfeedingTroubleshooting,
  prematureBabyGuide,
  developmentalAssessmentGuide,
];

export function getGuideBySlug(slug: string): ConditionGuide | undefined {
  return allGuides.find((g) => g.slug === slug);
}

export { type ConditionGuide } from './types';
