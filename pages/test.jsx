import React from 'react'
import { useLanguageContext } from "@/context/languageContext";







export default function Test() {
  const { isOpen } = useLanguageContext();
  return (
    <div>Test</div>
  )
}
