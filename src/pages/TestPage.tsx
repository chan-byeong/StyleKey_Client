import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TestBox from '../components/TestPage/TestBox';
import Loading from '../components/common/Loading';

function TestPage() {
  return (
    <>
      <ErrorBoundary fallback={<h1>ErrorErrorErrorErrorError</h1>}>
        <Suspense fallback={<Loading />}>
          <TestBox />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default TestPage;
