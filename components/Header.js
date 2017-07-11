const Header = () => (
      <nav className="navbar">
        <a className="navbar-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
        </a>

        <div className="navbar-end">
          <a className="navbar-item">Services</a>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Contact</a>
        </div>
        <style jsx global>
          {`
        img {
          height: 28px;
          width: 112px;
        }
      `}
        </style>
      </nav>
)

export default Header
