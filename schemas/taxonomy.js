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
    ],
      orderings: [
    {
      title: 'By Group',
      name: 'byGroup',
      by: [
        { field: 'parent.title', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      parent: 'parent.title',
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
  