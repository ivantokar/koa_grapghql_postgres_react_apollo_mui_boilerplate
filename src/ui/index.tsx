import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import * as serviceWorker from './serviceWorker'
import Routers from './routes'
import { ThemeProvider } from './mui'
import {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.PUBLIC_URL,
    }),
    // Apollo Dev Tool
    connectToDevTools: true,
})

const App = () => {
    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <ThemeProvider>
                    <Helmet
                        title="Personality Resume"
                        meta={[
                            {
                                name: 'description',
                                content:
                                    'Create your Personality Profile and get judged by who you are as a person and what you can do for your next company instead of a history of where you worked.',
                            },
                        ]}
                    />
                    <Routers />
                </ThemeProvider>
            </ApolloProvider>
        </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
