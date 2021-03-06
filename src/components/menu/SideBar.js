import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  View,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Switch
} from "native-base";
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
            <ListItem
              button
              onPress={() => this.props.navigator.navigate("LoginPage")}
            >
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
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="plane" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
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
  logo: { width: 220, height: 70 }
});
