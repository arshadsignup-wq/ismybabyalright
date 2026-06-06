import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-eye-prophylaxis-concerns',
  title: 'Erythromycin Eye Ointment at Birth',
  category: 'medical',
  searchTerms: ['erythromycin eye ointment newborn', 'eye drops at birth', 'newborn eye prophylaxis', 'silver nitrate eyes baby', 'why eye ointment at birth', 'declining eye ointment newborn', 'eye prophylaxis necessary', 'newborn eye treatment', 'antibiotic eye ointment baby', 'ophthalmia neonatorum prevention'],
  quickAnswer: 'Erythromycin eye ointment is applied to newborns\' eyes after birth to prevent ophthalmia neonatorum, a potentially sight-threatening eye infection caused by gonorrhea or chlamydia bacteria that can be transmitted during vaginal delivery. It is required by law in most states. The ointment may temporarily blur your baby\'s vision and cause mild eye irritation.',
  byAge: [
    { ageRange: '0-1 month', context: 'Erythromycin eye ointment is routinely applied to both eyes within 1-2 hours of birth. Its primary purpose is to prevent gonococcal ophthalmia neonatorum, which can cause blindness if untreated. The ointment is also partially effective against chlamydial conjunctivitis. It may temporarily make your baby\'s eyes look greasy and slightly irritated. This resolves within 24-48 hours. Some parents have concerns about the ointment interfering with bonding and early eye contact. If you wish to delay application slightly (still within the recommended window), discuss with your birth team. Most states legally require this treatment.' },
    { ageRange: '1-3 months', context: 'Any effects from the eye ointment have resolved. If your baby develops eye discharge at this age, it is most likely from a blocked tear duct rather than related to the prophylaxis.' },
    { ageRange: '3-6 months', context: 'No ongoing effects from the birth eye ointment.' },
    { ageRange: '6-12 months', context: 'No lasting effects from newborn eye prophylaxis.' },
  ],
  whenNormal: ['Mild eye irritation or goopy eyes for 24-48 hours after the ointment', 'Slightly blurred vision appearance immediately after application', 'Complete resolution of any irritation within a few days'],
  whenToMention: ['You have questions about the purpose or safety of the eye ointment', 'Eye irritation seems to persist beyond 48 hours', 'You are considering declining and want to understand the implications'],
  whenToActNow: ['Significant eye swelling, redness, or thick discharge developing 2-5 days after birth, which could indicate gonococcal infection despite prophylaxis', 'Any severe eye reaction that seems beyond normal mild irritation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Prophylaxis for Gonococcal and Chlamydial Ophthalmia Neonatorum. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/128/5/e1210/30736/Prevention-of-Neonatal-Ophthalmia' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ophthalmia Neonatorum Prevention.', url: 'https://www.cdc.gov/std/treatment-guidelines/ophthalmia-neonatorum.htm' },
  ],
  relatedConcernSlugs: ['newborn-conjunctivitis-sticky-eye', 'newborn-hepatitis-b-vaccine-timing'],
};
