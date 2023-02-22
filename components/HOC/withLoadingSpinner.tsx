import { useEffect, useState } from 'react'
import MSpinner from '../base/MFSpinner'

const withLoadingSpinner = (WrappedComponent: React.FC) => {
  const WrappedWithLoadingSpinner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(false)
    }, [])

    return (
      <>
        {isLoading ? (
          <MSpinner />
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };

  return WrappedWithLoadingSpinner
};

export default withLoadingSpinner