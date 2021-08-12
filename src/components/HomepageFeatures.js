import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Einfache Sprache',
    Svg: require('../../static/img/incode-v7.svg').default,
    description: (
      <>
        Die InCode Sprache ist von Grund auf einfach gestalltet, sodass jeder sie sofort lesen und verstehen kann.
      </>
    ),
  },
  {
    title: 'Mächtiger Editor',
    Svg: require('../../static/img/code-editor.svg').default,
    description: (
      <>
        Der InCode Editor ist sehr mächtig, du kannst deine Website sowohl mit <code>Code</code> entwickeln als auch mit <code>Blöcken</code>!
      </>
    ),
  },
  {
    title: 'Viele Tutorials',
    Svg: require('../../static/img/tutorials.svg').default,
    description: (
      <>
        Du kannst mit Tutorials sowohl in Video- als auch in Textform lernen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
