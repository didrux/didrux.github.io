import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const workItems = [
    {
        title: 'API docs migration (Stoplight → ReadMe)',
        summary: 'Docs-as-code pipeline, OpenAPI upgrade, CI/CD auto-publish.',
        tags: ['Docs-as-code', 'OpenAPI', 'CI/CD'],
        href: '/work/api-docs-migration',
        emoji: '📘',
    },
    // {
    //     title: 'Information architecture overhaul (Confluence)',
    //     summary: 'Inventory, taxonomy, templates, ownership & review cadence.',
    //     tags: ['IA', 'Governance', 'Confluence'],
    //     href: '/work/ia-overhaul', // page you can add later
    //     emoji: '🗂️',
    // },
    // {
    //     title: 'KB & Tutorials (Phonexa modules)',
    //     summary: 'User guides, FAQs, troubleshooting for LMS Sync, Call Logic, E-Delivery.',
    //     tags: ['KB', 'Tutorials', 'Troubleshooting'],
    //     href: '/work/phonexa-kb', // page you can add later
    //     emoji: '🧭',
    // },
    {
        title: 'Developer documentation',
        summary: 'Examples of my developer documentation',
        tags: ['SDK', 'Integrations', 'System'],
        href: '/work/developer-documentation',
        emoji: '🧑‍💻',
    }
];

const logos = [
    { src: '/img/logos/markdown.svg', alt: 'Markdown' },
    { src: '/img/logos/openapi.svg', alt: 'OpenAPI' },
    { src: '/img/logos/postman.svg', alt: 'Postman' },
    { src: '/img/logos/github.svg', alt: 'GitHub' },
    { src: '/img/logos/gitlab.svg', alt: 'GitLab' },
    { src: '/img/logos/readme.svg', alt: 'ReadMe' },
    { src: '/img/logos/stoplight.svg', alt: 'Stoplight' },
    { src: '/img/logos/python.svg', alt: 'Python' },
    { src: '/img/logos/javascript.svg', alt: 'JavaScript' },
    { src: '/img/logos/react.svg', alt: 'React' },
    { src: '/img/logos/tailwind.svg', alt: 'Tailwind' },
    { src: '/img/logos/confluence.svg', alt: 'Confluence' },
    { src: '/img/logos/jira.svg', alt: 'Jira' },
    { src: '/img/logos/zendesk.svg', alt: 'Zendesk' },
    { src: '/img/logos/drawio.svg', alt: 'draw.io' },
];

