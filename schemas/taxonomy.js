export default {
    name: 'taxonomy',
    title: 'Taxonomy',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        title: 'Parent',
        name: 'parent',
        type: 'reference',
        to: [
          {
            type: 'taxonomy',
          },
        ],
      },
      {
        name: 'definition',
        title: 'Definition',
        type: 'string',
      },
    ],
  }
  