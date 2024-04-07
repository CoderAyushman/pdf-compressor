import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compoenent/CompressPdf';
import Navv from './compoenent/Nav';
import CompressPdf from './compoenent/Home';
import './App.css'
import ImageToPdf from './compoenent/ImageToPdf';
import DocxToPdf from './compoenent/DocxToPdf';
import ExcelToPdf from './compoenent/ExcelToPdf';
import PptToPdf from './compoenent/PptToPdf';
function App() {


  return (
    <BrowserRouter>
      <Navv />
      <Routes>
        <Route path='/' element={<CompressPdf />} />
        <Route path='/compresspdf' element={<Home />} />
        <Route path='/image-to-pdf' element={<ImageToPdf />} />
        {/*
        <Route path='/docx-to-pdf' element={<DocxToPdf />} />
        <Route path='/excel-to-pdf' element={<ExcelToPdf />} />
        <Route path='/ppt-to-pdf' element={<PptToPdf />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
