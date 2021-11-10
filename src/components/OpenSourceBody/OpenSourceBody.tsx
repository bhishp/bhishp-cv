import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import CVAside from '../CVAside/CVAside';

/**
 * Bespoke component to represent the body of the OpenSource section
 * @constructor
 */
export const OpenSourceBody = () => {
  const [pkgInfo, setPkgInfo] = useState();
  useEffect(() => {
    const fetchTransformPkg = async () => {
      const pkgRes = await fetch("https://api.npms.io/v2/package/storybook-formik");
      const pkg = await pkgRes.json();
      const {
        collected: {
          metadata: {
            name,
            description,
            links: {
              npm
            }
          },
          npm: {
            downloads,
          }
        }
      } = pkg;

      const weeklyDownloads = downloads[1].count

      const transformed = {
        name,
        description,
        link: npm,
        weeklyDownloads
      };
      setPkgInfo(transformed);
    };
    fetchTransformPkg()
  }, []);

  if (!pkgInfo) {
    return null;
  }

  const {
    name,
    description,
    link,
    weeklyDownloads
  } = pkgInfo;

  return (
    <article className="Article">
      <div className="Article-wrapper">
        <CVAside />
        <div className="Article-info">
          <header className="Article-header">
            <h3>{name}</h3>
          </header>
          <ul className="oss-meta">
            <li><b>Weekly Downloads:</b> {weeklyDownloads.toLocaleString()}</li>
            <li><FontAwesomeIcon icon="link" /><b>:</b> <a href={link}>{link}</a></li>
          </ul>
          <div className="Article-body">
            <div className="Article-copy">
              <Markdown>{description}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
