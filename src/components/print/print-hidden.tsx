import { cn } from '@/lib/utils'
import type React from 'react'

export const PrintHidden = ({ className, ...props }: React.PropsWithChildren<React.ComponentProps<'div'>>) => {
    return <div className={cn('print-hidden', className)} {...props} />
}
