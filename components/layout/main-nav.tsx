'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { primary } from '@/lib/fonts'

const routes = [
    {
        label: 'JOURNEY',
        href: '/journey',
    },
    {
        label: 'MENU',
        // href: "/menu/66220115913f3ecaa3a8aeff",
        href: '/menu/6698d9ba02e0a09eda9abe36',
    },
    {
        label: 'PARTNER',
        href: '/partner',
    },
]

export const MainNav = () => {
    const pathname = usePathname()
    return (
        <div className="ml-auto flex items-center gap-x-24">
            {routes.map((route) => (
                <Link
                    href={route.href}
                    key={route.href}
                    className={cn(
                        'text-xl font-medium cursor-pointer transition',
                        pathname === route.href
                            ? 'text-primary'
                            : 'text-primary-foreground',
                        primary.className
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </div>
    )
}
