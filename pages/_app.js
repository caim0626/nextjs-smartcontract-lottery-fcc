import "@/styles/globals.css"
import React from "react"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}
