import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Footer,
  Button,
  Icon,
  FooterTab,
  Header,
  Left,
  Body,
  Right,
  Title,
  Toast
} from "native-base";
import { RefreshControl, Alert, AsyncStorage } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { cuentas } from "../../api/auth";

export class Home extends Component {
  state = {
    refreshing: false,
    cuentas: []
  };

  componentDidMount() {
    AsyncStorage.getItem("usuario", (err, usuario) => {
      cuentas(usuario)
        .then(cuentas => this.setState({ cuentas }))
        .catch(err => {
          this.showError("Problemas para obtener balances.");
        });
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.setState({
      cuentas: [
        { descripcion: "Ahorros", balance: 12345 },
        { descripcion: "Xmas", balance: 67890 },
        { descripcion: "Depositos", balance: 1222.11 },
        { descripcion: "Depositos 2", balance: 100 },
        { descripcion: "Depositos 3", balance: 15.12 }
      ]
    });
    this.setState({ refreshing: false });
  };

  showError = msg => {
    Toast.show({
      text: msg,
      buttonText: "Ok",
      duration: 3000,
      type: "danger"
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Informacion</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.replace("LoginPage")}
            >
              <Icon name="exit" />
            </Button>
          </Right>
        </Header>
        <Content
          contentContainerStyle={{
            padding: "2%"
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              title="Actualizando..."
            />
          }
        >
          <Card>
            <CardItem header bordered>
              <Text>Cuentas</Text>
            </CardItem>
            {this.state.cuentas.map((cuenta, index) => (
              <CardItem
                bordered
                key={index}
                button
                onPress={() => Alert.alert(`${cuenta.balance}`)}
              >
                <Grid>
                  <Col size={35}>
                    <Row>
                      <Text
                        style={{
                          color: "green"
                        }}
                      >
                        {cuenta.descripcion}
                      </Text>
                    </Row>
                    <Row>
                      <Text note>Tipo {cuenta.tipo}</Text>
                    </Row>
                  </Col>
                  <Col size={60} style={{ alignItems: "flex-end" }}>
                    <Row>
                      <Text>{cuenta.balance}</Text>
                    </Row>
                    <Row>
                      <Text note>Disp: {cuenta.disponible}</Text>
                    </Row>
                  </Col>
                </Grid>
              </CardItem>
            ))}
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.toggleTab1()}>
              <Icon name="apps" />
            </Button>
            <Button onPress={() => this.toggleTab2()}>
              <Icon name="camera" />
            </Button>
            <Button onPress={() => this.toggleTab3()}>
              <Icon name="compass" />
            </Button>
            <Button onPress={() => this.toggleTab4()}>
              <Icon name="contact" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
