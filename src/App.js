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
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useTable, useExpanded } from 'react-table'
import './Sarabun-normal';
import './IBM_Plex_Sans_Thai_LoopedSarabun-normal'
import { Page, Text, Document, StyleSheet, Image, PDFDownloadLink, Font } from '@react-pdf/renderer'
import Itim from './fonts/Itim/Itim-Regular.ttf'

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
  fonts: [
    {
      src: Itim,
    },
  ]
}
)

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

export const styles = StyleSheet.create({
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Itim",

  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  }
});

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
  // const doc = new jsPDF()
  // const exportPDfHandler = () => {
  //   doc.addFont('IBM_Plex_Sans_Thai_LoopedSarabun', 'normal')
  //   doc.setFont('IBM_Plex_Sans_Thai_LoopedSarabun', 'normal')
  //   doc.text('ตัวอย่าง', 10, 10)
  //   doc.autoTable({ html: '#product-table' })
  //   doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
  //   doc.save('product.pdf')
  // }

  const PDFFile = () => {
    return (
      <Document>
        <Page>
          <Text style={styles.text}>ทดสอบ 1 2 3</Text>
          {imgData != "" && <Image style={styles.image} src={`${imgData}`} />}
        </Page>
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
      {/* <br></br> */}
      {/* <button className='export-pdf' onClick={exportPDfHandler}>Export PDF</button> */}
      <br></br>
      <PDFDownloadLink document={PDFFile()} fileName="react-pdf-export">
        {({ loading }) => loading ? (<button>Loading Document...</button>) : (<button>Download</button>)}
      </PDFDownloadLink>
      {/* <p style={{color:'red'}}>หมายเหตุเรื่องการแสดงข้อมูล:</p>
    <p style={{color:'red'}}>1.	กำหนดให้แสดงข้อมูล Bid Submission ตามข้อมูลที่กำหนดไว้ของแต่ละงาน</p>
    <p style={{color:'red'}}>2.	* Bid Decrement แก้เป็น Bid Increment กรณี forward auction</p>
    <p style={{color:'red'}}>3.	** Minimum Bid Decrement แก้เป็น Minimum Bid Increment กรณี forward auction</p>
    <p style={{color:'red'}}>4.	*** Hide Hammer ให้แสดงค่าเป็น (-) เสมอ กรณีที่ Auction Type เป็น “English”</p>
    <br></br> */}
      <h2>Line Chart </h2>
      <Line id="auction-chart" data={data} options={options} ></Line>
      <br></br>
      <button on onClick={getBase64Data}>Get Data</button>
      <img src={base64} style={{ width: '45%' }}></img>
    </>
  );
}
export default App
