import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // Assuming you have 'fs' available in your React environment
import { useState } from 'react';

const CompressPdf = () => {
  const [pdf,setPdf]=useState(null);

  const handlePdfResponse = (data) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    saveAs(blob, 'Ayh-' + Date.now() + '.pdf');


}

const handleOnSumbit = async (event) => {
    try {
        event.preventDefault();

        const formData = new FormData();
        formData.append('pdf', pdf);
        const response = await axios.post('https://compress-pdf-py.vercel.app/api/upload', formData, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            
        });
        
          console.log(response.data)
          handlePdfResponse(response.data); 
        


    } catch (error) {
        console.log(error)

    }

}

  return (
    <>
      <div className="home">
        <h1>Compress PDF</h1>
        <p>

          Reduce the size of your PDFs online easily with our free PDF compressor.
          Our PDF tools are here to help you get things done—better, faster, smarter.
        </p>

        <div className='row g-3'>



        <form className='row g-3 ' onSubmit={handleOnSumbit}>
                <input className='file-input' name='wordFile' type="file" accept='.pdf' onChange={(e)=>{setPdf(e.target.files[0])}} />
                <button type='sumbit'>Upload</button>
            </form>



        </div>

      </div>


    </>
  )
}

export default CompressPdf;