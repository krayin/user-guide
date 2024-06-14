module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Krayin Documentation',
    description: 'Krayin Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],

        ['script', {}, `
            (function() {
                var script = document.createElement('script');
                script.innerHTML = 'window.chatbotConfig = { url: "https://ask.bagisto.com:5001/chat", logoUrl: "https://demo.krayincrm.com/logo.png" };';
                document.head.appendChild(script);
            })();
        `],
        ['script', { src: 'https://vikastiwari-webkul.github.io/ai-chatbot/chatbot.js', async: true }]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'krayin/laravel-crm',
        repoLabel: 'Contribute to Krayin',
        docsRepo: 'krayin/laravel-crm-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: {
            '/2.0/': require('./version-configs/2.0')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
