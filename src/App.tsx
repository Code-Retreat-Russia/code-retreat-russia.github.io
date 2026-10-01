import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Timeline } from "./components/Timeline";
import { Trainers } from "./components/Trainers";
import { Events } from "./components/Events";
import { SourceCode } from "./components/SourceCode";
import { Stats } from "./components/Stats";
import { Finale } from "./components/Finale";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <>
            <a className="skip-link" href="#main">
                Перейти к содержимому
            </a>
            <Header />
            <main id="main">
                <Hero />
                <About />
                <Values />
                <Trainers />
                <Timeline />
                <SourceCode />
                <Events />
                <Stats />
                <Finale />
            </main>
            <Footer />
        </>
    );
}
