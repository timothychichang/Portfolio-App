import React, { useState } from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from './TimothyChang_resume.pdf';
import { saveAs } from 'file-saver';
//import { alignPropType } from 'react-bootstrap/esm/types';


const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    
    const downloadFile = async (event) => {
        event.preventDefault(); // prevents page from reloading
        saveAs(resumePDF, 'TimChangResume.pdf'); 
    }
    
    return (
        <div className='resume-body'>
            <p className='resume-title'>My Resume</p>
            <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page
                            height='650'
                            pageNumber={pageNumber} 
                            
                        />   
            </Document>
            <div className='button-container'>
                <button className='resume-button' onClick={downloadFile}>
                    Download
                </button>
            </div>


        </div>
    )
}

export default Resume;