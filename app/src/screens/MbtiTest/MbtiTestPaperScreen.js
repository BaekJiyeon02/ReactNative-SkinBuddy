import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import MbtiTestPaper from '../../components/MbtiTestPaper'

export default function MbtiTestPaperScreen() {



  useFocusEffect(
  React.useCallback(() => {
    // 탭이 활성화될 때 실행되는 함수
    return () => {
      // 탭이 비활성화될 때 실행되는 함수
    };
  }, [])
);


  return (
    <View style={styles.container}>
      <MbtiTestPaper></MbtiTestPaper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'columm',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
