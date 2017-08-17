/**
 * Created by D.Y on 2016/4/26.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import componentIndex from '../index';
import * as database from './DataBase';
import * as idmessage from './IdMessage';

export default class SignUp extends Component {
    render() {
        let id = idmessage.default.id;
        const {router,users} = this.props;
        return (
            <View style={styles.container}>
                    <View style={styles.input}>
                        <View style={styles.header}>
                            <Text style = {styles.title}>
                                注册
                            </Text>
                        </View>
                        <View style={styles.view}>
                            <TextInput style = {styles.text}  onChangeText={(value) => this.setState({user: value})}  placeholder='手机号/邮箱' placeholderTextColor="#FFFFFF">{users}</TextInput>
                            <View style={styles.dividerview}><Text style={styles.divider}></Text></View>
                            <TextInput style = {styles.text}  onChangeText={(value) => this.setState({paw: value})}  placeholder='密码'  placeholderTextColor="#FFFFFF" secureTextEntry ={true} />
                            <View style={styles.dividerview}><Text style={styles.divider}></Text></View>
                            <View style={styles.bottom}>
                                <TouchableOpacity style={styles.button}  onPress={() => database.data.executeQuery(this.state.user,this.state.paw)}>
                                    <Text style={styles.color}>注册</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}  onPress={() => router.toSignUp({user:this.state.user,paw:this.state.paw}, componentIndex.CC_Login)}>
                                    <Text style={styles.color}>登陆</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottom}>
                                <TouchableOpacity style={styles.button}  onPress={() => database.data.deleteQuery(id)}>
                                    <Text style={styles.color}>删除</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}  onPress={() => database.data.updateQuery(this.state.paw,id)}>
                                    <Text style={styles.color}>修改</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottom}>
                                <TouchableOpacity style={styles.button}  onPress={() => database.data.selectQuery(id)}>
                                    <Text style={styles.color}>查询</Text>
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
        height: 250,
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
        height: 550,
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
        width:120,
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
