import * as React from 'react';
import type { IDriftsmeldingerSmaxSpProps } from './IDriftsmeldingerSmaxSpProps';
import DriftsmeldingSingleView from './DriftsmeldingSingleView';

export default class DriftsmeldingerSmaxSp extends React.Component<IDriftsmeldingerSmaxSpProps> {
  public render(): React.ReactElement<IDriftsmeldingerSmaxSpProps> {
   
    return (
      <DriftsmeldingSingleView />
    );
  }
}
