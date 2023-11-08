import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaDataJsObjectBasics } from './Exercise-js-arrays-basics/router-data';
import { arrayBasicsMetaData } from './ArrayBasics/router-data';
import { objectsBasicsMetaData } from './ObjectsBasics/router-data';
import { dateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { vanishStringMetaData } from './VanishString/router-data';
import { timerMetaData } from './Timer/router-data';
import { tryCatchMetaData } from './TryCatch/router-data';
import { oopMetaData } from './OOP/router-data';
import { jsonMetaData } from './JSON/router-data';
import { storageMetaData } from './Storage/router-data';
import { savedInputMetaData } from './SavedInput/router-data';
import { promiseSSMetaData } from './PromiseSS/router-data';
import { promiseSimulateApiMetaData } from './PromiseSimulateApi/router-data';
import { promiseAsyncMetaData } from './PromiseAsync/router-data';
import { promiseMethodsMetaData } from './PromiseMethods/router-data';
import { toDoWithServerMetaData } from './ToDoWithServer/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  blockRouterMetaDataJsObjectBasics,
  arrayBasicsMetaData,
  objectsBasicsMetaData,
  dateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  vanishStringMetaData,
  timerMetaData,
  tryCatchMetaData,
  oopMetaData,
  jsonMetaData,
  storageMetaData,
  savedInputMetaData,
  promiseSSMetaData,
  promiseSimulateApiMetaData,
  promiseAsyncMetaData,
  promiseMethodsMetaData,
  toDoWithServerMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
