import React, { Component } from 'react';
import iconData from './iconData.js'
import ReactDOM from 'react-dom';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser'

export default function ICON(props) {
    return (
        ReactHtmlParser(icons["car"] || icons.noIcon)
    );
};

