/**
 * Optimized icon system to reduce bundle size and main-thread work
 * Uses strategic lazy loading and minimal imports to reduce the large Lucide React chunks
 */

import React from 'react'

// Create smaller, focused icon chunks instead of loading the entire lucide-react library
export const AlertCircle = React.lazy(() => 
  import('lucide-react').then(({ AlertCircle }) => ({ default: AlertCircle }))
)

export const ArrowRight = React.lazy(() => 
  import('lucide-react').then(({ ArrowRight }) => ({ default: ArrowRight }))
)

export const ChevronRight = React.lazy(() => 
  import('lucide-react').then(({ ChevronRight }) => ({ default: ChevronRight }))
)

export const MessageSquare = React.lazy(() => 
  import('lucide-react').then(({ MessageSquare }) => ({ default: MessageSquare }))
)

// Below-fold icons - loaded in separate chunks
export const Users = React.lazy(() => 
  import('lucide-react').then(({ Users }) => ({ default: Users }))
)

export const Target = React.lazy(() => 
  import('lucide-react').then(({ Target }) => ({ default: Target }))
)

export const Star = React.lazy(() => 
  import('lucide-react').then(({ Star }) => ({ default: Star }))
)

export const Timer = React.lazy(() => 
  import('lucide-react').then(({ Timer }) => ({ default: Timer }))
)

export const ShieldCheck = React.lazy(() => 
  import('lucide-react').then(({ ShieldCheck }) => ({ default: ShieldCheck }))
)

export const Briefcase = React.lazy(() => 
  import('lucide-react').then(({ Briefcase }) => ({ default: Briefcase }))
)

export const UserCheck = React.lazy(() => 
  import('lucide-react').then(({ UserCheck }) => ({ default: UserCheck }))
)

export const Eye = React.lazy(() => 
  import('lucide-react').then(({ Eye }) => ({ default: Eye }))
)

// Form and UI icons
export const CheckCircle = React.lazy(() => 
  import('lucide-react').then(({ CheckCircle }) => ({ default: CheckCircle }))
)

export const Send = React.lazy(() => 
  import('lucide-react').then(({ Send }) => ({ default: Send }))
)

export const Clock = React.lazy(() => 
  import('lucide-react').then(({ Clock }) => ({ default: Clock }))
)

export const AlertTriangle = React.lazy(() => 
  import('lucide-react').then(({ AlertTriangle }) => ({ default: AlertTriangle }))
)

export const ChevronLeft = React.lazy(() => 
  import('lucide-react').then(({ ChevronLeft }) => ({ default: ChevronLeft }))
)

// Navigation and layout icons
export const ArrowLeft = React.lazy(() => 
  import('lucide-react').then(({ ArrowLeft }) => ({ default: ArrowLeft }))
)

export const Shield = React.lazy(() => 
  import('lucide-react').then(({ Shield }) => ({ default: Shield }))
)

export const Mail = React.lazy(() => 
  import('lucide-react').then(({ Mail }) => ({ default: Mail }))
)

export const Phone = React.lazy(() => 
  import('lucide-react').then(({ Phone }) => ({ default: Phone }))
)

// Content and information icons
export const HelpCircle = React.lazy(() => 
  import('lucide-react').then(({ HelpCircle }) => ({ default: HelpCircle }))
)

export const Info = React.lazy(() => 
  import('lucide-react').then(({ Info }) => ({ default: Info }))
)

export const TrendingUp = React.lazy(() => 
  import('lucide-react').then(({ TrendingUp }) => ({ default: TrendingUp }))
)

export const Building = React.lazy(() => 
  import('lucide-react').then(({ Building }) => ({ default: Building }))
)

// Icon wrapper component with fallback
interface IconProps {
  className?: string
  size?: number | string
}

export function IconWrapper({ 
  children, 
  fallback = <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <React.Suspense fallback={fallback}>
      {children}
    </React.Suspense>
  )
}

// Optimized icon component that reduces main-thread work
export function OptimizedIcon({ 
  name, 
  className = "w-4 h-4", 
  fallback 
}: { 
  name: keyof typeof iconMap
  className?: string
  fallback?: React.ReactNode 
}) {
  const IconComponent = iconMap[name]
  
  return (
    <IconWrapper fallback={fallback}>
      <IconComponent className={className} />
    </IconWrapper>
  )
}

// Icon mapping for dynamic usage
const iconMap = {
  'alert-circle': AlertCircle,
  'arrow-right': ArrowRight,
  'chevron-right': ChevronRight,
  'message-square': MessageSquare,
  'users': Users,
  'target': Target,
  'star': Star,
  'timer': Timer,
  'shield-check': ShieldCheck,
  'briefcase': Briefcase,
  'user-check': UserCheck,
  'eye': Eye,
  'check-circle': CheckCircle,
  'send': Send,
  'clock': Clock,
  'alert-triangle': AlertTriangle,
  'chevron-left': ChevronLeft,
  'arrow-left': ArrowLeft,
  'shield': Shield,
  'mail': Mail,
  'phone': Phone,
  'help-circle': HelpCircle,
  'info': Info,
  'trending-up': TrendingUp,
  'building': Building,
} as const 