import { useAuth } from '@/context/AuthContext';
import { useUser } from '@/context/UserContex';
import '@/global.css';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Pressable, Text, View } from 'react-native';

const PageHeader = () => {
  const { user } = useUser();
  const { signOutUser } = useAuth();

  return (
    <View className='flex flex-row justify-between items-center w-full px-2'>
      <View className="flex-row justify-center items-center">
        <Image source={require('@/assets/images/icons/profileV1-icon.png')} style={{width:36, height: 36}}/>
        <Text className='text-white text-2xl font-semibold ml-2'>{user ? user.username : 'null'}</Text>
      </View>
      <Pressable onPress={async ()=>await signOutUser()}>
        <MaterialIcons name="logout" size={35} color="white" />
      </Pressable>
    </View>
  );
}

export default PageHeader;
