import { Link } from "wouter";
import "./anchors.css";
interface AnchorsProps {
  url: string;
  children: JSX.Element | JSX.Element[];
  classes?: string;
}

const ExternalAnchor = ({
  url,
  children,
  classes = "",
}: AnchorsProps): JSX.Element => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
};

const InternalAnchor = ({
  url,
  children,
  classes = "",
}: AnchorsProps): JSX.Element => {
  return (
    <Link href={url} className={classes}>
      <a href={url}>{children}</a>
    </Link>
  );
};

export { ExternalAnchor, InternalAnchor };
