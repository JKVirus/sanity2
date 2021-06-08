export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      title: 'Parent',
      name: 'parent',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  orderings: [
    {
      title: 'By Group',
      name: 'byGroup',
      by: [
        { field: 'title', direction: 'asc' },
        { field: 'parent.title', direction: 'asc' },
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
