import { SPHttpClient } from '@microsoft/sp-http';
import { IDriftsmelding } from '../models/IDriftsmelding';
import { WebPartContext } from '@microsoft/sp-webpart-base';

let context: WebPartContext;

export const setupDriftsmeldingService  = (ctx: WebPartContext) => {
  context = ctx;
} ;

export const fetchDriftsmeldinger = async (): Promise<IDriftsmelding[]> => {
  const response = await context.spHttpClient.get(
    `${context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('Driftsmeldinger')/items`,
    SPHttpClient.configurations.v1
  );
  const json = await response.json();
  return json.value as IDriftsmelding[];
};