export default function Home() {
    return (
        <Layout title="Home" description="Technical Writer portfolio of Mykhailo Ovdiienko">
            <Head>
                {/* JSON-LD Person schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Mykhailo Ovdiienko',
                        url: 'https://didrux.github.io/',
                        jobTitle: 'Technical Writer',
                        sameAs: [
                            'https://www.linkedin.com/in/mykhailo-ovdiienko',
                            'https://github.com/didrux',
                            'https://t.me/didrux',
                        ],
                    })}
                </script>
            </Head>

            {/* HERO */}
            <section id="home" className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <h1 className={styles.title}>
                                I turn complex systems into clear, developer-ready docs.
                            </h1>
                            <p className={styles.subtitle}>
                                API references, tutorials, conceptual guides, and end-to-end docs systems (docs-as-code, CI/CD, IA).
                            </p>
                            <div className={styles.ctaRow}>
                                <a href="#work" className={styles.primaryBtn}>See my work</a>
                                <a href="#contact" className={styles.outlineBtn}>Get in touch</a>
                                <a href="/Mykhailo-Ovdiienko-CV.pdf" className={styles.outlineBtn}>Download résumé</a>
                            </div>
                            <ul className={styles.badges}>
                                <li>• Available for freelance/contract</li>
                                <li>• Preferred: DevTools, APIs, Platforms</li>
                            </ul>
                        </div>
                        <div className={styles.heroArt} aria-hidden="true">✍️</div>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section id="work" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.h2}>Selected work</h2>
                    </div>

                    <div className={styles.cardGrid}>
                        {workItems.map((item, i) => (
                            <article key={i} className={styles.card}>
                                <div className={styles.cardBanner}>
                                    <Link to={item.href} className={styles.emojiLink} aria-label={`Open ${item.title}`}>
                                        <span className={styles.cardEmoji} role="img" aria-hidden="true">{item.emoji}</span>
                                    </Link>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>
                                        <Link to={item.href} className={styles.titleLink}>{item.title}</Link>
                                    </h3>
                                    <p className={styles.cardSummary}>{item.summary}</p>
                                    <ul className={styles.tagRow}>
                                        {item.tags.map((t) => (
                                            <li key={t} className={styles.tag}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS / LOGO CLOUD */}
            <section id="skills" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Skills & tooling</h2>

                    <div className={styles.skillsGrid}>
                        <div className={styles.skillBox}>
                            <h3>Docs types</h3>
                            <p>API refs (REST), tutorials, how-tos, concepts, release notes, admin/setup, troubleshooting.</p>
                        </div>
                        <div className={styles.skillBox}>
                            <h3>Docs systems</h3>
                            <p>Docusaurus/MDX, ReadMe, Stoplight, governance, style guides, templates, terminology.</p>
                        </div>
                        <div className={styles.skillBox}>
                            <h3>Docs-as-code</h3>
                            <p>GitHub/GitLab, PR reviews, CI checks (links/anchors), automated publishing/versioning.</p>
                        </div>
                        <div className={styles.skillBox}>
                            <h3>APIs & dev</h3>
                            <p>OpenAPI, Postman, cURL, auth flows; Python/JS; basic React/Lit; HTML/CSS/Tailwind.</p>
                        </div>
                        <div className={styles.skillBox}>
                            <h3>Collaboration</h3>
                            <p>SME interviews, change logs, support analytics, IA audits, release alignment.</p>
                        </div>
                        <div className={styles.skillBox}>
                            <h3>Tools</h3>
                            <p>Confluence, Jira, Zendesk, draw.io, Snagit; Grafana exposure.</p>
                        </div>
                    </div>

                    <div className={styles.logoCloud} aria-label="Tooling logos">
                        {logos.map((l) => (
                            <img key={l.alt} src={l.src} alt={l.alt} loading="lazy" className={styles.logo} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div>
                            <h2 className={styles.h2}>About me</h2>
                            <p className={styles.lead}>
                                Technical Writer with ~5 years building API/product documentation and the systems that keep it accurate. I design docs-as-code workflows, refactor information architectures, and collaborate with Engineering/PM/Support to turn change logs and ticket patterns into clear, useful content.
                            </p>
                            <ul className={styles.list}>
                                <li>📍 Based in Poland (open to remote)</li>
                                <li>🧩 Strong in API docs, IA, docs tooling/automation</li>
                                <li>✅ English C1; Ukrainian/Russian native; Polish beginner</li>
                            </ul>
                        </div>
                        <aside className={styles.aside}>
                            <div className={styles.asideBox}>
                                <h3 className={styles.asideTitle}>Highlights</h3>
                                <ul className={styles.asideList}>
                                    <li>Migrated Stoplight → ReadMe with CI/CD auto-publish</li>
                                    <li>Upgraded/de-duplicated OpenAPI; 190+ endpoints reviewed</li>
                                    <li>Defined templates/ownership/review cadence in Confluence</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contactBox}>
                        <h2 className={styles.h2}>Contact</h2>
                        <p className={styles.muted}>Best way to reach me is email. I typically respond within one business day.</p>
                        <div className={styles.contactRow}>
                            <a className={styles.outlineBtn} href="mailto:mishaov@gmail.com">mishaov@gmail.com</a>
                            <a className={styles.outlineBtn} href="https://www.linkedin.com/in/mykhailo-ovdiienko" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a className={styles.outlineBtn} href="https://github.com/didrux" target="_blank" rel="noreferrer">GitHub</a>
                            <a className={styles.outlineBtn} href="https://t.me/didrux" target="_blank" rel="noreferrer">Telegram</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
