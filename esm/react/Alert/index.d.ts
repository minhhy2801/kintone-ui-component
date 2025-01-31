import React from 'react';
import '../../css/font.css';
import '../../css/Alert.css';
declare type AlertProps = {
    text?: string;
    type?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const Alert: ({ text, type, isDisabled, isVisible, onClick }: AlertProps) => JSX.Element | null;
export default Alert;
