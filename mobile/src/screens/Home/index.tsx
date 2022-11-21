import { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context'
import {Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


//Compomentes
import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';



import { styles } from './styles';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
     ads: number;
  }

}


export function Home() {
  const [games,setGames] = useState<Game[]>([])
  useEffect(()=>{
    fetch('http://192.168.1.22:3333/games').then(response => response.json()).then(data => setGames(data))
  },[])

  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game',{id, title, bannerUrl});

  } 
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <Image
          source={logoImg}
          style={styles.logo} 
          />

          <Heading
          title='Encontre o seu Duo'
          subtitle='Selecione o game que deseja jogar ...' 
          />
          <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem ={({item}) => (
            <GameCard
            data = {item}
            onPress={()=>handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
          scrollEnabled 
          />
          
              
      </SafeAreaView>
    </Background>
  );
}