import './globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from "next-themes"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
    </ThemeProvider>
  )
}

export default App;
