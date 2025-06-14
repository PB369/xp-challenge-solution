import { StyleSheet, Text, View } from "react-native";
import '@/global.css'
import { Asset } from "@/utils/types/assetType";

type Props = {
  asset: Asset,
}

const AssetDetails = ({asset}: Props) => {
  const details = asset.details
  return (
    <View>
      <Text className="text-white font-semibold text-xl mb-3">Detalhes do Ativo</Text>
      {/* Table */}
      <View className="w-full flex justify-center items-center ">
        {/* Rows */}
        <View className="flex flex-row border-b border-b-white justify-center items-stretch border-t border-t-white">
          <Text style={styles.leftCell}>Emissor</Text>
          <Text style={styles.rightCell}>{details.issuing}</Text>
        </View>
        <View className="flex flex-row border-b border-b-white justify-center items-stretch">
          <Text style={styles.leftCell}>Indexador</Text>
          <Text style={styles.rightCell}>{details.indexer}</Text>
        </View>
        <View className="flex flex-row border-b border-b-white justify-center items-stretch">
          <Text style={styles.leftCell}>Data de Vencimento</Text>
          <Text style={styles.rightCell}>{details.expirationDate}</Text>
        </View>
        <View className="flex flex-row border-b border-b-white justify-center items-stretch ver">
          <Text style={styles.leftCell}>Tipo de Remuneração</Text>
          <Text style={styles.rightCell}>{details.typeRemunaration}</Text>
        </View>
        <View className="flex flex-row border-b border-b-white justify-center items-stretch">
          <Text style={styles.leftCell}>Frequência de pagamento</Text>
          <Text style={styles.rightCell}>{details.paymentFrequency}</Text>
        </View>
      </View>
    </View>
  )
}

export default AssetDetails;

const styles = StyleSheet.create({
  leftCell: {
    paddingVertical: 8,
    color: 'white',
    fontSize: 16,
    borderRightWidth: 1,
    borderRightColor: '#fff',
    width: '50%',
    textAlignVertical: 'center',
  },
  rightCell: {
    paddingLeft: 5,
    paddingVertical: 5,
    color: 'white',
    fontSize: 16,
    width: '50%',
    textAlignVertical: 'center',
  },
});