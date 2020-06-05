import { v } from 'overshom-valid';
import { paginatedArrayDtoBuilder } from 'helpers/validation/general-validation';

export const typeValid = {
  id: v.Number(),
  name: v.String(),
};

export const positionValid = {
  id: v.Number(),
  name: v.String(),
  types: v.Array(v.Object(typeValid)),
};

export const PositionsArrayValid = paginatedArrayDtoBuilder(positionValid);
