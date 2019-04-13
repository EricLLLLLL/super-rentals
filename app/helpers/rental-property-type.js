import { helper } from '@ember/component/helper';

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  // if (communityPropertyTypes.includes(propertyType)) {
    return propertyType+'Community';
  // }

}

export default helper(rentalPropertyType);
