import '@/styles/globals.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false


library.add(faTwitter);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
