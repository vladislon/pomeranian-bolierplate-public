import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { memoGameMetaData } from './MemoGame/router-data';
import { basicFormsMetaData } from './BasicForms/router-data';
import { basicReactHookFormsMetaData } from './BasicReactHookForms/router-data';
import { orderFormMetaData } from './OrderForm/router-data';
import { reactFirebaseMetaData } from './ReactFirebase/router-data';
import { blockRouterMetaData as blockRouterMetaDataRTLTesting } from '../ReactExercises/RTLTesting/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  memoGameMetaData,
  basicFormsMetaData,
  basicReactHookFormsMetaData,
  orderFormMetaData,
  reactFirebaseMetaData,
  blockRouterMetaDataRTLTesting,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
