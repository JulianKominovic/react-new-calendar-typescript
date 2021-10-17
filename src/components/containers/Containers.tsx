import "./containers.css";

//FULLSCREEN CONTAINER

interface ContainersProps {
  children: JSX.Element | JSX.Element[];
  classNames?: string;
}

const FullScreen = ({
  children,
  classNames = "",
}: ContainersProps): JSX.Element => {
  return <main className={`fullscreen home-bg ${classNames}`}>{children}</main>;
};

// FLEX CONTAINER

interface FlexContainerProps {
  children: JSX.Element | JSX.Element[];
  classNames?: string;
  gap?: string;
}

const FlexContainer = ({
  children,
  classNames = "",
  gap,
}: FlexContainerProps): JSX.Element => {
  return (
    <section
      style={{
        gap: gap,
      }}
      className={`home-bg flex ${classNames}`}
    >
      {children}
    </section>
  );
};

// BLOCK CONTAINER

const BlockContainer = ({
  children,
  classNames = "",
}: ContainersProps): JSX.Element => {
  return <main className={classNames}>{children}</main>;
};

export { FullScreen, BlockContainer, FlexContainer };
