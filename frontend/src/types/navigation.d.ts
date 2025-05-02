import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  EmailLogin: undefined;
  EmailPasswordLogin: {
    email: string;
  };
  ChangePassword: undefined;
};

type AuthNavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
