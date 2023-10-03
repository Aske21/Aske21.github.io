import React from "react";
import { Container, ProgressBar, TextMarker } from "./style";

const LoadingBar: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      {loading && <ProgressBar />}
      {!loading && (
        <>
          <ProgressBar style={{ width: "99%" }} />
          <TextMarker>99%</TextMarker>
        </>
      )}
    </Container>
  );
};

export default LoadingBar;
