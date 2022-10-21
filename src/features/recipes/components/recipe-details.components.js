import React, { useContext } from "react";
import { themes } from "../../../infrastructure/themes/index";
import { FlatList, ScrollView } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components";
import { SettingsContext } from "../../../services/settings/settings.context";

const DynamicIngredientListRender = styled(FlatList).attrs({
  height: 200,
  flexGrow: 0,
})``;

export const IngredientList = ({ data }) => {
  const { isMetric } = useContext(SettingsContext);
  if (!data) {
    return;
  }
  return (
    <List.Accordion
      title="ingredients"
      titleStyle={{ fontFamily: themes.fontFamily.primary }}
      left={(props) => <List.Icon {...props} icon="food-variant" />}
      theme={{ colors: { primary: themes.colors.ui.lightMode_secondary } }}
    >
      <DynamicIngredientListRender
        data={data}
        renderItem={({ item }) => {
          if (isMetric) {
            // metric measurements
            const metricValues = item.measures.metric;
            return (
              <List.Item
                key={Math.floor(Math.random() * 10) + item}
                title={`${Math.floor(metricValues.amount)} ${
                  metricValues.unitShort
                } ${item.name}`}
                titleStyle={{ fontFamily: themes.fontFamily.primary }}
              />
            );
          } else {
            // for US measurement
            const usValues = item.measures.us;
            return (
              <List.Item
                key={Math.floor(Math.random() * 100) + item.id}
                title={`${
                  usValues.amount
                } ${usValues.unitShort.toLowerCase()} ${item.name}`}
                titleStyle={{ fontFamily: themes.fontFamily.primary }}
              />
            );
          }
          
        }}
      />
    </List.Accordion>
  );
};

export const CookingInstructions = ({ data }) => {
  if (!data.analyzedInstructions) {
    return;
  }
  const instructions = Object.assign(data.analyzedInstructions)[0].steps;

  return (
    <List.Accordion
      title="cooking instructions"
      titleStyle={{ fontFamily: themes.fontFamily.primary }}
      left={(props) => <List.Icon {...props} icon="chef-hat" />}
      theme={{ colors: { primary: themes.colors.ui.lightMode_secondary } }}
    >
      <DynamicIngredientListRender
        data={instructions}
        renderItem={({ item }) => {
          return (
            <List.Item
              key={Math.floor(Math.random() * 10) + item}
              title={`${item.number}. ${item.step}`}
              titleStyle={{
                fontFamily: themes.fontFamily.primary,
                marginLeft: -50,
              }}
              titleNumberOfLines={20}
            />
          );
        }}
      />
    </List.Accordion>
  );
};

export const MoreInformation = ({ data }) => {
  if (!data) {
    return;
  }
  const vegetarian = data.vegetarian ? "yes" : "no";
  const vegan = data.vegan ? "yes" : "no";
  const glutenFree = data.glutenFree ? "yes" : "no";
  const pricePerServing = "$" + Math.floor(data.pricePerServing) / 100;
  // nutri info, foodista url, price per serving, dishtypes
  return (
    <List.Accordion
      title="more information"
      titleStyle={{ fontFamily: themes.fontFamily.primary }}
      left={(props) => <List.Icon {...props} icon="nutrition" />}
      theme={{ colors: { primary: themes.colors.ui.lightMode_secondary } }}
    >
      <ScrollView>
        <List.Item
          title={`vegetarian: ${vegetarian}`}
          titleStyle={{ fontFamily: themes.fontFamily.primary }}
        />
        <List.Item
          title={`vegan: ${vegan}`}
          titleStyle={{ fontFamily: themes.fontFamily.primary }}
        />
        <List.Item
          title={`gluten free: ${glutenFree}`}
          titleStyle={{ fontFamily: themes.fontFamily.primary }}
        />
        <List.Item
          title={`est. price per serving: ${pricePerServing}`}
          titleStyle={{ fontFamily: themes.fontFamily.primary }}
        />
      </ScrollView>
    </List.Accordion>
  );
};
