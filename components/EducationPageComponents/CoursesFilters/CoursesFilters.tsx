import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";

const CoursesFilters = () => {
  const filtersList = ["Renda Variável", "Multimercado", "Renda Fixa"]

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleFilter = () => {

  }

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-row w-full my-4" horizontal={true}>
      {filtersList.map((f, index) => (
        <Pressable 
          key={index}
          onPress={handleFilter} 
          className={`${isActive ? 'bg-white' : 'bg-neutral-800'} rounded-md px-5 py-2 mr-3 overflow-y-auto`}
        >
          <Text className="text-white font-medium">{f}</Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default CoursesFilters