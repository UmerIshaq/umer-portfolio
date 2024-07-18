import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Social = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Socials = ({ ContainerStyle, IconStyle }) => {
  return (
    <div className={ContainerStyle}>
      {Social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={IconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
