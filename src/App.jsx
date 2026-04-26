// import { useState } from 'react'
import './App.css'
import Header from './Header'
import Contacts from './Contacts.js'
import { useLang } from './LangContext'

function App() {
    const { nls } = useLang();
    return (
        <>
            <Header />
            <div className="ticks"></div>
            <section id="home">
                <h4>{nls("home")}</h4>
                <p>{nls("home.text")}</p>
            </section>

            <div className="ticks"></div>

            <section id="about">
                <h4>{nls("about")}</h4>
                <p>{nls("about.text")}</p>
            </section>

            <div className="ticks"></div>

            <Contacts />
            <section id="spacer">
                <p id="legal">
                    <span id="legal-left"></span>
                    <span id="legal-center">2026. Nothing is preserved.</span>
                    <span id="legal-right">
                        <a>raz</a>
                        <a>dva</a>
                    </span>
                </p>
            </section>
        </>
    )
}

export default App