import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-after-swimming',
  title: 'Baby Rash After Swimming - Chlorine and Pool Rash',
  category: 'skin',
  searchTerms: ['baby rash after swimming','baby rash from pool','baby chlorine rash','baby skin irritation pool','baby rash after chlorine','swimmer\'s itch baby','baby red skin after pool','toddler rash after swimming','baby pool rash treatment','chlorine allergy baby','baby hot tub rash','baby rash after beach'],
  quickAnswer: 'Rashes after swimming are common in babies and toddlers. Chlorine in pools can irritate the skin (especially in babies with eczema or sensitive skin), causing redness and dryness. Other causes include swimmer\'s itch (from lake or ocean parasites), hot tub rash (Pseudomonas folliculitis from warm water), and heat rash from being in a warm pool. Rinsing your baby with fresh water immediately after swimming and applying moisturizer is the best prevention and treatment for most post-swimming rashes.',
  byAge: [
    { ageRange: '0-6 months', context: 'Most pediatricians recommend waiting until at least 6 months (or when your baby can hold their head well) before taking them in a pool. Young baby skin is more sensitive to chlorine and other chemicals. If you do take a young baby swimming, keep the session short (under 20 minutes), rinse them immediately afterward with clean water, and apply a thick moisturizer. Avoid hot tubs entirely for babies - the water temperature is too hot and the chemical concentration is too high.' },
    { ageRange: '6-12 months', context: 'Chlorine irritation is the most common post-swimming rash. It appears as red, dry, slightly rough skin, especially in areas the swimsuit does not cover. Babies with eczema are particularly vulnerable - chlorine strips the skin\'s natural oils. Apply a barrier of petroleum jelly or moisturizer before swimming to protect the skin. Rinse thoroughly after and reapply moisturizer. If your baby develops itchy red bumps 12-24 hours after swimming in a lake or ocean, it may be swimmer\'s itch from parasites.' },
    { ageRange: '12-24 months', context: 'Toddlers who swim frequently may develop chronic dry skin from regular chlorine exposure. A pre-swim barrier cream and immediate post-swim rinse with mild soap helps. Hot tub rash (red, bumpy, itchy rash in areas covered by the swimsuit) appears 12-48 hours after exposure to contaminated warm water - this usually resolves on its own but can be uncomfortable. Sunburn after swimming is common because water washes off sunscreen - reapply waterproof sunscreen every time your toddler gets out of the water.' },
    { ageRange: '2-3 years', context: 'By this age, most children tolerate pool chemicals well, but sensitive skin and eczema remain risk factors. If your child gets a rash every time they swim, try: applying petroleum jelly before swimming, swimming in saltwater pools instead (gentler on skin), keeping swim sessions shorter, and using a gentle cleanser (not soap) to remove chlorine afterward. If rashes are severe or persistent, talk to your pediatrician about whether a pool alternative would be better for your child\'s skin.' },
  ],
  whenNormal: ['Mild redness and dryness after swimming that resolves with moisturizer within a day','Slightly itchy skin after a chlorinated pool that improves after rinsing and moisturizing','Temporary pink skin after being in warm pool water'],
  whenToMention: ['Your baby gets a significant rash every time they swim despite prevention measures','The rash lasts more than a few days or is worsening','Your baby has a rash with small pus-filled bumps (possible hot tub rash/folliculitis)','Post-swimming rashes are accompanied by ear pain or eye irritation'],
  whenToActNow: ['Rash with fever, spreading redness, or pus after swimming in natural water - possible bacterial skin infection','Signs of allergic reaction after swimming - hives, facial swelling, difficulty breathing','Your baby swallowed pool water and now has persistent vomiting or diarrhea - possible chemical ingestion'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-persistent-eczema','baby-rash-in-skin-folds'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swimming Safety Tips. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Swimming-Safety-Tips.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Swimmer\'s Itch FAQs.', url: 'https://www.cdc.gov/parasites/swimmersitch/faqs.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Skin Care for Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
  ],
};
