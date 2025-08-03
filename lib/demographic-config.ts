/**
 * Demographic page configurations for targeted landing pages
 * Each demographic has specific messaging, SEO, and conversion optimization
 */

export interface DemographicConfig {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroSubheadline: string
  painPoints: string[]
  benefits: string[]
  testimonialConfig: {
    name: string
    location: string
    situation: string
    earnings: string
    quote: string
    avatar: string
  }
  urgencyMessage: string
  specificFAQs: {
    question: string
    answer: string
  }[]
  earnings: {
    monthly: string
    hourly: string
    timeCommitment: string
  }
  callToAction: string
}

export const DEMOGRAPHIC_CONFIGS: Record<string, DemographicConfig> = {
  'stay-at-home-moms': {
    slug: 'stay-at-home-moms',
    title: 'Perfect Work for Stay-at-Home Mums',
    metaTitle: 'Stay at Home Mum Jobs UK | Earn £1,200+ Monthly | Flexible Hours | NomineeJobs',
    metaDescription: 'Perfect for stay-at-home mums! Earn £600-£20,000+ annually. Work during school hours, no childcare needed. Join 2,000+ mums already earning. Apply now!',
    keywords: [
      'stay at home mom jobs UK',
      'work from home mums UK',
      'flexible jobs for mothers',
      'school hours work UK',
      'mum friendly employers',
      'work around children UK',
      'legitimate stay at home mom jobs'
    ],
    heroHeadline: 'Finally! Work That Fits Around Your Children',
    heroSubheadline: 'Earn £1,200+ monthly during school hours. No commute, no childcare costs, no missing precious moments with your kids.',
    painPoints: [
      'Expensive childcare costs eating into earnings',
      'Rigid 9-5 schedules that don\'t work with school pickup',
      'Long commutes taking time away from family',
      'Feeling like you\'re missing out on career opportunities',
      'Needing income but wanting to be present for your children'
    ],
    benefits: [
      'Work completely during school hours (9:30am - 2:30pm)',
      'No commute - work from your kitchen table',
      'Zero childcare costs required',
      'Keep your career active during the early years',
      'Be available for school pickup and drop-off',
      'Work around sick days and school holidays'
    ],
    testimonialConfig: {
      name: 'Sarah M.',
      location: 'Manchester, Mum of 2',
      situation: 'Former marketing manager, now stay-at-home mum',
      earnings: '£1,800 last month',
      quote: 'This is perfect for mums! I work while the kids are at school and I\'m still there for pickup. My husband was amazed when I showed him my first payment - £450 for just 15 hours of work spread across the week.',
      avatar: '/sarah-mum-avatar.svg'
    },
    urgencyMessage: '⚡ Limited spots available for mums in your area - only 3 positions left this month!',
    specificFAQs: [
      {
        question: 'Can I really work with young children at home?',
        answer: 'Absolutely! Most mums work during school hours (9:30am-2:30pm) when kids are at school. For mums with toddlers, you can work during nap times or after bedtime. The work is very flexible - you choose when to work.'
      },
      {
        question: 'What if my child is sick and I can\'t work?',
        answer: 'No problem at all! This isn\'t a traditional job with set hours. If your child is sick, you simply handle your nominee duties when you\'re available. Most tasks can be done in the evening or weekend if needed.'
      },
      {
        question: 'Will this affect my benefits or tax credits?',
        answer: 'As self-employed income, this may affect means-tested benefits. We recommend checking with Citizens Advice or HMRC about your specific situation. Many mums find the additional income more than makes up for any reduction in benefits.'
      },
      {
        question: 'How quickly can I start earning?',
        answer: 'Most mums receive their first payment within 2-3 weeks of starting. Sarah from Manchester earned £450 in her first month working just 15 hours total across the whole month.'
      }
    ],
    earnings: {
      monthly: '£600-£2,500',
      hourly: '£25-£65',
      timeCommitment: '2-8 hours per week (your choice)'
    },
    callToAction: 'Join 2,000+ Mums Already Earning'
  },

  'side-hustle-income': {
    slug: 'side-hustle-income',
    title: 'The Ultimate Side Hustle for Ambitious People',
    metaTitle: 'Best Side Hustle UK 2024 | Earn £500-£2,000+ Monthly | Keep Your Day Job | NomineeJobs',
    metaDescription: 'Perfect side hustle! Earn £500-£2,000+ monthly while keeping your day job. Work weekends and evenings. 95% of our members keep their main career. Start now!',
    keywords: [
      'side hustle UK',
      'extra income ideas UK',
      'weekend work from home',
      'part time side business',
      'passive income UK',
      'best side hustles for extra money UK',
      'legitimate side hustle opportunities'
    ],
    heroHeadline: 'The Side Hustle That Actually Works',
    heroSubheadline: 'Earn £500-£2,000+ monthly without quitting your day job. Work weekends, evenings, or whenever suits you.',
    painPoints: [
      'Your 9-5 salary isn\'t enough to reach your financial goals',
      'You want financial security but can\'t risk leaving your main job',
      'Most side hustles are time-consuming or unreliable',
      'You need something professional that won\'t embarrass you',
      'You want to build wealth but don\'t know where to start'
    ],
    benefits: [
      'Keep your day job - this works around your schedule',
      'Professional work that enhances your CV',
      'Scalable income - start small, grow as you want',
      'No weekday commitments required',
      'Build additional professional experience',
      'Multiple income streams for security'
    ],
    testimonialConfig: {
      name: 'James R.',
      location: 'London, Software Developer',
      situation: 'Full-time developer with side hustle ambitions',
      earnings: '£1,650 last month',
      quote: 'I still work my tech job Monday-Friday, but this brings in an extra £1,500+ per month working just weekends. It\'s helping me save for a house deposit much faster than I thought possible.',
      avatar: '/james-side-hustle-avatar.svg'
    },
    urgencyMessage: '🔥 High earners only - we\'re looking for ambitious people who want more than just their salary!',
    specificFAQs: [
      {
        question: 'Will this interfere with my main job?',
        answer: 'Not at all! 95% of our members keep their full-time jobs. You work nominee duties on your own time - weekends, evenings, or whenever suits you. Many people do their tasks Sunday afternoon while watching TV.'
      },
      {
        question: 'How much time does this actually take?',
        answer: 'Most side hustlers spend 3-6 hours per week and earn £500-£1,500 monthly. James from London spends about 4 hours on Saturdays and earns £1,650/month. It\'s very efficient.'
      },
      {
        question: 'Is this considered a conflict of interest with my employer?',
        answer: 'For most employees, this isn\'t a conflict as it\'s completely unrelated to your main work. However, check your employment contract or ask HR if you\'re unsure. It\'s a legitimate business role.'
      },
      {
        question: 'Can I scale this up over time?',
        answer: 'Absolutely! Start with 1-2 appointments, then add more as you get comfortable. Some of our part-timers earn £3,000+ monthly while still keeping their main career.'
      }
    ],
    earnings: {
      monthly: '£500-£2,000',
      hourly: '£35-£85',
      timeCommitment: '3-6 hours per week'
    },
    callToAction: 'Start Your Side Hustle Today'
  },

  'urgent-income-needed': {
    slug: 'urgent-income-needed',
    title: 'Fast Income When You Need It Most',
    metaTitle: 'Need Money Urgently UK? | Earn Fast | Start This Week | Legitimate Income | NomineeJobs',
    metaDescription: 'Need money urgently? Start earning within 7 days. Legitimate, fast income for people in urgent financial situations. No scams, no MLM. Real work, real pay.',
    keywords: [
      'need money urgently UK',
      'quick income ideas',
      'fast money making ideas',
      'emergency income UK',
      'immediate cash jobs',
      'how to make money fast when desperate UK',
      'legitimate urgent income'
    ],
    heroHeadline: 'Need Money Fast? Start Earning This Week',
    heroSubheadline: 'Legitimate income opportunity for urgent financial situations. First payment possible within 7-10 days of starting.',
    painPoints: [
      'Rent or mortgage payment is overdue',
      'Unexpected bills have created a cash crisis',
      'Benefits aren\'t enough to cover essential costs',
      'You need money now, not in months',
      'Traditional job applications take too long'
    ],
    benefits: [
      'Start earning within 7-10 days of application',
      'No long training periods or waiting',
      'Fast-track approval for urgent situations',
      'Legitimate work with proper contracts',
      'Weekly payments once established',
      'No upfront costs or fees required'
    ],
    testimonialConfig: {
      name: 'Michael T.',
      location: 'Birmingham, Urgent situation',
      situation: 'Needed fast income after unexpected job loss',
      earnings: '£680 in first month',
      quote: 'I was desperate after losing my job and had rent due. I applied on Monday and was earning within the week. Got my first payment of £340 after 10 days. It saved me from eviction.',
      avatar: '/michael-urgent-avatar.svg'
    },
    urgencyMessage: '🚨 URGENT PRIORITY PROCESSING - Apply now for fast-track consideration!',
    specificFAQs: [
      {
        question: 'How quickly can I actually start earning?',
        answer: 'For urgent situations, we fast-track applications. You can typically start earning within 7-10 days of applying, with your first payment 7-14 days after that. Michael from Birmingham earned £340 in his first 10 days.'
      },
      {
        question: 'Is this legitimate or too good to be true?',
        answer: 'This is completely legitimate work as a nominee director - a real business service. You\'ll have proper contracts, insurance, and legal protections. It\'s not a get-rich-quick scheme, it\'s genuine professional work.'
      },
      {
        question: 'Do I need money upfront to start?',
        answer: 'No! There are no upfront fees, training costs, or hidden charges. If anyone asks you for money upfront, it\'s a scam. This is legitimate employment where you get paid, not the other way around.'
      },
      {
        question: 'What if I have bad credit or no qualifications?',
        answer: 'Bad credit won\'t stop you - we don\'t run credit checks. You need to be over 18, UK resident, and have no serious criminal convictions. That\'s it. No qualifications required.'
      }
    ],
    earnings: {
      monthly: '£600-£1,500',
      hourly: '£25-£50',
      timeCommitment: 'As much or little as you need'
    },
    callToAction: 'Apply for Urgent Processing'
  },

  'flexible-work-schedule': {
    slug: 'flexible-work-schedule',
    title: 'Work Completely On Your Terms',
    metaTitle: 'Flexible Working Jobs UK | Choose Your Hours | Work When You Want | NomineeJobs',
    metaDescription: 'Ultimate flexible work! Choose your own hours, work when you want, take breaks anytime. Perfect for people who need complete schedule flexibility. Apply now!',
    keywords: [
      'flexible working jobs UK',
      'work when you want jobs',
      'choose your hours work',
      'flexible employment',
      'work life balance jobs',
      'jobs where you can work your own hours UK',
      'ultimate flexible work'
    ],
    heroHeadline: 'Finally, Work That Adapts to YOUR Life',
    heroSubheadline: 'Choose your hours, work from anywhere, take breaks whenever you need. True flexibility for people who refuse to compromise.',
    painPoints: [
      'Rigid schedules that don\'t fit your lifestyle',
      'Employers who don\'t understand work-life balance',
      'Missing important life events for work commitments',
      'Feeling trapped by traditional employment',
      'Needing to work around caring responsibilities'
    ],
    benefits: [
      'Work any hours that suit you - morning, afternoon, evening',
      'Take breaks whenever needed - no permission required',
      'Work from home, cafes, while traveling - your choice',
      'No set minimum hours or schedules',
      'Perfect for carers, students, or lifestyle entrepreneurs',
      'Scale up or down based on your needs'
    ],
    testimonialConfig: {
      name: 'Emma L.',
      location: 'Edinburgh, Carer and flexible worker',
      situation: 'Cares for elderly parent, needs ultimate flexibility',
      earnings: '£1,100 last month',
      quote: 'I care for my mum who has dementia, so I need to work around her needs. Some days I work 2 hours, some days 6 hours. I choose completely when and how much. Last month I earned £1,100 working totally flexible hours.',
      avatar: '/emma-flexible-avatar.svg'
    },
    urgencyMessage: '✨ ULTIMATE FLEXIBILITY - Perfect for people who need work to fit around life, not the other way around!',
    specificFAQs: [
      {
        question: 'Can I really work any hours I want?',
        answer: 'Yes! You have complete control over when you work. Emma from Edinburgh works around caring for her mum - sometimes 2 hours a day, sometimes 6 hours. You decide what works for your life.'
      },
      {
        question: 'What if I need to take a week off?',
        answer: 'No problem! You can take breaks whenever you need - for holidays, family emergencies, or just because you want to. There are no set schedules or minimum commitments.'
      },
      {
        question: 'Is there a minimum amount I have to work?',
        answer: 'No minimum hours at all. Some people work 2 hours per week, others work 20+ hours. You choose based on how much you want to earn and how much time you have available.'
      },
      {
        question: 'Can I work while traveling or from different locations?',
        answer: 'Absolutely! As long as you have internet access, you can work from anywhere in the UK or even abroad temporarily. Perfect for digital nomads or people who travel frequently.'
      }
    ],
    earnings: {
      monthly: '£200-£3,000+',
      hourly: '£30-£75',
      timeCommitment: 'Whatever suits you'
    },
    callToAction: 'Get Ultimate Flexibility'
  },

  'part-time-income': {
    slug: 'part-time-income',
    title: 'Perfect Part-Time Income Opportunity',
    metaTitle: 'Part Time Work From Home UK | Earn £500-£1,500 Monthly | Flexible Hours | NomineeJobs',
    metaDescription: 'Ideal part-time work! Earn £500-£1,500+ monthly working just 10-15 hours per week. Perfect for people who want steady supplementary income. Start now!',
    keywords: [
      'part time work from home UK',
      'part time jobs remote',
      'casual work opportunities',
      'few hours work',
      'supplementary income',
      'legitimate part time work from home jobs UK',
      'flexible part time employment'
    ],
    heroHeadline: 'The Perfect Part-Time Opportunity',
    heroSubheadline: 'Earn £500-£1,500+ monthly working just 10-15 hours per week. Steady, reliable income without the full-time commitment.',
    painPoints: [
      'Full-time work is too demanding but you need extra income',
      'Existing part-time jobs have inconvenient schedules',
      'You want steady income without major time commitment',
      'Current part-time options pay too little per hour',
      'You need something reliable but not overwhelming'
    ],
    benefits: [
      'Work just 10-15 hours per week for good money',
      'Higher hourly rate than typical part-time work',
      'Consistent, predictable income stream',
      'Professional work that looks good on your CV',
      'No commuting time or costs',
      'Work fits around your other commitments'
    ],
    testimonialConfig: {
      name: 'David K.',
      location: 'Bristol, Semi-retired professional',
      situation: 'Semi-retired, wants part-time income',
      earnings: '£1,250 last month',
      quote: 'I\'m semi-retired but wanted some extra income without the stress of full-time work. I work about 12 hours per week and earn £1,200+ monthly. Perfect balance for me.',
      avatar: '/david-parttime-avatar.svg'
    },
    urgencyMessage: '⭐ PERFECT BALANCE - Ideal for people who want good money without full-time commitment!',
    specificFAQs: [
      {
        question: 'How many hours do I need to work?',
        answer: 'Most part-timers work 10-15 hours per week and earn £500-£1,500 monthly. David from Bristol works about 12 hours weekly and earns £1,250+ per month. You can choose your level of involvement.'
      },
      {
        question: 'Is the hourly rate competitive?',
        answer: 'Yes! You\'ll earn £35-£75 per hour, which is much higher than typical part-time work. Even working just 10 hours per week at £50/hour gives you £2,000+ monthly.'
      },
      {
        question: 'Can I increase my hours if I want to earn more?',
        answer: 'Absolutely! Start part-time and increase as you get comfortable. Many people begin with 1-2 appointments and gradually add more as they see how much they enjoy the work.'
      },
      {
        question: 'What makes this better than other part-time work?',
        answer: 'Higher pay, complete flexibility, professional work, no commuting, and you can do it from home. Plus it\'s something you can be proud to tell people about - you\'re a business professional.'
      }
    ],
    earnings: {
      monthly: '£500-£1,500',
      hourly: '£35-£75',
      timeCommitment: '10-15 hours per week'
    },
    callToAction: 'Start Part-Time Today'
  }
}

export function getDemographicConfig(slug: string): DemographicConfig | null {
  return DEMOGRAPHIC_CONFIGS[slug] || null
}

export function getAllDemographicSlugs(): string[] {
  return Object.keys(DEMOGRAPHIC_CONFIGS)
}