export default {
    name: 'mediaSeries',
    title: 'Media Series',
    type: 'document',
    fields: [
      {
        name: 'seriesTitle',
        title: 'Series Title',
        type: 'string',
      },
      {
        name: 'seriesSlug',
        title: 'Series Slug',
        type: 'slug',
        options: {
          source: 'seriesTitle',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  }
  