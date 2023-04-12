import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { WagmiConfig, createClient, configureChains, goerli } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <MantineProvider withNormalizeCSS>
        <Notifications />
        <Component {...pageProps} />
      </MantineProvider>
    </WagmiConfig>

  )
}
