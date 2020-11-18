import React, { Component } from 'react';
import iconData from './iconData.js'
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default function ICON(props) {

    function compileIcon(_name, _variant) {
        var iconName = iconData[_name]? iconData[_name] : iconData["questionCircle"];
        var icon = iconName["variants"][_variant]? iconName["variants"][_variant] : iconName["variants"]["bold"];
        console.log(iconData["questionCircle"]);
        return icon["svg"];
    }

    return (
        ReactHtmlParser(compileIcon(props.name,props.variant))
    );
};

