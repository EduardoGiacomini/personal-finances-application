import { ReactComponentElement } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/user";

export function PrivateRoute({ children }: Props) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

type Props = {
  children: ReactComponentElement<any>;
};
