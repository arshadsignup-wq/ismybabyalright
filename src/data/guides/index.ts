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
    'Tongue-tie (ankyloglossia) affects approximately 4-11% of newborns and can significantly impair latch and milk transfer. A simple frenotomy procedure can often resolve feeding difficulties within days.',
    'Nipple shields are a temporary bridge tool, not a long-term solution. They can help babies with latch difficulties, flat or inverted nipples, or premature babies who need a firmer target. Work with an IBCLC to wean off the shield when the baby is ready.',
    'Exclusively pumping (EPing) is a valid feeding choice. Many mothers exclusively pump and provide breast milk by bottle due to latch issues, NICU stays, returning to work, or personal preference. EP mothers need the same support and recognition as direct-nursing mothers.',
    'Combination feeding (breast milk + formula) is more common than many parents realize. Any amount of breast milk provides immunological benefits. Combo feeding can reduce pressure on the nursing parent while maintaining a breastfeeding relationship.',
    'Raynaud\'s phenomenon of the nipple (vasospasm) causes sharp, burning pain and visible blanching (turning white) of the nipple, often triggered by cold. It is frequently misdiagnosed as thrush. Treatment includes keeping nipples warm, avoiding caffeine and nicotine, and in some cases, prescription nifedipine.',
    'A breast abscess is a rare but serious complication that can develop from untreated or undertreated mastitis. Signs include a firm, painful, worsening lump that does not respond to antibiotics within 48-72 hours, along with persistent fever. An abscess requires drainage by a healthcare provider.',
    'Cow\'s milk protein allergy in breastfed babies occurs in about 0.5-1% of exclusively breastfed infants. Signs include blood or mucus in stool, excessive fussiness, eczema, or vomiting. An elimination diet (removing dairy from the mother\'s diet for 2-4 weeks) is the diagnostic and therapeutic approach.',
  ],
  whatToExpect: [
    'A lactation consultant (IBCLC) will observe a full feeding, assess your baby\'s latch, check for tongue-tie or other oral restrictions, and help you find positioning that works. Many problems improve dramatically after one or two sessions.',
    'If supply is a concern, your provider may recommend a weighted feed (weighing the baby before and after nursing) to measure exactly how much milk the baby is transferring. This replaces guesswork with data.',
    'Improvement timelines vary by issue: latch corrections can show results immediately, supply concerns typically improve within 3-7 days of increased feeding frequency, and mastitis symptoms usually resolve within 48-72 hours of treatment.',
    'Your pediatrician will monitor your baby\'s weight gain closely  -  this is the most reliable indicator that breastfeeding is going well. Expect frequent weight checks in the first few weeks.',
    'You may be advised to supplement temporarily (with pumped milk or formula) while working on the underlying issue. Supplementing is a tool, not a failure  -  it keeps your baby fed while you get support.',
    'If tongue-tie is suspected, your provider may refer you to a pediatric ENT or dentist experienced in frenotomy. The procedure is quick (under a minute), and many babies latch better immediately afterward, though some need follow-up exercises and continued lactation support.',
    'Power pumping (pumping 20 minutes, resting 10, pumping 10, resting 10, pumping 10  -  for one hour total) mimics cluster feeding and can help boost supply. Do this once per day for 3-7 days while maintaining your regular pumping or nursing schedule.',
    'If you are returning to work, begin building a freezer stash 2-3 weeks before your return by pumping once daily after a morning feeding. You need roughly 1-1.5 ounces per hour of separation. Talk to your employer about pumping breaks  -  federal law (PUMP Act) requires reasonable break time and a private space.',
    'Weaning is a personal decision with no single "right" timeline. Gradual weaning (dropping one feeding every few days) is easier on both parent and baby than abrupt weaning. If you experience engorgement during weaning, express just enough to relieve pressure. Watch for signs of plugged ducts or mastitis.',
  ],
  whenToWorry: [
    'If you develop a fever over 101F (38.3C), a red and hot area on the breast, or flu-like symptoms (body aches, chills), you may have mastitis. Contact your doctor or midwife within 24 hours  -  antibiotics may be needed.',
    'If your baby is not producing at least 6 wet diapers per day by day 5, or if urine appears dark or concentrated, contact your pediatrician the same day  -  this may indicate insufficient milk intake.',
    'If your baby has lost more than 10% of birth weight by day 3-5, or has not returned to birth weight by 2 weeks of age, seek immediate support from your pediatrician and a lactation consultant.',
    'If you see blood in your baby\'s stool (not related to cracked nipples), or if your baby is lethargic and difficult to wake for feedings, seek medical attention the same day.',
    'If you experience persistent pain (sharp, shooting, or burning) during and between feedings that is not improving, this may indicate thrush, vasospasm, or a latch issue that needs professional evaluation.',
    'If you feel overwhelmed, hopeless, or that breastfeeding is affecting your mental health, tell your provider. Your wellbeing matters as much as the feeding method, and there is no shame in exploring all options.',
    'If your nipples turn white after feeding and you experience sharp, burning pain that lasts minutes to hours, you may have vasospasm (Raynaud\'s of the nipple). Apply dry warmth immediately after feeding (warm compress, wool breast pads) and see your provider  -  this is treatable.',
    'If a red, swollen, painful area on the breast does not improve with 48-72 hours of antibiotics, or if you feel a fluctuant (squishy) mass, contact your provider urgently  -  this may be a breast abscess requiring drainage.',
    'If your breastfed baby has persistent eczema, blood-streaked or mucousy stools, or extreme fussiness that does not improve with standard comfort measures, discuss cow\'s milk protein allergy with your pediatrician. An elimination diet trial under medical guidance can confirm the diagnosis.',
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
    'If tongue-tie is suspected, ask your lactation consultant or pediatrician for a referral to a provider experienced in diagnosing and treating tongue-tie. After a frenotomy, perform the recommended stretching exercises to prevent reattachment, and follow up with your IBCLC to optimize latch.',
    'For exclusively pumping: establish a pumping schedule that mimics a newborn\'s feeding pattern (8-10 times per 24 hours initially), invest in a hospital-grade or wearable pump, use hands-on pumping (massage + compression) to maximize output, and gradually reduce to 5-6 sessions per day once supply is established (usually around 12 weeks).',
    'For returning to work: practice with bottles 2-3 weeks before your start date (some breastfed babies need time to accept a bottle), pack pump parts and a cooler bag the night before, and request a pumping schedule that matches your baby\'s feeding times. Pump for 15-20 minutes per session or until 2 minutes after milk stops flowing.',
    'For weaning: if you experience sadness or mood changes during weaning, know that this is common and related to hormonal shifts (particularly dropping oxytocin and prolactin levels). If feelings are intense or persistent, talk to your provider  -  you are not being dramatic, and support is available.',
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

const postpartumRecovery: ConditionGuide = {
  slug: 'postpartum-recovery',
  title: 'Postpartum Recovery Guide',
  subtitle:
    'What to expect in the weeks after birth  -  your body, your healing, your timeline',
  whatHappened:
    'You have just given birth, and your body is beginning one of the most significant physical recoveries it will ever undergo. Whether you had a vaginal birth or a cesarean section, the postpartum period (often called the "fourth trimester") involves healing from birth, dramatic hormonal shifts, adjustment to breastfeeding or bottle-feeding, sleep deprivation, and emotional changes that range from joy to tearfulness and everything in between. This period typically lasts 6-8 weeks but can extend much longer  -  full physical and emotional recovery takes most women 6-12 months. The postpartum experience is profoundly underserved in our healthcare system: you may have a single 6-week checkup and then be considered "recovered." In reality, your body has undergone pregnancy and childbirth  -  an athletic-level event  -  and deserves the same care, patience, and attention you would give any major recovery.',
  keyFacts: [
    'Lochia (postpartum bleeding) is normal and lasts 2-6 weeks. It starts as heavy, bright red bleeding and gradually transitions to pink, then brown, then yellowish-white discharge. Heavy bleeding that soaks a pad in an hour or passes clots larger than a golf ball warrants a call to your provider.',
    'Uterine involution (the uterus shrinking back to pre-pregnancy size) takes about 6 weeks. You may feel cramping ("afterpains") during breastfeeding as oxytocin triggers uterine contractions. These are typically stronger with second and subsequent babies.',
    'Perineal healing after vaginal birth takes 1-3 weeks for minor tears (1st-2nd degree) and 4-6 weeks for more significant tears (3rd-4th degree). Pain, swelling, and discomfort when sitting are normal during this period.',
    'C-section recovery involves healing from major abdominal surgery. The incision takes 6-8 weeks to heal on the surface, but the underlying tissue and fascia can take 3-6 months to fully recover. Avoid lifting anything heavier than your baby for the first 6 weeks.',
    'Hormonal shifts after birth are dramatic: estrogen and progesterone drop precipitously within 24-48 hours of delivery, while prolactin rises (especially if breastfeeding). These shifts contribute to mood swings, night sweats, hair loss (typically starting around 3-4 months postpartum), and skin changes.',
    'The "baby blues" affect up to 80% of new mothers and typically appear 2-5 days postpartum, lasting up to 2 weeks. Symptoms include tearfulness, mood swings, irritability, and anxiety. If symptoms persist beyond 2 weeks or worsen, this may be postpartum depression or anxiety, which affects 1 in 7 mothers and is treatable.',
    'Pelvic floor recovery is often overlooked. Pregnancy and vaginal delivery can weaken pelvic floor muscles, leading to urinary leakage, pelvic pressure, or pain during intercourse. These symptoms are common but not inevitable or permanent  -  pelvic floor physical therapy is highly effective.',
  ],
  whatToExpect: [
    'Week 1-2: The heaviest physical recovery. Lochia is at its heaviest, perineal or incision pain is most intense, uterine cramping is strongest, and fatigue is overwhelming. Focus on rest, nutrition, hydration, and newborn care  -  nothing else.',
    'Week 3-4: Lochia lightens and transitions color. Perineal pain decreases. C-section incision begins to itch (a sign of healing). Energy may improve slightly, but do not overdo it  -  this is when many women push too hard and experience setbacks.',
    'Week 5-6: Most women have their 6-week postpartum checkup. Your provider will check your incision or perineal healing, discuss contraception, screen for postpartum depression, and may clear you for exercise and sexual activity. Speak up about any ongoing symptoms  -  this appointment is short, so come prepared.',
    'Month 2-3: Hair may begin shedding (postpartum hair loss peaks around 3-4 months and resolves by 6-12 months). Hormones continue to stabilize. If breastfeeding, supply is typically well-established. Night sweats usually resolve.',
    'Month 4-6+: Physical recovery continues. Abdominal muscles may still feel separated (diastasis recti). Pelvic floor function continues to improve, especially with targeted exercises. Emotionally, most women feel increasingly like themselves, though the adjustment to parenthood is ongoing.',
  ],
  whenToWorry: [
    'Soaking a maxi pad in one hour or less, or passing blood clots larger than a golf ball, may indicate postpartum hemorrhage. Call your provider or go to the emergency room immediately.',
    'Fever over 100.4F (38C) in the first few weeks postpartum may signal an infection (uterine, wound, or breast). Contact your provider the same day.',
    'Redness, swelling, increasing pain, or foul-smelling discharge from a C-section incision or perineal tear site may indicate wound infection. Contact your provider within 24 hours.',
    'Severe headache that does not respond to medication, vision changes, upper abdominal pain, or significant swelling in the face or hands could be signs of postpartum preeclampsia, which can occur up to 6 weeks after delivery. Go to the emergency room.',
    'Chest pain, difficulty breathing, or leg swelling (especially one-sided calf pain) may indicate a blood clot (pulmonary embolism or deep vein thrombosis). This is a medical emergency  -  call 911.',
    'Persistent feelings of hopelessness, inability to bond with your baby, intrusive thoughts about harming yourself or your baby, or intense anxiety or panic attacks are signs of postpartum depression or postpartum anxiety. Contact your provider or call the PSI Warmline at 1-800-944-4773. You deserve help, and treatment works.',
  ],
  actionPlan: [
    'Prepare your recovery station before delivery: stock peri bottles, witch hazel pads (Tucks), ice packs, stool softeners, large pads, comfortable underwear, and easy-to-eat nutritious snacks. For C-section, add a belly binder/abdominal support band and a step stool for getting in and out of bed.',
    'Prioritize rest above all else in the first 2 weeks. Accept help with cooking, cleaning, and older children. Sleep when the baby sleeps is cliched but remains sound medical advice. Sleep deprivation worsens pain perception, slows healing, and increases the risk of postpartum mood disorders.',
    'Eat nutrient-dense foods to support healing: protein (eggs, chicken, legumes, nuts) for tissue repair, iron-rich foods (red meat, spinach, fortified cereals) to replenish blood loss, fiber and fluids to prevent constipation (a common and painful postpartum issue), and calcium for bone health.',
    'For perineal care: use a peri bottle with warm water during and after urination, apply witch hazel pads or ice packs for swelling, take sitz baths 2-3 times daily for comfort, and take stool softeners as recommended to avoid straining.',
    'For C-section care: keep the incision clean and dry, wear loose clothing, support the incision with a pillow when coughing or laughing, avoid stairs when possible in the first 1-2 weeks, and do not drive until you can perform an emergency stop without pain (usually 2-4 weeks).',
    'Begin gentle pelvic floor exercises (Kegels) as soon as you feel comfortable, typically a few days after vaginal birth or after catheter removal for C-section. If you experience urinary leakage or pelvic pressure that does not improve by 6 weeks, ask for a referral to a pelvic floor physical therapist.',
    'Attend your 6-week postpartum checkup and come prepared with a written list of questions and symptoms. Do not minimize your experience. Key topics to discuss: mood (be honest about how you are feeling), pelvic floor function, pain, contraception, and clearance for physical activity.',
    'Monitor your emotional health. Mood swings and tearfulness in the first 2 weeks are normal ("baby blues"), but symptoms that persist beyond 2 weeks, worsen, or interfere with daily function may indicate postpartum depression or anxiety. Screening tools like the Edinburgh Postnatal Depression Scale can help you self-assess. Treatment (therapy, medication, or both) is safe and effective, including for breastfeeding mothers.',
  ],
  sources: [
    {
      org: 'American College of Obstetricians and Gynecologists',
      citation:
        'ACOG Committee Opinion No. 736: Optimizing Postpartum Care. Obstetrics & Gynecology. 2018;131(5):e140-e150.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Postpartum Care of the Mother. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Recovering-From-Delivery.aspx',
    },
    {
      org: 'World Health Organization',
      citation:
        'WHO Recommendations on Postnatal Care of the Mother and Newborn. WHO; 2013.',
      url: 'https://www.who.int/publications/i/item/9789241506649',
    },
  ],
};

const choosingAPediatrician: ConditionGuide = {
  slug: 'choosing-a-pediatrician',
  title: 'Choosing a Pediatrician',
  subtitle:
    'How to find the right doctor for your child  -  and what to bring to the first visit',
  whatHappened:
    'Choosing a pediatrician is one of the most important decisions you will make as a new or expecting parent. This person will be your partner in your child\'s health for years  -  they will guide you through illnesses, developmental concerns, behavioral questions, and the countless "is this normal?" moments of early parenthood. The ideal time to start looking is during the third trimester of pregnancy (around 28-34 weeks), but it is never too late. Many parents feel pressure to make the "perfect" choice, but the reality is that a good pediatrician is one you trust, can communicate with openly, and who takes your concerns seriously. If the fit is not right, you can always switch  -  your child\'s medical records can be transferred to any provider.',
  keyFacts: [
    'The American Academy of Pediatrics recommends that parents choose a pediatrician before the baby is born. Most pediatric practices offer free prenatal interviews or meet-and-greet visits.',
    'Board certification matters. A board-certified pediatrician has completed medical school, a 3-year pediatric residency, and passed a rigorous examination by the American Board of Pediatrics. You can verify board certification at certificationmatters.org.',
    'Practice size affects your experience. Solo practitioners offer continuity (you always see the same doctor), while group practices offer greater availability (someone is always on call) and diverse expertise. Neither is inherently better  -  it depends on your priorities.',
    'Office logistics matter more than you might expect. Consider location (you will go frequently in the first year  -  at least 6 well-child visits), office hours (do they offer early morning, evening, or weekend sick visits?), after-hours coverage (phone nurse line? urgent care partnership?), and wait times.',
    'Communication style is critical. You need a pediatrician who listens without rushing, explains clearly, welcomes your questions, and does not make you feel judged. Trust your gut  -  if you feel dismissed or talked down to during the prenatal visit, that will not improve.',
    'Insurance compatibility is practical but important. Confirm that the practice accepts your insurance plan, understand copay amounts for well-child vs. sick visits, and ask about billing practices for phone consultations or after-hours advice.',
  ],
  whatToExpect: [
    'A prenatal interview typically lasts 15-30 minutes. You may meet with the pediatrician, a nurse, or an office manager. Use this time to assess the office environment, ask your key questions, and gauge whether you feel comfortable.',
    'In the first year, your baby will have approximately 6-7 well-child visits (at birth, 1 month, 2 months, 4 months, 6 months, 9 months, and 12 months). These visits include growth measurements, developmental screening, vaccinations, and time for your questions.',
    'A good pediatrician will proactively screen for postpartum depression in parents during early well-child visits. This reflects current AAP guidelines and signals a practice that cares about the whole family.',
    'You should expect your pediatrician to be accessible  -  not just during office visits but also via phone nurse lines for after-hours questions. Ask about their policy for urgent concerns that arise outside of business hours.',
    'If you ever feel that the relationship is not working  -  you feel dismissed, your concerns are not taken seriously, or the practice logistics are causing stress  -  it is perfectly acceptable to switch. Your child\'s records will be transferred, and no explanation is required.',
  ],
  whenToWorry: [
    'If your pediatrician consistently dismisses your concerns with "don\'t worry about it" without explanation, especially regarding developmental milestones or behavioral changes, seek a second opinion. Parents\' instincts are clinically valuable.',
    'If the office is chronically difficult to reach for urgent concerns (long hold times, no call-back system, no after-hours coverage), this is a safety issue  -  consider whether the practice can meet your family\'s needs.',
    'If you feel pressured to make medical decisions without adequate information or time to consider, this is a red flag. A good pediatrician explains the evidence, answers your questions, and respects your role as a decision-maker.',
    'If your pediatrician does not follow current AAP guidelines on key issues (developmental screening at 9, 18, and 30 months; autism-specific screening at 18 and 24 months; standard vaccine schedule), ask why and consider whether their approach aligns with evidence-based care.',
  ],
  actionPlan: [
    'Start your search at 28-34 weeks of pregnancy. Ask friends, family, your OB/midwife, and local parenting groups for recommendations. Check your insurance provider directory, hospital affiliations, and online reviews (take extreme reviews with a grain of salt).',
    'Schedule prenatal interviews with 2-3 practices. Most offer these at no charge. Bring a list of questions and pay attention to how the staff treats you, the cleanliness and organization of the office, and the waiting room environment.',
    'Key questions to ask during the prenatal visit: What are your office hours and after-hours policies? How quickly can we get a sick visit appointment? What is your approach to breastfeeding support? What is your vaccination philosophy? How do you handle developmental concerns? What hospital are you affiliated with?',
    'Evaluate practical factors: Is the office within a reasonable distance (you will be going frequently while sleep-deprived with a newborn)? Is parking accessible? Is the waiting area separated for sick and well children? Do they offer telehealth visits?',
    'Confirm insurance and billing: Call your insurance company to verify the practice is in-network. Ask the office about copays, billing for phone consultations, and any fees for forms or records.',
    'Prepare for the first newborn visit (usually 2-5 days after hospital discharge): Bring your hospital discharge summary, insurance cards, a list of questions that came up since delivery, your baby\'s feeding and diaper log, and a record of medications you are taking if breastfeeding.',
    'Give the relationship a fair trial. It takes a few visits to develop rapport. If after 3-4 visits you still do not feel comfortable, trust that feeling and look for a new provider. Your child deserves a healthcare partner you trust.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Finding a Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/default.aspx',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Palpalicka D. AAP Schedule of Well-Child Care Visits. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Well-Child-Care-A-Check-Up-for-Success.aspx',
    },
    {
      org: 'American Board of Pediatrics',
      citation:
        'Is Your Child\'s Doctor Board Certified? Certification Matters.',
      url: 'https://www.certificationmatters.org/',
    },
  ],
};

