import React, { useState, useEffect } from 'react'
import ReactImageFallback from "react-image-fallback";
import styled from 'styled-components';
import Spinner from '@atlaskit/spinner';
import { colors } from '@atlaskit/theme';
import { useRef } from 'react';


const ImageFallback = ({ src, width, height, thumb, isRerty, ...props }) => {
    const ref = useRef()
    const [retry, setRetry] = useState(0);

    const onLoad = () => {
        if (ref.current)
            clearTimeout(ref.current)
    }

    const onError = () => {
        if (isRerty && retry <= 0) {
            ref.current = setTimeout(() => {
                setRetry(count => count += 1)
            }, 1000);
        }
    }

    useEffect(() => {
        return () => {
            if (ref.current)
                clearTimeout(ref.current)
        }
    }, [])
    const url = `${src}#${retry}`

    const query = { url : src }
    if (width) query.width = width;
    if (height) query.height = height;
    return (
        <ReactImageFallback
            {...props}
            onLoad={onLoad}
            onError={onError}
            src={url}
            initialImage={<InitialImage
                height={height}
                width={width}
            ><Spinner size="medium" /></InitialImage>}
        />
    )
}

const InitialImage = styled.div`
  width: ${props => props.width ? props.width : props.height}px; 
  height: ${props => props.height ? props.height : props.width}px; 
  text-align: center; 
  display: flex; 
  align-items:center; 
  justify-content: center;
  border-radius: 4;
  background-color: ${colors.N20};
`;


export default ImageFallback