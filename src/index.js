require('./garlic.scss');

const metadata = {
  name: 'web garlic',
  type: 'peritext-web-template',
  id:'web-garlic',
  options: [
    {
      type: 'boolean',
      id: 'disqus',
      title: {
        fr: 'Intégrer le service de discussion disqus sur les page',
        en: 'Integrate discussion service disqus on pages'
      },
    },
    {
      type: 'select',
      id: 'dynamicNotesPosition',
      title: {
        fr: 'Position des notes',
        en: 'Notes position'
      },
      options: [
        {
          id: 'foot',
          labels: {
            fr: 'Fin de page',
            en: 'Page end'
          }
        },
        {
          id: 'aside',
          labels: {
            fr: 'Marge de page',
            en: 'Page margin'
          }
        }
      ]
    }
  ]
}

export default {
  metadata,
  PreviewContainer: require('./components/PreviewContainer').default,
  Bibliotheca: require('./components/Bibliotheca').default,
  Dimensio: require('./components/Dimensio').default,
  Home: require('./components/Home').default,
  Lexicon: require('./components/Lexicon').default,
  Section: require('./components/Section').default,
  typefaceNames: ['roboto', 'merriweather']
}