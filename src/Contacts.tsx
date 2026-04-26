import './Contacts.css';
import { useLang } from './LangContext'

export default function Contacts(){
    const { nls } = useLang();
    return (
        <section id="contact">
            <h4>{nls("contact")}</h4>
        </section>
    );
}