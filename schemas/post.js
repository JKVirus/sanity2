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
      name: 'contentPlacement',
      title: 'Content Placement',
      description: 'Location where this post will also appear',
      type: 'array',
      of: [{type: 'reference', to: {type: 'taxonomy'}}],
    },
    {
      name: 'page',
      title: 'Page Origin',
      description: 'Main Location where this post will live',
      type: 'reference',
      to: {type: 'page'},
    },
    {
      name: 'module',
      title: 'Post Entity',
      type: 'reference',
      to: [{type: 'mediaSeries'}, {type: 'conference'}], 
      options: {
        filter: async({document}) => {
          // Always make sure to check for document properties
          // before attempting to use them

          if (!document.page || document.page.length < 1) {
            return {
              filter: '1 == 0'
            }
          }

          let page_id = document.page._ref
          const client = require('part:@sanity/base/client')
          const query = `*[_type == 'page' && _id == '${page_id}'][0]{"module": moduleAssignment.module}`

          const result = await client.fetch(query)
          const module = result.module

          return {
            filter: `_type == '${module}' && defined(page) && page._ref == '${page_id}' `
          }
        }
      }
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
