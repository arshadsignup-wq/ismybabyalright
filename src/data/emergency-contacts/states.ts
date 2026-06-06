export interface StateEmergencyContact {
  state: string;
  stateAbbr: string;
  poisonControl: { phone: string; name: string };
  childAbuseHotline: { phone: string; name: string };
  childrensMedicalHotline?: { phone: string; name: string };
  additionalResources?: { name: string; phone?: string; url?: string }[];
}

export interface NationalContact {
  name: string;
  phone: string;
  description: string;
  available: string;
}

/**
 * National emergency contacts available 24/7 across the United States.
 */
export const nationalContacts: NationalContact[] = [
  {
    name: "Emergency Services",
    phone: "911",
    description:
      "For life-threatening emergencies. Call if your child is not breathing, is unconscious, having a seizure, or has a severe injury.",
    available: "24/7",
  },
  {
    name: "Poison Control",
    phone: "1-800-222-1222",
    description:
      "Free, confidential expert advice for poison emergencies. Connects to your local poison center. Call for any ingestion of medications, chemicals, plants, or household products.",
    available: "24/7",
  },
  {
    name: "Childhelp National Child Abuse Hotline",
    phone: "1-800-422-4453",
    description:
      "Professional crisis counselors for child abuse situations. Provides intervention, information, and referrals to emergency, social service, and support resources.",
    available: "24/7",
  },
  {
    name: "Postpartum Support International (PSI) Warmline",
    phone: "1-800-944-4773",
    description:
      "Support for new and expecting parents experiencing perinatal mood and anxiety disorders. You can also text 'HELP' to 988.",
    available: "24/7",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    phone: "988",
    description:
      "Free, confidential support for people in emotional distress or suicidal crisis. Call or text 988.",
    available: "24/7",
  },
  {
    name: "Crisis Text Line",
    phone: "741741",
    description:
      "Text HOME to 741741 to connect with a trained crisis counselor. Free support for any type of crisis.",
    available: "24/7",
  },
];

/**
 * Emergency contacts for all 50 US states and the District of Columbia.
 *
 * Poison Control: The national number 1-800-222-1222 routes to the local
 * poison center in every state. Local center names are provided.
 *
 * Child Abuse Hotline: The national Childhelp number 1-800-422-4453 is
 * available everywhere. State-specific CPS agency names are listed.
 *
 * Children's Medical Hotline: Included where the state offers a nurse
 * advice line or children's hospital call center.
 *
 * Additional Resources: 1-2 state-specific resources such as children's
 * hospitals, family resource centers, or state health programs.
 */
