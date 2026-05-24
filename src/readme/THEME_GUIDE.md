# Theme Guide

## Shared Styles

```tsx
// Display Flex | Dir, gap, alg, jus, wrap
import { flex } from '@/theme/styles/sharedStyles'
${flex('row', '16px', 'center', 'space-between', 'wrap')};
${flex(undefined, undefined, 'center')}; // Skip if not used

// Breakpoints | xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400
import { media } from '@/utils/breakpoints';
${media.below('lg')}{} // Smaller than md (992)
${media.above('lg')}{} // Larger than or equal to lg (992px)
${media.between('md', 'lg')} {} // Screens between md (768px) and lg (992px)

// Theme Color Variables & Tokens can be used in Styled component
${({ theme }) => theme.colors['primary-500']};

${({ theme }) => theme.spacing.lg};
${({ theme }) => theme.borderRadius.md};
${({ theme }) => theme.shadows.lg};
${({ theme }) => theme.transitions.md};
```

## Navigation

```tsx
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
<Button onClick={() => navigate(ROUTES.APP.DASHBOARD)} />
```
