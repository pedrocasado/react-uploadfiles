import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (

    <Container>
        { files.map((uploadedFile, index) => (

            <li key={index}>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize} 
                            { uploadedFile.url && (
                                <button onClick={() => {}}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>

                <div>

                    { !uploadedFile.uploaded && !uploadedFile.error && (

                        <CircularProgressbar
                            styles={
                                {
                                    root: { width: 24 },
                                    path: { stroke: '#000'}
                                }
                            }
                            strokeWidth={10}
                            percentage={60}
                        />

                    )}

                    { uploadedFile.url && (

                        <a
                            href="http://dev.bobags.com.br/assets/uploads/products/clutch-knot-amarela-c46ff0e9adae33a383f76e1e0fea3b25ec33d133.jpeg?w=215&q=60&cache=d4b44564722748239b0dcf03249071f80c913&fm=pjpg&s=dec632cedc5a69a65eda167637aad3d8"
                            target="_blank"
                            rel="noopener noreferrer"
                            >

                            <MdLink style={{ marginRight: 8}} size={24} color="#222" />
                        </a>

                    )}

                    { uploadedFile.uploaded && (
                        <MdCheckCircle size={24} color="#78e5d5" />
                    )}

                    { uploadedFile.error && (
                        <MdError size={24} color="#e57878" />
                    )}

                </div>
            </li>

        ))}
    </Container>
);

export default FileList;