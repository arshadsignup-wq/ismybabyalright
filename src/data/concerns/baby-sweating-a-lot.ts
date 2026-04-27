import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sweating-a-lot',
  title: 'Baby Sweating a Lot - Excessive Sweating',
  category: 'medical',
  searchTerms: ['baby sweating a lot','baby sweats excessively','baby sweating while feeding','baby sweating while sleeping','baby sweating but not hot','infant excessive sweating','baby sweats from head','baby sweating at night','newborn sweating a lot','baby drenched in sweat','hyperhidrosis baby','baby sweating and heart condition'],
  quickAnswer: 'Sweating in babies is common, especially on the head, because babies have a high density of sweat glands on their scalp and their temperature regulation is still developing. Sweating during feeding, sleeping, and crying is usually normal. However, excessive sweating during feeds (especially if the baby also breathes fast or tires easily while eating) can occasionally indicate a heart condition. If your baby sweats heavily with feeds AND has poor weight gain or breathing difficulties, mention it to your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns regulate temperature poorly and can overheat easily. Sweating, especially on the head, is how they cool down. If your baby is dressed too warmly, in a warm room, or is swaddled snugly, sweating is expected. The AAP recommends dressing babies in one layer more than what adults find comfortable - not more. If your baby\'s head is damp with sweat, reduce layers. Excessive sweating during breastfeeding is common because skin-to-skin contact generates warmth.' },
    { ageRange: '3-6 months', context: 'Head sweating remains common at this age. Babies often sweat most during deep sleep because their sweat glands are concentrated on the scalp. If your baby wakes with damp hair, the room may be too warm (ideal is 68-72F) or they may have too many layers. Sweating during feeds is also normal as feeding is hard physical work for babies. If sweating during feeds is accompanied by fast breathing, becoming exhausted after short feeds, or poor weight gain, mention it to your doctor.' },
    { ageRange: '6-12 months', context: 'As babies become more active (crawling, pulling up), sweating during physical activity is normal. Temperature regulation continues to mature. If your baby sweats excessively even at rest in a comfortable environment, and especially if combined with other symptoms like unusual fatigue, rapid heartbeat, or heat intolerance, an evaluation may be helpful. These situations are uncommon.' },
    { ageRange: '12-36 months', context: 'Toddlers are constantly moving and often sweat from activity, which is normal. Night sweats can occur during illness, teething, or in a warm room. If night sweats are drenching (requiring clothing or sheet changes) and occur without explanation, mention it to your pediatrician. Localized sweating (one side of the body or hands/feet only) is unusual and warrants evaluation.' },
  ],
  whenNormal: ['Your baby\'s head sweats during feeding or sleeping but they are otherwise healthy and growing well','Sweating occurs in a warm room or with too many layers and improves when you cool the environment','Your baby sweats when crying, active, or during skin-to-skin contact','Your toddler sweats during active play and is otherwise thriving'],
  whenToMention: ['Your baby sweats heavily during every feed and also tires quickly, breathes fast, or gains weight slowly','Excessive sweating occurs even in a cool, comfortable environment','Night sweats are drenching and happening regularly without fever or illness','Sweating is localized to one area of the body'],
  whenToActNow: ['Heavy sweating combined with blue lips, rapid breathing, and poor feeding - this combination could indicate a heart condition','Your baby is sweating profusely and is lethargic, unusually pale, or has a very rapid heartbeat','Your baby is showing signs of heat exhaustion: extreme fussiness, flushed skin, rapid breathing, and reduced urination'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sweating-during-sleep','head-sweating-during-sleep','baby-heart-murmur'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Overheating and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Congenital Heart Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Hyperhidrosis. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/007259.htm' },
  ],
};
