// path: theme.config.tsx
import { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span className="font-extrabold tracking-tight">MOG</span>,
  project: { link: 'https://github.com/mog-marketing/site' },
  chat: { link: 'https://instagram.com/mogmarketing' },
  docsRepositoryBase: 'https://github.com/mog-marketing/site/tree/main',
  primaryHue: { light: 160, dark: 160 },
  primarySaturation: { light: 95, dark: 85 },
  useNextSeoProps() {
    return {
      titleTemplate: 'Mog Marketing — %s',
      description: 'Modern growth for ambitious brands.',
      openGraph: {
        images: [{ url: '/og.png', width: 1200, height: 630 }],
      }
    }
  },
  footer: {
    text: (
      <div className="flex flex-wrap items-center gap-3">
        <span>© {new Date().getFullYear()} Mog Marketing Ltd.</span>
        <a href="/privacy">Privacy</a>
        <span>·</span>
        <a href="/terms">Terms</a>
      </div>
    )
  },
  sidebar: { defaultMenuCollapseLevel: 1 }
}

export default config
