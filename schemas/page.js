import variableSelect from '../src/variableSelect'

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'pageName',
        title: 'Page Name',
        type: 'string',
      },

      {
        name: 'pageSlug',
        title: 'Page Slug',
        type: 'slug',
        options: {
          source: 'pageName',
          maxLength: 96,
        },
      },
      {
        title: 'Module Assignment',
        name: 'moduleAssignment',
        type: 'object',
        fields: [
          /* Custom Way Example
          {
            title: 'Module',
            name: 'module',
            type: 'string',
            inputComponent: variableSelect,
            options: {
              list: [
                {title: "Static", value: "static"},
                {title: "Media Series", value: "mediaSeries"},
                {title: "Conference", value: "conference"},
                {title: "Publication", value: "publication"},
                {title: "Partner", value: "partner"},
              ]
            }
          },*/
          {
            title: 'Module',
            name: 'module',
            description: 'format: Module (variables available)',
            type: 'module',
          },
          {
            name: 'urlDefinition',
            title: 'URL Definition',
            type: 'string',
          },
          {
            title: 'Taxonomy',
            name: 'taxonomy',
            type: 'reference',
            to: {type: 'taxonomy'},
            options: {
              filter: '!defined(parent)'
            }
          },
        ]
      },
      /*
      {
        title: 'SEO',
        name: 'seo',
        type: 'object',
        fields: [
          {
            title: 'SEO Title',
            name: 'seoTitle',
            type: 'string',
          },
          {
            title: 'SEO Keyword',
            name: 'seoKeyword',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
          {
            title: 'SEO Description',
            name: 'seoDescription',
            type: 'text'
          }
        ]
      }
      */
     
    ],
  
    preview: {
        select: {
          title: 'pageName'
        }
      }

  }
  