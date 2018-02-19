/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let whiteSquare = require('./img/whitesquare.png');
let darkSquare = require('./img/darksquare.png');
let squares = [whiteSquare, darkSquare];

export default class App extends Component {
  renderRow(n) {
    let row = [];
    for (let i = 0; i< 8; i++) {
      let index = (i + (n % 2)) % 2
      row.push((
        <Image
          key={`Cell${n}${i}`} 
          source={squares[index]}
          style={{width: 40, height: 40}}
        />
      ));
    }
    console.log(row);
    return row;
  }

  renderBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
      board.push((
        <View key={`Row${i}`} style={styles.row}>
          {this.renderRow(i).map(e => e)}
        </View>
      ))
    }
    console.log(board);
    return board;
  }
  render() {
    return (
      <View  style={styles.container}>
        {this.renderBoard().map(e => e)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
