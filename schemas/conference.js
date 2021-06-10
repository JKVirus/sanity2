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
        title: 'Root Page',
        name: 'page',
        type: 'reference',
        to: [
            {
            type: 'page',
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
    preview: {
      select: {
        title: 'conferenceTitle',
        parent: 'parent.conferenceTitle',
      },
      prepare(selection) {
        const { title, parent } = selection
        return {
          title: title,
          subtitle: `> ${parent ? parent : ''}`,
        }
      },
    },
  }
  