import './Footer.css';

const socials = [
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z"/></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor"/></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 7.3c-.6.3-1.2.4-1.8.5.7-.4 1.2-1 1.5-1.7-.7.4-1.4.6-2.1.8A3.2 3.2 0 0 0 12.6 9c0 .3 0 .5.1.7a9.2 9.2 0 0 1-6.7-3.4 3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.4-.4 0 1.5 1 2.8 2.5 3.1-.5.1-1 .1-1.5-.1.4 1.3 1.6 2.2 3 2.2A6.4 6.4 0 0 1 5 16.8a9 9 0 0 0 5 1.5c6.1 0 9.4-5.1 9.4-9.5v-.4c.7-.4 1.2-.9 1.6-1.1Z"/></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1.8 2H7.8V20H4.2V10ZM9.5 10h3.5v1.4h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V20h-3.6v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V20H9.5V10Z"/></svg>
];

export default function Footer(){
  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <a className="footer-logo" href="#"><span className="logo-mark" aria-hidden="true"></span>TrailHive</a>
        <div>
          <h4>App</h4><a href="#features">Features</a><a href="#benefits">Benefits</a><a href="#pricing">Pricing</a><a href="#explore">Explore</a><a href="#trails">Trails</a>
        </div>
        <div>
          <h4>Company</h4><a href="#about">About</a><a href="#jobs">Jobs</a><a href="#press">Press</a><a href="#support">Support</a><a href="#members">Members</a>
        </div>
        <form onSubmit={e=>e.preventDefault()}>
          <div className="subscribe"><input type="email" placeholder="Enter your email"/><button type="submit">Subscribe</button></div>
          <small>By subscribing you agree to with our <u>Privacy Policy</u></small>
        </form>
      </div>
      <div className="footer-bottom">
        <span>© 2023 TrailHive. All rights reserved.</span>
        <span><u>Privacy Policy</u>　 <u>Terms of Service</u>　 <u>Cookies Settings</u></span>
        <span className="social-icons">{socials.map((icon,i)=><a href="#" key={i}>{icon}</a>)}</span>
      </div>
    </footer>
  );
}
