import { ToastContainer } from 'react-toastify'
import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import '@rainbow-me/rainbowkit/styles.css'
import { useEffect, useState } from 'react'
import { Providers } from '@/services/Provider'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

export default function App({ Component, pageProps} : AppProps) {
    const [showChild, setshowChild] = useState<boolean>(false)

    useEffect(() => {
        setshowChild(true);
    }, [])
    
    if(!showChild || typeof window == 'undefined') {
        return null
    } else {
        return (
            <Providers pageProps={pageProps}>
                <div className='min-h-screen bg-gray-100'>
                    <Header/>
                    <div className='mt-10 h-20'></div>
                    <Component {...pageProps}/>
                    <div className='mt-10 h-20'></div>

                    <ToastContainer
                    position='bottom-center'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                    />
                </div>
            </Providers>
        )
    }
}