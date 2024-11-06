import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.companyInfo}>
          <div className={styles.logoPlaceholder}>
          </div>
          <p>
            Revolutionizing healthcare with AI-powered solutions to reduce
            clinical burden on doctors.
          </p>
          <div className={styles.socialIcons}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li>AI Diagnostics</li>
              <li>EHR Management</li>
              <li>Predictive Analytics</li>
              <li>Clinical Decision Support</li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4>LEGAL</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2023 HealthTech AI, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
