import React, { Component } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card, CardItem, Grid, Row, Col, Text } from "native-base";

export default class Prestamos extends Component {
  render() {
    return (
      <Card>
        <CardItem header bordered>
          <Text style={{ color: "green" }}>Prestamos</Text>
        </CardItem>
        {this.props.prestamos.map((prestamo, index) => (
          <CardItem
            bordered
            key={index}
            button
            onPress={() => Alert.alert(`${prestamo.balance}`)}
          >
            <Grid>
              <Col size={45}>
                <Row>
                  <Text
                    style={{
                      color: "black"
                    }}
                  >
                    {prestamo.descripcion}
                  </Text>
                </Row>
                <Row>
                  <Text note>Pago {prestamo.pago}</Text>
                </Row>
              </Col>
              <Col size={55} style={{ alignItems: "flex-end" }}>
                <Row>
                  <Text style={{ color: "green" }}>{prestamo.balance}</Text>
                </Row>
                <Row>
                  <Text note>Prox Pago: {prestamo.proxpago}</Text>
                </Row>
              </Col>
            </Grid>
          </CardItem>
        ))}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});
