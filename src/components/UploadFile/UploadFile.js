import React, { useRef, useState, useEffect, useContext } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';

import './UploadFile.scss';

import { ImageConfig } from './config/ImageConfig';
import uploadImg from './config/cloud-upload-regular-240.png';
import { UserContext } from "../context/UserContext";

// Set the worker script URL
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js';

const UploadFile = (props) => {
  const { user } = useContext(UserContext);

  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const [apiPageCount, setApiPageCount] = useState(null);
  const [filePageCount, setFilePageCount] = useState(null);

  useEffect(async () => {
    const fetchApiForPageCount = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint to fetch the page count
        const response = await fetch(
          'https://localhost:7280/api/PagePurchase/get-page-count?codeId=' + user.account.codeId
        );
        const data = await response.json();
        console.log(data);
        setApiPageCount(data.response.pageCount); // Adjust the property accordingly based on your API response
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };
    fetchApiForPageCount();
  }, [apiPageCount])

  const handleFileChange = async (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = async function () {
        const typedarray = new Uint8Array(this.result);
        try {
          const pdf = await pdfjs.getDocument(typedarray).promise;
          const pageCount = pdf.numPages;
          setFilePageCount(pageCount);
        } catch (error) {
          console.error('Error loading PDF:', error);
        }
      };
      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    handleFileChange(newFile);
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  }

  return (
    <>
      <p style={{ fontSize: '18px' }}>Số trang giấy còn lại: {apiPageCount}</p>
      <p style={{ fontSize: '18px' }}>Số trang giấy cần in: {filePageCount}</p>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" accept=".pdf" onChange={onFileDrop} />
      </div>
      {
        fileList.length > 0 ? (
          <div className="drop-file-preview">
            <p className="drop-file-preview__title">
              Ready to upload
            </p>
            {
              fileList.map((item, index) => (
                <div key={index} className="drop-file-preview__item">
                  <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                  <div className="drop-file-preview__item__info">
                    <p>{item.name}</p>
                    <p>{item.size} Byte</p>
                  </div>
                  <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                </div>
              ))
            }
          </div>
        ) : null
      }
    </>
  );
}

// DropFileInput.propTypes = {
//     onFileChange: PropTypes.func
// }

export default UploadFile;