import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import Dropzone from "react-dropzone";
import IconButton from "../buttons/IconButton";
import { TrashFill } from 'react-bootstrap-icons';

const UploadFiles = ({field, label, files, setFiles, canUploadMultipleFiles=false}) => {
    const acceptedFileTypes = {
        "application/pdf": [".pdf"],
        'image/jpeg': [],
        'image/jpg': [],
        'image/png': []
    };
    const maxSize = 10 * 1024 * 1024; // 10 MB in bytes

    const onDrop = (uploadedFiles) => {
        if(uploadedFiles.length > 0){
            setFiles(uploadedFiles);
        }
    };

    const onDeleteFile = (index) => {
        setFiles((files) => files.filter((_, currentIndex) => currentIndex !== index));
    };

    return (
        <Form.Group controlId={field}>
            <Form.Label><p className="lead">{label}</p></Form.Label>
            <Dropzone 
                onDrop={onDrop} 
                multiple={canUploadMultipleFiles}
                accept={acceptedFileTypes}
                maxSize={maxSize}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone-upload-files dropzone p-3 d-flex align-items-center justify-content-center disabled mb-4"})}>
                        <input {...getInputProps()} />
                        <p className="lead m-0 text-center" style={{fontSize: "18px"}}>Plasați factura aici pentru încărcare <br/> sau selectați din computer</p>
                    </div>
                )}
            </Dropzone>
            { files.length ? (
                <div className="mb-4">
                    <p style={{fontSize: "18px"}}>Factură atașată:</p>
                    <ListGroup>
                    {
                        files.map((file, index) => (
                            <ListGroup.Item 
                                as="li"
                                style={{"listStylePosition": "inside", border: "1px solid black"}}
                                className="d-flex justify-content-start align-items-center p-2 mb-3"
                                key={index}
                                title={file.name}
                            >
                                <div className="text-nowrap overflow-hidden ms-1 me-auto" style={{"textOverflow": "ellipsis"}}>
                                    <span>{file.name}</span>
                                </div>
                                <IconButton
                                    icon = {TrashFill}
                                    title={"Scoateți fițierul: " + file.name}
                                    iconSize={15}
                                    onClick={() => onDeleteFile(index)}
                                    color="#dc4353"
                                />
                            </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                </div>
            ) : (
                <></>
            )
            }
        </Form.Group>
    );
}
export default UploadFiles;