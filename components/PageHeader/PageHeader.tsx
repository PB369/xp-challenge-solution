import { Image, Text, View } from 'react-native';
import '@/global.css'
import { useUser } from '@/context/UserContex';

const PageHeader = () => {
  const { user } = useUser();

  return (
    <View className='flex flex-row justify-center items-center'>
      <Image source={require('@/assets/images/icons/profileV1-icon.png')} style={{width:36, height: 36}}/>
      <Text className='text-white text-2xl font-semibold ml-2'>{user ? user.username : 'null'}</Text>
    </View>
  );
}

export default PageHeader;
