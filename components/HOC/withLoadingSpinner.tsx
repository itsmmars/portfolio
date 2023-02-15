import { useEffect, useState } from 'react'
import LoadingSpinner from '../base/MSpinner'

const withLoadingSpinner = (WrappedComponent: React.FC) => {
  const WrappedWithLoadingSpinner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(false)
    }, [])

    return (
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };

  return WrappedWithLoadingSpinner
};

export default withLoadingSpinner