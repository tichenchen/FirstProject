/**
 * Created by lenovo on 2016-05-05.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import componentIndex from '../index';

export default class SignUp extends Component {
    render() {
        const { router ,user,paw} = this.props;
        return (
            <View style={styles.container}>
                    <View style={styles.input}>
                        <View style={styles.header}>
                            <Text style = {styles.title}>
                                登陆
                            </Text>
                        </View>
                        <View style={styles.view}>
                            <TextInput style = {styles.text}  placeholder='手机号/邮箱' placeholderTextColor="#FFFFFF" underlinecolorandroid='transparent'>{user}</TextInput>
                            <View style={styles.dividerview}><Text style={styles.divider}></Text></View>
                            <TextInput style = {styles.text} placeholder='密码'  placeholderTextColor="#FFFFFF" secureTextEntry ={true} underlinecolorandroid='transparent'>{paw}</TextInput>
                            <View style={styles.dividerview}><Text style={styles.divider}></Text></View>
                            <View style={styles.bottom}>
                                <TouchableOpacity style={styles.button} onPress={() =>  router.toSignUp({users:user}, componentIndex.CC_SignUp)}>
                                    <Text style={styles.color}>忘记密码</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.color}>登陆</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    header: {
        height: 50,
        justifyContent:'center',
    },
    title: {
        alignSelf:'center',
        fontSize: 25,
        color: '#48BBEC',
    },
    view: {
        height: 200,
    },
    text: {
        flex: 1,
        fontSize: 25,
        color: '#48BBEC',
    },
    dividerview: {
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    input: {
        borderWidth: 3,
        borderRadius: 18,
        borderColor: '#48BBEC',
        width: 300,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    bottom:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button:{
        height:50,
        borderWidth: 3,
        backgroundColor:'#7FFF00',
        justifyContent: 'center',
        marginLeft: 20
    },
    color:{
        color:"#FFFFFF",
        alignSelf:'center',
        fontSize: 40
    }
});