export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      title: 'Category',
      name: 'category',
      type: 'object',
      fields: [
        {
          name: 'primaryCategory',
          title: 'Primary Category',
          description: 'Primary Category',
          type: 'reference',
          to: {type: 'category'},
          options: {
            filter: '!defined(parent)'
          }
        },
        {
          name: 'secondaryCategory',
          title: 'Secondary Category',
          description: 'Secondary Category',
          type: 'reference',
          to: {type: 'category'},
          options: {
            filter: 'defined(parent)'
          }
        },
      ]
    },
    {
      name: 'page',
      title: 'Page',
      description: 'Location where this post will appear',
      type: 'array',
      of: [{type: 'reference', to: {type: 'page'}}],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
