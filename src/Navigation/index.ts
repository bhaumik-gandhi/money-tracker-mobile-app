import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

// SpashScreen
import SplashScreen from '../Modules/SplashScreen/container/Splash';

// Auth Screens
import LoginScreen from '../Modules/Auth/containers/Login';
import SignupScreen from '../Modules/Auth/containers/Signup';

// Transaction Stack
import TransactionCreate from '../Modules/Transaction/container/Create';
import TransactionList from '../Modules/Transaction/container/List';

const AuthStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                title: 'Login'
            }
        },
        SignupScreen,
    },
    {
        headerMode: 'none'
    }
);

const TransactionStack = createStackNavigator(
    {
        TransactionCreate: {
            screen: TransactionCreate,
            navigationOptions: {
                title: 'Transaction - Create'
            }
        },
        TransactionList: {
            screen: TransactionList,
            navigationOptions: {
                title: 'Transaction - List'
            }
        }
    }
)

export default createSwitchNavigator(
    {
        SplashScreen,
        App: AuthStack,
        Transaction: TransactionStack
    },
    {
        initialRouteName: 'SplashScreen'
    }
);

