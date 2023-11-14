import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { memoGameMetaData } from './MemoGame/router-data';
import { reactFirebaseMetaData } from './ReactFirebase/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  memoGameMetaData,
  reactFirebaseMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
