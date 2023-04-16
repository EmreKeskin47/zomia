import { useRouter } from "next/router";

function ActiveLink({ children, href, color, textDecoration }) {
  const router = useRouter();
  const style = {
    textDecoration: { textDecoration },
    color: { color },
    // "&:hover": {
    //   color: "#F9A21B",
    // },
  };

  const handleClick = (e) => {
    e.preventDefault();
    href && router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
