export default {
    type: "string",
    name: "module",
    title: "Module",
    options: {
        list: [
            {title: "Static", value: "static", isProduct: false},
            {title: "Taxonomy (taxnonmy)", value: "taxonomy", isProduct: false},
            {title: "Post (post)", value: "post", isProduct: false},
            {title: "Media Series (mediaSeries)", value: "mediaSeries", isProduct: true},
            {title: "Conference (confernce)", value: "conference", isProduct: true},
            {title: "Publication (publication, issue)", value: "publication", isProduct: true},
            {title: "Partner (partner)", value: "partner", isProduct: true},
        ],
        layout: 'dropdown'
    }
}