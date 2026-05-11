export const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/Payboost-apk.apk'
  link.download = 'Payboost.apk'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}