import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-circumcision-healing',
  title: 'Circumcision Aftercare and Healing',
  category: 'medical',
  searchTerms: ['circumcision healing baby', 'circumcision aftercare newborn', 'baby circumcision care', 'circumcision recovery time', 'circumcision yellow crust normal', 'baby penis after circumcision', 'how to care for circumcision', 'circumcision healing stages', 'petroleum jelly circumcision', 'baby circumcision scab'],
  quickAnswer:
    'Normal circumcision healing involves mild swelling, a yellowish crust or film over the healing area (this is normal and not pus), and gradual healing over 7-10 days. Apply petroleum jelly or antibiotic ointment (as directed) with each diaper change to prevent the healing tissue from sticking to the diaper. The area may look red or raw for the first few days, which is expected.',
  byAge: [
    { ageRange: '0-1 month', context: 'After circumcision, the area will look red and swollen. A yellowish film or crust on the glans (head of the penis) is a normal part of healing and should not be removed, as it is not infection. Apply a generous amount of petroleum jelly or the ointment recommended by your doctor to the tip of the penis and inside the diaper with each change to prevent sticking. If a Plastibell ring was used, it should fall off on its own within 5-8 days; do not pull it off. The area typically heals fully within 7-10 days. Gently clean the area with warm water during baths. Loose-fitting diapers can help with comfort.' },
    { ageRange: '1-3 months', context: 'The circumcision should be fully healed. The skin may still look slightly different in color or texture at the healing site, which is normal. Gently retract the remaining skin during baths to keep the area clean, as adhesions can sometimes form between the shaft skin and the glans. Your pediatrician will check the circumcision at well-child visits.' },
    { ageRange: '3-6 months', context: 'The circumcision site should look fully healed with normal skin. If you notice the shaft skin has readhered to the glans (penile adhesions), mention it to your pediatrician. Gentle retraction during baths helps prevent this.' },
    { ageRange: '6-12 months', context: 'The penis should appear normal. Continue gentle hygiene during baths. Mild penile adhesions are common and often resolve on their own with growth and gentle retraction.' },
  ],
  whenNormal: ['Mild redness and swelling for the first few days after circumcision', 'Yellowish crust or film on the healing glans (this is granulation tissue, not pus)', 'Small amount of blood-tinged drainage on the diaper', 'Healing completes within 7-10 days'],
  whenToMention: ['The Plastibell ring has not fallen off after 10 days', 'You notice skin adhesions forming between the shaft skin and the glans', 'You are unsure about proper circumcision care'],
  whenToActNow: ['Active bleeding that does not stop with gentle pressure for 10 minutes', 'Increasing redness, swelling, warmth, or pus-like discharge spreading beyond the circumcision site, which could indicate infection', 'Baby is not urinating within 12 hours after circumcision or has fever'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Circumcision Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Caring-For-Your-Sons-Penis.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Task Force on Circumcision. Pediatrics. 2012;130(3):e756-e785.', url: 'https://publications.aap.org/pediatrics/article/130/3/e756/30225/Male-Circumcision' },
  ],
  relatedConcernSlugs: ['newborn-circumcision-complications', 'circumcision-healing-complications'],
};
