import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from './../../config/theme';

import Header from './Header';
import Footer from './Footer';

import Breadcrumbs from './Breadcrumbs';

const PageWrapper = ({ title, description, settings, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header
        logo={settings.item.elements.logo.value[0]}
        items={settings.item.elements.navigation_items.value}
        modularContent={settings.modular_content} />
      <Breadcrumbs />
      <main>
        {children}
      </main>
      <Footer
        phoneNumber={settings.item.elements.phone_number.value}
        emailAddress={settings.item.elements.email_address.value}
        address={settings.item.elements.address.value}/>
    </ThemeProvider>
  )
}

export default PageWrapper;
