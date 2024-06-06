import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {generateDownload} from '../../utils/CropImage';
import Cropper from 'react-easy-crop';
import "./ImageCropModal.css";
import { getDownloadURL } from 'firebase/storage';

const ImageCropModal = ({setCropModal, setImage, preImage}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedArea, setCroppedArea] = useState(null);
    const ref = useRef();

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedArea(croppedArea);
    }

    const onDownload = () => {
		generateDownload(preImage, croppedArea, setImage);
	};

    useOnClickOutside(ref, () => { 
        setCropModal(false);
    })
    
    
    return (
        <div className='presentation' role="presentation">
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span
                    onClick={() => setCropModal(false)}
                    className="modal-close"
                    >
                    X
                    </span>
                    <div className='modal__content'>
                        <div className="crop-container">
                            <Cropper
                            image="assets/background/background_layout_type_a.jpg"
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 5}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            />
                        </div>
                        <div className="controls">
                            <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => {
                                setZoom(e.target.value)
                            }}
                            className="zoom-range"
                            />
                            <button onClick={onDownload}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageCropModal
