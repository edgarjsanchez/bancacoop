import React, { Component } from "react";
import { Container, Content, List, ListItem, Text, View } from "native-base";
import { Image, StyleSheet } from "react-native";

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.imagecontainer}>
            <Image
              source={require("../../images/bancacoop.png")}
              style={styles.logo}
            />
          </View>

          <List>
            <ListItem>
              <Text>Pagos</Text>
            </ListItem>
            <ListItem>
              <Text>Transferencias</Text>
            </ListItem>
            <ListItem last>
              <Text>Tarjetas</Text>
            </ListItem>
            <ListItem>
              <Text>Personal</Text>
            </ListItem>
            <ListItem>
              <Text>Log out</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default SideBar;

const styles = StyleSheet.create({
  maincontainer: {
    padding: "5%",
    flex: 1,
    justifyContent: "center"
  },
  imagecontainer: {
    alignItems: "center",
    marginTop: "10%"
  },
  logo: { width: 300, height: 90 }
});
