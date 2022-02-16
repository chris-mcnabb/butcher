import '../styles/globals.css'
import {Provider} from "react-redux";
import {store, persistor} from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps}) {
   return(
       <Provider store={store}>
           <PersistGate loading="null" persistor={persistor}>
               <SessionProvider session={pageProps.session}>
               <Component {...pageProps} />
               </SessionProvider>
           </PersistGate>
       </Provider>
       )

}

export default MyApp
