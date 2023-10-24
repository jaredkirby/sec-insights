import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import type { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';


import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/Layout";
import "~/styles/globals.css";
import ReactGA from "react-ga4";

import { IntercomProvider } from "react-use-intercom";
import { GOOGLE_ANALYTICS_ID, INTERCOM_ID } from "~/constants";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactGA.initialize(GOOGLE_ANALYTICS_ID);

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MantineProvider theme={theme}>
        <IntercomProvider appId={INTERCOM_ID}>
          <Layout>
            <Notifications />
            <Component {...pageProps} />
          </Layout>
        </IntercomProvider>
      </MantineProvider>
    </>
  );
};

export default MyApp;
