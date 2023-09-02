import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opps! Something went Wrong {err.status}</h1>
    </div>
  );
};

export default Error;
