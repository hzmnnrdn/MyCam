import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import { StyleSheet, Dimensions,Text } from 'react-native';
  

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'black',
    },
  
    body: {
      backgroundColor: 'grey',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      height: Dimensions.get('screen').height - 20,
      width: Dimensions.get('screen').width
    },
    TopText: {
        textAlign:'center',
        fontSize:20,
        paddingBottom:10,
        fontFamily:'',
        fontWeight: 'bold'

    },
    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center'
    },
    images: {
      width: 300,
      height: 300,
      borderColor: 'black',
      borderWidth: 3,
      marginHorizontal: 3
    },
    btnParentSection: {
      alignItems: 'center',
      marginTop:10
    },
    btnSection: {
      width: 225,
      height: 50,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:10
    },
    btnText: {
      textAlign: 'center',
      color: 'blue',
      fontSize: 14,
      fontWeight:'bold'
    }
  }); 
  export default styles;
  