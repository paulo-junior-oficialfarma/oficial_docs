import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrador Oficial',
    Svg: require('@site/static/img/home/arquitetura1.drawio (2).svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    href: '/docs/integrador/about', // Add the href prop here
  },

  {
    title: 'Dashboard Influenciadores',
    Svg: require('@site/static/img/home/dash_influencers.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    href: '/docs/projeto_influencers/about'
  },

  {
    title: 'Master',
    Svg: require('@site/static/img/home/dash_influencers.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    href: '/dashboard-influenciadores', // Add the href prop here
  },

  {
    title: 'ERP Medicator',
    Svg: require('@site/static/img/home/logo_medicator.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    href: '/dashboard-influenciadores', // Add the href prop here
  },

  {
    title: 'SalesForce',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    href: '/dashboard-influenciadores', // Add the href prop here
  },

  {
    title: 'E-Ship',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    href: '/dashboard-influenciadores', // Add the href prop here
  },
];

function Feature({Svg, title, description, href}) {
  return (
    <a href={href} rel="noopener noreferrer" className={clsx('col col--4 project')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
