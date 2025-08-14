import * as React from 'react';
import { useDriftsmeldinger } from '../hooks/useDriftsmeldinger';
import { Spinner, DefaultButton, PrimaryButton } from '@fluentui/react';
import styles from './DriftsmeldingerSmaxSp.module.scss';

const DriftsmeldingSingleView: React.FC = () => {
   const { items, loading } = useDriftsmeldinger();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (loading) return <Spinner label="Laster driftsmeldinger..." />;
  if (items.length === 0) return <p>Ingen driftsmeldinger funnet.</p>;

  const current = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
  };
  return (
   <div className={styles.singleCard}>
      <div className={styles.header}>
        <span className={styles.service}>{current.SMAXService}</span>
        <span className={styles.status}>{current.SMAXStatus}</span>
        <span className={styles.importance}>{current.SMAXImportance}</span>
      </div>

      <div className={styles.meta}>
        <p><strong>Varslet:</strong> {current.SMAXIssueReportedTime}</p>
        <p><strong>Forventet neste oppdatering:</strong> {current.SMAXNextUpdateExpected}</p>
        {current.SMAXIssueResolvedTime && <p><strong>Løst:</strong> {current.SMAXIssueResolvedTime}</p>}
      </div>

      <div className={styles.textBlock}>
        <strong>Statusoppdatering:</strong>
        <p>{current.SMAXStatusUpdateText}</p>
      </div>

      <div className={styles.textBlock}>
        <strong>Beskrivelse:</strong>
        <div
          className={styles.contentBox}
          dangerouslySetInnerHTML={{ __html: current.SMAXContent }}
        />
      </div>

      {current.SMAXSolutionText && (
        <div className={styles.textBlock}>
          <strong>Løsning:</strong>
          <p>{current.SMAXSolutionText}</p>
        </div>
      )}

      <div className={styles.navigation}>
        <DefaultButton onClick={handlePrevious}>Forrige</DefaultButton>
        <PrimaryButton onClick={handleNext}>Neste</PrimaryButton>
      </div>
    </div>
  );
};

export default DriftsmeldingSingleView;