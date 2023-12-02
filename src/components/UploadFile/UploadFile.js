// import React, { useState } from 'react';

// const UploadFile = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileContent, setFileContent] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     setFileContent(null); // Clear previous file content when a new file is selected
//   };

//   const handleUpload = async () => {
//     try {
//       if (!selectedFile) {
//         console.error('No file selected');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('fileData', selectedFile);

//       let response = await fetch('http://localhost:5193/api/Files/PostSingleFile', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('File uploaded successfully:', result);

//         // Set the file content in the state
//         setFileContent(result.response.fileData);
//       } else {
//         console.error('Failed to upload file:', response);
//       }
//     } catch (error) {
//       console.error('Error during file upload:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={!selectedFile}>
//         Upload File
//       </button>
  
//       {fileContent && (
//         <div className='col-12'>
//           <p>File Content:</p>
//           {/* Use an iframe to render the file content */}
//           <iframe
//             title="File Content"
//             width="100%"
//             height="500px"
//             src={`data:application/pdf;base64,${fileContent}`}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadFile;

import React, { useState } from 'react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [showPrintPopup, setShowPrintPopup] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileContent(null);
    setShowPrintPopup(false); // Close the print popup when a new file is selected
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('fileData', selectedFile);

      let response = await fetch('http://localhost:5193/api/Files/PostSingleFile', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        console.log('File uploaded successfully:', result);

        setFileContent(result.response.fileData);
        setShowPrintPopup(true); // Open the print popup after successful upload
      } else {
        console.error('Failed to upload file:', response);
      }
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  };

  const closePrintPopup = () => {
    setShowPrintPopup(false);
  };

  const printFile = () => {
    // Implement printing logic here
    // For demonstration purposes, you can use window.print()
    window.print();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload File
      </button>

      {showPrintPopup && (
        <div className="print-popup">
          <p>File Content:</p>
          {/* Use an iframe to render the file content */}
          <iframe
            title="File Content"
            width="100%"
            height="500px"
            src={`data:application/pdf;base64,${fileContent}`}
          />
          <button onClick={printFile}>Print</button>
          <button onClick={closePrintPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
