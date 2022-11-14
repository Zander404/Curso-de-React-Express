// Importar  Componentes do React e Fontes de Letras
import { View, StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter"

// Importar Layouts e Componentes 
import { Background } from './src/components/Background';
import {Home} from './src/screens/Home';
import { Loading } from './src/components/Background/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })
  return (
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Home /> : <Loading /> }

    </Background>
  );
}



