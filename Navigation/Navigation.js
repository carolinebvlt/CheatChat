import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Calculator from '../components/Calculator'
import CheatChat from '../components/CheatChat'

const CalculatorStackNav = createStackNavigator(
	{
		Calculator: {
			screen: Calculator,
			navigationOptions: {
				title: 'Calculator',
				headerStyle: {
					display: 'none',
				}
			}
		},
		CheatChat: {
			screen: CheatChat,
			navigationOptions: {
				title: 'CheatChat'
			}
		}
	}
)

export default createAppContainer(CalculatorStackNav)
