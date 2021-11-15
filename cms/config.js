// eslint-disable-next-line import/no-anonymous-default-export
export default{
    backend:{
        name:'github',
        repo:'mickaelamimba/charles-cantin',
        branch:'main'
    },
    media_folder:'public/images',
    public_folder:'images',
    collections:[
        {
            name:'home',
            label:'Accueil',
            files:[
                {
                    label:'Header',
                    name:'header',
                    create:true,
                    file:'content/pages/home.md',
                    fields:[
                        {label:'Titre', name:'title', widget:'string'},
                        {label:'Photographe',name:'thumbnail', widget:'image'}
                    ]
                },
                {
                    label:'Navigations',
                    name:'navigations',
                    file:'content/pages/navigations.md',
                    fields:[
                        {label:'Menu', label_singular:'Menu', name:'menu', widget:'list',
                            fields:[
                                {label:'Titre',name:'title', widget:'string'},
                                {label: 'URL',name:'url', widget:'string'},
                                {label:'Type',name:'type' ,widget:'select',
                                    options:[
                                        {label: "Link", value: "Link" },
                                        {label:'Button' ,value: 'Button'}
                                    ]}
                            ]
                        },
                        {
                            label:'Réseaux',
                            name:'réseaux',
                            label_singular:'Réseaux',
                            widget:'list',
                            fields:[
                                {label:'Non du réseau ',name:'title', widget:'string'},
                                {label: 'URL',name:'url', widget:'string'},
                                {label:'Icônes',name:'icons', widget:'image'}
                            ]},
                    ]
                }
            ]
        },
        {
            name:'galerie',
            label:'Galerie',
            folder:'content/galeries',
            slug:'{{slug}}',
            file:'content/galeries/{{slug}}.md',
            create:true,
            extension:'md',
            format: 'frontmatter',
            fields:[
                {label:'Title', name:'title', widget: 'string'},
                {label:'Photographies', name:'thumbnail', widget: 'image'},
                {label:'Catégories', name:'category', widget: 'relation', collection:'categories', searchFields:['name'], valueField:'name' }

            ]
        },
        {
            name:'categories',
            label:'Categories',
            folder:'content/categories',
            file:'content/categories/{{slug}}.md',
            extension:'md',
            format: 'frontmatter',
            create:true,
            slug:'{{slug}}',
            identifier_field: 'name',
            fields:[
                {label:'Nom',name:'name',widget: 'string'}
            ]
        },
        {
            label:'Tarifs',
            name:'tarifs',
            slug:'{{slug}}',
            create:true,
            folder:'content/tarifs',
            file:'content/tarifs/{{slug}}.md',
            extension:'md',
            format: 'frontmatter',
            identifier_field: 'prix',
            fields:[
                {label:'Prix', name:'prix', widget: 'number',value_type: 'float'},
                {label:'Prestation ', name:'prestation', widget: 'relation', collection:'prestations', searchFields:['title'], valueField:'title'}
            ]

        },
        {
            label:'Prestations',
            name:'prestations',
            slug:'{{slug}}',
            create:true,
            folder:'content/prestations',
            file:'content/prestations/{{slug}}.md',
            extension:'md',
            format: 'frontmatter',
            identifier_field: 'title',
            fields:[
                {label:'Titre', name:'title', widget: 'string'},
                {label:'Description',name:'description',widget: 'markdown'}
            ]
        }
    ]

}