import { CopyIcon, CopyMessage } from '@/const/styles/pages/tokens'
import { useEffect, useState } from 'react'

export const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  useEffect(() => {
    let timer = null

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <>
      <CopyIcon src="/images/icons/click-to-copy.svg" alt="Copy contract address" onClick={copyToClipboard} />
      {copied && <CopyMessage>Copied!</CopyMessage>}
    </>
  )
}
