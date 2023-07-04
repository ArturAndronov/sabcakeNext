import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['fr', 'de'],
    localePath: 'public/locales',
    localeSubpaths: {
        en: '',
        fr: 'fr',
        de: 'de'
    },
});

export default NextI18NextInstance;