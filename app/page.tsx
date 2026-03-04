"use client";

import styles from "../styles/Index.module.css";
import { useMemo, useState } from "react";
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiSymfony,
  SiFlutter,
  SiAngular,
  SiKotlin,
} from "react-icons/si";
import { FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  role: string;
  period: string;
  objective: string; // ✅ Objectif du projet
  tech: string[];
  image: string;
  alt: string;
  liveUrl?: string;
  details?: string;
};

export default function Home() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const experiences: Experience[] = useMemo(
    () => [
      {
        title: "Ozalentour – Payment Application",
        role: "Junior Full Stack Developer",
        period: "2022 → 2025",
        objective:
          "Développer et maintenir une application web et mobile de paiement sécurisée, en améliorant en continu l’expérience utilisateur.",        
        tech: ["Next.js", "React", "Node.js", "Symfony", "Expo", "Docker", "GCP"],
        image: "oza.png",
        alt: "Aperçu de l’application Ozalentour",
        liveUrl: "https://fr.ozapay.me/",
        details:
          "Projet full-stack web + mobile. J’ai travaillé sur les features, la maintenance et l’amélioration continue.",
      },
      {
        title: "Makewaves – Bus Magique Platform Redesign",
        role: "Junior Front End Developer Apprentice",
        period: "2020 → 2021",
        objective:
          "Refondre le site web du « Bus Magique », lieu convivial et participatif ouvert à tous, afin d’améliorer la navigation et l’accès aux informations.",
        tech: ["HTML/CSS", "JS", "Integration"],
        image: "busmagique.png",
        alt: "Aperçu du site Bus Magique",
        liveUrl: "https://lebusmagiquelille.fr/",
        details:
          "Refonte front orientée UX : parcours, formulaires, pages clés et corrections itératives.",
      },
    ],
    []
  );

  const buttonVariants = {
    hover: {
      scale: 1.04,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Veuillez entrer une adresse email valide.");
      return;
    }

    

    

    const formData = { access_key: "a43566b8-e93a-4b80-917b-3450c25b07d3", name, email, message };

    try {
      setStatus("Envoi en cours...");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message envoyé !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Une erreur est survenue lors de l'envoi.");
        console.error(result);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setStatus("❌ Erreur réseau. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className={styles.bigContainer}>
      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <button
            className={styles.brand}
            onClick={() => scrollToId("profile")}
            aria-label="Retour en haut"
          >
            Lou Duquenoy
          </button>

          <nav className={styles.navLinks} aria-label="Navigation principale">
            <button onClick={() => scrollToId("about")}>About</button>
            <button onClick={() => scrollToId("experiences")}>Experiences</button>
            <button onClick={() => scrollToId("skills")}>Skills</button>
            <button onClick={() => scrollToId("contact")}>Contact</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="profile" className={styles.hero}>
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className={styles.kicker}>Full-Stack Developer • Mainframe</p>
          <h1 className={styles.name}>Lou Duquenoy</h1>
          <p className={styles.tagline}>
            Développeur full-stack également formé aux environnements mainframe avec COBOL batch sur z/OS et gestion de données via VSAM et DB2/SQL. Je recherche des opportunités me permettant d’évoluer aussi bien en Full Stack que sur des systèmes Mainframe.
          </p>

          <div className={styles.social}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Lou-Duquenoy"
              aria-label="GitHub"
            >
              <SiGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/lou-duquenoy-0b68a3168/"
              aria-label="LinkedIn"
            >
              <SiLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:lou.duquenoy@gmail.com"
              aria-label="Email"
            >
              <SiGmail />
            </a>
          </div>

          <div className={styles.ctaRow}>
            <motion.button
              className={`${styles.cta} ${styles.ctaPrimary}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToId("experiences")}
            >
              View projects
            </motion.button>

            <motion.a
              href="/DUQUENOY_Lou.pdf"
              download
              className={`${styles.cta} ${styles.ctaGhost}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Resume
            </motion.a>

            <motion.button
              className={`${styles.cta} ${styles.ctaGhost}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToId("contact")}
            >
              Contact
            </motion.button>
          </div>

          <button
            className={styles.scrollHint}
            onClick={() => scrollToId("about")}
            aria-label="Descendre vers About"
          >
            <span className={styles.scrollDot} />
          </button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <img
                className={styles.avatar}
                src="avatar.jpg"
                alt="Photo de Lou Duquenoy"
              />
              <div className={styles.quickFacts}>
                <div className={styles.factCard}>
                  <p className={styles.factTitle}>Focus</p>
                  <p className={styles.factValue}>Web • Mobile • Mainframe</p>
                </div>
                <div className={styles.factCard}>
                  <p className={styles.factTitle}>Stack</p>
                  <p className={styles.factValue}>
                    Next • Node • React Native • Symfony • COBOL
                  </p>
                </div>
                <div className={styles.factCard}>
                  <p className={styles.factTitle}>Mindset</p>
                  <p className={styles.factValue}>Produit • Team • Learn</p>
                </div>
              </div>
            </div>

            <div className={styles.aboutRight}>
              <h2 className={styles.sectionTitle}>About</h2>
              <p className={styles.text}>
                Développeur Full Stack, j’ai construit et maintenu des
                applications web et mobile (front-end, back-end, back-office,
                déploiement). En complément, j’ai suivi une formation Grands
                Systèmes orientée mainframe : développement COBOL batch sur z/OS,
                traitement de fichiers séquentiels/VSAM et accès DB2/SQL.
                Aujourd’hui, je recherche des opportunités Full Stack ou
                Mainframe, avec une préférence pour les contextes où la fiabilité,
                la robustesse et la qualité des traitements sont essentielles.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlightCard}>
                  <p className={styles.highlightTitle}>Ce que j’apporte</p>
                  <ul className={styles.bullets}>
                    <li>
                      Une approche claire : comprendre le besoin → itérer →
                      livrer.
                    </li>
                    <li>Qualité : lisibilité, tests et robustesse.</li>
                    <li>Communication : collaboration dev / produit / métier.</li>
                  </ul>
                </div>

                <div className={styles.highlightCard}>
                  <p className={styles.highlightTitle}>Objectif</p>
                  <p className={styles.textSmall}>
                    Rejoindre une équipe où je peux contribuer à un produit
                    concret (web/mobile), en continuant à monter en compétence
                    sur l’architecture, la performance et le devops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleLight}>Experiences</h2>

          <div className={styles.cardGrid}>
            {experiences.map((exp) => (
              <article key={exp.title} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img
                    className={styles.cardImg}
                    src={exp.image}
                    alt={exp.alt}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.cardTitle}>{exp.title}</h3>
                      <p className={styles.cardMeta}>
                        {exp.role} •{" "}
                        <span className={styles.muted}>{exp.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* ✅ Objectif */}
                  <div className={styles.cardBlock}>
                    <p className={styles.cardLabel}>Objectif</p>
                    <p className={styles.cardObjective}>{exp.objective}</p>
                  </div>
             
                  {/* ✅ bottom wrapper pour badges + actions en bas */}
                  <div className={styles.cardBottom}>
                    <div className={styles.techRow} aria-label="Technologies">
                      {exp.tech.map((t) => (
                        <span key={t} className={styles.badge}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={styles.cardActions}>
                      {exp.liveUrl && (
                        <motion.a
                          className={`${styles.smallBtn} ${styles.smallBtnPrimary}`}
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={styles.sectionLight}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillsBox}>
              <p className={styles.skillsTitle}>Mainframe</p>
              <ul className={styles.skillsList}>
                <li>
                  <span className={styles.skillDot} /> <span>COBOL (batch)</span>
                </li>
                <li>
                  <span className={styles.skillDot} /> <span>z/OS</span>
                </li>
                <li>
                  <span className={styles.skillDot} />{" "}
                  <span>VSAM / fichiers séquentiels</span>
                </li>
                <li>
                  <span className={styles.skillDot} /> <span>DB2 / SQL</span>
                </li>
              </ul>
            </div>

            <div className={styles.skillsBox}>
              <p className={styles.skillsTitle}>Frontend</p>
              <ul className={styles.skillsList}>
                <li>
                  <SiNextdotjs /> <span>Next</span>
                </li>
                <li>
                  <SiReact /> <span>React</span>
                </li>
                <li>
                  <SiAngular /> <span>Angular</span>
                </li>
              </ul>
            </div>

            <div className={styles.skillsBox}>
              <p className={styles.skillsTitle}>Backend</p>
              <ul className={styles.skillsList}>
                <li>
                  <SiNodedotjs /> <span>Node.js</span>
                </li>
                <li>
                  <SiSymfony /> <span>Symfony</span>
                </li>
                <li>
                  <FaCoffee /> <span>Java</span>
                </li>
              </ul>
            </div>

            <div className={styles.skillsBox}>
              <p className={styles.skillsTitle}>Mobile</p>
              <ul className={styles.skillsList}>
                <li>
                  <SiReact /> <span>React Native</span>
                </li>
                <li>
                  <SiFlutter /> <span>Flutter</span>
                </li>
                <li>
                  <SiKotlin /> <span>Kotlin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.contactHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Contact</h2>
              
            </div>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <label className={styles.label}>
                  Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className={styles.label}>
                  Email
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </label>

                <label className={styles.label}>
                  Message
                  <textarea
                    rows={5}
                    maxLength={600}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project / opportunity…"
                  />
                </label>

                {status && <p className={styles.status}>{status}</p>}

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Send message
                </motion.button>
              </form>
            </div>

            <aside className={styles.contactAside}>
              <p className={styles.asideText}>Tu peux aussi me contacter via :</p>

              <div className={styles.socialContact}>
                <a target="_blank" rel="noreferrer" href="mailto:lou.duquenoy@gmail.com">
                  <span className={styles.contactIcon}>
                    <SiGmail />
                  </span>
                  <span>lou.duquenoy@gmail.com</span>
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/Lou-Duquenoy">
                  <span className={styles.contactIcon}>
                    <SiGithub />
                  </span>
                  <span>Lou-Duquenoy</span>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/lou-duquenoy-0b68a3168/"
                >
                  <span className={styles.contactIcon}>
                    <SiLinkedin />
                  </span>
                  <span>Lou Duquenoy</span>
                </a>
              </div>
            </aside>
          </div>

          <div className={styles.footer}>
            <button className={styles.backTop} onClick={() => scrollToId("profile")}>
              ↑ Back to top
            </button>
            <p className={styles.copyright}>© Copyright 2026 Lou Duquenoy</p>
          </div>
        </div>
      </section>
    </div>
  );
}