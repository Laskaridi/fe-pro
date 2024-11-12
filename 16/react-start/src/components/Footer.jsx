import React from 'react';

function Footer() {
    const nowYear = new Date().getFullYear();
    const datInfo = `Created by the Bootstrap team · © ${nowYear}`
    return (
        <footer className="pt-5 my-5 text-body-secondary border-top">
    {datInfo}
  </footer>
    );
}

export default Footer;