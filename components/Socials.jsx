import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Social = [
  { icon: <FaGithub />, path: "https://github.com/UmerIshaq" },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=100074495996679&mibextid=ZbWKwL",
  },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/im-umer-khan/" },
  {
    icon: <FaTwitter />,
    path: "https://x.com/i/flow/login?redirect_after_login=%2FUmer_Khan_G",
  },
];
const Socials = ({ ContainerStyle, IconStyle }) => {
  return (
    <div className={ContainerStyle}>
      {Social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={IconStyle}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
