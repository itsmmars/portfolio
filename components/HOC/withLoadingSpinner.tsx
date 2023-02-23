import { useEffect, useState } from 'react'
import MFSpinner from '../base/MFSpinner'

const withLoadingSpinner = (WrappedComponent: React.FC) => {
  const WrappedWithLoadingSpinner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(false)
    }, [])

    return (
      <>
        {isLoading ? (
          <MFSpinner />
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };

  return WrappedWithLoadingSpinner
};

export default withLoadingSpinner