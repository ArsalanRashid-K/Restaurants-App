import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const Mytext = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <Mytext>{restaurant.name} </Mytext>
    </>
  );
};
