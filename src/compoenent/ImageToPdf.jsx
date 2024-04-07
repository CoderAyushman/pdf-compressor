import axios from 'axios'
import { useState } from 'react'
import { saveAs } from 'file-saver';




const ImageToPdf = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);

    }

    const handleOnSumbit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', file);
        try {
            const response = await axios.post('https://image-to-pdf-flask.vercel.app/api/upload', formData, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            handlePdfResponse(response.data);
            console.log('response:', response.data);
        } catch (error) {
            console.log('error:', error);

        }


    }
    const handlePdfResponse = (data) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        saveAs(blob, 'Ayh-' + Date.now() + '.pdf');
    };

    return (
        <>
        <div>
            <h1>Convert Image to PDF</h1>
            <p>Extract high-quality images from PDF files for free online. No installation is required to use.</p>
        </div>

            <form className='row g-3 ' onSubmit={handleOnSumbit}>
                <input className='file-input' type="file" accept='image/*' onChange={handleFileChange} name='img' />
                <button type='sumbit'>Upload</button>
            </form>



        </>
    )
}

export default ImageToPdf;

//     const blob = new Blob([response.data], { type: 'application/pdf' });

//   // Create a download link
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download ='ayush.pdf';

//   // Trigger the download
//   document.body.appendChild(a);
//   a.click();

//   // Clean up
//   document.body.removeChild(a);
//   window.URL.revokeObjectURL(url);
