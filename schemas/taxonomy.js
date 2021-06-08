export default {
    name: 'taxonomy',
    title: 'Taxonomy',
    type: 'document',
    fields: [
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
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'definition',
        title: 'Definition',
        type: 'string',
      },
    ],
  }
  