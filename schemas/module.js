export default {
    type: "string",
    name: "module",
    title: "Module",
    options: {
        list: [
            {title: "Static", value: "static"},
            {title: "Media Series", value: "mediaSeries"},
            {title: "Conference", value: "conference"},
            {title: "Publication", value: "publication"},
            {title: "Partner", value: "partner"},
        ],
        layout: 'dropdown'
    }
}