export const VerificationWarning = ({ apiDocs = "https://docs.activeviam.com/products/atoti/python-sdk/latest/" }) => {
  return (
    <div style={{
      backgroundColor: '#fff3cd',
      border: '1px solid #ffeaa7',
      borderRadius: '4px',
      padding: '12px',
      margin: '16px 0',
      color: '#856404'
    }}>
      <strong>⚠️ Verification Required:</strong> This code uses conceptual API patterns. 
      Always verify exact method names, parameters, and syntax against the{' '}
      <a href={apiDocs} target="_blank" rel="noopener noreferrer">
        official Atoti documentation
      </a>{' '}
      before implementation.
    </div>
  )
}