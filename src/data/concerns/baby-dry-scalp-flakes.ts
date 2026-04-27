import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dry-scalp-flakes',
  title: 'Baby Dry Scalp and Flaking - Cradle Cap',
  category: 'skin',
  searchTerms: ['baby dry scalp','baby flaky scalp','cradle cap baby','baby dandruff','baby scalp peeling','baby scalp flakes','how to treat cradle cap','baby crusty scalp','baby yellow scales scalp','infantile seborrheic dermatitis','baby scalp buildup','when does cradle cap go away'],
  quickAnswer: 'Dry, flaky skin on your baby\'s scalp is most likely cradle cap (infantile seborrheic dermatitis), which affects up to 70% of babies in the first 3 months. Cradle cap appears as yellow, oily, scaly patches or thick crusty buildup on the scalp. Despite its appearance, it is not painful, itchy, or contagious, and it almost always resolves on its own by 6-12 months. Treatment involves loosening the scales with oil, gentle brushing, and regular shampooing. It is not caused by poor hygiene.',
  byAge: [
    { ageRange: '0-3 months', context: 'Cradle cap is most common and often most noticeable in the first few months. It is caused by overactive sebaceous (oil) glands, possibly stimulated by hormones passed from mother to baby. The scales can be white and flaky or yellow and greasy. To treat: apply coconut oil, olive oil, or mineral oil to the scalp 15-30 minutes before bath time. Gently massage with fingers or a soft brush to loosen scales. Wash with a gentle baby shampoo and use a fine-toothed comb to remove loosened flakes. Do not pick at the scales.' },
    { ageRange: '3-6 months', context: 'Cradle cap may be improving or may still be present. If regular oil treatment and shampooing are not working, your pediatrician may recommend a medicated shampoo (like one containing ketoconazole or selenium sulfide) used once or twice weekly. Cradle cap can also appear behind the ears, on the eyebrows, and in the diaper area. If the scalp is red and inflamed rather than just flaky, it may be eczema rather than typical cradle cap.' },
    { ageRange: '6-12 months', context: 'Most cases of cradle cap resolve by 12 months. If it persists, continues to worsen, or becomes red and irritated, it may be scalp eczema (atopic dermatitis) rather than seborrheic dermatitis. Eczema tends to be itchy (your baby scratches at the scalp) while cradle cap is not. Your pediatrician may recommend a mild topical steroid for eczema-related scalp issues. Continue regular gentle shampooing.' },
    { ageRange: '12+ months', context: 'Cradle cap that persists past 12 months or appears for the first time in toddlerhood should be evaluated. It could be scalp eczema, psoriasis, or a fungal infection. Toddlers who develop dry, flaky scalps may benefit from less frequent shampooing (every 2-3 days rather than daily), a humidifier in dry climates, and a gentle moisturizing shampoo. Avoid adult dandruff shampoos unless specifically recommended by your pediatrician.' },
  ],
  whenNormal: ['Yellow or white flaky patches on your baby\'s scalp in the first few months - classic cradle cap','Scales come off easily with oil treatment and gentle brushing','The scalp is not red, inflamed, or bothering your baby','Cradle cap gradually improves over weeks to months with regular care'],
  whenToMention: ['Cradle cap is severe, thick, and covering most of the scalp despite regular treatment','The scalp appears red, inflamed, or weepy under the scales','Cradle cap has spread to the face, neck, or diaper area','Your baby seems uncomfortable or is scratching at the scalp'],
  whenToActNow: ['The scalp has cracked, oozing, or pus-filled areas suggesting infection','Rapid spreading with fever or your baby seeming unwell','Hair loss in patches alongside the scalp changes - could indicate ringworm or another condition'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-persistent-eczema','baby-hair-not-growing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Seborrheic Dermatitis. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/000963.htm' },
    { org: 'AAP', citation: 'O\'Connor NR, et al. Infantile Seborrheic Dermatitis. American Family Physician. 2008.', url: 'https://pubmed.ncbi.nlm.nih.gov/18350765/' },
  ],
};
