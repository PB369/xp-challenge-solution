import { PortfolioType } from "@/utils/types/portifolioType";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

type Props = {
  portfolio: PortfolioType,
}

const PortfolioPieChart = ({ portfolio }: Props) => {

  const colorMapForAssetType: Record<string, string> = {
    "Renda Fixa": "#FF595E",
    "Renda Variável": "#FFCA3A",
    "Fundos de Investimentos": "#8AC926",
    "Fundos Imobiliários": "#1982C4",
    "ETFs": "#6A4C93",
  };


  const data = portfolio.assets.map((asset) => ({
    value: asset.percentageAllocation,
    color: colorMapForAssetType[asset.type] ?? "#999999",
    text: `${asset.percentageAllocation}%`,
    type: asset.type,
  }));

  const uniqueTypes = Array.from(
    new Set(portfolio.assets.map((a) => a.type))
  );

  return (
    <View className="flex flex-row w-11/12 justify-around items-center my-5 px-5">
      <PieChart 
        data={data}
        showText
        textColor="black"
        fontWeight="600"
        textSize={20}
        radius={85}
      />
      <View className="flex justify-center items-start ml-3">
        {uniqueTypes.map((type) => {
          const color = colorMapForAssetType[type] ?? "#999999";
          const percent = portfolio.assets
            .filter((a) => a.type === type)
            .reduce((sum, a) => sum + a.percentageAllocation, 0);

          return (
            <View
              key={type}
              className="flex flex-row justify-center items-center mb-2"
            >
              <View
                style={{ backgroundColor: color }}
                className="w-3 h-3 mr-3 rounded-full"
              />
              <Text className="text-white text-base font-semibold">
                {percent}% {type}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default PortfolioPieChart;