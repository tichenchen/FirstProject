'use strict';
import React,{
	Navigator
} from 'react-native';
import _ from 'lodash';
import * as CustomSceneConfigs from '../configs/sceneConfig';
const { SceneConfigs } = Navigator;

class Router {
	constructor(navigator) {
		this.navigator = navigator;
	}

	push(props = {}, route) {
		let routesList = this.navigator.getCurrentRoutes();
		let nextIndex = routesList[routesList.length - 1].index + 1;
		route.props = props;
		route.index = nextIndex;
		route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight;
		route.id = _.uniqueId();
		this.navigator.push(route);
	}

	pop() {
		this.navigator.pop();
	}

	toSignUp(props, component) {
		this.push(props, {
			component: component,
			name:props.name,
			sceneConfig: CustomSceneConfigs.customFloatFromRight
		})
	}

}

export default Router;