const siblingPreparation: ConditionGuide = {
  slug: 'sibling-preparation',
  title: 'Preparing Your Child for a New Sibling',
  subtitle:
    'Age-specific strategies for before, during, and after the new baby arrives',
  whatHappened:
    'A new baby is joining your family, and your older child\'s world is about to change in ways they cannot fully understand yet. This is exciting, but it is also genuinely disruptive to a young child\'s sense of security. Their experience of being the center of your attention is shifting, and how you handle this transition matters. The good news: sibling relationships are among the most enduring and influential relationships in a person\'s life, and there is a great deal you can do to set the stage for a positive bond. Children\'s reactions to a new sibling vary widely based on age, temperament, and preparation. Toddlers (1-2 years) may not understand the concept at all. Preschoolers (3-4 years) may be excited but also jealous. School-age children (5+) may have complex feelings. All reactions are normal, and regression (in toileting, sleep, or behavior) is common and temporary.',
  keyFacts: [
    'Toddlers (12-24 months) have limited understanding of what "a new baby" means. They cannot project into the future or understand that the baby is permanent. Focus on maintaining routines and providing extra physical affection rather than detailed explanations.',
    'Preschoolers (2-4 years) are the age group most likely to struggle with a new sibling. They are old enough to understand that attention is being shared but too young to regulate the big emotions this triggers. Jealousy, regression, and acting out are developmentally normal responses.',
    'School-age children (5+ years) can understand the concept and may be genuinely excited to help. However, they may also feel displaced, worry about their role in the family, or resent the disruption to their routine. Their feelings deserve validation even when they seem disproportionate.',
    'Regression is the most common behavioral response to a new sibling. A potty-trained child may have accidents, a good sleeper may start waking at night, a child who eats independently may want to be fed. This is temporary and is not a sign that something is wrong  -  it is a normal response to stress.',
    'The timing of telling your child depends on their age. For toddlers, wait until late pregnancy when the belly is visible and the arrival is imminent. For preschoolers, the second trimester is often appropriate. For school-age children, tell them early enough that they do not hear it from someone else.',
    'Research from the Gottman Institute shows that the first-born child\'s adjustment to a sibling is significantly influenced by the quality of the parent-child relationship before the baby arrives, not just what happens after. Investing in your relationship with your older child now is the best preparation.',
  ],
  whatToExpect: [
    'During pregnancy: Your child may be curious, excited, indifferent, or a mix of all three. Read age-appropriate books about new siblings, involve them in preparations (choosing a stuffed animal for the baby, helping set up the nursery), and answer questions honestly but simply.',
    'At the hospital: Many hospitals allow siblings to visit. Arrange for a trusted person to bring your older child to meet the baby. Let the older child come to you (rather than finding you already holding the baby)  -  some parents set the baby down in the bassinet so their arms are open for the older child first.',
    'First weeks home: Expect disrupted routines, big emotions, and testing behavior. Your older child is processing a massive change. They may swing between adoration and hostility toward the baby, sometimes within minutes. Both reactions are normal.',
    'The "regression window" typically lasts 2-6 weeks and then gradually improves as the new normal becomes familiar. If regression persists beyond 2-3 months or worsens significantly, discuss it with your pediatrician.',
    'Your own emotions matter too. Many parents experience guilt about "doing this" to their older child, grief about the end of the exclusive relationship, and exhaustion from meeting two (or more) sets of needs. These feelings are common and valid.',
  ],
  whenToWorry: [
    'If your older child is physically aggressive toward the baby (hitting, pinching, throwing objects at the baby), never leave them unsupervised with the newborn and address the behavior calmly but firmly. If aggression is persistent or escalating, talk to your pediatrician.',
    'If regression (toileting accidents, sleep disruption, clinginess) does not begin to improve after 2-3 months, or if new behavioral problems emerge (extreme tantrums, self-harm, significant changes in eating), seek guidance from your pediatrician or a child psychologist.',
    'If your older child expresses persistent sadness, says things like "you don\'t love me anymore" beyond the initial adjustment period, or withdraws from activities they used to enjoy, this warrants attention and possibly professional support.',
    'If you find yourself feeling persistently resentful, overwhelmed, or unable to bond with either child, reach out for support. Managing the needs of multiple young children is objectively hard, and struggling does not mean you are failing.',
  ],
  actionPlan: [
    'Before the baby arrives: Read sibling-themed books together ("The New Baby" by Mercer Mayer, "I\'m a Big Brother/Sister" by Joanna Cole). Visit friends with babies so your child can see what babies are actually like (small, loud, not great playmates yet).',
    'Make any big transitions (new room, new bed, starting preschool, potty training) well before or well after the baby arrives  -  at least 2-3 months in either direction. You do not want your child to associate these changes with being displaced by the baby.',
    'Create a "big sibling" gift from the baby  -  a small wrapped present waiting at the hospital or at home. This establishes the relationship as reciprocal from the start. Many families also keep small gifts on hand for when visitors bring gifts only for the baby.',
    'Protect one-on-one time with your older child. Even 15-20 minutes of undivided attention daily (reading together, playing their favorite game, going for a walk) provides reassurance that they are still important and loved. This is more impactful than any single conversation.',
    'Involve your older child in baby care at their level: fetching a diaper, singing to the baby, choosing the baby\'s outfit. Praise their helpfulness genuinely  -  "The baby calmed down when you sang! You are so good at that"  -  but do not force involvement if they are not interested.',
    'Respond to regression with patience, not punishment. If your potty-trained child has accidents, clean up matter-of-factly without shaming. If they want a bottle or pacifier, consider allowing it briefly  -  the novelty usually wears off quickly. Punishing regression increases anxiety and prolongs the behavior.',
    'Narrate the baby\'s perspective in a way that builds the older child\'s sense of importance: "Look, the baby is smiling at you! I think she loves her big brother." This helps the older child see themselves as valued by the new family member.',
    'Maintain existing routines as much as possible  -  bedtime routine, mealtimes, daycare schedule, weekend activities. Predictability is a powerful anxiety reducer for young children during times of change. See also: our checklist at /checklists/preparing-for-sibling for a comprehensive preparation timeline.',
  ],
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Preparing Your Child for a New Sibling. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Preparing Your Child for the Arrival of a New Baby. Zero to Three.',
      url: 'https://www.zerotothree.org/resource/preparing-your-child-for-a-new-baby/',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Shelov SP, et al. Caring for Your Baby and Young Child: Birth to Age 5. 7th ed. American Academy of Pediatrics; 2019.',
      url: 'https://publications.aap.org/aapbooks/book/648/Caring-for-Your-Baby-and-Young-Child-Birth-to-Age',
    },
  ],
};

