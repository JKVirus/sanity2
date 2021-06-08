export default {
    name: 'conference',
    title: 'Conference',
    type: 'document',
    fields: [
      {
        title: 'Parent',
        name: 'parent',
        type: 'reference',
        to: [
            {
            type: 'conference',
            },
        ],
      },
      {
        name: 'conferenceTitle',
        title: 'Conference Title',
        type: 'string',
      },
      {
        name: 'conferenceSlug',
        title: 'Conference Slug',
        type: 'slug',
        options: {
          source: 'conferenceTitle',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'conferenceBanner',
        title: 'Banner image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  