export const stateEmergencyContacts: StateEmergencyContact[] = [
  {
    state: "Alabama",
    stateAbbr: "AL",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Alabama Poison Information Center",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Alabama Department of Human Resources (DHR)",
    },
    childrensMedicalHotline: {
      phone: "1-205-638-9100",
      name: "Children's of Alabama Nurse Line",
    },
    additionalResources: [
      {
        name: "Children's of Alabama",
        phone: "1-205-638-9100",
        url: "https://www.childrensal.org",
      },
      {
        name: "Alabama Department of Public Health - Child Health",
        url: "https://www.alabamapublichealth.gov/newborn/index.html",
      },
    ],
  },
  {
    state: "Alaska",
    stateAbbr: "AK",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Alaska Poison Control System (Oregon Health & Science University)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Alaska Office of Children's Services (OCS)",
    },
    additionalResources: [
      {
        name: "Providence Alaska Children's Hospital",
        phone: "1-907-212-3131",
        url: "https://www.providence.org/locations/ak/providence-alaska-medical-center",
      },
      {
        name: "Alaska 2-1-1 (Community Resources)",
        phone: "211",
        url: "https://www.alaska211.org",
      },
    ],
  },
  {
    state: "Arizona",
    stateAbbr: "AZ",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Arizona Poison and Drug Information Center / Banner Poison and Drug Information Center",
    },
    childAbuseHotline: {
      phone: "1-888-767-2445",
      name: "Arizona Department of Child Safety (DCS)",
    },
    childrensMedicalHotline: {
      phone: "1-602-933-1000",
      name: "Phoenix Children's Hospital",
    },
    additionalResources: [
      {
        name: "Phoenix Children's Hospital",
        phone: "1-602-933-1000",
        url: "https://www.phoenixchildrens.org",
      },
      {
        name: "Arizona Department of Health Services - Children's Health",
        url: "https://www.azdhs.gov/prevention/womens-childrens-health/index.php",
      },
    ],
  },
  {
    state: "Arkansas",
    stateAbbr: "AR",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Arkansas Poison and Drug Information Center",
    },
    childAbuseHotline: {
      phone: "1-800-482-5964",
      name: "Arkansas Department of Human Services - Division of Children and Family Services (DCFS)",
    },
    childrensMedicalHotline: {
      phone: "1-501-364-1100",
      name: "Arkansas Children's Hospital",
    },
    additionalResources: [
      {
        name: "Arkansas Children's Hospital",
        phone: "1-501-364-1100",
        url: "https://www.archildrens.org",
      },
      {
        name: "ARKids First (Children's Health Insurance)",
        phone: "1-888-474-8275",
        url: "https://humanservices.arkansas.gov/divisions/medical-services/arkids-first/",
      },
    ],
  },
  {
    state: "California",
    stateAbbr: "CA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "California Poison Control System",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "California Department of Social Services - Child Protective Services (CPS)",
    },
    childrensMedicalHotline: {
      phone: "1-855-724-5437",
      name: "Children's Hospital Los Angeles Nurse Line",
    },
    additionalResources: [
      {
        name: "Children's Hospital Los Angeles",
        phone: "1-323-660-2450",
        url: "https://www.chla.org",
      },
      {
        name: "UCSF Benioff Children's Hospitals",
        phone: "1-415-476-1000",
        url: "https://www.ucsfbenioffchildrens.org",
      },
    ],
  },
  {
    state: "Colorado",
    stateAbbr: "CO",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Rocky Mountain Poison and Drug Safety",
    },
    childAbuseHotline: {
      phone: "1-844-264-5437",
      name: "Colorado Department of Human Services - Child Welfare",
    },
    childrensMedicalHotline: {
      phone: "1-720-777-0123",
      name: "Children's Hospital Colorado ParentSmart Healthline",
    },
    additionalResources: [
      {
        name: "Children's Hospital Colorado",
        phone: "1-720-777-1234",
        url: "https://www.childrenscolorado.org",
      },
      {
        name: "Colorado Crisis Services",
        phone: "1-844-493-8255",
        url: "https://coloradocrisisservices.org",
      },
    ],
  },
  {
    state: "Connecticut",
    stateAbbr: "CT",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Connecticut Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-800-842-2288",
      name: "Connecticut Department of Children and Families (DCF)",
    },
    childrensMedicalHotline: {
      phone: "1-860-545-9000",
      name: "Connecticut Children's Medical Center",
    },
    additionalResources: [
      {
        name: "Connecticut Children's Medical Center",
        phone: "1-860-545-9000",
        url: "https://www.connecticutchildrens.org",
      },
      {
        name: "Connecticut 2-1-1 (United Way)",
        phone: "211",
        url: "https://www.211ct.org",
      },
    ],
  },
  {
    state: "Delaware",
    stateAbbr: "DE",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "The Poison Control Center at Children's Hospital of Philadelphia",
    },
    childAbuseHotline: {
      phone: "1-800-292-9582",
      name: "Delaware Division of Family Services (DFS)",
    },
    additionalResources: [
      {
        name: "Nemours Children's Health, Delaware",
        phone: "1-302-651-4000",
        url: "https://www.nemours.org",
      },
      {
        name: "Delaware Healthy Children Program",
        url: "https://dhss.delaware.gov/dhss/dmma/dhcp.html",
      },
    ],
  },
  {
    state: "District of Columbia",
    stateAbbr: "DC",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "National Capital Poison Center",
    },
    childAbuseHotline: {
      phone: "1-202-671-7233",
      name: "DC Child and Family Services Agency (CFSA)",
    },
    childrensMedicalHotline: {
      phone: "1-202-476-5000",
      name: "Children's National Hospital",
    },
    additionalResources: [
      {
        name: "Children's National Hospital",
        phone: "1-202-476-5000",
        url: "https://childrensnational.org",
      },
      {
        name: "DC Healthy Families",
        url: "https://dchealth.dc.gov/service/healthy-families",
      },
    ],
  },
  {
    state: "Florida",
    stateAbbr: "FL",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Florida Poison Information Center",
    },
    childAbuseHotline: {
      phone: "1-800-962-2873",
      name: "Florida Department of Children and Families (DCF) Abuse Hotline",
    },
    childrensMedicalHotline: {
      phone: "1-800-654-4440",
      name: "Florida Children's Medical Services",
    },
    additionalResources: [
      {
        name: "Nicklaus Children's Hospital (Miami)",
        phone: "1-305-666-6511",
        url: "https://www.nicklauschildrens.org",
      },
      {
        name: "Johns Hopkins All Children's Hospital (St. Petersburg)",
        phone: "1-727-898-7451",
        url: "https://www.hopkinsallchildrens.org",
      },
    ],
  },
  {
    state: "Georgia",
    stateAbbr: "GA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Georgia Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Georgia Division of Family & Children Services (DFCS)",
    },
    childrensMedicalHotline: {
      phone: "1-404-785-5437",
      name: "Children's Healthcare of Atlanta Nurse Advice Line",
    },
    additionalResources: [
      {
        name: "Children's Healthcare of Atlanta",
        phone: "1-404-785-5252",
        url: "https://www.choa.org",
      },
      {
        name: "PeachCare for Kids (Children's Health Insurance)",
        phone: "1-877-427-3224",
        url: "https://dch.georgia.gov/peachcare-kids",
      },
    ],
  },
  {
    state: "Hawaii",
    stateAbbr: "HI",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Hawaii Poison Center (Rocky Mountain Poison Center)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Hawaii Department of Human Services - Child Welfare Services",
    },
    additionalResources: [
      {
        name: "Kapi'olani Medical Center for Women & Children",
        phone: "1-808-983-6000",
        url: "https://www.hawaiipacifichealth.org/kapiolani",
      },
      {
        name: "Hawaii PALAMA (Healthy Start Program)",
        url: "https://health.hawaii.gov/mchb/home/healthy-start/",
      },
    ],
  },
  {
    state: "Idaho",
    stateAbbr: "ID",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Idaho Poison Center (Rocky Mountain Poison Center)",
    },
    childAbuseHotline: {
      phone: "1-855-552-5437",
      name: "Idaho Department of Health and Welfare - Child Protection",
    },
    additionalResources: [
      {
        name: "St. Luke's Children's Hospital",
        phone: "1-208-381-2222",
        url: "https://www.stlukesonline.org/communities-and-locations/facilities/hospitals-and-medical-centers/st-lukes-childrens-hospital",
      },
      {
        name: "Idaho CareLine (2-1-1)",
        phone: "211",
        url: "https://www.211.idaho.gov",
      },
    ],
  },
  {
    state: "Illinois",
    stateAbbr: "IL",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Illinois Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-252-2873",
      name: "Illinois Department of Children and Family Services (DCFS)",
    },
    childrensMedicalHotline: {
      phone: "1-773-880-4000",
      name: "Lurie Children's Hospital of Chicago",
    },
    additionalResources: [
      {
        name: "Ann & Robert H. Lurie Children's Hospital of Chicago",
        phone: "1-773-880-4000",
        url: "https://www.luriechildrens.org",
      },
      {
        name: "All Kids (Children's Health Insurance)",
        phone: "1-866-255-5437",
        url: "https://www.illinois.gov/hfs/MedicalPrograms/AllKids/Pages/default.aspx",
      },
    ],
  },
  {
    state: "Indiana",
    stateAbbr: "IN",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Indiana Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-800-5556",
      name: "Indiana Department of Child Services (DCS)",
    },
    childrensMedicalHotline: {
      phone: "1-317-944-5000",
      name: "Riley Children's Health Nurse Line",
    },
    additionalResources: [
      {
        name: "Riley Hospital for Children at IU Health",
        phone: "1-317-944-5000",
        url: "https://www.rileychildrens.org",
      },
      {
        name: "Hoosier Healthwise (Children's Health Coverage)",
        phone: "1-800-889-9949",
        url: "https://www.in.gov/medicaid/members/hoosier-healthwise/",
      },
    ],
  },
  {
    state: "Iowa",
    stateAbbr: "IA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Iowa Statewide Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-800-362-2178",
      name: "Iowa Department of Human Services - Child Protective Services",
    },
    additionalResources: [
      {
        name: "University of Iowa Stead Family Children's Hospital",
        phone: "1-319-356-1616",
        url: "https://uichildrens.org",
      },
      {
        name: "Blank Children's Hospital (Des Moines)",
        phone: "1-515-241-6161",
        url: "https://www.unitypoint.org/blankchildrens",
      },
    ],
  },
  {
    state: "Kansas",
    stateAbbr: "KS",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Kansas Poison Control Center (University of Kansas Health System)",
    },
    childAbuseHotline: {
      phone: "1-800-922-5330",
      name: "Kansas Department for Children and Families (DCF)",
    },
    childrensMedicalHotline: {
      phone: "1-913-588-6000",
      name: "Children's Mercy Kansas City Nurse Line",
    },
    additionalResources: [
      {
        name: "Children's Mercy Kansas City",
        phone: "1-816-234-3000",
        url: "https://www.childrensmercy.org",
      },
      {
        name: "KanCare (Children's Medicaid)",
        phone: "1-866-305-5147",
        url: "https://www.kancare.ks.gov",
      },
    ],
  },
  {
    state: "Kentucky",
    stateAbbr: "KY",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Kentucky Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-877-597-2331",
      name: "Kentucky Cabinet for Health and Family Services - Department for Community Based Services",
    },
    childrensMedicalHotline: {
      phone: "1-859-257-1000",
      name: "Kentucky Children's Hospital",
    },
    additionalResources: [
      {
        name: "Norton Children's Hospital (Louisville)",
        phone: "1-502-629-6000",
        url: "https://nortonchildrens.com",
      },
      {
        name: "KCHIP (Kentucky Children's Health Insurance)",
        phone: "1-877-524-4718",
        url: "https://chfs.ky.gov/agencies/dms/Pages/kchip.aspx",
      },
    ],
  },
  {
    state: "Louisiana",
    stateAbbr: "LA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Louisiana Poison Center",
    },
    childAbuseHotline: {
      phone: "1-855-452-5437",
      name: "Louisiana Department of Children & Family Services (DCFS)",
    },
    childrensMedicalHotline: {
      phone: "1-504-899-9511",
      name: "Children's Hospital New Orleans",
    },
    additionalResources: [
      {
        name: "Children's Hospital New Orleans",
        phone: "1-504-899-9511",
        url: "https://www.chnola.org",
      },
      {
        name: "LaCHIP (Louisiana Children's Health Insurance)",
        phone: "1-877-252-2447",
        url: "https://ldh.la.gov/lachip",
      },
    ],
  },
  {
    state: "Maine",
    stateAbbr: "ME",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Northern New England Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-452-1999",
      name: "Maine Department of Health and Human Services - Child Protective Services",
    },
    additionalResources: [
      {
        name: "Barbara Bush Children's Hospital at Maine Medical Center",
        phone: "1-207-662-0111",
        url: "https://mainehealth.org/barbara-bush-childrens-hospital",
      },
      {
        name: "Maine 2-1-1",
        phone: "211",
        url: "https://www.211maine.org",
      },
    ],
  },
  {
    state: "Maryland",
    stateAbbr: "MD",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Maryland Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Maryland Department of Human Services - Social Services Administration",
    },
    childrensMedicalHotline: {
      phone: "1-410-955-5000",
      name: "Johns Hopkins Children's Center",
    },
    additionalResources: [
      {
        name: "Johns Hopkins Children's Center",
        phone: "1-410-955-5000",
        url: "https://www.hopkinsmedicine.org/johns-hopkins-childrens-center",
      },
      {
        name: "Maryland Children's Health Program (MCHP)",
        phone: "1-800-456-8900",
        url: "https://health.maryland.gov/mmcp/Pages/Maryland-Childrens-Health-Program.aspx",
      },
    ],
  },
  {
    state: "Massachusetts",
    stateAbbr: "MA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Regional Center for Poison Control & Prevention (Boston)",
    },
    childAbuseHotline: {
      phone: "1-800-792-5200",
      name: "Massachusetts Department of Children and Families (DCF)",
    },
    childrensMedicalHotline: {
      phone: "1-617-355-6000",
      name: "Boston Children's Hospital",
    },
    additionalResources: [
      {
        name: "Boston Children's Hospital",
        phone: "1-617-355-6000",
        url: "https://www.childrenshospital.org",
      },
      {
        name: "MassHealth (Children's Medicaid)",
        phone: "1-800-841-2900",
        url: "https://www.mass.gov/masshealth",
      },
    ],
  },
  {
    state: "Michigan",
    stateAbbr: "MI",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Michigan Poison Center (Children's Hospital of Michigan)",
    },
    childAbuseHotline: {
      phone: "1-855-444-3911",
      name: "Michigan Department of Health and Human Services - Children's Protective Services",
    },
    childrensMedicalHotline: {
      phone: "1-313-745-5437",
      name: "Children's Hospital of Michigan Nurse Line",
    },
    additionalResources: [
      {
        name: "C.S. Mott Children's Hospital (Ann Arbor)",
        phone: "1-734-936-4000",
        url: "https://www.mottchildren.org",
      },
      {
        name: "MIChild (Children's Health Insurance)",
        phone: "1-888-988-6300",
        url: "https://www.michigan.gov/mdhhs/assistance-programs/medicaid/michild",
      },
    ],
  },
  {
    state: "Minnesota",
    stateAbbr: "MN",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Minnesota Poison Control System (Hennepin Healthcare)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Minnesota Department of Human Services - Child Protection",
    },
    childrensMedicalHotline: {
      phone: "1-855-977-6378",
      name: "Children's Minnesota Nurse Consulting Line",
    },
    additionalResources: [
      {
        name: "Children's Minnesota",
        phone: "1-612-813-6111",
        url: "https://www.childrensmn.org",
      },
      {
        name: "MinnesotaCare (Children's Health Coverage)",
        phone: "1-800-657-3672",
        url: "https://mn.gov/dhs/people-we-serve/children-and-families/health-care/health-care-programs/programs-and-services/minnesotacare.jsp",
      },
    ],
  },
  {
    state: "Mississippi",
    stateAbbr: "MS",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Mississippi Poison Control Center (University of Mississippi Medical Center)",
    },
    childAbuseHotline: {
      phone: "1-800-222-8000",
      name: "Mississippi Department of Child Protection Services",
    },
    childrensMedicalHotline: {
      phone: "1-601-984-1000",
      name: "Batson Children's Hospital at UMMC",
    },
    additionalResources: [
      {
        name: "Batson Children's Hospital",
        phone: "1-601-984-1000",
        url: "https://www.umc.edu/Healthcare/Childrens/Home.html",
      },
      {
        name: "Mississippi CHIP (Children's Health Insurance)",
        phone: "1-800-421-2408",
        url: "https://medicaid.ms.gov/chip/",
      },
    ],
  },
  {
    state: "Missouri",
    stateAbbr: "MO",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Missouri Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-392-3738",
      name: "Missouri Department of Social Services - Children's Division",
    },
    childrensMedicalHotline: {
      phone: "1-314-454-6000",
      name: "St. Louis Children's Hospital",
    },
    additionalResources: [
      {
        name: "St. Louis Children's Hospital",
        phone: "1-314-454-6000",
        url: "https://www.stlouischildrens.org",
      },
      {
        name: "Children's Mercy Kansas City",
        phone: "1-816-234-3000",
        url: "https://www.childrensmercy.org",
      },
    ],
  },
  {
    state: "Montana",
    stateAbbr: "MT",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Montana Poison Center (Rocky Mountain Poison and Drug Safety)",
    },
    childAbuseHotline: {
      phone: "1-866-820-5437",
      name: "Montana Department of Public Health and Human Services - Child and Family Services Division",
    },
    additionalResources: [
      {
        name: "Shodair Children's Hospital",
        phone: "1-406-444-7500",
        url: "https://www.shodair.org",
      },
      {
        name: "Montana 2-1-1",
        phone: "211",
        url: "https://www.montana211.org",
      },
    ],
  },
  {
    state: "Nebraska",
    stateAbbr: "NE",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Nebraska Regional Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-652-1999",
      name: "Nebraska Department of Health and Human Services - Child Protective Services",
    },
    childrensMedicalHotline: {
      phone: "1-402-955-5400",
      name: "Children's Hospital & Medical Center (Omaha)",
    },
    additionalResources: [
      {
        name: "Children's Hospital & Medical Center (Omaha)",
        phone: "1-402-955-5400",
        url: "https://www.childrensomaha.org",
      },
      {
        name: "Kids Connection (Children's Medicaid)",
        phone: "1-855-632-7633",
        url: "https://dhhs.ne.gov/Pages/Medicaid-Eligibility.aspx",
      },
    ],
  },
  {
    state: "Nevada",
    stateAbbr: "NV",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Nevada Poison Center (Oregon Health & Science University / Rocky Mountain)",
    },
    childAbuseHotline: {
      phone: "1-833-900-7233",
      name: "Nevada Division of Child and Family Services (DCFS)",
    },
    additionalResources: [
      {
        name: "Renown Children's Hospital (Reno)",
        phone: "1-775-982-4100",
        url: "https://www.renown.org/services/renown-childrens-hospital",
      },
      {
        name: "Nevada Check Up (Children's Health Insurance)",
        phone: "1-877-543-7669",
        url: "https://dhcfp.nv.gov/Programs/MCO/NVCheckUp/",
      },
    ],
  },
  {
    state: "New Hampshire",
    stateAbbr: "NH",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Northern New England Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-894-5533",
      name: "New Hampshire Division for Children, Youth and Families (DCYF)",
    },
    additionalResources: [
      {
        name: "Children's Hospital at Dartmouth-Hitchcock (CHaD)",
        phone: "1-603-650-5000",
        url: "https://www.chadkids.org",
      },
      {
        name: "NH Healthy Kids (Children's Health Insurance)",
        phone: "1-877-464-2447",
        url: "https://www.nhhealthykids.com",
      },
    ],
  },
  {
    state: "New Jersey",
    stateAbbr: "NJ",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "New Jersey Poison Control Center (Rutgers)",
    },
    childAbuseHotline: {
      phone: "1-877-652-2873",
      name: "New Jersey Department of Children and Families (DCF)",
    },
    childrensMedicalHotline: {
      phone: "1-973-971-5000",
      name: "Goryeb Children's Hospital at Morristown Medical Center",
    },
    additionalResources: [
      {
        name: "Bristol-Myers Squibb Children's Hospital at Robert Wood Johnson",
        phone: "1-732-745-8600",
        url: "https://www.rwjbh.org/bristol-myers-squibb-children-s-hospital/",
      },
      {
        name: "NJ FamilyCare (Children's Health Insurance)",
        phone: "1-800-701-0710",
        url: "https://www.njfamilycare.org",
      },
    ],
  },
  {
    state: "New Mexico",
    stateAbbr: "NM",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "New Mexico Poison and Drug Information Center",
    },
    childAbuseHotline: {
      phone: "1-855-333-7233",
      name: "New Mexico Children, Youth and Families Department (CYFD)",
    },
    additionalResources: [
      {
        name: "UNM Children's Hospital",
        phone: "1-505-272-2111",
        url: "https://hospitals.health.unm.edu/childrens/",
      },
      {
        name: "New Mexico 2-1-1",
        phone: "211",
        url: "https://www.nm211.org",
      },
    ],
  },
  {
    state: "New York",
    stateAbbr: "NY",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Upstate New York Poison Center / New York City Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-800-342-3720",
      name: "New York State Office of Children and Family Services (OCFS)",
    },
    childrensMedicalHotline: {
      phone: "1-212-305-6628",
      name: "Morgan Stanley Children's Hospital (Columbia)",
    },
    additionalResources: [
      {
        name: "NewYork-Presbyterian Morgan Stanley Children's Hospital",
        phone: "1-212-305-6628",
        url: "https://www.nyp.org/morganstanley",
      },
      {
        name: "Child Health Plus (NY Children's Health Insurance)",
        phone: "1-800-698-4543",
        url: "https://www.health.ny.gov/health_care/child_health_plus/",
      },
    ],
  },
  {
    state: "North Carolina",
    stateAbbr: "NC",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Carolinas Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "North Carolina Department of Health and Human Services - Division of Social Services",
    },
    childrensMedicalHotline: {
      phone: "1-704-381-2000",
      name: "Atrium Health Levine Children's Nurse Line",
    },
    additionalResources: [
      {
        name: "Duke Children's Hospital",
        phone: "1-919-668-4000",
        url: "https://www.dukechildrens.org",
      },
      {
        name: "NC Health Choice for Children",
        phone: "1-800-367-2229",
        url: "https://medicaid.ncdhhs.gov/nc-health-choice",
      },
    ],
  },
  {
    state: "North Dakota",
    stateAbbr: "ND",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "North Dakota Poison Center (Hennepin Healthcare)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "North Dakota Department of Human Services - Children and Family Services",
    },
    additionalResources: [
      {
        name: "Sanford Children's Hospital (Fargo)",
        phone: "1-701-234-2000",
        url: "https://www.sanfordhealth.org/locations/hospitals/sanford-medical-center-fargo",
      },
      {
        name: "Healthy Steps (ND Children's Health Insurance)",
        phone: "1-800-755-2604",
        url: "https://www.nd.gov/dhs/services/medicalserv/medicaid/healthysteps.html",
      },
    ],
  },
  {
    state: "Ohio",
    stateAbbr: "OH",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Central Ohio Poison Center",
    },
    childAbuseHotline: {
      phone: "1-855-642-4453",
      name: "Ohio Department of Job and Family Services - Public Children Services",
    },
    childrensMedicalHotline: {
      phone: "1-614-722-2000",
      name: "Nationwide Children's Hospital",
    },
    additionalResources: [
      {
        name: "Nationwide Children's Hospital (Columbus)",
        phone: "1-614-722-2000",
        url: "https://www.nationwidechildrens.org",
      },
      {
        name: "Cincinnati Children's Hospital Medical Center",
        phone: "1-513-636-4200",
        url: "https://www.cincinnatichildrens.org",
      },
    ],
  },
  {
    state: "Oklahoma",
    stateAbbr: "OK",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Oklahoma Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-800-522-3511",
      name: "Oklahoma Department of Human Services - Child Welfare",
    },
    childrensMedicalHotline: {
      phone: "1-405-271-4700",
      name: "The Children's Hospital at OU Medical Center",
    },
    additionalResources: [
      {
        name: "The Children's Hospital at OU Medical Center",
        phone: "1-405-271-4700",
        url: "https://www.ouhealth.com/childrens-hospital",
      },
      {
        name: "SoonerCare (Children's Medicaid)",
        phone: "1-800-987-7767",
        url: "https://oklahoma.gov/ohca/individuals/programs/soonercare.html",
      },
    ],
  },
  {
    state: "Oregon",
    stateAbbr: "OR",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Oregon Poison Center (Oregon Health & Science University)",
    },
    childAbuseHotline: {
      phone: "1-855-503-7233",
      name: "Oregon Department of Human Services - Child Welfare",
    },
    childrensMedicalHotline: {
      phone: "1-503-346-0640",
      name: "OHSU Doernbecher Children's Hospital",
    },
    additionalResources: [
      {
        name: "OHSU Doernbecher Children's Hospital",
        phone: "1-503-346-0640",
        url: "https://www.ohsu.edu/doernbecher",
      },
      {
        name: "Oregon Health Plan (Children's Coverage)",
        phone: "1-800-699-9075",
        url: "https://www.oregon.gov/oha/hsd/ohp/Pages/index.aspx",
      },
    ],
  },
  {
    state: "Pennsylvania",
    stateAbbr: "PA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "The Poison Control Center at Children's Hospital of Philadelphia / Pittsburgh Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-932-0313",
      name: "Pennsylvania ChildLine (Department of Human Services)",
    },
    childrensMedicalHotline: {
      phone: "1-215-590-1000",
      name: "Children's Hospital of Philadelphia (CHOP)",
    },
    additionalResources: [
      {
        name: "Children's Hospital of Philadelphia (CHOP)",
        phone: "1-215-590-1000",
        url: "https://www.chop.edu",
      },
      {
        name: "UPMC Children's Hospital of Pittsburgh",
        phone: "1-412-692-5325",
        url: "https://www.chp.edu",
      },
    ],
  },
  {
    state: "Rhode Island",
    stateAbbr: "RI",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Regional Center for Poison Control & Prevention (Boston)",
    },
    childAbuseHotline: {
      phone: "1-800-742-4453",
      name: "Rhode Island Department of Children, Youth and Families (DCYF)",
    },
    additionalResources: [
      {
        name: "Hasbro Children's Hospital",
        phone: "1-401-444-4000",
        url: "https://www.lifespan.org/locations/hasbro-childrens-hospital",
      },
      {
        name: "RIte Care (Children's Health Insurance)",
        phone: "1-401-462-5300",
        url: "https://eohhs.ri.gov/Consumer/FamiliesWithChildren/HealthInsuranceforChildren.aspx",
      },
    ],
  },
  {
    state: "South Carolina",
    stateAbbr: "SC",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Palmetto Poison Center",
    },
    childAbuseHotline: {
      phone: "1-888-227-3487",
      name: "South Carolina Department of Social Services - Child Protective Services",
    },
    childrensMedicalHotline: {
      phone: "1-843-876-7000",
      name: "MUSC Shawn Jenkins Children's Hospital",
    },
    additionalResources: [
      {
        name: "MUSC Shawn Jenkins Children's Hospital (Charleston)",
        phone: "1-843-876-7000",
        url: "https://musckids.org",
      },
      {
        name: "Prisma Health Children's Hospital (Greenville)",
        phone: "1-864-455-7000",
        url: "https://www.prismahealth.org/childrens-hospital",
      },
    ],
  },
  {
    state: "South Dakota",
    stateAbbr: "SD",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "South Dakota Poison Center (Hennepin Healthcare / Minnesota Poison Control)",
    },
    childAbuseHotline: {
      phone: "1-877-244-0864",
      name: "South Dakota Department of Social Services - Child Protective Services",
    },
    additionalResources: [
      {
        name: "Sanford Children's Hospital (Sioux Falls)",
        phone: "1-605-333-1000",
        url: "https://www.sanfordhealth.org/locations/hospitals/sanford-usd-medical-center",
      },
      {
        name: "South Dakota 2-1-1 Helpline",
        phone: "211",
        url: "https://www.helplinecenter.org/211",
      },
    ],
  },
  {
    state: "Tennessee",
    stateAbbr: "TN",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Tennessee Poison Center (Vanderbilt)",
    },
    childAbuseHotline: {
      phone: "1-877-237-0004",
      name: "Tennessee Department of Children's Services (DCS)",
    },
    childrensMedicalHotline: {
      phone: "1-615-936-1000",
      name: "Monroe Carell Jr. Children's Hospital at Vanderbilt",
    },
    additionalResources: [
      {
        name: "Monroe Carell Jr. Children's Hospital at Vanderbilt",
        phone: "1-615-936-1000",
        url: "https://www.childrenshospitalvanderbilt.org",
      },
      {
        name: "Le Bonheur Children's Hospital (Memphis)",
        phone: "1-901-287-5437",
        url: "https://www.lebonheur.org",
      },
    ],
  },
  {
    state: "Texas",
    stateAbbr: "TX",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Texas Poison Center Network",
    },
    childAbuseHotline: {
      phone: "1-800-252-5400",
      name: "Texas Department of Family and Protective Services (DFPS)",
    },
    childrensMedicalHotline: {
      phone: "1-832-824-1000",
      name: "Texas Children's Hospital Nurse Line",
    },
    additionalResources: [
      {
        name: "Texas Children's Hospital (Houston)",
        phone: "1-832-824-1000",
        url: "https://www.texaschildrens.org",
      },
      {
        name: "Children's Health (Dallas)",
        phone: "1-214-456-7000",
        url: "https://www.childrens.com",
      },
    ],
  },
  {
    state: "Utah",
    stateAbbr: "UT",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Utah Poison Control Center",
    },
    childAbuseHotline: {
      phone: "1-855-323-3237",
      name: "Utah Division of Child and Family Services (DCFS)",
    },
    childrensMedicalHotline: {
      phone: "1-801-662-1000",
      name: "Primary Children's Hospital",
    },
    additionalResources: [
      {
        name: "Primary Children's Hospital (Salt Lake City)",
        phone: "1-801-662-1000",
        url: "https://intermountainhealthcare.org/locations/primary-childrens-hospital/",
      },
      {
        name: "CHIP (Utah Children's Health Insurance Program)",
        phone: "1-877-543-7669",
        url: "https://medicaid.utah.gov/chip/",
      },
    ],
  },
  {
    state: "Vermont",
    stateAbbr: "VT",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Northern New England Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-649-5285",
      name: "Vermont Department for Children and Families (DCF)",
    },
    additionalResources: [
      {
        name: "UVM Children's Hospital",
        phone: "1-802-847-0000",
        url: "https://www.uvmhealth.org/medcenter/departments-and-programs/childrens-hospital",
      },
      {
        name: "Dr. Dynasaur (Vermont Children's Health Insurance)",
        phone: "1-800-250-8427",
        url: "https://dvha.vermont.gov/members/medicaid/dr-dynasaur",
      },
    ],
  },
  {
    state: "Virginia",
    stateAbbr: "VA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Virginia Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-552-7096",
      name: "Virginia Department of Social Services - Child Protective Services",
    },
    childrensMedicalHotline: {
      phone: "1-804-828-9000",
      name: "Children's Hospital of Richmond at VCU",
    },
    additionalResources: [
      {
        name: "Children's Hospital of Richmond at VCU",
        phone: "1-804-828-9000",
        url: "https://www.chrichmond.org",
      },
      {
        name: "FAMIS (Virginia Children's Health Insurance)",
        phone: "1-866-873-2647",
        url: "https://www.coverva.org/en/famis/",
      },
    ],
  },
  {
    state: "Washington",
    stateAbbr: "WA",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Washington Poison Center",
    },
    childAbuseHotline: {
      phone: "1-866-363-4276",
      name: "Washington Department of Children, Youth, and Families (DCYF)",
    },
    childrensMedicalHotline: {
      phone: "1-206-987-2000",
      name: "Seattle Children's Hospital Nurse Consultation Line",
    },
    additionalResources: [
      {
        name: "Seattle Children's Hospital",
        phone: "1-206-987-2000",
        url: "https://www.seattlechildrens.org",
      },
      {
        name: "Apple Health for Kids (Washington Medicaid)",
        phone: "1-800-562-3022",
        url: "https://www.hca.wa.gov/health-care-services-supports/apple-health-medicaid-coverage/children",
      },
    ],
  },
  {
    state: "West Virginia",
    stateAbbr: "WV",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "West Virginia Poison Center",
    },
    childAbuseHotline: {
      phone: "1-800-352-6513",
      name: "West Virginia Department of Health and Human Resources - Bureau for Children and Families",
    },
    childrensMedicalHotline: {
      phone: "1-304-598-4000",
      name: "WVU Medicine Children's Hospital",
    },
    additionalResources: [
      {
        name: "WVU Medicine Children's Hospital",
        phone: "1-304-598-4000",
        url: "https://wvumedicine.org/childrens/",
      },
      {
        name: "West Virginia CHIP",
        phone: "1-877-982-2447",
        url: "https://dhhr.wv.gov/bms/Programs/Pages/WVCHIP.aspx",
      },
    ],
  },
  {
    state: "Wisconsin",
    stateAbbr: "WI",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Wisconsin Poison Center (Children's Wisconsin)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Wisconsin Department of Children and Families (DCF)",
    },
    childrensMedicalHotline: {
      phone: "1-414-266-2000",
      name: "Children's Wisconsin Nurse Line",
    },
    additionalResources: [
      {
        name: "Children's Wisconsin (Milwaukee)",
        phone: "1-414-266-2000",
        url: "https://childrenswi.org",
      },
      {
        name: "BadgerCare Plus (Children's Health Coverage)",
        phone: "1-800-362-3002",
        url: "https://www.dhs.wisconsin.gov/badgercareplus/index.htm",
      },
    ],
  },
  {
    state: "Wyoming",
    stateAbbr: "WY",
    poisonControl: {
      phone: "1-800-222-1222",
      name: "Wyoming Poison Center (Rocky Mountain Poison and Drug Safety)",
    },
    childAbuseHotline: {
      phone: "1-800-422-4453",
      name: "Wyoming Department of Family Services - Child Protective Services",
    },
    additionalResources: [
      {
        name: "Wyoming Medical Center - Pediatrics",
        phone: "1-307-577-7201",
        url: "https://www.wyomingmedicalcenter.org",
      },
      {
        name: "Kid Care CHIP (Wyoming Children's Health Insurance)",
        phone: "1-888-996-8786",
        url: "https://health.wyo.gov/healthcarefin/equalitycare/kidcare-chip/",
      },
    ],
  },
];
