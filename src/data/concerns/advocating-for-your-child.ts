import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'advocating-for-your-child',
  title: 'How to Advocate for Your Child\'s Needs',
  category: 'medical',
  searchTerms: [
    'how to advocate for my child',
    'doctor not listening to my concerns',
    'pediatrician dismissing my worries',
    'how to get a referral for my baby',
    'push for developmental evaluation',
    'second opinion for my child',
    'doctor says wait and see',
    'trusting my parental instincts',
  ],
  quickAnswer:
    'You know your child better than anyone, and your observations matter. If you feel something is not right with your child\'s development or health, you have every right to ask questions, request evaluations, and seek second opinions. Advocating for your child is not being difficult  -  it is being a good parent.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the newborn period, trust your instincts about feeding difficulties, excessive crying, or anything that feels off. Pediatricians rely on your observations between visits. If you feel your concerns are not being heard, write them down before appointments and be specific about what you are seeing, how often it happens, and what worries you.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age you have a strong sense of your baby\'s patterns and baseline behavior. If you notice something that concerns you  -  like limited eye contact, unusual movements, or feeding problems  -  bring it up even if no one else has mentioned it. Ask your pediatrician to document your concerns in the medical record, which ensures they are tracked over time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental milestones become more visible in this period, and you may notice differences between your baby and others. If your pediatrician says "let\'s wait and see," it is okay to ask specifically what you should be watching for and when a referral would be appropriate. You can also request a developmental screening at any time  -  you do not have to wait for a scheduled well-child visit.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is a critical window for early intervention services, which are most effective the earlier they begin. If you have concerns about speech, motor skills, or social development, you have the right to request a referral to early intervention  -  and in many places, you can self-refer without needing a doctor\'s order. Do not let anyone tell you it is "too early" to evaluate  -  early assessment does not mean early diagnosis, but it does mean early support if needed.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age two, developmental differences may become more apparent. If your child has not met expected milestones and you are being told to wait, consider requesting a formal developmental evaluation through your pediatrician, a developmental pediatrician, or your local school district. You are legally entitled to a free evaluation through your school district starting at age three under IDEA (Individuals with Disabilities Education Act).',
    },
  ],
  whenNormal: [
    'Your pediatrician takes time to listen to your concerns, answers your questions thoughtfully, and explains their reasoning clearly',
    'Your doctor acknowledges your observations while providing reassurance based on the full clinical picture',
    'You feel heard and respected during appointments, even when the conclusion is that everything is on track',
    'Your pediatrician proactively screens for developmental milestones and discusses them with you',
  ],
  whenToMention: [
    'You feel your concerns have been dismissed or minimized at previous appointments and the issue persists',
    'You have noticed a developmental difference or regression that has not been formally evaluated',
    'Your child is not meeting milestones and you have been told to "wait and see" for more than a few months without a clear follow-up plan',
    'You want a referral to a specialist or early intervention services and are unsure how to request one',
  ],
  whenToActNow: [
    'Your child has lost previously acquired skills  -  such as words, walking, or social engagement  -  at any age, which always warrants prompt evaluation',
    'You believe your child is in pain or distress and your concerns are not being addressed  -  seek a second opinion or go to a pediatric urgent care or emergency department',
    'You feel unsafe or unable to care for your child due to the stress of navigating their care  -  reach out to the Postpartum Support International helpline (1-800-944-4773)',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Advocate for Your Child\'s Health Care Needs. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/decisions-to-make/Pages/paloma-How-to-Advocate-for-Your-Childs-Health-Care-Needs.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You\'re Concerned. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. How to Advocate for Your Child: Tips for Parents.',
      url: 'https://www.zerotothree.org/resource/how-to-advocate-for-your-child/',
    },
  ],
};
