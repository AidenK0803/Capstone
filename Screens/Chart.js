import { View, Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { NativeBaseProvider, Box, Select, CheckIcon, Center, Divider } from 'native-base';

const chartConfig = {
  backgroundGradientFrom: "#e26a00",
  backgroundGradientTo: "#ffa726",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

const screenWidth = Dimensions.get("window").width;

const Chart = () => {
  const [month, setMonth] = React.useState("");

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        data: [100, 50, 29, 201, 234, 421, 123, 532, 102, 194, 492, 129]
      },
    ],
  };

  const pieData = [
    {
      name: "food",
      money: 215,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "shopping",
      money: 28,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "game",
      money: 52,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "play",
      money: 85,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "etc",
      money: 119,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  return (
    <NativeBaseProvider>
    <Box maxW="300">
      <Center>
        <Select selectedValue={month} minWidth="200" 
        accessibilityLabel="Choose Month" placeholder='Choose Month'
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setMonth(itemValue)}>
          <Select.Item label="January" value="ux" />
          <Select.Item label="Febuary" value="web" />
        </Select>
      </Center>  
    <View>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel={'$'}
        chartConfig={chartConfig}
      />
    </View>
    </Box>
    {/* <View>
    <PieChart 
      ata={pieData}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"money"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 50]}
      absolute
    />
    </View> */}
  </NativeBaseProvider>
  )
}

export default Chart