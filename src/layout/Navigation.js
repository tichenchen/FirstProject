import React,{
    Component,
    PropTypes,
    Navigator,
    StyleSheet,
    View,
    Text,
    Dimensions,
    BackAndroid,
    Image
} from 'react-native';
import Router from '../configs/router';
import Home from '../layout/Home';
import config from '../configs';

const initialRoute = {
    name: '主页',
    index: 0,
    component: Home,
    id: 0
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.ids = [];
    }

    componentWillMount() {
        /*BackAndroid在iOS平台下是一个空实现，目前不做这个Platform.OS === 'android'判断*/
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };

    renderScene({ component, name, props, id, index }, navigator) {
        this.router = this.router || new Router(navigator);
        if (component) {
            return React.createElement(component, {
                ...props,
                ref: view => this[index] = view,
                router: this.router,
                route: {
                    name,
                    id,
                    index
                }
            });
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig
        }
        return Navigator.SceneConfigs.FloatFromRight
    }

    render() {
        return (
            <Image
                source={{ uri: 'http://img4.duitang.com/uploads/item/201408/16/20140816224838_HyNPZ.png' }}
                style={styles.container}>
                <Navigator
                    ref={view => this.navigator=view}
                    initialRoute={initialRoute}
                    configureScene={this.configureScene.bind(this)}
                    renderScene={this.renderScene.bind(this)}/>
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Navigation;
