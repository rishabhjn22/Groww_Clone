import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
}

export function replace(name: keyof RootStackParamList, params?: any) {
  navigationRef.dispatch(StackActions.replace(name, params));
}
