import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-hip-ultrasound-needed',
  title: 'Hip Screening Ultrasound Follow-Up',
  category: 'medical',
  searchTerms: ['baby hip ultrasound', 'hip screening baby', 'DDH ultrasound', 'hip dysplasia screening', 'baby needs hip ultrasound', 'breech baby hip scan', 'hip ultrasound 6 weeks', 'why does baby need hip ultrasound', 'developmental hip screening', 'newborn hip exam follow-up'],
  quickAnswer: 'A hip ultrasound may be recommended for your baby based on risk factors for developmental dysplasia of the hip (DDH), including breech presentation, family history of DDH, or findings on physical exam. The ultrasound is painless and helps ensure the hips are developing normally. Early detection and treatment of DDH leads to excellent outcomes.',
  byAge: [
    { ageRange: '0-1 month', context: 'Hip ultrasounds are typically ordered at 4-6 weeks of age. They may be recommended for: breech presentation at any point in the third trimester, family history of DDH (especially in a parent or sibling), clinical hip exam findings (instability, limited abduction, asymmetric skin folds), or swaddling concerns. The ultrasound is painless and takes about 10-15 minutes. It shows the hip joint in detail and can detect dysplasia before it becomes clinically apparent. If the ultrasound is normal, no further screening is needed.' },
    { ageRange: '1-3 months', context: 'If the hip ultrasound shows mild immaturity (Graf type IIa in babies under 3 months), repeat imaging may be recommended in 4-6 weeks, as many of these hips mature on their own. If dysplasia is confirmed, treatment with a Pavlik harness is typically started. The harness is most effective when started early (before 6 months).' },
    { ageRange: '3-6 months', context: 'If the ultrasound was normal at 6 weeks, no further hip screening is needed unless new concerns arise. If treatment was started, follow-up imaging monitors progress. After about 4-6 months of age, X-rays replace ultrasound for hip assessment.' },
    { ageRange: '6-12 months', context: 'Your pediatrician continues to check hips at well-child visits. If DDH was treated and resolved, periodic follow-up may continue to ensure normal hip development as your baby begins to stand and walk.' },
  ],
  whenNormal: ['Hip ultrasound shows normal development (Graf type I)', 'Physical exam shows stable, equal hips', 'Baby moves both legs freely and equally'],
  whenToMention: ['Your baby has risk factors for DDH and you want to ensure screening has been ordered', 'You notice asymmetric leg folds or limited hip movement during diaper changes', 'You have questions about the ultrasound results'],
  whenToActNow: ['Baby suddenly stops moving one leg or seems in pain with hip movement', 'A hip clunk is detected on physical exam requiring urgent specialist referral'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Clinical Practice Guideline: Early Detection of DDH. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/105/4/896/64588/Clinical-Practice-Guideline-Early-Detection-of' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hip Dysplasia. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx' },
  ],
  relatedConcernSlugs: ['hip-dysplasia', 'newborn-clicky-hips'],
};
