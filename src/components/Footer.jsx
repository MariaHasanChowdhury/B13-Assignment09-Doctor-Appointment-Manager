import {
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <h2 className="text-2xl font-bold">
          DocAppoint
        </h2>

        <p>
          Smart Doctor Appointment
          Management System
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaFacebook />
          </a>

          <a>
            <FaGithub />
          </a>

          <a>
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;