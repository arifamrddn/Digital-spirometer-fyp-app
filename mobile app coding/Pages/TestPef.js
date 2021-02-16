import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class TestPef extends React.Component {
  static navigationOptions = {
    
    headerMode:"float",
    headerStyle: {
        backgroundColor: '#37414a',
        elevation: null
    },

    headerTitleStyle: {
        fontWeight: '300',
        color: '#ffffff',
        fontSize: 20,
        flex:1,
        textAlign:"center"
    },
    // headerLeft: null
    backTitle: "Back",
    headerTintColor: '#fff',      
}
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.headerA}></View>
      <View style={styles.headerB}></View>
      
      <View style={styles.sTest}>
      <View style={styles.header}></View>
      <Text style={styles.sTestText}></Text><Text style={styles.sTestText}></Text>
      <Text style={styles.sTestText}>PEF</Text>
      <Text style={styles.sTestText2}>
      EXHALE AS HARD AS YOU CAN AFTER PRESSING START</Text>
      <TouchableOpacity  onPress={()=>{alert("pef")}}>
          <Image source={{uri:'https://i.ibb.co/rx4mYKW/pef-2-2x-2.png',}}style={styles.imageIconStyle2}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{alert("pef")}}>
          <Image source={{uri:'https://i.ibb.co/sHG087Q/Button-with-Background-7-2x.png',}}style={styles.imageIconStyle3}/>
        </TouchableOpacity>
        <Text style={styles.sTestText}>RESULTS:</Text>
      </View>
      
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TestScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/Qpw5zdM/Button-with-Background-3-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Results')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/zb6Qy4Z/Button-with-Background-4-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Etutorial')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/7jTdqMd/Button-with-Background-5-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SettingScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/dG3Rh90/Button-with-Background-6-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d1d1d1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    
    
    width:420,
    height:50,
    backgroundColor:'#37414a'

  },headerA: {
    
    position: 'absolute',
    top: 0,
    left: 0,
    width:420,
    height:77,
    backgroundColor:'#37414a'

  },
  headerB: {
    
    position: 'absolute',
    bottom: 0,
    left: 0,
    width:420,
    height:77,
    backgroundColor:'#333c42'

  },
  testB: {
    
    position: 'absolute',
    bottom: 0,
    left: 0,
    width:104,
    height:64,

  },
  resultsB: {
    
    position: 'absolute',
    bottom: 0,
    left: 90,
    width:104,
    height:64,

  },tutorialB: {
    
    position: 'absolute',
    bottom: 0,
    right: 90,
    width:104,
    height:64,

  },settingsB: {
    
    position: 'absolute',
    bottom: 0,
    right: 0,
    width:104,
    height:64,

  },
  imageIconStyle: {
    height: 60,
    width: 95,
    
  },
  imageIconStyle2: {
    height: 142,
    width: 142,
    
  },
  imageIconStyle3: {
    height: 35,
    width: 120,
    
  },
  bottom: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end'
  
  
},
midButton: {
  
  flexDirection: 'row',
  justifyContent: 'space-between',
  
  
  
},
sTest: {
  flex: 1,
  flexDirection:'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap:'nowrap',
  
  
},
sTestText: {
  fontSize:36,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:'#5c5a5a'
  
  
},
sTestText2: {
  fontSize:13,
  fontFamily:'sans-serif',
  textAlign :'center',
  color:'#687089'
  
  
},
});