import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


class Screen extends React.Component {
	render() {
		return (
			<View style={styles.mainContainer} >
				<Text style={styles.math}>{this.props.strToShow}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create(
	{
		mainContainer: {
			flex: 1,
			padding: 10
		},
		math: {
			fontSize: 20,
			color: '#00141f',
			textAlign: 'right'
		},
		result: {
			fontSize: 25,
			fontWeight : 'bold',
			color: '#00141f',
			textAlign: 'right'
		}
	}
)

export default Screen
