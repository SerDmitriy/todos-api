import { v } from 'overshom-valid';
import { ACTIONS_TYPE } from 'models/current-employee/current-employee-actions/actions-dto';
import { basePaginatedDtoBuilder } from 'helpers/validation/general-validation';
import { userBase } from 'models/validation-models/user';

export const updateActionRespValid = v.Object({
  id: v.Number(),
  actionId: v.Number(),
  fieldName: v.String(),
  fieldValue: v.String(),
  fieldNewValue: v.String(),
});

export const baseUserValid = v.Object({
  ...userBase,
  name: v.String(),
});

const objectValid = v.Object({
  id: v.Number().optional(),
  type: v.String().optional(),
  endDate: v.String().optional(),
  startDate: v.String().optional(),
  duration: v.Number().optional(),
  fileURL: v.String().optional(),
  filename: v.String().optional(),
  uploaded: v.String().optional(),
  extension: v.String().optional(),
  originalFilename: v.String().optional(),
  status: v.String().optional(),
  reviewDate: v.String().optional(),
  reviewName: v.String().optional(),
});

export const userActionValid = {
  id: v.Number(),
  performer: baseUserValid,
  user: baseUserValid,
  type: v.Enum(ACTIONS_TYPE),
  date: v.String(),
  updatedFields: v.Array(updateActionRespValid),
  object: objectValid.optional(),
};

export const UsersActionsValid = basePaginatedDtoBuilder(userActionValid);
