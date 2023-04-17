import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChessBoard = () => {
  const boardSize = 8;
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];

    for (let j = 0; j < boardSize; j++) {
      const isBlackSquare = (i + j) % 2 === 1;

      row.push(
        <View key={`${i}-${j}`} style={[styles.square, isBlackSquare ? styles.blackSquare : styles.whiteSquare]} />
      );
    }

    board.push(<View key={i} style={styles.row}>{row}</View>);
  }

  return <View style={styles.board}>{board}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
  },
  blackSquare: {
    backgroundColor: 'black',
  },
  whiteSquare: {
    backgroundColor: 'white',
  },
});

export default ChessBoard;