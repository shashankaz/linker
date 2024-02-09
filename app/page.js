import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";

export default function Home() {
  return (
    <>
      <div id="container">
        <Image src="/logo.jpg" width={100} height={100} id="logo" />
        <h1>Shashank</h1>
        <div id="social-bar">
          <a href="https://www.instagram.com/shashankaz" target="_blank">
            <Image src="/instagram.png" height={30} width={30} id="social" />
          </a>
          <a href="https://www.linkedin.com/in/shashankaz/" target="_blank">
            <Image src="/linkedin.png" height={30} width={30} id="social" />
          </a>
          <a href="https://twitter.com/shashankaz" target="_blank">
            <Image src="/twitter.png" height={30} width={30} id="social" />
          </a>
        </div>
        <LinkComponent title="Github" url="https://github.com/shashankaz" />
        <LinkComponent
          title="CodeChef"
          url="https://www.codechef.com/users/o_r_e_o"
        />
        <LinkComponent
          title="Codeforces"
          url="https://codeforces.com/profile/shashankaz"
        />
      </div>
    </>
  );
}
