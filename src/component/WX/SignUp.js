/**
 * Created by D.Y on 2016/4/26.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>New Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});