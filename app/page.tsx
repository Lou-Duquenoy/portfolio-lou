"use client";
import styles from "../styles/Index.module.css";
import { useState } from "react";
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTelegram,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiSymfony,
  SiFlutter,
  SiPhp,
  SiAngular,
  SiKotlin,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔍 Vérification des champs vides
    if (!name || !email || !message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    // 🔍 Validation de l’email (simple mais efficace)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Veuillez entrer une adresse email valide.");
      return;
    }

    // ✅ Construction des données à envoyer
    const formData = {
      access_key: "a43566b8-e93a-4b80-917b-3450c25b07d3", // ← remplace par la tienne
      name,
      email,
      message,
    };

    try {
      setStatus("Envoi en cours...");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");

    if (!contactElement) {
      console.warn("Element with id 'contact' not found.");
      return;
    }
  };
  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById("about");

    if (!aboutElement) {
      console.warn("Element with id 'contact' not found.");
      return;
    }
  };

  const handleScrollToProfile = () => {
    const profileElement = document.getElementById("profile");

    if (!profileElement) {
      console.warn("Element with id 'contact' not found.");
      return;
    }

    const offsetTop = profileElement.offsetTop; // Position de l'élément
    const scrollDuration = 600; // Durée du défilement (en ms)

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#31bbd8",
      color: "#171717",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  return (
    <div className={styles.bigContainer}>
      <div>
        <div className={styles.barTop} />
        <div id="profile" className={styles.profileSectionBackground}>
          <motion.div
            className={styles.profileSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <p className={styles.name}>I&apos;m Lou Duquenoy</p>
            </div>
            <div>
              <div className={styles.social}>
                <a target="_blank" href="https://github.com/Lou-Duquenoy">
                  <SiGithub />
                </a>
                <a target="_blank" href="https://github.com/Lou-Duquenoy">
                  <SiLinkedin />
                </a>
                <a>
                  <SiTelegram />
                </a>
              </div>
              <div className={styles.buttonContainer}>
                <motion.a
                  href="/DUQUENOY_Lou.pdf"
                  download
                  className={styles["cta"] + " " + styles["ctaLeft"]}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Resume
                </motion.a>

                <motion.a
                  className="interactiveButton"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToContact();
                  }}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
          <div
            onClick={(e) => {
              e.preventDefault();
              handleScrollToAbout();
            }}
            className={styles.arrowContainer}
          >
            <div className={styles.arrow}></div>
          </div>
        </div>
      </div>
      <div id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <img className={styles.avatar} src="avatar.jpg" />
          <div>
            <h2>About Me</h2>
            <p>
              I am a passionate Full Stack Developer with a strong foundation in
              web technologies, holding a Bachelor&apos;s Degree in Web
              Development and an MBA in Full Stack Development from
              MyDigitalSchool. I enjoy building user-friendly and efficient
              digital solutions, thrive in collaborative environments, and am
              driven by a continuous desire to learn and take on new technical
              challenges. My goal is to create impactful applications that make
              a difference.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <h2>Expériences</h2>

        <div className={styles.projectList}>
          <div className={styles.project + " " + styles.projectLeft}>
            <motion.div
              className={styles.projectImageWrapper}
              whileHover="hover"
              initial="initial"
              animate="initial"
            >
              <img
                onClick={() =>
                  window.open("https://lebusmagiquelille.fr/", "_blank")
                }
                className={styles.exempleProjects}
                src="busmagique.png"
                alt="Aperçu du site Bus Magique"
              />
              <motion.div
                className={styles.imageOverlay}
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
              >
                <p className={styles.overlayText}>
                  <strong>Makewaves – Refonte plateforme bus magique</strong>
                  <br />
                  <em>Apprenti Développeur Front End Junior – 2020-2021</em>
                  <br />
                </p>
              </motion.div>
            </motion.div>
            <div
              onClick={() =>
                window.open("https://lebusmagiquelille.fr/", "_blank")
              }
              className={styles.containerBottomProject}
            >
              <div className={styles.descriptif}>
                <p>
                  <strong>Makewaves – Refonte plateforme bus magique</strong>
                  <br />
                  <em>Apprenti Développeur Front End Junior - 2020-2021</em>
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className={styles.project}>
            <motion.div
              className={styles.projectImageWrapper}
              whileHover="hover"
              initial="initial"
              animate="initial"
            >
              <img
                onClick={() => window.open("https://fr.ozapay.me/", "_blank")}
                className={styles.exempleProjects}
                src="oza.png"
                alt="Aperçu de l’application Ozalentour"
              />
              <motion.div
                className={styles.imageOverlay}
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
              >
                <p className={styles.overlayText}>
                  <strong>Ozalentour – Application de paiement</strong>
                  <br />
                  <em>Développeur Full Stack Junior – 2023-2025</em>
                  <br />
                  <em>Apprenti Développeur Full Stack Junior – 2022-2023</em>
                  <br />
                </p>
              </motion.div>
            </motion.div>

            <div
              onClick={() => window.open("https://fr.ozapay.me/", "_blank")}
              className={styles.containerBottomProject}
            >
              <div className={styles.descriptif}>
                <p>
                  <strong>Ozalentour – Application de paiement</strong>
                  <br />
                  <em>Développeur Full Stack Junior – 2023-2025</em>
                  <br />
                  <em>Apprenti Développeur Full Stack Junior – 2022-2023</em>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillsBoxContainer}>
          <div className={styles.skillsBox}>
            <p className={styles.skillsTitle}>Frontend development</p>
            <ul className={styles.skillsList}>
              <li>
                <SiNextdotjs style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiReact style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiAngular style={{ marginRight: "0.5rem" }} />
              </li>
            </ul>
          </div>
          <div className={styles.skillsBox}>
            <h3 className={styles.skillsTitle}>Backend development</h3>
            <ul className={styles.skillsList}>
              <li>
                <SiNodedotjs style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiSymfony style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiPhp style={{ marginRight: "0.5rem" }} />
              </li>
            </ul>
          </div>
          <div className={styles.skillsBox}>
            <h3 className={styles.skillsTitle}>Mobile development</h3>
            <ul className={styles.skillsList}>
              <li>
                <SiReact style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiFlutter style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiKotlin style={{ marginRight: "0.5rem" }} />
              </li>
            </ul>
          </div>
          <div className={styles.skillsBox}>
            <h3 className={styles.skillsTitle}>Tools and DevOps</h3>
            <ul className={styles.skillsList}>
              <li>
                <SiDocker style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiGit style={{ marginRight: "0.5rem" }} />
              </li>
              <li>
                <SiGithub style={{ marginRight: "0.5rem" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <img className={styles.mailIcon} src="email.svg" />
          <p>Get in touch.</p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows={5}
                maxLength={200}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {status && <p className={styles.status}>{status}</p>}
              <div>
                <button>Send message</button>
              </div>
            </form>
          </div>
          <div className={styles.socialWrapper}>
            <p>
              Here is a good spot for a message to your readers to let them know
              how best to reach out to you.
            </p>
            <div className={styles.socialContact}>
              <a target="_blank" href="mailto:lou.duquenoy@gmail.com">
                <div className={styles.contactIcons}>
                  <SiGmail />
                </div>
                <div>
                  <p>lou.duquenoy@gmail.com</p>
                </div>
              </a>

              <a target="_blank" href="https://github.com/Lou-Duquenoy">
                <div className={styles.contactIcons}>
                  <SiGithub />
                </div>
                <div>
                  <p>lou-duquenoy</p>
                </div>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/lou-duquenoy-0b68a3168/"
              >
                <div className={styles.contactIcons}>
                  <SiLinkedin />
                </div>
                <div>
                  <p>Lou Duquenoy</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          handleScrollToProfile();
        }}
        className={styles.arrowContainerBottom}
      >
        <div className={styles.arrowBottom}></div>
      </div>

      <div className={styles.footer}>
        <div className={styles.social}>
          <a>
            <SiGithub />
          </a>

          <a>
            <SiLinkedin />
          </a>

          <a>
            <SiTelegram />
          </a>
        </div>

        <div className={styles.copyright}>
          <p>© Copyright 2025 John Doe</p>
        </div>
      </div>
    </div>
  );
}
