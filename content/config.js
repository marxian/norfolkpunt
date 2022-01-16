export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'marxian/norfolkpunt',
    branch: 'main',
    base_url: 'https://www.norfolkpunt.org',
    auth_endpoint: 'api/begin',
    commit_messages: {
      create: 'feat: add {{collection}} {{slug}}',
      update: 'fix: update {{collection}} {{slug}}',
      delete: 'fix: remove {{collection}} {{slug}}',
      uploadMedia: 'feat: add media {{path}}',
      deleteMedia: 'fix: remove media {{path}}',
    },
  },
  local_backend: true,
  site_url: 'https://www.norfolkpunt.org',
  logo_url: 'https://www.norfolkpunt.org/logo.png',
  media_folder: 'images',
  public_folder: 'images',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Pictures',
          name: 'pictures',
          file: 'content/pictures.md',
          fields: [
            {
              label: 'Pictures',
              name: 'pictures',
              widget: 'list',
              field: {
                name: 'Image',
                widget: 'image',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'boats',
      label: 'Boats',
      label_singular: 'Boat',
      folder: 'content/boats',
      preview_path: 'punts/{{slug}}',
      create: true,
      preview: false,
      slug: '{{name}}-{{fields.sailNumber}',
      summary: '{{name}} {{sailNumber}} - {{design}}',
      sortableFields: ['name', 'sailNumber', 'yearBuilt', 'design'],
      extension: 'md',
      identifier_field: 'name',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Sail Number',
          name: 'sailNumber',
          widget: 'number',
        },
        {
          label: 'Cover Image',
          name: 'coverImage',
          widget: 'image',
          required: false,
          tagname: '',
        },
        {
          label: 'Year Built',
          name: 'yearBuilt',
          widget: 'number',
        },
        {
          label: 'Length',
          name: 'loa',
          widget: 'number',
          hint: 'in feet',
        },
        {
          label: 'Handicap',
          name: 'handicap',
          widget: 'number',
          hint: 'Portsmouth Yardstick',
        },
        {
          label: 'Builder',
          name: 'builder',
          widget: 'string',
        },
        {
          label: 'Construction',
          name: 'construction',
          widget: 'string',
        },
        {
          label: 'Design',
          name: 'design',
          widget: 'string',
        },
        {
          label: 'Designer',
          name: 'designer',
          widget: 'string',
        },
        {
          label: 'Owners',
          name: 'owners',
          widget: 'list',
          fields: [
            {
              label: 'From',
              name: 'from',
              widget: 'number',
            },
            {
              label: 'To',
              name: 'to',
              widget: 'number',
              required: false,
            },
            {
              label: 'Owner',
              name: 'owner',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
}
