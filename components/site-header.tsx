'use client'

import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import Link from "next/link"


const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Announcements', href: '/Announcements' },
  { label: 'Downloads', href: '/Downloads' },
  { label: 'Dashboard', href: '/Dashboard' },
  { label: 'About', href: '/About' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top utility bar */}
      <div className="hidden border-b border-border bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="tracking-wide">Republic of the Philippines &middot; Department of Education &middot; Schools Division Office Mati City </p>
          <div className="flex items-center gap-4">
            <a href="https://depedph-my.sharepoint.com/:x:/g/personal/yvonne_razaga_deped_gov_ph/IQDZhzGnUA5FSpnYBJj_bQasAcX3-SxpZo-wE976-Jn7F1s?e=6yLX8d" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent">
              Directory
              </a>
            <a
  href="https://tinyurl.com/SDOMatiCityLISHelpdesk"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-accent"
>
 LIS HelpDesk
</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold tracking-tight text-primary">
              Schools Division Office of Mati City
            </p>
            <p className="text-[11px] text-muted-foreground">Planning Unit</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-foreground/70 hover:text-primary lg:inline-flex"
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>
         
          
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button
              render={<Link href="/Dashboard" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 h-10 px-4"
            >
              View Dashboard
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
