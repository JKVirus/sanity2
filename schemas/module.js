export default {
    type: "string",
    name: "module",
    title: "Module",
    options: {
        list: [
            {title: "Static", value: "static", isProduct: false},
            {title: "Media Series", value: "mediaSeries", isProduct: true},
            {title: "Conference", value: "conference", isProduct: true},
            {title: "Publication", value: "publication", isProduct: true},
            {title: "Partner", value: "partner", isProduct: true},
        ],
        layout: 'dropdown'
    }
}