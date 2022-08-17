/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const isLesser = (id: string, referenceId: string) => {
  // 3.2.1    4.0.1
  // 3.0.1    3.0.3
  console.log('isLesser', id, referenceId);

  if (id === referenceId) {
    return false;
  }

  const idSplit = id.split('.');
  const referenceSplit = referenceId.split('.');

  let i = 0;
  while (true) {
    if (i >= idSplit.length) {
      return true;
    }
    if (i >= referenceSplit.length) {
      return false;
    }

    const idSub = parseInt(idSplit[i]);
    const refSub = parseInt(referenceSplit[i]);

    if (idSub > refSub) {
      return false;
    } else if (idSub < refSub) {
      return true;
    }

    i++;
  }
  return true;
};

console.log(isLesser('3.2.1', '4.0.1'));
console.log(isLesser('3.0.1', '3.0.3'));
console.log(isLesser('4.0.1', '3.2.1'));
console.log(isLesser('3.0.3', '3.0.1'));
console.log(isLesser('3.0.1', '3.0.1'));
console.log(isLesser('0.1.2', '1.0'));

console.log(undefined == null);
console.log(undefined === null);
