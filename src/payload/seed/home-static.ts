import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Sanjeevan',
    description: 'An open-source e-commerce store built with Payload and Next.js.',
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'Sanjeevan E-Commerce Store for Medicines',
          },
        ],
        type: 'h2',
      },
      {
        children: [
          {
            text: 'Welcome to the Sanjeevan E-Commerce Store',
          },
        ],
        type: 'h4',
      },
      {
        children: [
          {
            text: 'we provide the best quality medicines for your health and wellness.',
          },
        ],
        type: 'p',
      },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Seed your database',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Your database is currently empty. To seed your database, ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'log in to the admin dashboard',
                },
              ],
            },
            {
              text: ' and click "seed your database".',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/admin',
            label: 'Go to dashboard',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
