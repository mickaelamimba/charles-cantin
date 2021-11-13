export default{
    cms_manual_ini: true,
    backend:{
        name:'github',
        repo:'mickaelamimba/charles-cantin',
        branch:'main'
    },
    media_folder:'public/images',
    public_folder:'images',
    collections:[
        {
            name:'pages',
            label:'pages',
            files:[
                {
                    label:'home',
                    name:'home',
                    file:'content/pages/home.md',
                    fields:[
                        {
                            label:'Mon super tittre',
                            name:'title',
                            widget: 'string'
                        },
                        {
                            label:'Mon super tittre',
                            name:'description:',
                            widget: 'markdown'
                        },

                    ]
                },
                {
                    label:'galerie',
                    name:'galerie',
                    slug:'{{slug}}',
                    create:true,
                    preview_path:'{{slug}}',
                    file:'content/pages/galerie.md',
                    fields:[
                        {label:'Title', name:'title', widget: 'string'},
                        {label:'Photographies', name:'thumbnail', widget: 'image'},
                        {label:'Catégories', name:'catégories', widget: 'relation', collection:'catégories', searchFields:['name'], valueField:'name', multiple:true}
                    ]
                },
                {
                    name:'catégories',
                    label:'Catégories',
                    file:'content/pages/catégories.md',
                    create:true,
                    slug:'{{slug}}',
                    identifier_name: name,
                    fields:[
                        {label:'name',name:'Nom',widget: 'string'}
                    ]
                }

            ],

        }

    ]

}