import axios from 'axios';
import React, { useState } from 'react'
import { saveAs } from 'file-saver';

const DocxToPdf = () => {
    const [pdfFile, setPdfFile] = useState(null);

    const handleOnChange = (e) => {
       
        setPdfFile(e.target.files[0]);

    }

    const handlePdfResponse = (data) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        saveAs(blob, 'Ayh-' + Date.now() + '.pdf');


    }

    const handleOnSumbit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData();
            formData.append('docx', pdfFile);
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                
            });
            handlePdfResponse(response.data);


        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>
        <div >
            <h1>The Best Online Word to PDF Converter</h1>
            <p>Convert  high-quality Word file to PDF files for free online. No installation is required to use.</p>
           

        </div>
            <form className='row g-3 ' onSubmit={handleOnSumbit}>
                <input className='file-input' name='docx' type="file" accept='.docx' onChange={handleOnChange} />
                <button type='sumbit'>Upload</button>
            </form>

        </>
    )
}

export default DocxToPdf;