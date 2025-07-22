export interface IDriftsmelding {
  Id: number;
  Title: string;
  SMAXID: string;
  SMAXService: string;
  SMAXIssueReportedTime: string;
  SMAXIssueResolvedTime?: string;
  SMAXStatusText: string;
  SMAXStatusUpdateText: string;
  SMAXNextUpdateExpected: string;
  SMAXContent: string;
  SMAXSolutionText: string;
  PostedInEngageCommunity?: string;
  PostedInEngagePostId?: string;
  SMAXStatus: string;
  SMAXImportance: string;
  SMAXTopics: string;
  SMAXScope: string;
  Modified: string;
  Created: string;
}
