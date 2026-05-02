import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__block footer__brand">
          <p className="footer__title">About Company</p>
          <p className="footer__text">
            We build modern digital experiences with clean design, reliable
            performance, and thoughtful user journeys. Trusted by teams that want
            to launch faster and grow smarter.
          </p>
        </div>

        <div className="footer__block">
          <p className="footer__title">Quick Links</p>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="home">Home</a>
            </li>
            <li>
              <a className="footer__link" href="#services">Services</a>
            </li>
            <li>
              <a className="footer__link" href="#projects">Projects</a>
            </li>
            <li>
              <a className="footer__link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__block">
          <p className="footer__title">Contact</p>
          <ul className="footer__contact">
            <li className="footer__contact-item">Email: hello@yourcompany.com</li>
            <li className="footer__contact-item">Phone: +1 (555) 123-4567</li>
            <li className="footer__contact-item">Location: 123 Business Ave, Suite 400</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Your Company. All rights reserved.</span>
        <div className="footer__legal">
          <a className="footer__link" href="#privacy">Privacy Policy</a>
          <a className="footer__link" href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
