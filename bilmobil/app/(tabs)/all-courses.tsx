import CoursePackageCard from '@/components/CoursePackageCard';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';
export default function TabOneScreen() {
  return (
    <View>
      <View className='p-2'>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className='h-full space-y-4 items-center mb-[20]'>
          <View className='flex'>
            <CoursePackageCard name={'CS204'} price={550} description={'Advanced Programming'} image_url={'https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          </View>
          <View>
            <CoursePackageCard name={'CS204'} price={550} description={'Advanced Programming'} image_url={'https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          </View>
          <View>
            <CoursePackageCard name={'CS204'} price={550} description={'Advanced Programming'} image_url={'https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            </View>
        </View>
        </ScrollView>
        </View>
    </View>
  );
}