const postpartumFitness: ConditionGuide = {
  slug: 'postpartum-fitness',
  title: 'Postpartum Fitness Guide',
  subtitle:
    'Returning to exercise safely after pregnancy and birth  -  starting with your pelvic floor',
  whatHappened:
    'You have given birth and you may be eager to "get your body back"  -  or you may not be thinking about exercise at all yet, and that is equally valid. The postpartum fitness journey is not about bouncing back to a pre-pregnancy body (that narrative is harmful and unrealistic). It is about rebuilding functional strength, supporting your recovery, improving your energy and mood, and creating a sustainable movement practice that works with your new life. The most important thing to understand is that postpartum exercise must begin from the inside out: pelvic floor and deep core first, then gradually progressing to higher-intensity activity. Rushing back too quickly can worsen diastasis recti (abdominal separation), cause pelvic floor dysfunction, and lead to injury. Your body grew a human  -  it deserves a thoughtful return to movement.',
  keyFacts: [
    'ACOG recommends that most women can begin gentle walking and pelvic floor exercises within days of an uncomplicated vaginal delivery. After a C-section, begin with walking and breathing exercises, and follow your surgeon\'s guidance  -  most recommend waiting 6-8 weeks before progressing to more vigorous activity.',
    'Diastasis recti (separation of the rectus abdominis muscles along the midline) affects up to two-thirds of women in the third trimester and does not always resolve on its own. Before returning to core exercises, check for diastasis (or have a provider check)  -  a gap wider than 2 finger-widths may need targeted rehabilitation before standard ab exercises.',
    'Pelvic floor rehabilitation is the foundation of postpartum fitness, not an optional add-on. The pelvic floor supports your organs, controls bladder and bowel function, and contributes to core stability. Pregnancy and birth (both vaginal and C-section) affect the pelvic floor.',
    'Urinary incontinence (leaking when you cough, sneeze, laugh, or exercise) is common postpartum but is NOT something you "just have to live with." Pelvic floor physical therapy resolves or significantly improves stress incontinence in the majority of women.',
    'Breastfeeding and exercise are compatible. Moderate exercise does not reduce milk supply or change the taste of breast milk. Stay hydrated, wear a supportive bra, and consider nursing or pumping before exercise for comfort.',
    'Exercise is one of the most effective interventions for postpartum depression and anxiety. Studies show that regular moderate exercise (even 30 minutes of walking 3-5 times per week) significantly reduces symptoms of postpartum mood disorders.',
    'The postpartum body has increased joint laxity due to the hormone relaxin, which can persist for 3-6 months postpartum (longer if breastfeeding). This increases the risk of joint injury, so avoid high-impact activities and heavy lifting until your connective tissue has recovered.',
  ],
  whatToExpect: [
    'Weeks 1-2 (recovery phase): Focus on rest, gentle walking (even just around the house), diaphragmatic breathing, and gentle pelvic floor engagement (Kegels). Do not exercise through pain. C-section: prioritize incision healing and avoid any abdominal engagement beyond breathing exercises.',
    'Weeks 3-6 (rebuilding phase): Gradually increase walking distance and pace. Begin postnatal-specific core exercises (pelvic tilts, heel slides, bridge poses). Continue pelvic floor work. This is a good time to schedule a pelvic floor PT assessment if available.',
    'Weeks 6-12 (progressive phase): After your provider clears you at the 6-week visit, gradually reintroduce strength training with body weight or light weights. Focus on compound movements (squats, lunges, rows). Avoid crunches, sit-ups, and planks until diastasis recti is assessed.',
    'Months 3-6 (return to activity phase): Progressively increase intensity. Reintroduce running, HIIT, or group fitness classes only after you can walk briskly for 30 minutes without symptoms (no leaking, no pelvic pressure, no pain). Many women return to pre-pregnancy exercise levels during this phase.',
    'Months 6-12+: Continue building toward your fitness goals. Some women feel fully recovered by 6 months; others need a full year or more. There is no timeline you "should" meet. Persistent symptoms (incontinence, pelvic pain, abdominal weakness) at any point warrant a pelvic floor PT referral.',
  ],
  whenToWorry: [
    'If you experience urinary leakage during exercise (even "just a little"), this is a signal that your pelvic floor is not yet ready for that level of activity. Scale back and see a pelvic floor physical therapist  -  leaking is common but not normal and is treatable.',
    'If you feel heaviness or a bulging sensation in your vagina during or after exercise, stop the activity and consult a pelvic floor PT. This may indicate pelvic organ prolapse, which is manageable with proper guidance.',
    'If you experience pain at your C-section scar during exercise, especially sharp or pulling sensations, stop and discuss with your provider. Scar tissue mobilization (gentle massage of the scar) can help  -  ask your provider or PT to teach you the technique.',
    'If you notice a visible "doming" or "coning" along the midline of your abdomen during core exercises (a ridge pushing outward), you likely have diastasis recti that needs targeted rehabilitation. Avoid exercises that cause doming (crunches, planks, heavy lifting) until assessed.',
    'If exercise worsens your mood rather than improving it, or if you feel compelled to exercise excessively despite exhaustion or pain, talk to your provider. Compulsive exercise postpartum can be a sign of postpartum anxiety or disordered eating and deserves compassionate support.',
  ],
  actionPlan: [
    'Start with pelvic floor exercises (Kegels) within days of delivery if comfortable: contract the pelvic floor muscles (as if stopping urine flow) for 5 seconds, relax for 10 seconds, repeat 10 times, 3 times per day. Focus on both the squeeze AND the full relaxation  -  a pelvic floor that cannot relax is as problematic as one that cannot contract.',
    'Begin walking as soon as you feel able  -  even 5-10 minutes around the house counts. Gradually increase duration before increasing pace. Walking is the single best postpartum exercise: it improves mood, promotes healing, builds cardiovascular fitness, and can be done with your baby.',
    'Check for diastasis recti before returning to core work: lie on your back with knees bent, lift your head slightly, and feel along the midline above and below your navel. If you feel a gap wider than 2 finger-widths or your fingers sink in deeply, work with a pelvic floor PT before doing standard core exercises.',
    'Consider seeing a pelvic floor physical therapist at 6 weeks postpartum (or sooner if you have symptoms). This is standard care in many countries (France provides every postpartum woman with pelvic floor rehabilitation) and is covered by many US insurance plans. Ask your OB or midwife for a referral.',
    'When returning to strength training, follow the principle of progressive overload: start with body weight, then add light resistance, then gradually increase. Key exercises to prioritize: glute bridges, squats, deadlifts (light weight), rows, and modified planks (only if no diastasis or pelvic floor symptoms).',
    'If you are breastfeeding: exercise does not decrease milk supply when caloric intake is adequate. Hydrate well before and after exercise, wear a supportive sports bra, and consider nursing or pumping before exercise for comfort. Some babies may fuss at the breast immediately after vigorous exercise due to increased salt in sweat on the skin  -  a quick rinse solves this.',
    'Set realistic expectations. Recovery is not linear  -  you will have good days and setbacks. Progress is measured in months, not weeks. Compare yourself only to where you were last month, not to pre-pregnancy or to anyone else\'s postpartum journey.',
    'Build movement into your daily life with your baby: walks with the stroller, baby-wearing while doing light housework, postnatal yoga or fitness classes that welcome babies. Social exercise (stroller groups, mom-and-baby classes) provides both physical and mental health benefits.',
  ],
  sources: [
    {
      org: 'American College of Obstetricians and Gynecologists',
      citation:
        'ACOG Committee Opinion No. 804: Physical Activity and Exercise During Pregnancy and the Postpartum Period. Obstetrics & Gynecology. 2020;135(4):e178-e188.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period',
    },
    {
      org: 'American College of Sports Medicine',
      citation:
        'Mottola MF, et al. 2019 Canadian guideline for physical activity throughout pregnancy. British Journal of Sports Medicine. 2018;52(21):1339-1346.',
      url: 'https://bjsm.bmj.com/content/52/21/1339',
    },
    {
      org: 'American Academy of Pediatrics',
      citation:
        'Exercise and Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Exercise-and-Breastfeeding.aspx',
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
  postpartumRecovery,
  choosingAPediatrician,
  siblingPreparation,
  postpartumFitness,
];

export function getGuideBySlug(slug: string): ConditionGuide | undefined {
  return allGuides.find((g) => g.slug === slug);
}

export { type ConditionGuide } from './types';
