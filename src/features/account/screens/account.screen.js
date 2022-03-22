import React from "react";
import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
