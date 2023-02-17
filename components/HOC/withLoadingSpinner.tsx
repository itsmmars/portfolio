import { useEffect, useState } from 'react'
import MSpinner from '../base/MSpinner'

const withLoadingSpinner = (WrappedComponent: React.FC) => {
  const WrappedWithLoadingSpinner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(false)
    }, [])

    return (
      <>
        {true ? (
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