import './Header.css';

import { useLang } from "./LangContext";
import type { Locale } from './locales';
// @ts-ignore
import enFlag from "./assets/gb.svg";
// @ts-ignore
import csFlag from "./assets/cz.svg";


export default function Header() {
    const { nls, setLang } = useLang();
    const name = "John Smith"
    const langs = [
        { code: "en", title: nls("lang.en.title"), label: nls("lang.en.label"), flag: enFlag },
        { code: "cs", title: nls("lang.cs.title"), label: nls("lang.cs.label"), flag: csFlag },
    ];

    return (
        <header>
            <h1>{nls("header.title")} — {name}</h1>
            <nav>
                <a href="#home">{nls("home")}</a>
                <a href="#about">{nls("about")}</a>
                <a href="#contact">{nls("contact")}</a>
            </nav>
            <section id="quick-links"></section>
            <section id="lang">
                {langs.map((l) => (
                    <a
                        key={l.code}
                        href="#"
                        onClick={(e) => { e.preventDefault(); setLang(l.code as Locale); }}
                        title={l.title}
                        aria-label={l.label}
                    >
                        <img src={l.flag} alt={l.label} />
                    </a>
                ))}
            </section>
        </header>
    );
}