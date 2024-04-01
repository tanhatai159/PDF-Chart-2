import React, { useState } from 'react';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import './Sarabun-normal';
import './IBM_Plex_Sans_Thai_LoopedSarabun-normal'
import { Page, Text, Document, StyleSheet, Image, PDFDownloadLink, Font, PDFViewer } from '@react-pdf/renderer'
import Itim from './fonts/Itim/Itim-Regular.ttf'
import Athiti from './fonts/Athiti/Athiti-Regular.ttf'
import ChakraPetch from './fonts/Chakra_Petch/ChakraPetch-Regular.ttf'
import Charm from './fonts/Charm/Charm-Regular.ttf'
import IBMThai from './fonts/IBM_Plex_Sans_Thai_Looped/IBMPlexSansThaiLooped-Regular.ttf'
import K2D from './fonts/K2D/K2D-Regular.ttf'
import KoHo from './fonts/KoHo/KoHo-Regular.ttf'
import Niramit from './fonts/Niramit/Niramit-Regular.ttf'
import Pridi from './fonts/Pridi/Pridi-Regular.ttf'
import countryData from './data/country'
import CountryReport from './components/CountryReport';
import Quixote from './components/Quixote';
import quixoteData from './data/quixote';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

Font.register({
  family: 'Itim',
  src: Itim
})

Font.register({
  family: 'Athiti',
  src: Athiti
})

Font.register({
  family: 'ChakraPetch',
  src: ChakraPetch
})

Font.register({
  family: 'Charm',
  src: Charm
})

Font.register({
  family: 'IBMThai',
  src: IBMThai
})

Font.register({
  family: 'K2D',
  src: K2D
})

Font.register({
  family: 'KoHo',
  src: KoHo
})

Font.register({
  family: 'Niramit',
  src: Niramit
})

Font.register({
  family: 'Pridi',
  src: Pridi
})

const styles = StyleSheet.create({
  text_Itim: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Itim",
  },
  text_Athiti: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Athiti",
  },
  text_ChakraPetch: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "ChakraPetch",
  },
  text_Charm: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Charm",
  },
  text_IBMThai: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "IBMThai",
  },
  text_K2D: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "K2D",
  },
  text_KoHo: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "KoHo",
  },
  text_Niramit: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Niramit",
  },
  text_Pridi: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Pridi",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  }
});

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'My Dataset 2 ',
      data: [6, 9, 40, 91, 5, 5, 90],
      fill: false,
      borderColor: 'rgb(255, 99, 132, 0.5)',
      tension: 0.1,
    },
    {
      label: 'My Dataset 3 ',
      data: [60, 90, 40, 50, 51, 58, 70],
      fill: false,
      borderColor: 'rgb(255, 255, 0)',
      tension: 0.1,
    },
  ],
};

export const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export function App() {
  const initialData = [
    { id: 1, description: 'Product 1', quantity: 5 },
    { id: 2, description: 'Product 2', quantity: 6 },
    { id: 3, description: 'Product 3', quantity: 7 },
    { id: 4, description: 'Product 4', quantity: 5 },
  ];
  const [Dataproduct, setData] = useState(initialData);

  const [base64, setbase64] = useState("")

  const getBase64Data = () => {
    const chart = ChartJS.getChart("auction-chart")
    if (!chart) return;
    setbase64(chart.toBase64Image());
  };

  const imgData = base64

  const testWord = "ทดสอบ ที่ ผู้ อยู่ กตัญญู A B C Test 1 2 3"

  const PDFFile = () => {
    return (
      <Document>
        <Page>
          <Text style={styles.text_Itim}>Itim: {testWord}</Text>
          <Text style={styles.text_Athiti}>Athiti: {testWord}</Text>
          <Text style={styles.text_ChakraPetch}>ChakraPetch: {testWord}</Text>
          <Text style={styles.text_Charm}>Charm: {testWord}</Text>
          <Text style={styles.text_IBMThai}>IBM_Thai: {testWord}</Text>
          <Text style={styles.text_K2D}>K2D: {testWord}</Text>
          <Text style={styles.text_KoHo}>KoHo: {testWord}</Text>
          <Text style={styles.text_Niramit}>Niramit: {testWord}</Text>
          <Text style={styles.text_Pridi}>Pridi: {testWord}</Text>
          {imgData != "" && <Image style={styles.image} src={`${imgData}`} />}
        </Page>
        <CountryReport Data={countryData} />
        <Quixote Data={quixoteData} />
      </Document>
    )
  };

  return (
    <>
      <table id="product-table" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd', background: 'red' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Dataproduct.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', textAlign: 'left' }}>{item.id}</td>
              <td style={{ padding: '12px', textAlign: 'left' }}>{item.description}</td>
              <td style={{ padding: '12px', textAlign: 'left' }}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <PDFDownloadLink document={PDFFile()} fileName="react-pdf-export">
        {({ loading }) => loading ? (<button>Loading Document...</button>) : (<button>Download</button>)}
      </PDFDownloadLink>
      <h2>Line Chart </h2>
      <Line id="auction-chart" data={data} options={options} ></Line>
      <br></br>
      <button on onClick={getBase64Data}>Get Data</button>
      <br></br>
      <img src={base64} style={{ width: '45%' }}></img>
      <br></br>
      <PDFViewer style={{margin: "100px"}} width="75%" height={500}>
        <PDFFile/>
      </PDFViewer>
    </>
  );
}
export default App
