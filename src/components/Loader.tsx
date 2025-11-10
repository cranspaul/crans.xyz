type LoaderProps = {
  message?: string;
};

const Loader = ({ message = "Loading..." }: LoaderProps) => {
  return (
    <div className="fullscreen-loader">
      <div className="loader-overlay" />
      <div className="loader-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loader;

