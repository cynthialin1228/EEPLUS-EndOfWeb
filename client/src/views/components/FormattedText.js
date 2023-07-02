import React from 'react'
import parser from 'html-react-parser'
import { urlsToLinks } from '../in/career/index'
const FormattedText = ({ text }) => {
  const transformedText = parser(urlsToLinks(text))
  return <h5 style={{ whiteSpace: 'pre-wrap' }}>{transformedText}</h5>
}
export default FormattedText
