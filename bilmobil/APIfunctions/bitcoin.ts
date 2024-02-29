import { Bitcoin } from "lucide-react-native";

type BitcoinData = {
    chart: string;
    rate: string;
};

export default async function getBitcoinData() {
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    

    const json = await data.json();
    const chartName = json.chartName as string;
    return chartName;


}