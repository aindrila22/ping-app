"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import store from "../redux/store";

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default AuthProvider;
