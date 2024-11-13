import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.companyInfo}>
          <div className={styles.logoPlaceholder}>
            <img src="./logo.png" alt="logo" />
          </div>
          <p>manav@makaicare.com</p>
          <p>415, Mission Street, San Francisco - 94105</p>
        </div>
        <div className={styles.links}>
          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li>Help Center</li>
              <li>Trust Center</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 HealthTech AI, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
