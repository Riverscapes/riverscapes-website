/**
 * Footer component
 */

import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as footerStyles from './footer.module.css'

export const Copyright: React.FC = () => {
  return (
    <div className={footerStyles.copyright}>
      <div>
        <a href={`https://creativecommons.org/licenses/by/4.0/`}>
          <StaticImage
            layout={'constrained'}
            formats={['auto', 'webp', 'avif']}
            src="../../images/icon-copyright.png"
            width={36}
            quality={100}
            alt="copyright logo"
            placeholder="none"
          />
        </a>
      </div>
      <div>
        <a href={`https://creativecommons.org/licenses/by/4.0/`}>
          <StaticImage
            layout={'constrained'}
            formats={['auto', 'webp', 'avif']}
            src="../../images/icon-person.png"
            width={36}
            quality={100}
            alt="Person logo"
            placeholder="none"
          />
        </a>
      </div>
      <p>Riverscapes Consortium</p>
    </div>
  )
}
