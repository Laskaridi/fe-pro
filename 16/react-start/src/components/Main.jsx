import React from 'react';

function Main(props) {
    return (
        <div className="row g-5">
      <div className="col-md-6">
        <h2 className="text-body-emphasis">Starter projects</h2>
        <p>Ready to go beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
        <ul className="list-unstyled ps-0">
          <li>
            <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/icons-font" rel="noopener" target="_blank">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap npm starter
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/parcel" rel="noopener" target="_blank">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Parcel starter
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/vite" rel="noopener" target="_blank">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Vite starter
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/webpack" rel="noopener" target="_blank">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Webpack starter
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <h2 className="text-body-emphasis">Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul className="list-unstyled ps-0">
          <li>
            <a className="icon-link mb-1" href="/docs/5.3/getting-started/introduction/">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap quick start guide
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/docs/5.3/getting-started/webpack/">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Webpack guide
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/docs/5.3/getting-started/parcel/">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Parcel guide
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/docs/5.3/getting-started/vite/">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Bootstrap Vite guide
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/docs/5.3/getting-started/contribute/">
              <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
              Contributing to Bootstrap
            </a>
          </li>
        </ul>
      </div>
    </div>
    );
}

export default Main;