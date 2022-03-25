import React, { useContext } from "react";
import { SafeArea } from "../../../components/Utility/safe-area-component";
import { Text, Button } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>setting</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};
