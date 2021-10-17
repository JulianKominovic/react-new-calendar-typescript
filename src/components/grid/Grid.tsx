import "./grid.css";

interface GridProps {
  classes?: string;
  children: JSX.Element | JSX.Element[];
}

const Grid = ({ classes = "", children }: GridProps): JSX.Element => {
  return <section className={`grid ${classes}`}>{children}</section>;
};

export default Grid;
