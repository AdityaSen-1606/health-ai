"use client";

import styles from "./page.module.css";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import right from "./assets/right_logo_slider.png";
import left from "./assets/left_logo_slider.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import Footer from "./components/Footer";
import { useRef } from "react";
import Form from "./components/Form";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.par}>
      <Navbar scrollToContact={scrollToContact} />
      <div className={styles.page}>
        <section>
          <div className={styles.sec1_container}>
            <div className={styles.sec1_container_t}>
              <h2>The medical scribe that actually works</h2>
              <button onClick={scrollToContact}>Request a Demo &gt; </button>
              <img src="./logo.png" alt="logo" />
            </div>
            <div className={styles.sec1_logo_slider}>
              <div className={styles.sec1_logo_slider_title}>
                <p>Trusted By :</p>
              </div>
              <div className={styles.sec1_logo_slider_wrapper}>
                <Image
                  src={left}
                  alt="Clinicians"
                  className={styles.sec1_logo_slider_shadow_left}
                />
                <div className={styles.sec1_single_slider_container}>
                  <Image
                    src={logo1}
                    alt="logo1"
                    className={styles.sec1_single_slider_container_img_1}
                  />
                  <Image
                    src={logo2}
                    alt="logo2"
                    className={styles.sec1_single_slider_container_img}
                  />
                  <Image
                    src={logo3}
                    alt="logo3"
                    className={styles.sec1_single_slider_container_img}
                  />
                </div>
                <Image
                  src={right}
                  alt="Clinicians"
                  className={styles.sec1_logo_slider_shadow_right}
                />
              </div>
            </div>
            <div className={styles.sec1_video}>
              <video
                preload="metadata"
                title="Health-AI"
                loop
                playsInline
                muted
                autoPlay
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "60vh",
                  objectFit: "cover",
                }}
              >
                <source type="video/mp4" src="./videos/video.mp4" />
              </video>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className={styles.data}>
          <div className={styles.counter_content}>
            <div className={styles.left_content}>
              <h2>More time to care for patients and providers</h2>
            </div>
            <div className={styles.counter_content_wrapper}>
              <div className={styles.single_number}>
                <h1>92%</h1>
                <p>Less time spent on notes and charts</p>
              </div>
              <div className={styles.single_number}>
                <h1>6+ hours</h1>
                <p>Saved per provider per week</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec3}>
        <div className={styles.sec3_container}>
          <div className={styles.sec3_header_wrapper}>
            <h1>Automate Workflow for Faster Patient Care</h1>
            <p>
              Reduce clinical burnout, increase patient satisfaction, and ensure
              best practices in patient care
            </p>
          </div>
          <div className={styles.sec3_features}>
            <div className={styles.sec3_features_tab}>
              <div className={styles.sec3_features_tab_button_wrapper}>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature1_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>Generate SOAP Notes for 40+ Specialties</h2>
                    <p>
                      Turn Patient encounters into SOAP, H&P, and customized
                      notes for clinicians.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature2_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>Suggest Medical Coding for Faster Reimbursements</h2>
                    <p>
                      Suggest ICD-10 and CPT codes for faster reimbursements.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature3_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Provide Post-Visit Summaries for Better Patient Engagement
                    </h2>
                    <p>
                      Generate patient-friendly summaries and letters of medical
                      necessity.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature4_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Multilingual Support for Complex Clinical Encounters
                    </h2>
                    <p>
                      Understand accents, jargon, and contextual conversations.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sec3_features_tab_content_wrapper}>
                <div
                  className={styles.sec3_features_tab_content_wrapper_single}
                >
                  <img
                    src="./features_tab_content_img.png"
                    alt="Health AI"
                    className={styles.features_tab_image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec3_button}>
          <button onClick={scrollToContact}>Schedule a demo</button>
        </div>
      </section>
      <section ref={contactRef} className={styles.contactSection}>
        <h2>Contact Us</h2>
        <Form/>
      </section>
      <Footer />
    </div>
  );
}
