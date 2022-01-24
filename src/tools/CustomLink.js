import { Link, useMatch, useResolvedPath } from "react-router-dom";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none", color: "white" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (当前)"}
    </div>
  );
}
export default CustomLink;
