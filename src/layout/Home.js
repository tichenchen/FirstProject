/**
 * Created by D.Y on 2016/4/26.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import componentIndex from '../component/index';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _toSignUp(member) {
        const { router } = this.props;
        switch(member) {
            case '王曦': router.toSignUp({name: member}, componentIndex.WX_SignUp); break;
            case '付颖': router.toSignUp({name: member}, componentIndex.FY_SignUp); break;
            case '陈晨': router.toSignUp({name: member}, componentIndex.CC_SignUp); break;
            case '付昳漫': router.toSignUp({name: member}, componentIndex.FYM_SignUp); break;
            case '马晨铉': router.toSignUp({name: member}, componentIndex.MCX_SignUp); break;
            case '许玉蓉': router.toSignUp({name: member}, componentIndex.XYR_SignUp); break;
            case '谢红光': router.toSignUp({name: member}, componentIndex.XHG_SignUp); break;
        }
    }

    render() {
        let teamMembers = ['王曦', '付颖', '陈晨', '付昳漫', '马晨铉', '许玉蓉', '谢红光'];
        return (
            <View style={styles.container}>
                {
                    teamMembers.map((member) =>
                        <TouchableOpacity style={styles.button} key={member} onPress={() => this._toSignUp(member)}>
                            <Text style={{color: '#48BBEC'}}>{member}</Text>
                        </TouchableOpacity>
                    )
                }
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
    button: {
        borderWidth: 3,
        borderRadius: 18,
        borderColor: '#48BBEC',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 10
    }
});